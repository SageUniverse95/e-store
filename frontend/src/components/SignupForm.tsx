import { useFormik, FormikProps } from 'formik';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import style from './css/Signup.module.css';
import * as Yup from 'yup';

interface MyFormValues {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignupForm = () => {
    const formik: FormikProps<MyFormValues> = useFormik<MyFormValues>({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(10, 'Не более 10 символов')
                .min(3, 'Не менее 3 символов')
                .required('Обязательное поле'),
            email: Yup.string()
                .email('Некорректный адрес почты')
                .required('Обязательное поле'),
            password: Yup.string()
                .max(15, 'Не более 15 символов')
                .min(4, 'Не менее 4 символов')
                .required('Обязательное поле'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password')],
                'Пароли должны совпадать',
            ),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });
    return (
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                style={{ marginBottom: '8px' }}
                id="userName"
                name="userName"
                label="Login"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
            />
            <TextField
                fullWidth
                style={{ marginBottom: '8px' }}
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                style={{ marginBottom: '8px' }}
                id="password"
                name="password"
                type='password'
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                style={{ marginBottom: '8px' }}
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                type='password'
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                }
                helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                }
            />
            <Button type="submit" variant="contained" disabled={!(formik.isValid && formik.dirty)}>
                Signup
            </Button>
        </form>
    );
};
