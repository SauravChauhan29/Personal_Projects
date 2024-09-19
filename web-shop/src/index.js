import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import LazyLoader from './components/lazyLoader/LazyLoader2.jsx'

// Lazy loading components
const LandingPgae = lazy(() => import('./pages/HOME PAGE/LandingPgae.jsx'));
const AddtoCart = lazy(() => import('./pages/home/addtocart/AddtoCart'));
const MainHome = lazy(() => import('./pages/mainHome/MainHome.jsx'));
const MainProduct = lazy(() => import('./pages/mainProducts/MainProduct.jsx'));
const Checkoutpages = lazy(() => import('./pages/checkout/Checkout2.jsx'));
const Contactus = lazy(() => import('./components/contactus/Contactus.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoader />}>
            <MainHome />
          </Suspense>
        ),
      },
      {
        path: "landing",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <MainProduct />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <AddtoCart />
          </Suspense>
        ),
      },
      {
        path: "landingpage",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <LandingPgae />
          </Suspense>
        ),
      },
      {
        path: "/checkoutpage",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Checkoutpages />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Contactus />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
