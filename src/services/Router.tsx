import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../container/Home/Home.page';
import ExplorerPage from '../container/Explorer/Explorer.page';

const Router: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="explore" element={<ExplorerPage />} />
          <Route path="reels" element={<p>Reels Page</p>} />
          <Route path="profile" element={<p>Profile Page</p>} />
        </Route>
        <Route path="/others" element={<p>Others</p>} />
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
