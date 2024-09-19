

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';  // Import the Redux store

// // Import pages
// import AddtoCart from './pages/home/addtocart/AddtoCart';
// import LandingPgae from './pages/HOME PAGE/LandingPgae.jsx';
// import MainHome from './pages/mainHome/MainHome.jsx';
// import MainProduct from './pages/mainProducts/MainProduct.jsx';
// import Contactus from './components/contactus/Contactus.jsx';




// const ReactRouterprops = () => {
//   const [cart, setcart] = useState([]);
//   const [details, setdetails] = useState([]);




//   const handleAddtoCart = (productcart) => {
//     let ispresent = false;
//     cart.forEach((items, index) => {
//       if (items.id === productcart.id) {
//         ispresent = true
//       }
//     })

//     if (ispresent) {
//       return
//     }
//     setcart([...cart, { ...productcart, quantity: 1 }]);
//     // console.log(cart)

//   }
//   let isshowingDetail = false
//   const showDetail = (itemForDetail) => {
//     setdetails(!isshowingDetail ? itemForDetail : []);

//     // setisTrue2(false)
//   }
//   const [isTrue1, setisTrue1] = useState(true)
//   const landingPageTogggle2 = () => { setisTrue1(prevdata => !prevdata) }
//   // console.log(details)
//   const router = createBrowserRouter(
//     [
//       {
//         path: "/",
//         element: <App cart={cart} />,
//         children: [
//           {
//             index: true,
//             element: <MainHome landingPageTogggle2={landingPageTogggle2} isTrue1={isTrue1} handleAddtoCart={handleAddtoCart} details={details} showDetail={showDetail} cart={cart} setcart={setcart} />
//           }
//           ,
//           {
//             path: "landing",
//             element: <MainProduct landingPageTogggle2={landingPageTogggle2} handleAddtoCart={handleAddtoCart} showDetail={showDetail} details={details} />

//           },

//           {
//             path: "cart",
//             element: <AddtoCart cart={cart} setcart={setcart} />

//           }
//           ,
//           {
//             path: "landingpage",
//             element: <LandingPgae />

//           }
//           ,
//           {
//             path: "contactus",
//             element:
//               <Provider store={store}>

//                 <Contactus />

//               </Provider>

//           }

//         ]
//       }
//     ]
//   )
//   return <RouterProvider router={router} />

// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>

//       <ReactRouterprops />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
