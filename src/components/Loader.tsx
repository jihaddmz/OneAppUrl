
const Loader = () => {
    return (
        <div className={"fixed inset-0 flex justify-center items-center z-9 bg-black/50"}>
            <div className={"animate-spin border-primary h-16 w-16 border-t-2 rounded-full border-solid"}/>
        </div>
    );
};

export default Loader;