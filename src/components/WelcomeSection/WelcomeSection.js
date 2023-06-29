import Container from "../Container/Container";
import styles from "./WelcomeSection.module.scss";
import { motion } from "framer-motion";

export default function WelcomeSection() {

  const animateFrom = { opacity: 0};
  const animateTo = { opacity: 1};

  return (
      <section className={styles.welcomeSection}>
        <Container>
        <div className={styles.titleBox}>
        <motion.div
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
         className={styles.writings}>
          <h1>DOŁĄCZ DO ATH CAR</h1>
          <p>Najszybciej rozwijający się partner UBER, BOLT w Krakowie!</p>
        </motion.div>
        </div>
        </Container>
      </section>
  );
}
