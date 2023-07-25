import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

render();

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
};