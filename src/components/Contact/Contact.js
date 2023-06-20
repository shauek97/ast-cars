import styles from "./Contact.module.scss";
import Container from "../Container/Container";
import Form from "./../Form/Form";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <Container>
        <Form />
      </Container>
    </section>
  );
}
