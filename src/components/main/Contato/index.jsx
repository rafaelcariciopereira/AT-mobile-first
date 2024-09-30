import styles from "./contato.module.css"


const FormularioContato = () => {

    const Enviado = (e) =>{
        e.preventDefault();
        alert('Formulário enviado!');
        }

    return (
        <> 
            <h2>Contato</h2>
            <form className={styles.formulario} onSubmit={Enviado}>
                <div>
                    <label className={styles.label}>Nome:</label>
                    <input className={styles.input} type="text" required />
                </div>
                <div>
                    <label className={styles.label}>E-mail:</label>
                    <input className={styles.input} type="email" required />
                </div>
                <div>
                    <label className={styles.label}>Mensagem:</label>
                    <input className={styles.textarea} required />
                </div>
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        </>
    );
}
export default FormularioContato;