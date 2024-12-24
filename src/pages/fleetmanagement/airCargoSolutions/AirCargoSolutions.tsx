import Image from 'next/image'
import styles from './AirCargoSolutions.module.scss'
import bgImage from '../../../assets/images/fleet/img_air_bg.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'
const AirCargoSolutions = () => {
     return (
          <section className={styles.container}>
               <div className={styles.imageContainer}>
                    <Image
                         src={bgImage}
                         alt='Air Cargo Solutions'
                         className={styles.image}
                         priority
                    />
               </div>
               <div className={styles.textContainer}>
                    <MainHeading className={styles.title}>
                         Expanding Horizons with Air Cargo Solutions
                    </MainHeading>
                    <MainPara className={styles.description}>
                         Our air cargo services offer swift, reliable shipping solutions to keep
                         your supply chain moving seamlessly. From urgent deliveries to large-scale
                         shipments, trust us to deliver with speed, security, and efficiency—taking
                         your logistics to new heights.
                    </MainPara>
               </div>
          </section>
     )
}

export default AirCargoSolutions
