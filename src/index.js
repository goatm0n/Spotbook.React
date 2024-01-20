import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import ProfilePage, { loader as profileLoader } from './routes/ProfilePage';
import Root from './routes/Root';
import ClipPage, { loader as clipLoader } from './routes/ClipPage';
import SpotPage, { loader as spotPageLoader } from './routes/SpotPage';
import MapPage from './routes/MapPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } errorElement={ <ErrorPage /> } >
      <Route index element={ <Navigate to={'map'}/>} />
      <Route path='map' element={ <MapPage />} />
      <Route path='profile/:id' element={ <ProfilePage /> } loader={ profileLoader }/>
      <Route path='clip/:id' element={ <ClipPage />} loader={ clipLoader }/>
      <Route path='spot/:id' element={ <SpotPage />} loader={ spotPageLoader }/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
