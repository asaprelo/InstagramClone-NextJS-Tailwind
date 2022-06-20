import Header from "../components/Header";
import DiscoveryPost from "../components/DiscoveryPost";

const posts = [
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/281909892_959337214670134_5848997699700460296_n.webp?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dr5tPAPxJmUAX8y-93v&tn=PcZfebnFHfRMowdG&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg0MDMzMTY3NjQ5MzkyNDE2NA%3D%3D.2-ccb7-5&oh=00_AT-OXFvKfG8k8zLcm3yAVIlle4A90ccbsUqZwSiJS5gZcA&oe=62B818A6&_nc_sid=30a2ef",
        likes: 1231,
        comments: 12
    },
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/287584663_1448641485593907_7311276865470772359_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=JHDsGBsn2vEAX_1L7Ke&tn=PcZfebnFHfRMowdG&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg2MDM3MTg4MTgzNDExNjcxNA%3D%3D.2-ccb7-5&oh=00_AT8Tv9sBnv6HfLEtxKd2mRSvKIf4am5F9bbeG8hjpqUIsQ&oe=62B7FC8D&_nc_sid=a0bfed",
        likes: 312,
        comments: 12,
    }
    ,
    {
        url: "https://instagram.fcia7-2.fna.fbcdn.net/v/t51.2885-15/286597930_1446164259151897_2377157969217346586_n.webp?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fcia7-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=O3U5YtN9yAwAX9Ylwko&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg1NzMyMjU1NDk1MzcyMzE2NA%3D%3D.2-ccb7-5&oh=00_AT-vAgQnI91sBYtCe4eBxj6i83PJU3ImkZuOZyIimkrMmw&oe=62B7013D&_nc_sid=a0bfed",
        likes:31432 ,
        comments: 1212,
    }
    ,
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/286629974_1029770894327048_2735754653113531878_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kvRLdAe36T0AX8N4KKu&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg1NzU3NTgxNDk4MTY1MzA4Nw%3D%3D.2-ccb7-5&oh=00_AT8fXaCtKbeRD3L3Hhrszr8gA3Ecj5z2H1lqUoz1u_qjbg&oe=62B6FFD2&_nc_sid=a0bfed",
        likes: 2,
        comments: 11,
    }
    ,
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/14582479_703293616495211_9151026439489847296_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xDMYaQMdTpYAX8lz2bn&tn=PcZfebnFHfRMowdG&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTM1NjY0MTU5NjczNzQyNzM3NQ%3D%3D.2-ccb7-5&oh=00_AT9GI9rXilac9CUxTsOAan3jCgvKAda94Zh8IzIvHStcXg&oe=62B7A751&_nc_sid=30a2ef",
        likes: 213,
        comments: 43,
    }
    ,
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/288887012_858016138507631_8905076503660723229_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ao7Q1ZepoH8AX-NlzKV&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg2MzQwNjcyNjY3OTk1NDI2Ng%3D%3D.2-ccb7-5&oh=00_AT-QjEvIGtjMC-kCbq7WpVu9STF2nP4DpxcBXNbzovaUBA&oe=62B6B014&_nc_sid=a0bfed",
        likes: 565,
        comments: 54,
    }
    ,
    {
        url: "https://instagram.fcia7-2.fna.fbcdn.net/v/t51.2885-15/284683925_1001458107224945_6358498603935720492_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcia7-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qpabhNgH89wAX_a7GWx&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg0OTY3Njg2MTg4OTI0OTkyMA%3D%3D.2-ccb7-5&oh=00_AT8GhxMxgtm-zZ-qMGP0C4tko_v-EEVr4FJuEpAZLqtmPA&oe=62B81A74&_nc_sid=a0bfed",
        likes: 666,
        comments: 420,
    }
    ,
    {
        url: "https://instagram.fcia7-2.fna.fbcdn.net/v/t51.2885-15/287746727_5745136535519743_565754036070746252_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcia7-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=6pSoMp8zNLgAX_Z09fq&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg2MDA0NDU3ODU4MTc4MjAzOA%3D%3D.2-ccb7-5&oh=00_AT_gcWryVNHBqKMtRfWYXShuREPYivP7gtqrV3jFfdd26w&oe=62B69748&_nc_sid=a0bfed",
        likes: 45,
        comments: 23,
    }
    ,
    {
        url: "https://instagram.fcia7-1.fna.fbcdn.net/v/t51.2885-15/288018422_918918996176325_2770687376948870796_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcia7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=MP0D5gtP66YAX8l5BS8&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2MDcxNDU0NzQyNjI4OTg5MQ%3D%3D.2-ccb7-5&oh=00_AT_7RfNG94qQd8UpsdDytXL_GPR7oqfcWdNI0bVKI7Sr5Q&oe=62B74E12&_nc_sid=30a2ef",
        likes: 125,
        comments: 76,
    }

]
const Discovery = () => {
    return (
        <>
            <Header/>
            <main className="max-w-2xl  mx-auto items-center">
                <div className="md:mt-6 xs:mt-6 grid-cols-3 grid content-start ">
                    {posts.map((post) => (
                        <DiscoveryPost key={post.likes} url={post.url} likes={post.likes} comments = {post.comments}/>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Discovery;
