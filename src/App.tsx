import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
    const {auth} = useContext(Context);
    const [, loading, ] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Navbar />
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
