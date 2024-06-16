import React from "react";
import NavigationBar from './navbar/Navigationbar';
import Footer from './footer/Footer';
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <NavigationBar/>
            <div style={{ minHeight:"85vh" }} className="mt-5" container>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default RootLayout;