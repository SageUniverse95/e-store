import { SignupForm } from '../components/SignupForm';
import style from '../components/css/Signup.module.css';

export const SignupPage = () => {
    return (
        <div className={style.testWrapper}>
            <div className={style.formWrapper}>
                <SignupForm />
            </div>
        </div>
    );
};
