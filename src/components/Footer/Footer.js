import styles from "./Footer.module.scss";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Container>
        <p>Copyright © ATH CAR 2023. All rights reserved.</p>
      </Container>
    </section>
  );
}
