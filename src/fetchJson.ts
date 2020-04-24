import {TweetProps} from './Tweet'

export default async function(url:string): Promise<TweetProps> {
  try {
    const resp = await fetch(url);
    return resp.json();
  }
  catch (e) {
    throw e;
  }
}
