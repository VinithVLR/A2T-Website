import styles from './Typography.module.scss'

// 40px design font
export function MainHeading({ children, ...props }: any) {
     return (
          <h1 {...props} className={`${props.className} ${styles.mainheading}`}>
               {children}
          </h1>
     )
}

// 32px design font
export function SecondaryHeading({ children, ...props }: any) {
     return (
          <h4 {...props} className={`${props.className} ${styles.secondaryheading}`}>
               {children}
          </h4>
     )
}

// 22px design font
export function TertiaryHeading({ children, ...props }: any) {
     return (
          <h1 {...props} className={`${props.className} ${styles.tertiaryHeading}`}>
               {children}
          </h1>
     )
}

// 18px design font
export function MainPara({ children, ...props }: any) {
     return (
          <p {...props} className={`${props.className} ${styles.mainpara}`}>
               {children}
          </p>
     )
}

// 16px design font
export function SecondaryPara({ children, ...props }: any) {
     return (
          <p {...props} className={`${props.className} ${styles.secondarypara}`}>
               {children}
          </p>
     )
}

// 14px design font
export function TertiaryPara({ children, ...props }: any) {
     return (
          <p {...props} className={`${props.className} ${styles.tertiarypara}`}>
               {children}
          </p>
     )
}
