import React from 'react';

interface NbTweetsProps {
  nb: number;
}

export default class NbTweets extends React.Component<NbTweetsProps> {
  shouldComponentUpdate(nextProps: NbTweetsProps) {
    return this.props.nb !== nextProps.nb;
  }

  render() {
    return <div>{this.props.nb}</div>;
  }
}
