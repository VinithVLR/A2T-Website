import React from 'react'
import Image from 'next/image'
// import { ClipLoader } from 'react-spinners'
import styles from './Button.module.scss' // SCSS file imported as a module
import icon_arrow from '../../assets/icons/ic_btn_arrow.svg'
import logoIcon from '../../../assets/icons/ic_logo.svg'
interface ButtonProps {
     style?: React.CSSProperties
     icon?: boolean
     label: string
     onClick?: () => void
     type?: 'button' | 'submit' | 'reset'
     labestyle?: React.CSSProperties
     loading?: boolean
     disabled?: boolean
     loaderColor?: string
     iconStyle?: React.CSSProperties
     className?: string
     iconleft?: string
     ref?: any
}

const Button: React.FC<ButtonProps> = ({
     style,
     icon,
     label,
     onClick,
     type = 'button',
     labestyle,
     loading = false,
     disabled = false,
     loaderColor = '#fff',
     iconStyle,
     className = '',
     iconleft,
     ref,
}) => {
     return (
          <button
               type={type}
               className={`${styles.btn_container} ${className}`}
               style={style}
               onClick={onClick}
               disabled={disabled}
          >
               {/* {loading && (
                <ClipLoader
                    loading={true}
                    color={loaderColor}
                    style={{ width: '10px', height: '10px', padding: '6px' }}
                />
            )} */}
               {iconleft && (
                    <Image
                         src={iconleft}
                         alt='Icon'
                         width={30}
                         style={{ filter: 'invert(0)' }}
                         height={30}
                    />
               )}
               <span
                    className={styles.btn_label}
                    style={{ marginLeft: icon ? '10px' : 'auto', ...labestyle }}
               >
                    {label}
               </span>
               {icon && !loading && (
                    <Image
                         className={styles.btn_icon}
                         src={icon_arrow}
                         style={{ filter: 'invert(0)' }}
                         alt='Icon'
                         width={20}
                         height={20}
                    />
               )}
          </button>
     )
}

export default Button
