import styles from "./Header.module.css"; 

const Header = () => {
  return (
        <header className={styles.header}>
        <h1>Marco Madureira</h1>
        <nav className={styles.nav}>
            <a href="#Biografia" className={styles.link}>Biografia</a>
            <a href="#Propostas" className={styles.link}>Propostas</a>
            <a href="#Agenda" className={styles.link}>Agenda</a>
            <a href="#Contato" className={styles.link}>Contato</a>
        </nav>
        </header>
  );
};

export default Header;
