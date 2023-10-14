import React from 'react';
import { CreatePost, Story, Post } from '../components/Home';

const Home = () => {
  return (
    <>
      <CreatePost />
      <Story />
      <Post />
      <Post />
    </>
  );
};

export default Home;
