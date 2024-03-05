import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import { router } from "./app/router";

import './index.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
