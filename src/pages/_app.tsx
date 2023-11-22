import { persistor,store } from "@/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import { PersistGate } from "redux-persist/integration/react";
import 'react-loading-skeleton'
import '../styles/globals.css'
import { Toaster } from "react-hot-toast";

export default function App() {
    
    return(

        <Provider
        store={store}>
<PersistGate loading={null} persistor={persistor}>


</PersistGate>


        </Provider>
    )
}

