import {Github, Linkedin} from "lucide-react";

const Footer = () => {
    return (
        <div className={`flex flex-col items-center py-10 px-5`}>
            <div className={"flex items-center justify-center gap-5"}>
                <a href={"https://github.com/jihaddmz/OneAppUrl"}>
                    <Github className="text-gray-400"/>
                </a>
                <a href={"https://www.linkedin.com/in/jihad-mahfouz-017615209/"} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-gray-400"/>
                </a>
            </div>
            <p className="text-center mt-5 text-gray-400">© 2025 OneAppUrl. All rights reserved.</p>
        </div>
    );
};

export default Footer;