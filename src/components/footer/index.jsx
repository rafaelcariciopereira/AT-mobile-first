import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfo}>
          <p>Contato: MarcoMadureira@rasta.com</p>
          <p>Telefone: (21) 99999-9999</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.657343811716_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9198038"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
