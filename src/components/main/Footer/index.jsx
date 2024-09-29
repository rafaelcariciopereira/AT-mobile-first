import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfo}>
          <p>Contato: contato@candidato.com</p>
          <p>Telefone: (11) 91234-5678</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter">tiwiterr</i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram">instagramm</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

