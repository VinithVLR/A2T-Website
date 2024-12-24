import styles from './spinner.module.scss'

const Spinner = () => {
     return (
          <div className={styles.main_container}>
               <div className={styles.spinner}></div>
          </div>
     )
}

export default Spinner
