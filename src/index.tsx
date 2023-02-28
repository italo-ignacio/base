import 'presentation/styles/tailwind.css';
import { MaterialUIProvider } from 'presentation/styles/provider';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { store } from './store';
import App from 'main/App';

render(
  <StrictMode>
    <Provider store={store}>
      <MaterialUIProvider>
        <App />
      </MaterialUIProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
