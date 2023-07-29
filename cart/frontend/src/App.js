import { Outlet } from 'react-router-dom';


import {Toaster} from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  //const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  })

  // console.log(productData)
  return (
    <>
   <Toaster/> 
 <div>

 {/* <main className=' pt-16 bg-slate-100 min-w-[calc(100vh)]'> */}
 <main className='pt-16'>
     <Outlet/>
 </main>
 </div>
 </>
  );
}

export default App;