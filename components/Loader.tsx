import { motion } from "framer-motion";
import { useState } from "react";

const container = {
    show: { transition: { staggerChildren: 0.3, delayChildren: 2 } },
};

const item = {
    show: { y: "100%", transition: { duration: 1 } },
};

const container2 = {
    show: { transition: { staggerChildren: 1, delayChildren: 3 } },
};

const item2 = {
    show: { width: 0, transition: { duration: 1 } },
};

function Loader() {
    const [animation, setAnimation] = useState(true);

    return (
        <div className={`absolute flex flex-col ${!animation && "hidden"}`}>
            <motion.div
                className="h-[50vh] flex "
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
                <motion.div
                    className="bg-black h-full w-[100vw]  md:w-[33.333vw] "
                    variants={item2}
                />
                <motion.div
                    className="md:bg-black md:h-full md:w-[33.333vw]"
                    variants={item2}
                />
                <motion.div
                    className="md:bg-black md:h-full md:w-[33.333vw]"
                    variants={item2}
                />
            </motion.div>
        </div>
    );
}

export default Loader;
