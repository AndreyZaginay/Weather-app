import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { StateContext } from '../context';
// import Loader from './UI/Loader/Loader';
import { routes } from '../router/router';
import Countries from './pages/Countries';
import Cities from './pages/Cities';


const AppRouter = () => {
//   const { isAuth, isLoading } = useContext(StateContext);
//   console.log(isAuth);

//   if (isLoading) {
//     return <Loader/>
//   }

  return (
      <Routes>
        {routes.map((route, id) => 
            <Route 
                key={id}
                Component={route.component}
                path={route.path}
            />  
        )}
            {/* <Route path="/country" Component={Countries}/>
            <Route path="/country/:countryName/city" Component={Cities}/> */}
              
        <Route path="/*" element={<Navigate to='/country'/>}/>
      </Routes>
  )
}

export default AppRouter;