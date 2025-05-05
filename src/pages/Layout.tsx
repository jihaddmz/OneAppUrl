import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

const Layout = () => {
    return (
        <div className="relative flex flex-col h-screen w-screen items-center">
            <main className="w-full flex-grow">
                <Outlet/>
            </main>

            <footer className="w-full mt-10">
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;