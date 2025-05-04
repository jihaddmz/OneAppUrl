import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar.tsx";
import {AppDispatch, RootState} from "../state/store.ts";
import {useDispatch, useSelector} from "react-redux";
import signUpAction from "../state/actions/SignUpAction.ts";
import signInAction from "../state/actions/SignInAction.ts";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");


    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error, signUpSuccess, token} = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (error)
            alert(error);
    }, [error]);

    useEffect(() => {
        if (signUpSuccess) {
            clearFields()
            setIsSignedIn(true)
        }
    }, [signUpSuccess]);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            window.location.reload();
            navigate("/dashboard")
        }

    }, [token]);

    const clearFields = () => {
        setUsername("");
        setPassword("");
        setFullName("");
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSignedIn) {
            dispatch(signInAction({username, password}))
        } else { // user is signing up
            dispatch(signUpAction({fullName, username, password}));
        }
    }

    return (
        <div className="flex flex-col items-center w-screen">
            <Navbar/>
            {isSignedIn && (
                <div className="flex flex-col items-center mt-10 w-screen">
                    <h1 className="font-bold text-3xl text-center">Sign in to your account</h1>
                    <p className="text-gray-400 mt-1">or <span className="text-primary font-bold cursor-pointer" onClick={() => {
                        setIsSignedIn(false);
                    }}>create a new account</span></p>

                    <div className="w-screen flex px-5 sm:w-full sm:max-w-md">
                        <form className="flex flex-col mt-14 w-full" onSubmit={onSubmitForm}>
                            <label htmlFor="username">Username</label>
                            <input required className="border w-full required border-gray-300 p-2 rounded-lg" name="username"
                                   id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                            <br/>

                            <label htmlFor="password">Password</label>
                            <input required className="border w-full border-gray-300 p-2 rounded-lg" type={"password"}
                                   name="password" id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <br/>

                            <button type={"submit"}
                                    className="py-2 text-white cursor-pointer bg-primary hover:bg-primary/70 rounded-lg flex justify-center items-center">{!loading ? "Sign In" : (
                                <div className="border-t w-5 h-5 rounded-full border-white animate-spin"></div>
                            )}</button>
                        </form>
                    </div>
                </div>
            )}

            {!isSignedIn && (
                <div className="flex flex-col items-center mt-10 w-screen">
                    <h1 className="font-bold text-3xl text-center">Create a new account</h1>
                    <p className="text-gray-400 mt-1">or <span className="text-primary font-bold cursor-pointer" onClick={() => {
                        setIsSignedIn(true);
                    }}>sign in to your existing account</span></p>

                    <div className="w-screen flex px-5 sm:w-full sm:max-w-md">
                        <form className="flex flex-col mt-14 w-full" onSubmit={onSubmitForm}>
                            <label htmlFor={"fullName"}>Full Name</label>
                            <input required className="border w-full border-gray-300 p-2 rounded-lg" name="fullName"
                                   id={"fullName"} value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                            <br/>

                            <label htmlFor="username">Username</label>
                            <input required className="border w-full border-gray-300 p-2 rounded-lg" name="username"
                                   id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <br/>

                            <label htmlFor="password">Password</label>
                            <input required className="border w-full border-gray-300 p-2 rounded-lg" type={"password"}
                                   name="password" id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <br/>

                            <button type={"submit"}
                                    className="py-2 text-white cursor-pointer bg-primary hover:bg-primary/70 rounded-lg flex justify-center items-center">{!loading ? "Create Account" : (
                                <div className="border-t w-5 h-5 rounded-full border-white animate-spin"></div>
                            )}</button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Auth;