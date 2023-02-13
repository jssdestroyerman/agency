import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "@next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${josefin_sans.className}`}>
            <Component {...pageProps} />
        </div>
    );
}
