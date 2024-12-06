import Image from 'next/image'
import styles from './ImageDesc.module.scss'

interface imageDescProps {
     imageUrl: string
     title: string
     description: string
}

const ImageDesc = ({ imageUrl, title, description }: imageDescProps) => {
     return (
          <section className={styles.imageDesc_con}>
               <div className={styles.image_section}>
                    <div className={styles.imageContainer}>
                         <Image src={imageUrl} alt={title} className={styles.image} />
                    </div>
               </div>
               <div className={styles.textContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.desc}>{description}</p>
               </div>
          </section>
     )
}

export default ImageDesc
