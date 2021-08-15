import { motion } from "framer-motion"

export const About = () => {
    return(
        <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
            hi
        </motion.div>
    )
}