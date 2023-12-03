import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import style from './css/PersonalAccPage.module.css'
import { PersonalDataForm } from '../components/PersonalDataFrom';

export const PersonalAccPage = () => {
  return (
    <div>
      <div>
        <div className={style.menuItem}>
          <PersonIcon className={style.menuIcon}/>
          <span>Личные данные</span>
        </div>
        <div className={style.menuItem}>
          <PaymentIcon className={style.menuIcon}/>
          <span>Платежная информация</span>
        </div>
        <div className={style.menuItem}>
          <CardGiftcardIcon className={style.menuIcon}/> 
          <span>Бонусная система</span>
        </div>
      </div>
        <PersonalDataForm/>
    </div>
  )
};
