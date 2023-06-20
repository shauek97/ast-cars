import styles from "./WorkLook.module.scss";
import Container from "../Container/Container";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";

export default function WorkLook() {
  return (
    <Container>
      <section className={styles.workLook}>
        <div className={styles.mainBox}>
          <div className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber1 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Po podpisaniu umowy, około tygodnia zajmie nam rejestracja
                twoich danych w aplikacji i dopełnienie reszty formalności.
              </p>
            </div>
          </div>
          <div className={styles.rule}>
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
          </div>
          <div className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber3 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Zmiany pracy są 12 godzinne, możesz jeździć za dnia od 7 do 19,
                bądź w nocy od 19 do 7.
              </p>
            </div>
          </div>
          <div className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber4 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Jeśli przed tobą jeździł inny kierowca, przyjeżdża on pod twój
                dom i ty odwozisz go pod jego dom. W innym wypadku, jeśli nie ma
                zmiennika, samochód jest do odebrania na bazie firmy.
              </p>
            </div>
          </div>
          <div className={styles.rule}>
            <div className={styles.ruleNumber}>
              <TbCircleNumber5 />
            </div>
            <div className={styles.ruleDescription}>
              <p>
                Gdy będziesz chciał zakończyć współpracę, wystarczy, że dasz nam
                znać 2 tygodnie wcześniej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
