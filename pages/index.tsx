import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Vidit Singh Negi | AI Software Engineer</title>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta name="description" content="Vidit Singh Negi | AI Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Vidit Singh Negi | AI Software Engineer" />
        <meta name="description" content="Hey there! I'm Vidit Singh Negi, and I'm a B.Tech - Computer Science graduate." />

        <meta property="og:title" content="Vidit Singh Negi | AI Software Engineer" />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content="https://deverajc.com/" /> */}
        <meta property="og:image" content="https://deverajc.com/screenshot.png" />
        <meta property="og:description" content="Hey there! I'm Vidit Singh Negi, and I'm a B.Tech - Computer Science graduate." />

        <meta name="twitter:card" content="summary"/>
        {/* <meta name="twitter:site" content="@jc_devz"/> */}
        <meta name="twitter:title" content="Vidit Singh Negi | AI Software Engineer"/>
        <meta name="twitter:description" content="Hey there! I'm Vidit Singh Negi, and I'm a B.Tech - Computer Science graduate."/>
        {/* <meta name="twitter:creator" content="@jc_devz"/> */}
        {/* <meta name="twitter:image" content="https://deverajc.com/screenshot.png"/> */}

        {/* <meta itemprop="name" content="Vidit Singh Negi | AI Software Engineer"/>
        <meta itemprop="description" content="Hey! I'm John Carlo Devera, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}
      </Head>
      <Home />
    </>
  );
}
