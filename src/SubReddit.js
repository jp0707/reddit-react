import React from 'react';
import Feed from './Feed'
import { useParams } from "react-router-dom";

export default function SubReddit() {
  let { subreddit } = useParams();
  return (
    <div>
      <h1>{subreddit}</h1>
      <Feed subreddit={subreddit}/>
    </div>
  );
}
