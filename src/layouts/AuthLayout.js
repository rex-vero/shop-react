import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const AuthLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-6">
                        <div className="card">
                            <div className="cardbody">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;