import { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './css/Counter.module.css';

interface ICounterProps {
    handleClikc: (value: boolean) => void;
}

export const Counter = ({ handleClikc }: ICounterProps) => {
    const [count, setCount] = useState<number>(1);
    const handleAdd = () => setCount(count + 1);
    const handleRemove = () => {
        setCount(count - 1);
        if (count <= 1) handleClikc(false);
    };

    return (
        <div className={style.wrapperForCounter}>
            <Button onClick={handleRemove}>
                <RemoveIcon />
            </Button>
            <div>{count}</div>
            <Button onClick={handleAdd}>
                <AddIcon />
            </Button>
        </div>
    );
};
