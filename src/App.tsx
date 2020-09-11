import React from 'react';

import TweetList from './TweetList';
import Filter from './Filter';
import NbTweets from './NbTweets';
import { TweetProps } from './Tweet';

import fetchJson from './fetchJson';

interface AppState {
  isFr: boolean;
  data: TweetProps[];
}

export default class App extends React.Component<{}, AppState> {
  constructor(p: {}) {
    super(p);

    this.state = {
      isFr: false,
      data: [],
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      isFr: !this.state.isFr,
    });
  }

  componentDidMount() {
    const p1 = fetchJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );

    const p2 = fetchJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
    );

    Promise.all([p1, p2]).then((data: TweetProps[][]) => {
      const tweets = data.flat();
      tweets.sort((t1: TweetProps, t2: TweetProps) => {
        return (
          new Date(t2.created_at).getTime() - new Date(t1.created_at).getTime()
        );
      });

      console.log('Tweets', tweets);

      this.setState({
        data: tweets,
      });
    });
  }

  render() {
    const { isFr, data } = this.state;

    const tweetsToDisplay = isFr
      ? data.filter(tweet => tweet.lang === 'fr')
      : data;

    const buttonText = isFr ? 'To All' : 'To Fr';

    return (
      <div className='App'>
        <Filter text={buttonText} filter={this.filter} />
        <NbTweets nb={data.length} />
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}
