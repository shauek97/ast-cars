import styles from "./WorkLook.module.scss";
import Container from "../Container/Container";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function WorkLook() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateFrom = { opacity: 0, y: -40};
  const animateTo = { opacity: 1, y: -0};
  
  return (
    <Container>
      <section className={styles.workLook}>
        <div ref={ref} className={styles.mainBox}>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 0.5 }}
           className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber1 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Po podpisaniu umowy, około tygodnia zajmie nam rejestracja
                twoich danych w aplikacji i dopełnienie reszty formalności.
              </p>
            </div>
          </motion.div>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 1 }}
          className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber2 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Po tym czasie możesz wsiadać za kółko! Z tygodnia na tydzień
                wysyłasz nam informacje o swojej dyspozycyjności w danym
                tygodniu. Jeździsz tyle ile chcesz!
              </p>
            </div>
          </motion.div>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 1.5 }}
          className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber3 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Zmiany pracy są 12 godzinne, możesz jeździć za dnia od 7 do 19,
                bądź w nocy od 19 do 7.
              </p>
            </div>
          </motion.div>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 2 }}
          className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber4 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Jeśli przed tobą jeździł inny kierowca, przyjeżdża on pod twój
                dom i ty odwozisz go pod jego dom. W innym przypadku, jeśli nie ma
                zmiennika, samochód jest do odebrania na bazie firmy.
              </p>
            </div>
          </motion.div>
          <motion.div
          initial={animateFrom}
          animate={isInView ? animateTo : animateFrom}
          transition={{ delay: 2.5 }}
          className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber5 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Gdy będziesz chciał zakończyć współpracę, wystarczy, że dasz nam
                znać 2 tygodnie wcześniej.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
