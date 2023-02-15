import { QueryClientProvider } from 'react-query';
import type { FC } from 'react';

import Router from './routes';
import queryClient from 'infra/lib/react-query';

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);

export default App;
