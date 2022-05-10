import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../container/Home/Home.page';
import ExplorerPage from '../container/Explorer/Explorer.page';
import ReelsPage from '../container/Reels/Reels.page';
import ProfilePage from '../container/Profile/Profile.page';

const Router: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="explore" element={<ExplorerPage />} />
          <Route path="reels" element={<ReelsPage />} />
          <Route path="profile/*" element={<ProfilePage />} />
        </Route>
        <Route path="others" element={<p>Others</p>} />
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
