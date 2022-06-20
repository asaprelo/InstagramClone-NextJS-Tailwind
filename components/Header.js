import {HomeIcon, PaperAirplaneIcon as PaperO,PlusCircleIcon as PlusO, HeartIcon as HeartO} from "@heroicons/react/solid";
import {PaperAirplaneIcon, PlusCircleIcon, HomeIcon as HomeO, SearchIcon, HeartIcon,XCircleIcon} from "@heroicons/react/outline";
import {FaRegCompass} from "react-icons/fa";
import {AiFillCompass} from "react-icons/ai";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {

    const [searchState, setSearchState] = useState(false);
    const [searchInput, setSearchInput] = useState('Cerca');
    const [path, setPath] = useState('');

    const toggleSearch = () => {
        if(searchState) {
            setSearchState(false);
            setSearchInput('Cerca');
        }
        if(!searchState) setSearchState(true);
    }

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const resetText = () => {
        if(searchInput === '')
        {
            setSearchInput('Cerca');
        }
    }

    const clearText = () => {
        if(searchInput !== 'Cerca')
        {

        }
        else setSearchInput('');
    }

    const router = useRouter();

    useEffect(() => {
        setPath(router.route)
    },[]);

    return (
        <header className="border-b w-full xs:pl-2 xs:pr-2 bg-white sticky z-50 top-0">
            <div className="flex p-1 md:max-w-4xl m-auto justify-between">

                <div className="flex items-center">
                    <Link href="/">
                        <Image width="110" height="52" className="cursor-pointer p-2" objectFit="contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"></Image>
                    </Link>
                </div>

                <div className="h-9 min-w-10 hidden text-gray-400 m-auto rounded-lg p-4 sm:inline-flex bg-gray-100 flex items-center">
                    <SearchIcon className={`font-thin cursor-text h-5 ${searchState ? `hidden` : ``}`}/>
                    <input onFocus={clearText} onBlur={resetText} onChange={handleSearch} onClick={!searchState ? toggleSearch : undefined } className="ml-2 font-light bg-transparent focus:outline-none" type="text" value={searchInput}/>
                    <XCircleIcon onClick={toggleSearch} className={`font-light cursor-pointer h-5 ${searchState ? `` : `hidden`}`}/>
                </div>

                <div className="flex items-center xs:space-x-3 md:space-x-5 space-x-5">
                    <div className="items-center cursor-pointer">
                        <Link href={"/"}>
                        {
                            (path === '/') ? (
                                <HomeIcon className="stroke-2 h-7 text-xs"/>
                            ) :
                            (
                                <HomeO className="stroke-2 h-7 text-xs"/>
                            )
                        }
                        </Link>
                    </div>

                    <div className="items-center cursor-pointer">
                        <Link href="/inbox">
                        {
                            (path === '/inbox') ? (
                                    <PaperO className="h-7"/>
                                ) :
                                (
                                    <PaperAirplaneIcon className="h-7"/>
                                )
                        }
                        </Link>
                    </div>

                    <div className="items-center cursor-pointer">
                        <Link href={"/upload"}>
                        {
                            (path === '/upload') ? (
                                    <PlusO className="h-7"/>
                                ) :
                                (
                                    <PlusCircleIcon className="h-7"/>
                                )
                        }
                        </Link>
                    </div>

                    <div className="items-center cursor-pointer">
                        <Link href={"/discovery"}>
                        {
                            (path === '/discovery') ? (
                                    <AiFillCompass size={25}/>
                                ) :
                                (
                                    <FaRegCompass size={25}/>
                                )
                        }
                        </Link>
                    </div>

                    <div className="items-center cursor-pointer">
                        <Link href={"/likes"}>
                        {
                            (path === '/likes') ? (
                                        <HeartO className="h-7"/>
                                ) :
                                (
                                        <HeartIcon className="h-7"/>
                                )
                        }
                        </Link>
                    </div>

                    <div className="items-center flex justify-center cursor-pointer">
                        <Image width="25" height="25" className="rounded-full" objectFit="contain" src="https://scontent.cdninstagram.com/v/t51.2885-19/243428365_399054164928037_7684865314990260831_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=X5ci7KA18G8AX_hV16y&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT849XK7CitZm1B7TvwaB7rbua6KMPEVnbO4B0VvLqjsYg&oe=62B80DC4&_nc_sid=978cb9"/>
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header;
