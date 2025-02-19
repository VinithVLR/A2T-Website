import React from 'react'
import styles from './SpanText.module.scss'

interface SpanTextProps {
     children: React.ReactNode
     fontStyle?: 'normal' | 'italic' | 'oblique'
     fontWeight?: '400' | '500' | '600' | '700' | '800' | '900'
     color?: string
     size?: 'large' | 'medium' | 'small'
     fontSize?: any
}

const SpanText: React.FC<SpanTextProps> = ({
     children,
     fontStyle = 'normal',
     fontWeight = '400',
     color,
     size = 'medium',
     fontSize,
}) => {
     return (
          <span
               className={`${styles.spanText} ${styles[size]}`}
               style={{ fontStyle, fontWeight, color, fontSize }}
          >
               {children}
          </span>
     )
}

export default SpanText
