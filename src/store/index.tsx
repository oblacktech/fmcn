import { combineReducers,configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { FLUSH, REGISTER, REHYDRATE,PURGE,
persistReducer,persistStore, PAUSE, PERSIST
} from "redux-persist"

import storage from "redux-persist/lib/storage"
storage
const persistConfig={
    key:"root",
    version:1,
    storage
}

const rootReducer=combineReducers({

})
const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=> 
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })

})

export let persistor=persistStore(store)
export type Rootstate= ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;