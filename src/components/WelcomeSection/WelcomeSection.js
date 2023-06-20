import Container from "../Container/Container";
import styles from "./WelcomeSection.module.scss";


export default function WelcomeSection() {

    const newEmployee = {
        id:'',
        firstName:'',
        secondName:'',
        email:'',
        phone:'',
    }

  return (
    
      <section className={styles.welcomeSection}>
        <Container>
        <div className={styles.titleBox}>
        <div className={styles.writings}>
          <h1>DOŁĄCZ DO AST CARS</h1>
          <p>Najszybciej rozwijający się partner UBER, BOLT w Krakowie!</p>
        </div>
        </div>
        </Container>
      </section>
  );
}
