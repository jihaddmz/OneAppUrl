import {Check, Copy, Trash2} from "lucide-react";
import {useState} from "react";
import {AppDispatch} from "../state/store.ts";
import {useDispatch} from "react-redux";
import DeleteUrlAction from "../state/actions/DeleteUrlAction.ts";

interface Props {
    id: string;
    url: string;
    appName: string;
    androidUrl: string;
    iosUrl: string;
    createdDate: string;
    visits: number;
}

const ItemUrl = ({id, url, appName, iosUrl, androidUrl, visits, createdDate}: Props) => {
    const [showCopy, setShowCopy] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="border border-gray-300 rounded-lg p-3 flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">{appName}</h2>
                <Trash2 className="text-gray-400 hover:text-red-600 cursor-pointer" onClick={() => {
                    dispatch(DeleteUrlAction({id}))
                }}/>
            </div>
            <p className="text-gray-400">{createdDate}</p>

            <div className="p-2 bg-gray-50 flex mt-5 rounded-lg items-center justify-between">
                <p className="text-primary overflow-hidden">{url}</p>
                <div className="bg-variant/20 px-2 py-1 rounded-lg ml-2 cursor-pointer">
                    {showCopy ? <Copy className="text-variant" onClick={() => {
                        setShowCopy(false);
                        navigator.clipboard.writeText(url);
                        setTimeout(() => {setShowCopy(true);}, 5000);
                    }}/> : <Check className="text-variant"/>}

                </div>
            </div>

            <div className="flex justify-between items-center mt-5">
                <div className="bg-primary/10 px-2 py-1 rounded-lg">
                    <p className="text-primary">{visits} visits</p>
                </div>

                <div className="flex gap-2">
                    <a className="text-gray-500" href={androidUrl} target="_blank" rel="noopener noreferrer">Android</a>
                    <div className="w-px h-5 bg-gray-300"/>
                    <a className="text-gray-500" href={iosUrl} target="_blank" rel="noopener noreferrer">iOS</a>
                </div>
            </div>
        </div>
    );
};

export default ItemUrl;