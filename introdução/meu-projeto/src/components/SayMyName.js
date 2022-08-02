import styles from './SayMyName.module.css'

//usado na aula de props
function SayMyName(props){

    return(
        <div className={styles.frase}>
            <p>Fala ai {props.nome}</p>
            <h1>teste css</h1>
        </div>
    ) 
}

export default SayMyName