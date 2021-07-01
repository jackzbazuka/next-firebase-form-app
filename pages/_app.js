import NextLink from "next/link";
import NextHead from "next/head";
import UserProvider from "@/context/userContext";
import "tailwindcss/tailwind.css";
import "../styles.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextHead>
        <title>CV Form App</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </NextHead>
      <header>
        <nav className="p-1 w-full flex flex-row justify-center border">
          <NextLink href="/">
            <a className="mx-2 my-1 p-1">Home</a>
          </NextLink>
          <NextLink href="/data">
            <a className="mx-2 my-1 p-1">Data</a>
          </NextLink>
        </nav>
      </header>
      <Component {...pageProps} />
    </UserProvider>
  );
}
