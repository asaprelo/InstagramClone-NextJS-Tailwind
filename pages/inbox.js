import Head from "next/head";
import Header from "../components/Header";
import Container from "../components/Container";

const Messages = () => {
    return (
        <main>
            <Head>
                <title>Lorenzgram</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
        </main>
    );
}
export default Messages;
