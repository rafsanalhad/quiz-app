import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './Redux/store';
import Login from './Login.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Definisikan router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "Test",
    element: <App />
  },
]);

// Render aplikasi
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
