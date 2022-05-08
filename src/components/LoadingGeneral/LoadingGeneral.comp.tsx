import React, { FC } from 'react';
import INSTA_LOGO from '../../assets/icons/instagram-logo.jpg';
import META_LOGO from '../../assets/icons/instagram-logo-bottom.jpg';
import './LoadingGeneral.scss';

export type ILoadingGeneralProps = {
  isLoading: boolean;
  text?: string;
};

export const loadingGeneralDefaultProps = {
  isLoading: false,
  text: 'Loading..',
};

export const loadingGeneralNamespace = 'LoadingGeneral';

const LoadingGeneral: FC<ILoadingGeneralProps> = ({ isLoading, text }) => (
  <div className={`loading-mask ${isLoading ? 'on' : ''}`}>
    <div className="insta-logo">
      <img className="logo" src={INSTA_LOGO} alt="loading" />
    </div>
    <div className="meta-logo">
      <img src={META_LOGO} alt="loading" />
    </div>
  </div>
);

LoadingGeneral.displayName = loadingGeneralNamespace;
LoadingGeneral.defaultProps = loadingGeneralDefaultProps;
export default React.memo(LoadingGeneral);
