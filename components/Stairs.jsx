import { motion, AnimatePresence } from "framer-motion";

// Animation Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%", "-100%"], // Ensure valid array values
    },
};

// Calculate Reverse Index for Staggered Delay
const reverseIndex = (index) => {
    const totalSteps = 6; // Number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {/* Render 6 motion divs, each representing a step */}
            <AnimatePresence>
                {[...Array(6)].map((_, index) => (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1, // Staggered delay
                        }}
                        className="h-full w-full bg-white relative"
                    />
                ))}
            </AnimatePresence>
        </>
    );
};

export default Stairs;
