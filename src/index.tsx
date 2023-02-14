import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'main/App';

import 'presentation/styles/tailwind.css';
import { MaterialUIProvider } from 'presentation/styles/provider';

render(
  <StrictMode>
    <MaterialUIProvider>
      <App />
    </MaterialUIProvider>
  </StrictMode>,
  document.getElementById('root')
);
