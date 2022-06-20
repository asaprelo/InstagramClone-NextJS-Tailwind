import Image from "next/image";
import {
    BadgeCheckIcon,
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon, EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline";

const DiscoveryPost = (props) => {
    return(
        <div className="bg-white">
            <div className="md:ml-3 xs:ml-0.5 xs:mr-0.5 xs:mt-0.5 xs:mb-0.5 md:mr-3 md:mb-3 md:mt-3 relative">
                <Image width={1000} height={1000} loading="lazy" layout="responsive" src={props.url}/>
                <div className="opacity-0 flex justify-between items-center md:p-9 xs:p-2 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-ligth text-white font-semibold">
                    <p className="flex items-center justify-center"><HeartIcon className="h-5"/> {props.likes}</p>
                    <p className="flex items-center justify-center"><ChatIcon className="h-5"/> {props.comments}</p>
                </div>
            </div>
        </div>
    )
}

export default DiscoveryPost;
