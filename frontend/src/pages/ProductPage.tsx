import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/api';
import { useEffect, useState } from 'react';
import { IProduct } from '../types';
import { Card } from '../components/Item';
import CircularProgress from '@mui/material/CircularProgress';
import { Slider } from '../components/Slider';
import { DescriptionProd } from '../components/DescriptionProd';

export const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState<IProduct | null>();
    useEffect(() => {
        if (id) {
            getProduct(id).then((data) => setItem(data));
        }
        return;
    }, []);

    const handlePage = (item: IProduct) => {
        
    }

    return (
        <div>
            {item ? <Card {...item} /> : <CircularProgress color="inherit" />}
            <DescriptionProd {...item}/>
        </div>
    );
};
