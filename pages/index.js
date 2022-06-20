import Header from "../components/Header";
import Container from "../components/Container";
import Head from "next/head";

export default function Home() {
  return (
      <main className="bg-ig_bg min-w-max">
          <Head>
              <title>Lorenzgram</title>
              <meta name="viewport" content="width=1000"/>
          </Head>
        <Header/>
        <Container/>
      </main>
  )
}
