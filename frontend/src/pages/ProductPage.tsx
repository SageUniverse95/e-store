import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/api';
import { useEffect, useState } from 'react';
import { IProduct } from '../types';
import Backdrop from '@mui/material/Backdrop';
import { Card } from '../components/Item';
import CircularProgress from '@mui/material/CircularProgress';

export const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState<IProduct | null>();
    useEffect(() => {
        if (id) {
            getProduct(id).then((data) => setItem(data));
        }
        return;
    });

    return (
        <div>
            {item ? <Card {...item} /> : <CircularProgress color="inherit" />}
        </div>
    );
};
