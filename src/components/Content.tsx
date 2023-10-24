import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import routes from '../shared/routes';

const SearchPage = lazy(() => import('../view/SearchPage'));
const TrendsPage = lazy(() => import('../view/TrendsPage'));
const RandomPage = lazy(() => import('../view/RandomPage'));

const Content: React.FC = () => (
  <div className="w-full pb-5" style={{ height: '80%' }}>
    <Suspense fallback={(
      <div className="w-full h-full flex align-items-center">
        <ProgressSpinner strokeWidth="1" className="w-10rem h-10rem -mt-8" />
      </div>
    )}
    >
      <Routes>
        {/* <Route path="/" element={<Navigate to={routes.TRENDS.path} />} /> */}
        <Route path={routes.SEARCH.path} element={<SearchPage />} />
        <Route path={routes.TRENDS.path} element={<TrendsPage />} />
        <Route path={routes.RANDOM.path} element={<RandomPage />} />
      </Routes>
    </Suspense>
  </div>
);

export default Content;
