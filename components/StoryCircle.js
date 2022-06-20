import Image from "next/image";

const StoryCircle = (props) => {
    return (
        <li className="flex flex-col items-center space-y-1 ">
            <div className="relative bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a href="#" className="block bg-white p-0.5 rounded-full">
                    <img className="w-17 object-scale-down h-17 rounded-full" src={props.image}/>
                </a>
            </div>
            <p className="text-xs">yuribut</p>
        </li>
    )
}

export default StoryCircle;
