import checkedIcon from '../../assets/icons/ic_checked.svg'
import uncheckedIcon from '../../assets/icons/ic_unchecked.svg'
import Image from 'next/image'

function Checkbox({ isChecked, onCheckChange }: any) {
     return (
          <Image
               style={{ cursor: 'pointer' }}
               src={isChecked ? checkedIcon : uncheckedIcon}
               onClick={onCheckChange}
               alt='ic_check'
          />
     )
}

export default Checkbox
