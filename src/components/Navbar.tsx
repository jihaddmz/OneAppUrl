import {useState} from 'react';
import {Link, Menu, X} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isSignedIn = localStorage.getItem("token") != null;
    const location = useLocation();

    return (
        <div className={"w-screen bg-white flex-col p-3"}>

            {/* The top nav bar row */}
            <div className={"flex justify-between"}>
                <div className={"flex items-center gap-2 cursor-pointer"} onClick={() => {
                    navigate("/");
                }}>
                    <Link className="text-primary"/>
                    <h1 className="font-bold text-lg">OneAppUrl</h1>
                </div>

                {location.pathname !== "/auth" && (
                    // Menu icon for mobile
                    <div className="flex sm:hidden cursor-pointer">
                        {!isMobileMenuOpen ? <Menu onClick={() => {
                            setMobileMenuOpen(true);
                        }}/> : <X onClick={() => {
                            setMobileMenuOpen(false);
                        }}/>}
                    </div>
                )}


                {location.pathname !== "/auth" && (
                    // Navbar for larger screens
                    <div className="hidden sm:flex items-center gap-5">
                        <p className="cursor-pointer hover:text-gray-400" onClick={() => {
                            if (isSignedIn) {
                                navigate("/dashboard");
                            } else {
                                navigate("auth");
                            }
                        }}>{isSignedIn ? "Dashboard" : "Sign In"}</p>
                        <button
                            className="bg-primary hover:bg-primary/70 text-white rounded-lg px-3 py-1 cursor-pointer"
                            onClick={() => {
                                if (isSignedIn) {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("username");
                                    window.location.href = "/";
                                } else {
                                    navigate("auth");
                                }
                            }}>{isSignedIn ? "Sign Out" : "Sign Up"}
                        </button>
                    </div>
                )}
            </div>


            {/* Mobile open menu */}
            {isMobileMenuOpen && (
                <div className={"flex flex-col gap-3 mt-5"}>
                    <p onClick={() => {
                        if (isSignedIn) {
                            navigate("/dashboard");
                        } else {
                            navigate("auth")
                        }
                    }}>{isSignedIn ? "Dashboard" : "Sign In"}</p>

                    <p onClick={() => {
                        if (isSignedIn) {
                            localStorage.removeItem("token");
                            localStorage.removeItem("username");
                            window.location.href = "/";
                        } else {
                            navigate("auth");
                        }
                    }}>{isSignedIn ? "Sign Out" : "Sign Up"}</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;