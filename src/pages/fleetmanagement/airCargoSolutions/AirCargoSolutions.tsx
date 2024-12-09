import Image from 'next/image'
import styles from './AirCargoSolutions.module.scss'
import bgImage from '../../../assets/images/fleet/img_air_bg.png'
const AirCargoSolutions = () => {
     return (
          <section className={styles.container}>
               <div className={styles.imageContainer}>
                    <Image src={bgImage} alt='Air Cargo Solutions' className={styles.image} />
               </div>
               <div className={styles.textContainer}>
                    <h1 className={styles.title}>Expanding Horizons with Air Cargo Solutions</h1>
                    <p className={styles.description}>
                         Our air cargo services offer swift, reliable shipping solutions to keep
                         your supply chain moving seamlessly. From urgent deliveries to large-scale
                         shipments, trust us to deliver with speed, security, and efficiency—taking
                         your logistics to new heights.
                    </p>
               </div>
          </section>
     )
}

export default AirCargoSolutions
