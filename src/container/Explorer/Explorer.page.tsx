/* eslint-disable */
import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import './Explorer.scss';
import InstaSearchComp from '../../components/InstaSearch/InstaSearch.comp';
import InstaGridComp from '../../components/InstaGrid/InstaGrid.comp';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);
  const [title] = useState('React Boilerplate');

  useEffect(() => {
    console.log(TITLE_HOME_PAGE);
    console.log('HOME CONTEXT: ', context);
  }, []);

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
