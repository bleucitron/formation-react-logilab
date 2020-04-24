import React, {Component} from 'react';

import TweetList from './TweetList'
import Filter from './Filter'
import {TweetProps} from './Tweet'
import {UserProps} from './User'
import fetchJson from './fetchJson';

export type AppProps = {
  dataUrl: string[];
}

export type AppState = {
  isFr: boolean;
  data: TweetProps[] | undefined;
  filteredUser: string[];
  availableUser: UserProps[];
}

class App extends Component<AppProps, AppState>{
  constructor(p:AppProps){
    super(p)
    this.state= {
      isFr:true,
      data: undefined,
      filteredUser: [],
      availableUser:  [],
    }

    this.changeLang = this.changeLang.bind(this)
    this.toggleUser = this.toggleUser.bind(this)
  }

  componentDidMount(){
    const allPs = this.props.dataUrl.map(fetchJson);
    Promise.all(allPs)
      .then((results) => {
        const tweets: TweetProps[] = results.flat();

        const users = new Map<String, UserProps>(tweets.map((e:TweetProps)=> [e.user.id_str, e.user]))
        this.setState({availableUser: Array.from(users.values())})

        this.setState({data: tweets})
      })

  }

  changeLang() {
    this.setState((state: AppState) => {return {isFr: ! state.isFr}})
  }

  toggleUser(user: UserProps) {

    this.setState((state: AppState) => {
      if (state.filteredUser.find((u) => user.id_str === u)){
        return {filteredUser: state.filteredUser.filter((u) => u=== user.id_str)}
      }
      state.filteredUser.push(user.id_str)
      return {filteredUser: state.filteredUser}
    })
  }

  render(){
    const { isFr, data, availableUser, filteredUser} = this.state
    const tweets = isFr ? data?.filter((e: TweetProps) => e.lang === 'fr') : data;
    const toDisplay = tweets?.filter((e:TweetProps) => ! filteredUser.find((u) => u===e.user.id_str));
    const users = availableUser.map((u:UserProps) => {return<Filter key={u.id_str} label={u.screen_name} handleClick={()=>this.toggleUser(u)}/>})
    return (
      <div className='App'>
        {users}
        <Filter label={isFr ? 'Show all' : 'Show fr only'}
                  handleClick={this.changeLang}
        />
        {toDisplay? <TweetList tweets={toDisplay} /> : <p>Loading</p>}
      </div>
    )
  }
}

export default App;
