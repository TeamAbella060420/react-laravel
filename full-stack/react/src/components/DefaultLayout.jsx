import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (e) => {
      e.preventDefault();
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
                    <div>{user.name}</div>
                    <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
