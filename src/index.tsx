import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import {getFirestore}  from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDW_TwvEDG_JQ9aSXeO2l-AUfjMMsUp3Gk",
    authDomain: "alpine-dynamo-197007.firebaseapp.com",
    projectId: "alpine-dynamo-197007",
    storageBucket: "alpine-dynamo-197007.appspot.com",
    messagingSenderId: "862705874688",
    appId: "1:862705874688:web:41a8280e08be19354065e5"
});

type ContextType = {
    firebase: null | typeof firebase,
    auth : null | any,
    firestore : null | any
}

export const Context = createContext<ContextType>({
    firebase: null,
    auth : null,
    firestore : null
});

const auth = getAuth();
 const firestore = getFirestore(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth,
          firestore,
      }}>
          <App />
      </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
