import React, {Component} from 'react';
import User, {UserProps} from './User'
import Filter from './Filter'

export type TweetProps = {
  id_str: string;
  lang: string;
  user: UserProps;
  text: string;
  created_at: string;
  // entities: Entities;
  // [d: string]: any;
}

export type TweetState = {
  isFaved : boolean;
}

class Tweet extends Component<TweetProps,TweetState> {
  constructor(p:TweetProps){
    super(p)
    this.state = {isFaved:false}
    this.changeFav = this.changeFav.bind(this)
  }

  changeFav(){
    this.setState((s)=> {return {isFaved: !this.state.isFaved}})
  }

  render(){
    const {text, user, created_at} = this.props

    return (
      <div className='Tweet'>
        <div className='txt'>{text}</div>
        <User {... user}/>
        <span className='date'>{created_at}</span>
        <Filter label={this.state.isFaved? 'Faved' : 'notFaved'}
                handleClick={this.changeFav}
                />
      </div>
    );
  }
}
// class Tweet extends Component {
//   constructor(props: TweetProps){
//     super(props)
//   }
//   render(){
//     return (
//       <div className='Tweet'>
//         <div className='txt'>{this.props.text}</div>
//         <User {... this.props.user}/>
//         <span className='date'>{this.props.created_at}</span>
//       </div>
//     )
//   }
// }


export default Tweet;
