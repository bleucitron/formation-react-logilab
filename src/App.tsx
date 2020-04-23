import React from 'react';

import fetchJson from './fetchJson';
import AuthorFilter from './AuthorFilter';
import Filter from './Filter';
import { ITweet } from './Tweet';
import TweetList from './TweetList';

interface AppProps {
  urls: string[];
}

interface AppState {
  isFr: boolean;
  selectedAuthor: string | undefined;
  tweets: ITweet[] | undefined;
  authors: string[] | undefined;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      isFr: false,
      tweets: undefined,
      selectedAuthor: undefined,
      authors: undefined,
    };

    this.toggleIsFr = this.toggleIsFr.bind(this);
  }

  toggleIsFr() {
    this.setState((state: AppState) => {
      return { isFr: !state.isFr };
    });
  }

  setAuthor(name: string) {
    this.setState((state: AppState) => {
      const newAuthor = state.selectedAuthor === name ? undefined : name;

      return { selectedAuthor: newAuthor };
    });
  }

  componentDidMount() {
    const { urls } = this.props;

    const myPs = urls.map(fetchJson);

    Promise.all(myPs).then(data => {
      const tweets = data.flat();

      const authorSet = new Set(tweets.map(tweet => tweet.user.name));

      this.setState({
        tweets: tweets,
        authors: [...authorSet],
      });
    });
  }

  render() {
    const { isFr, selectedAuthor, tweets, authors } = this.state;

    const filterLabel = isFr ? 'To All' : 'To Fr';

    let tweetsToDisplay = isFr
      ? tweets?.filter(tweet => tweet.lang === 'fr')
      : tweets;

    tweetsToDisplay = selectedAuthor
      ? tweetsToDisplay?.filter(tweet => tweet.user.name === selectedAuthor)
      : tweetsToDisplay;

    const authorButtons = authors?.map(author => (
      <AuthorFilter label={author} handleClick={() => this.setAuthor(author)} />
    ));

    return (
      <div className='App'>
        <Filter label={filterLabel} handleClick={this.toggleIsFr} />
        <div className='authors'>{authorButtons}</div>
        {tweetsToDisplay ? (
          <TweetList tweets={tweetsToDisplay} />
        ) : (
          <p>Chargement</p>
        )}
      </div>
    );
  }
}

export default App;
