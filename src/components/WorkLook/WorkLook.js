import styles from "./WorkLook.module.scss";
import Container from "../Container/Container";

export default function WorkLook() {
  return (
    <Container>
      <section className={styles.workLook}>
        <div className={styles.mainBox}>
        <div className={styles.rule}>
          <div className={styles.ruleNumber}>

          </div>
          <div className={styles.ruleDescription}>
            <p>Po podpisaniu umowy, około tygodnia zajmie nam rejestracja
               twoich danych w aplikacji i dopełnienie reszty formalności.</p>
          </div>
        </div>
        <div className={styles.rule}>
          <div className={styles.ruleNumber}>

          </div>
          <div className={styles.ruleDescription}>
            <p>Po tym czasie możesz wsiadać za kółko! Z tygodnia na tydzień wysyłasz nam informacje o swojej dyspozycyjności w danym tygodniu. Jeździsz tyle ile chcesz!</p>
          </div>
        </div>
        <div className={styles.rule}>
          <div className={styles.ruleNumber}>

          </div>
          <div className={styles.ruleDescription}>
            <p>Zmiany pracy są 12 godzinne, możesz jeździć za dnia od 7 do 19, bądź w nocy od 19 do 7.</p>
          </div>
        </div>
        <div className={styles.rule}>
          <div className={styles.ruleNumber}>

          </div>
          <div className={styles.ruleDescription}>
            <p>Jeśli </p>
          </div>
        </div>
        </div>
      </section>
    </Container>
  );
}
