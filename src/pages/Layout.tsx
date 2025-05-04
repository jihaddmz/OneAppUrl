import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

const Layout = () => {
    return (
        <>
            <Outlet/>

            <footer className="mt-20 mb-10">
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;