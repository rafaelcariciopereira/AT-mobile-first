import styles from "./Header.module.css"; 

const Header = () => {
  const Desliza = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
        <header className={styles.header}>
        <h1>Marco Madureira</h1>
        <nav className={styles.nav}>
  <a onClick={() => Desliza("Biografia")}>Biografia</a>
  <a onClick={() => Desliza("Propostas")}>Propostas</a>
  <a onClick={() => Desliza("Agenda")}>Agenda</a>
  <a onClick={() => Desliza("Contato")}>Contato</a>
</nav>
        </header>
  );
};

export default Header;
