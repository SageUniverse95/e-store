import { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './css/counter.module.css';

export const Counter = (props: any) => {
    const [count, setCount] = useState<number>(1);
    const handleAdd = () => setCount(count + 1);
    const handleRemove = () => setCount(count - 1);
    if (count < 1) props.func(false);
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
