import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './views/App';
import reportWebVitals from './utils/reportWebVitals';


import "./../src/styles/styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
