import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import BottomNav from '../../components/BottomNav/BottomNav.comp';
import HeadBar from '../../components/HeadBar/HeadBar';
import StoriesNavComp from '../../components/StoriesNav/StoriesNav.comp';
import InstaFeedComp from '../../components/InstaFeed/InstaFeed.comp';

import './Home.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);
  const [title] = useState('React Boilerplate');

  useEffect(() => {
    console.log(TITLE_HOME_PAGE);
    console.log('HOME CONTEXT: ', context);
  }, []);

  return (
    <div className="home-page">
      <div className="col-home nav-head">
        <HeadBar />
      </div>
      <div className="col-home home-group">
        <div className="nav-stories">
          <StoriesNavComp />
        </div>
        <div className="insta-feed">
          <InstaFeedComp />
        </div>
      </div>
      <div className="col-home nav-bottom">
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
