import React, { Component } from 'react';
import { FaFilter } from 'react-icons/fa';

import { TweetProps } from './Tweet';
import TweetList from './TweetList';
import Filter from './Filter';

import fetchJson from './fetchJson';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

interface AppState {
  isFr: boolean;
  data: TweetProps[];
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);

    this.state = {
      isFr: false,
      data: [],
    };
    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState(({ isFr }) => ({ isFr: !isFr }));
  }

  componentDidMount() {
    Promise.all(urls.map(fetchJson)).then(results => {
      this.setState({ data: results.flat() });
    });
  }

  render() {
    const { isFr, data } = this.state;

    const tweetsToDisplay = isFr ? data.filter(t => t.lang === 'fr') : data;

    return (
      <div className='App'>
        <FaFilter />
        <Filter
          text={isFr ? 'Display All' : 'Display French'}
          filter={this.filter}
        />
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}

export default App;
