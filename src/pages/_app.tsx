

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import { PersistGate } from "redux-persist/integration/react";
import 'react-loading-skeleton'
import '../styles/globals.css'
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import React from "react";
import Footer from "./Footer";

export default function App({children}) {
    
    return(
        <>
        <Header/>
{children}
<Footer/>
        </>



//         <Provider
//         store={store}>
// <PersistGate loading={null} persistor={persistor}>


// </PersistGate>
// {children}

//         </Provider>



      
    )
}

