const Suggestion = (props) => {
    return (
        <div className="flex mb-3 items-center">
            <div>
                <img className="cursor-pointer w-7 h-7 rounded-full" src={props.image}/>
            </div>
            <div className="flex justify-between flex-grow">
                <div className="pl-3">
                    <p className="cursor-pointer  font-bold text-sm">{props.name}</p>
                    <p className="cursor-pointer  text-xs text-gray-500">Seguito da kumulala + altri 5</p>
                </div>
                <div>
                    <p className="cursor-pointer text-blue-500 text-center pt-3 items-center text-xs font-bold">segui</p>
                </div>
            </div>
        </div>
    )
}
export default Suggestion
