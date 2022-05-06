import React, { FC } from 'react';
import INSTA_LOGO_TEXT from '../../assets/icons/instagram-text.jpg';
import PLUS_ICON from '../../assets/icons/plus-icon.jpg';
import COMMENT_ICON from '../../assets/icons/comment-icon.jpg';
import HEART_ICON from '../../assets/icons/heart-icon.jpg';
import './HeadBar.scss';

export type IHeadBarProps = {};

export const HeadBarDefaultProps = {};

export const HeadBarNamespace = 'HeadBar';

const HeadBar: FC<IHeadBarProps> = () => {
  return (
    <div className="head-bar-comp">
      <div className="col-head-bar insta-logo">
        <img src={INSTA_LOGO_TEXT} alt="Intagram Logo Text" />
      </div>
      <div className="col-head-bar head-icon">
        <img src={PLUS_ICON} alt="Intagram Logo Text" />
      </div>
      <div className="col-head-bar head-icon">
        <img src={COMMENT_ICON} alt="Intagram Logo Text" />
      </div>
      <div className="col-head-bar head-icon">
        <img src={HEART_ICON} alt="Intagram Logo Text" />
      </div>
    </div>
  );
};

HeadBar.displayName = HeadBarNamespace;
HeadBar.defaultProps = HeadBarDefaultProps;
export default React.memo(HeadBar);
