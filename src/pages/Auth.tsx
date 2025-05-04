import React, {useState} from "react";

const Auth = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <div className="flex flex-col items-center">
            {isSignedIn && (
                <div className="flex flex-col items-center mt-10">
                    <h1 className="font-bold text-3xl text-center">Sign in to your account</h1>
                    <p className="text-gray-400 mt-1">or <span className="text-primary font-bold" onClick={() => {
                        setIsSignedIn(false);
                    }}>create a new account</span></p>

                    <div className="w-screen flex px-5">
                        <form className="flex flex-col mt-20 w-full" onSubmit={onSubmitForm}>
                            <label htmlFor="username">Username</label>
                            <input className="border w-full border-gray-300 p-2 rounded-lg" name="username"
                                   id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                            <br/>

                            <label htmlFor="password">Password</label>
                            <input className="border w-full border-gray-300 p-2 rounded-lg" type={"password"} name="password" id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <br/>
                        </form>
                    </div>
                </div>
            )}

            {!isSignedIn && (
                <div className="flex flex-col items-center mt-10">
                    <h1 className="font-bold text-3xl text-center">Create a new account</h1>
                    <p className="text-gray-400 mt-1">or <span className="text-primary font-bold" onClick={() => {
                        setIsSignedIn(true);
                    }}>sign in to your existing account</span></p>

                    <div className="w-screen flex px-5">
                        <form className="flex flex-col mt-20 w-full" onSubmit={onSubmitForm}>
                            <label htmlFor={"fullName"}>Full Name</label>
                            <input className="border w-full border-gray-300 p-2 rounded-lg" name="fullName" id={"fullName"} value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                            <br />

                            <label htmlFor="username">Username</label>
                            <input className="border w-full border-gray-300 p-2 rounded-lg" name="username"
                                   id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <br/>

                            <label htmlFor="password">Password</label>
                            <input className="border w-full border-gray-300 p-2 rounded-lg" type={"password"} name="password" id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <br/>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Auth;