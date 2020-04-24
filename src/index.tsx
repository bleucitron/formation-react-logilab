import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import tweets from './data/tweets.json'
import TweetList, {TweetListProps} from './TweetList'
import {TweetProps} from './Tweet'


type ButtonProps = {
  handle_click: any;
  label: string;
}

const MyButton = (props: ButtonProps ) => {
  return (
    <button onClick={() => {props.handle_click()}}>{props.label}</button>
  );
}


type AppProps = {
  data: TweetListProps;
}

type AppState = {
  isFr: boolean;
}

class App extends Component<AppProps, AppState>{
  constructor(p:AppProps){
    super(p)
    this.state= {isFr:true}
  }
  render(){
    const tweets = this.state.isFr ? this.props.data.tweets : this.props.data.tweets.filter((e: TweetProps) => e.lang === 'fr')
    return (
      <>
        <MyButton label={this.state.isFr? 'Show en' : 'Show fr'}
                  handle_click={() => {
                      this.setState({isFr: !this.state.isFr})
                    }
                  }
        />
        <TweetList tweets={tweets} />
      </>
    )
  }
}

ReactDOM.render(
  <App data={{tweets:tweets}}/>,
  document.getElementById('root')
);
