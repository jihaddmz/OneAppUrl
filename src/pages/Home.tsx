import Navbar from "../components/Navbar.tsx";
import {ArrowRight, CircleCheckBig, Link, Smartphone} from "lucide-react";
import ItemWhyChoose from "../components/ItemWhyChoose.tsx";
import ItemHowItWorksMobile from "../components/ItemHowItWorksMobile.tsx";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";

const Home = () => {
    const navigate = useNavigate();
    const howItWorkksRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <Navbar/>

            <main>

                {/*Hero section*/}
                <div
                    className="flex flex-col w-screen py-10 md:py-20 px-3 bg-gradient-to-r from-primary to-secondary items-center justify-center">

                    <h1 className="relative font-bold text-3xl md:text-4xl text-white text-center border-b-2 border-t-2 border-x-2 py-2 md:px-5">One
                        URL for all app
                        stores</h1>

                    <p className="text-white text-lg mt-4 text-center md:w-1/3">Create smart URLs that automatically
                        redirect users
                        to the right app store based on their device - iOS or Android.</p>

                    <div className="flex justify-evenly mt-8 gap-5">
                        <button className="bg-white cursor-pointer text-primary px-5 py-3 rounded-lg flex" onClick={() => {
                            navigate("/auth/signin");
                        }}>Get Started
                            Free <ArrowRight
                                className="ms-2"/></button>
                        <button className="text-white cursor-pointer px-5 py-1 rounded-lg border border-white" onClick={() => {
                            howItWorkksRef.current?.scrollIntoView({behavior: "smooth"});
                        }}>Learn
                            More
                        </button>
                    </div>
                </div>

                {/*    Why choose oneappurl section*/}
                <div className="flex flex-col mt-24">
                    <h1 className="font-bold text-black text-2xl text-center">Why Choose OneAppUrl?</h1>
                    <p className="text-center text-gray-600 mt-3">Smart technology to improve your app's distribution
                        and user experience</p>

                    <div className="flex flex-col md:flex-row px-5 mt-10 gap-5">

                        <ItemWhyChoose title={"Smart Detection"}
                                       description={"Automatically detects your users' device type and redirects them to the appropriate app store."}
                                       color={"primary"} icon={Smartphone}/>

                        <ItemWhyChoose title={"One Link for All"}
                                       description={"Share a single link across all marketing channels that works perfectly for all your users."}
                                       color={"secondary"} icon={Link}/>

                        <ItemWhyChoose title={"Track Performance"}
                                       description={"Monitor how many users visit your app store links to optimize your marketing efforts."}
                                       color={"variant"} icon={CircleCheckBig}/>
                    </div>
                </div>


                {/* How it works */}
                <div className="flex flex-col mt-24" ref={howItWorkksRef}>
                    <h1 className="font-bold text-black text-2xl text-center">How It Works</h1>
                    <p className="text-center text-gray-600 mt-3">Three simple steps to streamline your app's
                        distribution</p>

                    {/* for mobile only */}
                    <div className="flex flex-col px-5 mt-10 gap-20 items-center md:hidden">
                        <ItemHowItWorksMobile title={"Create An Account"}
                                              step={1}
                                              description={"Sign up for free and get access to the dashboard where you'll create and manage your app URLs."}
                                              color={"bg-primary"}/>

                        <ItemHowItWorksMobile title={"Add Your App Links"}
                                              step={2}
                                              description={"Enter your app's Google Play and App Store URLs to create a smart redirect link."}
                                              color={"bg-secondary"}/>

                        <ItemHowItWorksMobile title={"Share Your OneAppUrl"}
                                              step={3}
                                              description={"Use your generated link in marketing, social media, ads, or anywhere you promote your app."}
                                              color={"bg-variant"}/>
                    </div>

                    {/*    for larger than mobile*/}
                    <div className="relative max-w-screen mx-auto mt-12 hidden md:flex md:flex-col">
                        <div className="absolute left-1/2 h-full w-px bg-gray-300"></div>

                        {/* Step 1 */}
                        <div className="flex items-center mb-20">
                            {/* Left content */}
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-xl font-bold text-gray-900">Create an Account</h3>
                                <p className="text-gray-500">
                                    Sign up for free and get access to the dashboard where you'll create and manage your app URLs.
                                </p>
                            </div>

                            {/* Circle */}
                            <div className="relative w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-10">
                                1
                                <div className="absolute w-full h-full bg-primary/30 animate-ping rounded-full">

                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="w-1/2"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-center mb-20">
                            {/* Spacer */}
                            <div className="w-1/2"></div>

                            {/* Circle */}
                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center z-10">
                                2
                            </div>

                            {/* Left content */}
                            <div className="w-1/2 pl-8 text-left">
                                <h3 className="text-xl font-bold text-gray-900">Add Your App Links</h3>
                                <p className="text-gray-500">
                                    Enter your app's Google Play and App Store URLs to create a smart redirect link.
                                </p>
                            </div>
                        </div>

                    {/*    Step 3 */}
                        <div className="flex items-center mb-20">
                            {/* Left content */}
                            <div className="w-1/2 pr-8 text-right">
                                <h3 className="text-xl font-bold text-gray-900">Share Your OneAppUrl</h3>
                                <p className="text-gray-500">Use your generated link in marketing, social media, ads, or anywhere you promote your app.</p>
                            </div>

                            {/* Circle */}
                            <div className="w-10 h-10 rounded-full bg-variant text-white flex items-center justify-center z-10">
                                3
                            </div>

                            {/* Spacer */}
                            <div className="w-1/2"></div>
                        </div>

                    </div>
                </div>

                {/* Ready to simplify your app distribution section */}
                <div className="flex flex-col items-center mt-20 bg-blue-100 px-5 py-14">
                    <h1 className="font-bold text-xl text-center">Ready to simplify your app distribution?</h1>
                    <p className="mt-2 text-gray-600">Join thousands of app developers who are streamlining their marketing with OneAppUrl.</p>
                    <button className="text-white bg-primary px-5 py-2 flex items-center justify-center rounded-lg mt-5" onClick={() => {
                        navigate("/auth/signin");
                    }}>Get Started for Free <ArrowRight className="ms-2" /></button>
                </div>
            </main>
        </div>
    );
};

export default Home;