import {
  AsIsToBePage,
  AuthPage,
  EnterprisesPage,
  HomePage,
  ProposalPage,
  ToolboxPage
} from 'presentation/environment';
import { AuthContainer, CoreContainer } from 'presentation/atomic-components/templates';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { paths } from 'main/config';
import type { FC } from 'react';

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Outlet />}>
      <Routes>
        <Route element={<AuthContainer />}>
          <Route element={<AuthPage />} path={paths.login} />
        </Route>

        <Route element={<CoreContainer />}>
          <Route element={<HomePage />} path={paths.home} />
        </Route>

        <Route element={<CoreContainer />}>
          <Route element={<ProposalPage />} path={paths.proposal} />
        </Route>

        <Route element={<CoreContainer />}>
          <Route element={<EnterprisesPage />} path={paths.enterprises} />
        </Route>

        <Route element={<CoreContainer />}>
          <Route element={<ToolboxPage />} path={paths.toolbox} />
        </Route>

        <Route element={<CoreContainer />}>
          <Route element={<AsIsToBePage />} path={paths.AsIsToBe} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default RouterConfig;
