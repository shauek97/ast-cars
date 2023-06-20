import styles from './About.module.scss';
import Container from "../Container/Container";

export default function About() {
  return (
    <Container>
        <section className={styles.about}>
        <div className={styles.title}>
        <h2>TO NAS WYRÓŻNIA</h2>
        </div>
        <div className={styles.mainBox}>
            <div className={styles.attribute}>
                <div className={styles.attributeTitle}>
                    <h3>Przyjazna atmosfera</h3>
                </div>
                <div className={styles.attributeIcon}>

                </div>
                <div className={styles.attributeDescription}>
                    
                </div>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attributeTitle}>
                    <h3>Nowe samochody</h3>
                </div>
                <div className={styles.attributeIcon}>

                </div>
                <div className={styles.attributeDescription}>
                    
                </div>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attributeTitle}>
                    <h3>Atrakcyjne wynagrodzenie</h3>
                </div>
                <div className={styles.attributeIcon}>

                </div>
                <div className={styles.attributeDescription}>
                    
                </div>
            </div>
        </div>
        </section>
    </Container>
  );
}
