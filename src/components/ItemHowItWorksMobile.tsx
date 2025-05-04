
interface Props {
    title: string,
    description: string,
    step: number,
    color: string,
}

const ItemHowItWorksMobile = ({color, title, description, step}: Props) => {
    return (
        <div className={`flex flex-col items-center`}>
            <div className={`flex justify-center items-center text-white w-10 h-10 rounded-full p-2 ${color}`}><p>{step}</p></div>
            <h1 className="mt-3 font-bold text-lg text-black">{title}</h1>
            <p className="mt-2 text-black text-center">{description}</p>
        </div>
    );
};

export default ItemHowItWorksMobile;