import { motion } from "framer-motion";
import { useState } from "react";

const container = {
    hidden: { rotate: 180 },
    show: { transition: { staggerChildren: 0.3, delayChildren: 2 } },
};

const item = {
    show: { height: 0, transition: { duration: 1 } },
};

const container2 = {
    hidden: { rotate: 180 },
    show: { transition: { staggerChildren: 0.5, delayChildren: 3 } },
};

const item2 = {
    show: { width: 0, transition: { duration: 0.75 } },
};

function Loader() {
    const [animation, setAnimation] = useState(true);

    return (
        <div className={`absolute flex flex-col ${!animation && "hidden"}`}>
            <motion.div
                className="h-[50vh] flex flex-row-reverse "
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className="bg-black h-full w-[100vw] md:w-[33.333vw]"
                    variants={item}
                />
                <motion.div
                    className="md:bg-black md:h-full md:w-[33.333vw]"
                    variants={item}
                />
                <motion.div
                    className="md:bg-black md:h-full md:w-[33.333vw]"
                    variants={item}
                />
            </motion.div>

            <motion.div
                className="h-[50vh] flex z-20 flex-row-reverse"
                variants={container2}
                initial="hidden"
                animate="show"
                onAnimationComplete={() => setAnimation(false)}
            >
                <div className="h-full w-[100vw] md:w-[33.333vw] ">
                    <motion.div
                        className="bg-black h-full w-full"
                        variants={item2}
                    />
                </div>
                <div className="h-full md:w-[33.333vw]">
                    <motion.div
                        className="bg-black h-full w-full"
                        variants={item2}
                    />
                </div>
                <div className="h-ful md:w-[33.333vw] ">
                    <motion.div
                        className="bg-black h-full w-full"
                        variants={item2}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default Loader;
