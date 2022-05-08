import React, { FC } from 'react';
import './Explorer.scss';
import InstaSearchComp from '../../components/InstaSearch/InstaSearch.comp';
import InstaGridComp from '../../components/InstaGrid/InstaGrid.comp';

export interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <div className="col-home home-group explorer">
      <div className="search-area">
        <InstaSearchComp />
      </div>
      <div className="explore-area">
        <InstaGridComp />
      </div>
    </div>
  );
};

export default Home;
