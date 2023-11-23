import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store/store";
import NextProgress from "next-progress";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    //@ts-ignore
    const getLayout = Component.getLayout || ((page) => page);
  
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        
          
                {getLayout(<Component {...pageProps} />)}
             
        </PersistGate>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#fff",
              color: "#121212",
            },
          }}
        />
        <NextProgress
          delay={300}
          options={{ showSpinner: true }}
          color="#7378DE"
        />
        <ToastContainer />
      </Provider>
    );
  }