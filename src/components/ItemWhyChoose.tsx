import {LucideIcon} from "lucide-react";

interface Props {
    title: string;
    description: string;
    color: string;
    icon: LucideIcon
}

const ItemWhyChoose = ({title, description, icon: Icon, color}: Props) => {
    return (
        <div className="p-5 rounded-lg bg-gray-50 flex-col shadow-xl border border-gray-300" >
            <div className={`p-2 bg-${color}/20 rounded-full w-fit`}>
                <Icon className={`text-${color}`}/>
            </div>

            <h3 className="font-bold text-lg text-black mt-2">{title}</h3>
            <h3 className=" mt-3 text-gray-600">{description}</h3>
        </div>
    );
};

export default ItemWhyChoose;