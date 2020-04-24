import React, {Component} from 'react';

import Tweet, {TweetProps} from './Tweet'



export type TweetListProps = {
  tweets: TweetProps[];
}

class TweetList extends Component<TweetListProps> {
  constructor(p:TweetListProps){
    super(p);

    this.state = {
      isFr:true,
    }
  }

  render(){

    return (
    <>
      <div className='TweetList'>
        {this.props.tweets.map(x => <Tweet {... x} key={x.id_str}/>)}
      </div>
    </>
  );
  }
}

export default TweetList;
