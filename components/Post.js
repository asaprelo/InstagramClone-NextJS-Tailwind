import Image from "next/image";
import {DotsHorizontalIcon, HeartIcon, ChatIcon, PaperAirplaneIcon, BookmarkIcon, EmojiHappyIcon} from "@heroicons/react/outline";

const Post = (props) => {
    return (
        <div className="border rounded-md mt-2 mb-2 bg-white border-2">
            <div className="post-header flex justify-between">
                <div className="post-header-left flex p-2">
                    <Image width="50" height="50" loading="lazy" className="cursor-pointer p-1 rounded-full" layout="fixed" src={props.image}/>
                    <div>
                        <p className="ml-1 p-1 text-xs font-bold">{props.account_name}</p>
                        <p className="ml-1 p-1 text-xs">{props.locality}</p>
                    </div>

                </div>
                <div className="post-header-right items-center pt-4 pr-4">
                    <DotsHorizontalIcon className="cursor-pointer h-5"/>
                </div>
            </div>
            <div className="post-image">
                <Image width="35" height="35" loading="lazy" layout="responsive" src={props.image}/>
            </div>
            <div className="post-footer p-2">
                <div className="flex justify-between">
                    <div className="flex p-1 space-x-3">
                        <HeartIcon className="cursor-pointer h-7"/>
                        <ChatIcon className="cursor-pointer h-7"/>
                        <PaperAirplaneIcon className="cursor-pointer h-7"/>
                    </div>
                    <div>
                        <BookmarkIcon className="cursor-pointer  h-7"/>
                    </div>
                </div>
            </div>
            <p className="cursor-pointer  pl-3 font-bold text-sm mb-2">Piace a {props.likes} persone</p>
            <p className="pl-3 text-sm"><span className="font-bold text-sm mr-1">{props.account_name}</span>{props.desc}</p>
            <p className="cursor-pointer  pl-3 mt-2 text-gray-500 text-sm">Mostra tutti e {props.comments} i commenti</p>

            <p className="pl-3 mt-2 text-gray-500 text-xs mb-2">3 ore fa</p>

            <div className="w-full border-t border-gray-300 mb-2"></div>

            <div className="flex flex-grow pl-3 pb-2 justify-between items-center">
                <div className="flex">
                    <EmojiHappyIcon className="cursor-pointer  h-7"/>
                    <input type="text" className="text-gray-500 text-sm ml-3 font-normal text-sm outline-none flex-grow" value="Aggiungi un commento..."/>

                </div>
                <div className="text-center items-center">
                    <p className="cursor-pointer text-blue-200 pr-3 disabled text-center items-center text-xs font-bold">Pubblica</p>
                </div>
            </div>

        </div>
    )
}

export default Post
