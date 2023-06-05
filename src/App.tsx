import React, { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import Layout from './components/Layout';

// const { t } = useTranslation();
function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
