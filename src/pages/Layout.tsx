import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

const Layout = () => {
    return (
        <>
            <Outlet/>

            <div className="mt-10">
                <Footer/>
            </div>
        </>
    );
};

export default Layout;