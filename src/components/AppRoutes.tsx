import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Login from "./Login";

const AppRoutes = () => {
    const user = true;
    return (
        <Routes>
            {user && privateRoutes.map(({path, Component}) => <Route path={path} element={Component} />)}
            {publicRoutes.map(({path, Component}) => <Route path={path} element={Component} />)}
            <Route path="*" element={Login} />
        </Routes>
    );
};

export default AppRoutes;