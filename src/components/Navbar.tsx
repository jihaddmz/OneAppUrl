import {useState} from 'react';
import {Link, Menu, X} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

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

                {/* Menu icon for mobile */}
                <div className="flex sm:hidden">
                    {!isMobileMenuOpen ? <Menu onClick={() => {
                        setMobileMenuOpen(true);
                    }}/> : <X onClick={() => {
                        setMobileMenuOpen(false);
                    }}/>}
                </div>

                <div className="hidden sm:flex items-center gap-5">
                    <p className="cursor-pointer hover:text-gray-400" onClick={() => {
                        navigate("auth");
                    }}>Sign In</p>
                    <button className="bg-primary hover:bg-primary/70 text-white rounded-lg px-3 py-1 cursor-pointer" onClick={() => {
                        navigate("auth");
                    }}>Sign Up</button>
                </div>
            </div>


            {/* Mobile open menu */}
            {isMobileMenuOpen && (
                <div className={"flex flex-col gap-3 mt-5"}>
                    <p onClick={() => {
                        navigate("auth")
                    }}>Sign In</p>
                    <p>Sign Up</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;