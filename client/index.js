import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './components/App.jsx';

// Add styling for webpack to bundle
import styles from './styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
