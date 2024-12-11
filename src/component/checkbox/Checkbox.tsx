import styles from './Checkbox.module.scss'
import checkedIcon from '../../assets/icons/ic_checked.svg'
import uncheckedIcon from '../../assets/icons/ic_unchecked.svg'

function Checkbox({ isChecked, onCheckChange }: any) {
     return (
          <img
               style={{ cursor: 'pointer' }}
               src={isChecked ? checkedIcon.src : uncheckedIcon.src}
               onClick={onCheckChange}
          />
     )
}

export default Checkbox
