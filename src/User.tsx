import React from 'react';

export type UserProps = {
  profile_image_url_https: string;
  screen_name: string;
  id_str:string;
  
}

const User = (props: UserProps) => {
  return (
    <div className='User'>
    {props.screen_name}
    <img className='img' alt='' src={props.profile_image_url_https} />
    </div>
  )
}

export default User;
