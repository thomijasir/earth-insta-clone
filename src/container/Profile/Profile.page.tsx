import React, { FC, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PLUS_ICON from '../../assets/icons/plus-icon.jpg';
import HAMBURGER_ICON from '../../assets/icons/hamburger-icon.jpg';
import DEFAULT_MY_PROFILE from '../../assets/images/my.jpg';
import TAB_ICON from '../../assets/icons/table-icon.jpg';
import VIDEO_ICON from '../../assets/icons/video-icon.jpg';
import TAG_ICON from '../../assets/icons/tag-icon.jpg';
import InstaGridComp from '../../components/InstaGrid/InstaGrid.comp';
import VERIFIED_ICON from '../../assets/icons/verified-icon.png';
import './Profile.scss';

export interface IProps {}

const Profile: FC<IProps> = () => {
  const videoGallery = useMemo(
    () => (
      <div className="insta-gallery">
        <p>Your Custom Page</p>
      </div>
    ),
    [],
  );

  return (
    <div className="col-home home-group profile-page">
      <div className="profile-head">
        <div className="col-ph profile-name">thomijasir</div>
        <div className="col-ph verified">
          <img src={VERIFIED_ICON} alt="verified" />
        </div>
        <div className="col-ph profile-icon push-left">
          <img src={PLUS_ICON} alt="Plus icon" />
        </div>
        <div className="col-ph profile-icon">
          <img src={HAMBURGER_ICON} alt="Plus icon" />
        </div>
      </div>
      <div className="profile-area">
        <div className="summary-info">
          <div className="profile-picture">
            <img src={DEFAULT_MY_PROFILE} alt="Profile" />
          </div>
          <div className="summary-detail">
            <div className="col-detail">
              <h2>9</h2> <p>Posts</p>
            </div>
            <div className="col-detail">
              <h2>3.3m</h2> <p>Followers</p>
            </div>
            <div className="col-detail">
              <h2>2.000</h2> <p>Following</p>
            </div>
          </div>
        </div>
        <div className="summary-desc">
          Lorem Ipsum is <b>simply</b> dummy text of the printing and
          typesetting industry.
        </div>
        <div className="insta-tabs">
          <div className="tab-caption">
            <div className="col-tab-caption">
              <Link to="/profile">
                <img src={TAB_ICON} alt="tab-icon" />
              </Link>
            </div>
            <div className="col-tab-caption">
              <Link to="a">
                <img src={VIDEO_ICON} alt="tab-icon" />
              </Link>
            </div>
            <div className="col-tab-caption">
              <Link to="b">
                <img src={TAG_ICON} alt="tab-icon" />
              </Link>
            </div>
          </div>
          <div className="tab-content">
            <Routes>
              <Route index element={<InstaGridComp />} />
              <Route path="a" element={videoGallery} />
              <Route path="b" element={<InstaGridComp />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
