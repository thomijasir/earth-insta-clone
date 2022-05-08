import React, { FC } from 'react';
import HOME_ICON from '../../assets/icons/home-icon.jpg';
import FIND_ICON from '../../assets/icons/find-icon.svg';
import VIDEO_ICON from '../../assets/icons/video-icon.jpg';
import './BottomNav.scss';

export type IBottomNavProps = {};

export const BottomNavDefaultProps = {};

export const BottomNavNamespace = 'BottomNav';

const BottomNav: FC<IBottomNavProps> = () => {
  return (
    <div className="bottom-nav-comp">
      <div className="col-bottom-nav">
        <img src={HOME_ICON} alt="bottom-nav" />
      </div>
      <div className="col-bottom-nav">
        <img src={FIND_ICON} alt="bottom-nav" />
      </div>
      <div className="col-bottom-nav">
        <img src={VIDEO_ICON} alt="bottom-nav" />
      </div>
      <div className="col-bottom-nav">
        <img src="https://picsum.photos/50/50.webp" alt="bottom-nav" />
      </div>
    </div>
  );
};

BottomNav.displayName = BottomNavNamespace;
BottomNav.defaultProps = BottomNavDefaultProps;
export default React.memo(BottomNav);
