import React from 'react';

import TweetList from './TweetList';
import Filter from './Filter';
import { TweetProps } from './Tweet';

interface AppProps {
  data: TweetProps[];
}

interface AppState {
  isFr: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);

    this.state = {
      isFr: false,
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      isFr: !this.state.isFr,
    });
  }

  render() {
    const { isFr } = this.state;
    const { data } = this.props;

    const tweetsToDisplay = isFr
      ? data.filter(tweet => tweet.lang === 'fr')
      : data;

    const buttonText = isFr ? 'To All' : 'To Fr';

    return (
      <div className='App'>
        <Filter text={buttonText} filter={this.filter} />
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}
