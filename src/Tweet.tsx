import React from 'react';
import User, {UserProps} from './User'

export type TweetProps = {
  id_str: string;
  lang: string;
  user: UserProps;
  text: string;
  created_at: string;
  // entities: Entities;
  // [d: string]: any;
}

const Tweet = (props: TweetProps) =>{
  return (
    <div className='Tweet'>
      <div className='txt'>{props.text}</div>
      <User {... props.user}/>
      <span className='date'>{props.created_at}</span>
    </div>
  );
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
