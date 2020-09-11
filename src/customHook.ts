import { useState, useEffect } from 'react';
import fetchJson from './fetchJson';
import { TweetProps } from './Tweet';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
];

export default function (): TweetProps[] {
  const [data, setData] = useState<TweetProps[]>([]);

  useEffect(() => {
    const ps = urls.map(fetchJson);

    Promise.all(ps).then((data: TweetProps[][]) => {
      const tweets = data.flat();
      tweets.sort((t1: TweetProps, t2: TweetProps) => {
        return (
          new Date(t2.created_at).getTime() - new Date(t1.created_at).getTime()
        );
      });

      setData(tweets);
    });
  }, []);

  return data;
}
