import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './page/admin/Dashboard';
import Addproduct from './page/admin/Addproduct';
import ManageProduct from './page/admin/ManageProduct';
import Userdetails from './page/admin/Userdetails';
import Adminlogin from './page/admin/Adminlogin';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import {store} from './redux/index';
import { Provider } from 'react-redux';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index element={<Dashboard/>}/> 
        <Route path='addproduct' element={<Addproduct/>}/> 
        <Route path='manageproduct' element={<ManageProduct/>}/> 
        <Route path='userdetails' element={<Userdetails/>}/>
        <Route path='adminlogin' element={<Adminlogin/>}/>  
       </Route>
    
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router={router}/>

 </Provider>
);

