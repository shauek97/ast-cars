import styles from "./About.module.scss";
import Container from "../Container/Container";
import { SiHandshake } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateFrom = { opacity: 0, y: -40};
  const animateTo = { opacity: 1, y: -0};

  return (
    <Container>
      <section className={styles.about}>
      <div ref={ref}>
        <div className={styles.mainBox}>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 0.5 }}
          className={styles.attribute}>
            <div className={styles.attributeTitle}>
              <h3>PRYJAZNA <br></br>ATMOSFERA</h3>
            </div>
            <div className={styles.attributeIcon}>
              <SiHandshake />
            </div>
            <div className={styles.attributeDescription}>
              <p>
                Wszystkie formalności, takie jak wyrobienie licencji
                taksówkarskiej, rejestracja w aplikacji są po naszej stronie.
                Oferujemy również wsparcie w przejściu obowiązkowych badań
                lekarskich.
              </p>
            </div>
          </motion.div>

          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 1 }}
          className={styles.attribute}>
            <div className={styles.attributeTitle}>
              <h3>ATRAKCYJNE<br></br> WYNAGRODZENIE</h3>
            </div>
            <div className={styles.attributeIcon}>
              <BsCashStack />
            </div>
            <div className={styles.attributeDescription}>
              <p>
                Wypłacamy pieniądze co tydzień. 50% z całej kwoty netto wędruje
                na Twoje konto.
              </p>
            </div>
          </motion.div>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 1.5 }}
          className={styles.attribute}>
            <div className={styles.attributeTitle}>
              <h3>NOWE <br></br>SAMOCHODY</h3>
            </div>
            <div className={styles.attributeIcon}>
              <FaCar />
            </div>
            <div className={styles.attributeDescription}>
              <p>
                W naszej flocie są tylko najnowsze samochody, oferujemy Toyoty
                corolle i Dacie sandaro. Skody fabie z 500000km przebiegu
                zostawiamy innym partnerom :)
              </p>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </Container>
  );
}
