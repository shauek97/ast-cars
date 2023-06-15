import styles from './Navbar.module.scss'
import Container from '../Container/Container';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    return (
        <header>
        <nav>
          <Container>
            <div className={styles.navbar}>
              <div className={styles.logo}>
                dsdad
              </div>
              <Menu />
            <MobileMenu />
            </div>
          </Container>
        </nav>
      </header>
    );
  }