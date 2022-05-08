import React, { FC, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav.comp';
import HeadBar from '../../components/HeadBar/HeadBar';
import StoriesNavComp from '../../components/StoriesNav/StoriesNav.comp';
import InstaFeedComp from '../../components/InstaFeed/InstaFeed.comp';
import './Home.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const loc = useLocation();
  const isHome = loc.pathname === '/';

  const contentRender = useMemo(() => {
    if (isHome) {
      return (
        <>
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
        </>
      );
    }
    return <Outlet />;
  }, [loc]);

  return (
    <div className="home-page">
      {contentRender}
      <div className="col-home nav-bottom">
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
