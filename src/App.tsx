import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import Error from "./pages/Error.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"auth/:type"} element={<Auth/>}/>
                    <Route path={"dashboard"} element={<Dashboard/>}/>
                    <Route path={"*"} element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
