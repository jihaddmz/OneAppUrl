import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../state/store.ts";
import saveUrlAction from "../state/actions/SaveUrlAction.ts";
import ItemUrl from "../components/ItemUrl.tsx";
import GetAllUrlsAction from "../state/actions/GetAllUrlsAction.ts";
import getAllUrlsAction from "../state/actions/GetAllUrlsAction.ts";
import Loader from "../components/Loader.tsx";
import searchUrlsAction from "../state/actions/SearchUrlsAction.ts";

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error, urls} = useSelector((state: RootState) => state.dashboard);

    const [appName, setAppName] = useState("");
    const [androidUrl, setAndroidUrl] = useState("");
    const [iosUrl, setIosUrl] = useState("");
    const [searchUrl, setSearchUrl] = useState("");

    useEffect(() => {
        setTimeout(() => {
            dispatch(GetAllUrlsAction());
        }, 200)
    }, [dispatch]);

    useEffect(() => {
        if (error)
            alert(error);
    }, [error]);

    let prevSearch = "";
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchUrl) {
                dispatch(searchUrlsAction({query: searchUrl}))
            } else if (prevSearch) {
                dispatch(getAllUrlsAction())
            }
            prevSearch = searchUrl;
        }, 700)

        return () => clearTimeout(timeoutId);
    }, [searchUrl]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(saveUrlAction({appName, iosUrl, androidUrl}))
        clearFields();
    }

    const clearFields = () => {
        setAppName("");
        setAndroidUrl("");
        setIosUrl("");
    }

    return (
        <div className="flex flex-col justify-center">
            <Navbar/>

            {/* if the loading is true and the user hasn't entered any appName, so this loading is due to initially fetching urls*/}
            {loading && (
                <Loader/>
            )}

            <div className="flex flex-col px-5">
                <h1 className={"font-bold text-2xl mt-5"}>Dashboard</h1>
                <p className={"text-gray-400"}>Welcome back {localStorage.getItem("username")}! Manage your app URLs
                    here.</p>

                {/*Form to create a new url */}
                <div className="flex flex-col p-5 mt-10 border rounded-lg border-gray-200 md:mx-20">
                    <h2 className="font-bold text-lg">Create a New App URL</h2>

                    <form className={"mt-5 w-full"} onSubmit={onSubmit}>
                        <label htmlFor="appName">App Name</label>
                        <input required id="appName" type="text" value={appName}
                               onChange={(e) => setAppName(e.target.value)}
                               className="border border-gray-200 rounded-lg p-2 w-full" placeholder={"Whatsapp"}/>
                        <br/>
                        <br/>

                        <label htmlFor="androidUrl">Android URL</label>
                        <input required id="androidUrl" type="text" value={androidUrl}
                               onChange={(e) => setAndroidUrl(e.target.value)}
                               className="border border-gray-200 rounded-lg p-2 w-full"
                               placeholder={"https://play.google.com/store/apps..."}/>
                        <br/>
                        <br/>

                        <label htmlFor="iosUrl">iOS URL</label>
                        <input required id="iosUrl" type="text" value={iosUrl}
                               onChange={(e) => setIosUrl(e.target.value)}
                               className="border border-gray-200 rounded-lg p-2 w-full"
                               placeholder={"https://apps.apple.com/app/id..."}/>
                        <br/>
                        <br/>

                        <button type="submit"
                                className="w-full bg-primary hover:bg-primary/70 cursor-pointer text-white rounded-lg py-2 flex justify-center items-center">
                            Create URL
                        </button>
                    </form>
                </div>

                {/*    List of urls */}
                <div className={"mt-20 p-5 rounded-lg border border-gray-200 flex flex-col"}>
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="font-bold text-xl">Your URLs</h1>
                        <input className="ms-5 w-full sm:max-w-md rounded-lg border border-gray-300 p-2"
                               value={searchUrl}
                               onChange={(e) => setSearchUrl(e.target.value)} placeholder="Search..."/>
                    </div>

                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                        {urls.length > 0 && (
                            urls.map((url) => (
                                <div key={url._id}>
                                    <ItemUrl id={url._id} url={`https://oneappurl.onrender.com/u/${url.slug}`}
                                             appName={url.appName}
                                             androidUrl={url.androidUrl}
                                             iosUrl={url.iosUrl} createdDate={url.dateCreated} visits={url.visits}/>
                                </div>
                            ))
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;