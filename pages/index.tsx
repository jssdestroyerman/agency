import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import Cases from "@/components/Cases";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

const container = {
    show: { transition: { staggerChildren: 0.3 } },
};

const item = {
    hidden: { y: 100 },
    show: { y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
    return (
        <div className="font-bold">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-[50vh] relative">
                <Loader />
                <Header />

                <section className="bg-white w-[90%] mx-auto 2xl:w-[1280px]">
                    <motion.h2
                        className="text-white mix-blend-difference text-[30px] lg:text-[50px]"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="overflow-hidden h-16">
                            <motion.span
                                variants={item}
                                className="inline-block"
                            >
                                Creating unique brands is
                            </motion.span>
                        </div>
                        <div className="overflow-hidden h-16">
                            <motion.span
                                variants={item}
                                className="inline-block"
                            >
                                what we do.
                            </motion.span>
                        </div>
                    </motion.h2>

                    <div className="flex items-center gap-x-4 text-2xl font-semibold pt-6 lg:text-3xl">
                        More about us{" "}
                        <Link
                            href={""}
                            className="flex items-center justify-center rounded-full border-[2px] border-black h-12 w-12 hover:bg-black hover:text-white transition duration-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </section>
            </div>

            <div className="h-[50vh] flex  flex-col md:flex-row">
                <Cases />
            </div>
        </div>
    );
}
