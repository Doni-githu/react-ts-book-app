import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import styles from "../styles"
const SectionWrapper = (Component: () => JSX.Element) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer(0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}

        >

        </motion.section>
    )
}