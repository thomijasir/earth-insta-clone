/* eslint-disable */
import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import './Explorer.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);
  const [title] = useState('React Boilerplate');

  useEffect(() => {
    console.log(TITLE_HOME_PAGE);
    console.log('HOME CONTEXT: ', context);
  }, []);

  return (
    <>
      <div className="col-home">Explorer Search</div>
      <div className="col-home">Explorer Content</div>
    </>
  );
};

export default Home;
