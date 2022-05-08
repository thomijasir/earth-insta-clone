import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HOME_ICON from '../../assets/icons/home-icon.jpg';
import FIND_ICON from '../../assets/icons/find-icon.svg';
import VIDEO_ICON from '../../assets/icons/video-icon.jpg';
import './BottomNav.scss';

export type IBottomNavProps = {};

export const BottomNavDefaultProps = {};

export const BottomNavNamespace = 'BottomNav';

const BottomNav: FC<IBottomNavProps> = () => {
  const loc = useLocation();
  return (
    <div className="bottom-nav-comp">
      <div className={`col-bottom-nav ${loc.pathname === '/' ? 'active' : ''}`}>
        <Link to="/">
          <img src={HOME_ICON} alt="bottom-nav" />
        </Link>
      </div>
      <div
        className={`col-bottom-nav ${
          loc.pathname === '/explore' ? 'active' : ''
        }`}
      >
        <Link to="/explore">
          <img src={FIND_ICON} alt="bottom-nav" />
        </Link>
      </div>
      <div
        className={`col-bottom-nav ${
          loc.pathname === '/reels' ? 'active' : ''
        }`}
      >
        <Link to="/reels">
          <img src={VIDEO_ICON} alt="bottom-nav" />
        </Link>
      </div>
      <div
        className={`col-bottom-nav ${
          loc.pathname === '/profile' ? 'active' : ''
        }`}
      >
        <Link to="/profile">
          <img src="https://picsum.photos/50/50.webp" alt="bottom-nav" />
        </Link>
      </div>
    </div>
  );
};

BottomNav.displayName = BottomNavNamespace;
BottomNav.defaultProps = BottomNavDefaultProps;
export default React.memo(BottomNav);
