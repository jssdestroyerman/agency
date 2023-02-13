import { motion } from "framer-motion";

const container = {
    show: { transition: { staggerChildren: 0.5 } },
};

const item = {
    show: { height: 0, transition: { duration: 1 } },
};

const item2 = {
    show: { width: 0, transition: { duration: 0.5 } },
};

function Loader() {
    return (
        <motion.div
            className="absolute flex flex-col"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="h-[50vh] flex rotate-180 flex-row-reverse">
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item}
                ></motion.div>

                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item}
                ></motion.div>
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item}
                ></motion.div>
            </div>
            <div className="h-[50vh] flex z-20 flex-row-reverse">
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item2}
                ></motion.div>
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item2}
                ></motion.div>
                <motion.div
                    className="bg-black h-full w-[33.333vw]"
                    variants={item2}
                ></motion.div>
            </div>
        </motion.div>
    );
}

export default Loader;
