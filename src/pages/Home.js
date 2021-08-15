import { motion } from "framer-motion"

export const Home = () => {
    return(
        <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
            I'm a bunch of content

            <p>yep</p>
            <p>nope</p>
        </motion.div>
    )
}