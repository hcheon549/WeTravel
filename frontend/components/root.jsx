// import 'react-dates/initialize'
// import '../../../app/assets/stylesheets/_react_dates_override.css';

import React from 'react';
import App from './app';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;