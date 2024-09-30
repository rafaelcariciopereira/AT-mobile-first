import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.contactInfo}>
                    <p>Contato: MarcoMadureira@rasta.com</p>
                    <p>Telefone: (21) 99999-9999</p>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" >Facebook</a>
                    <a href="https://twitter.com" target="_blank" >Twitter</a>
                    <a href="https://instagram.com" target="_blank" >Instagram</a>
                </div>
            </div>
        </footer>
  );
};

export default Footer;

