import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.scss';
import HeadBar from '../../components/HeadBar/HeadBar';

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
      <HeadBar />
    </div>
  );
};

export default Home;
