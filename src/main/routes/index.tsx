import { Auth, HomePage, ProposalPage } from 'presentation/environment';
import { AuthContainer, CoreContainer } from 'presentation/atomic-components/templates';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { paths } from 'main/config';
import type { FC } from 'react';

const RouterConfig: FC = () => {
  const { login, home, proposal } = paths;

  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<AuthContainer />}>
            <Route element={<Auth />} path={login} />
          </Route>

          <Route element={<CoreContainer />}>
            <Route element={<HomePage />} path={home} />
          </Route>

          <Route element={<CoreContainer />}>
            <Route element={<ProposalPage />} path={proposal} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterConfig;
