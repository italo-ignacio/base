import {
  AsIsToBePage,
  AuthPage,
  EnterprisesPage,
  FormsPage,
  HomePage,
  ProposalPage,
  ToolboxPage
} from 'presentation/environment';
import { AuthContainer, CoreContainer } from 'presentation/atomic-components/templates';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { SpecialtiesPage } from 'presentation/environment/specialties-page/specialties-page';
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

          <Route element={<ProposalPage />} path={paths.proposal} />

          <Route element={<EnterprisesPage />} path={paths.enterprises} />

          <Route element={<ToolboxPage />} path={paths.toolbox} />

          <Route element={<AsIsToBePage />} path={paths.AsIsToBe} />

          <Route element={<FormsPage />} path={paths.forms} />
          <Route element={<SpecialtiesPage />} path={paths.specialties} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default RouterConfig;
