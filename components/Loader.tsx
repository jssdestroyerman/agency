import { motion } from "framer-motion";
import { useState } from "react";

const container = {
    hidden: { transition: { delay: 4 } },
    show: { transition: { staggerChildren: 0.3 } },
};

const item = {
    show: { y: "100%", transition: { duration: 1 } },
};

const item2 = {
    show: { x: "100%", opacity: 0, transition: { duration: 1 } },
};

function Loader() {
    const [animation, setAnimation] = useState(true);

    return (
        <motion.div
            className={`absolute flex flex-col ${!animation && "hidden"}`}
            variants={container}
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setAnimation(false)}
        >
            <div className="h-[50vh] flex ">
                <motion.div
                    className="bg-black h-full w-[100vw] md:w-[33.333vw]"
                    variants={item}
                />
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item}
                />
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item}
                />
            </div>

            <div className="h-[50vh] flex z-20 overflow-hidden">
                <motion.div
                    className="bg-black h-full w-[33.333vw] overflow-hidden"
                    variants={item2}
                />
                <motion.div
                    className="bg-black h-full w-[33.333vw] overflow-hidden"
                    variants={item2}
                />
                <motion.div
                    className="bg-black h-full w-[33.333vw] overflow-hidden"
                    variants={item2}
                />
            </div>
        </motion.div>
    );
}

export default Loader;
