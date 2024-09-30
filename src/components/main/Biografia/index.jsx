import styles from "./biografia.module.css";

const Biografia = ({imagem , texto}) =>{
    return(
        <>
            <div className={styles.content}>
                <img  className={styles.img} src={imagem} alt="candidato" />
                <div className={styles.cardTexto}> 
                <p className={styles.p}>{texto}</p>
                </div>
            </div>
        </>
    );
}

export default Biografia;