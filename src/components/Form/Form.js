import styles from "./Form.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Form() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateFrom = { opacity: 0, y: -50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>
        <h3>Wyślij nam swoje dane kontaktowe, a my odezwiemy się do Ciebie!</h3>
      </div>
      <div
      ref={ref}
      className={styles.formBox}>
        <form>
            <input
              type="text"
              name="name"
              placeholder="Imię"
              required
            ></input>
            <input
              type="text"
              name="name"
              placeholder="Nazwisko"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Telefon"
              required
            ></input>
          <button
            className={styles.button}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
