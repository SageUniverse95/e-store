import { useFormik, FormikProps } from 'formik';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const PersonalDataForm = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="test data" />
        </LocalizationProvider>
    );
};
