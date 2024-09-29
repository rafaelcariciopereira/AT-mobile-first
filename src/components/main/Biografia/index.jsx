import styles from "./biografia.module.css";

const Biografia = ({imagem , texto}) =>{
    return(
        <>
            <div className={styles.content}>
                <img  className={styles.img} src={imagem} alt="candidato" />
                <p className={styles.p}>{texto}</p>
            </div>
        </>
    );
}

export default Biografia;