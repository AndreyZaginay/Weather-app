import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from '../router/router';


const AppRouter = () => {
  return (
      <Routes>
        {routes.map((route, id) => 
            <Route 
                key={id}
                Component={route.component}
                path={route.path}
            />  
        )}              
        <Route path="/*" element={<Navigate to='/country'/>}/>
      </Routes>
  )
}

export default AppRouter;