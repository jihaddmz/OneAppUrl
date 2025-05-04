import {useParams, useSearchParams} from "react-router-dom";

const Auth = () => {
    const {type} = useParams();

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-black">{type}</p>
        </div>
    );
};

export default Auth;