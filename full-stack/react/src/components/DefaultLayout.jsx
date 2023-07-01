import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashbord</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>User info</div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
