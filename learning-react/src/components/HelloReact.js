import styles from './HelloReact.module.css'

function HelloReact() {


    return (
        <div>
            <h1>Hello React.</h1>
            <p className={styles.testing}>Rian Reis</p>
        </div>
    )
}

export default HelloReact