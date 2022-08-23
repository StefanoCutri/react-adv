import { Suspense } from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt="React logo" />
                <ul>
                    {
                        routes.map(({to, name}) => <li key={name}><NavLink to={to}>{name}</NavLink></li>)
                    }
                </ul>
            </nav>

            <Routes>
                {
                    routes.map(({path, Component}) =>  <Route key={path} path={path}  element={<Component/>} /> )
                }
                <Route path="/*" element={<Navigate to={routes[0].to } replace/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
