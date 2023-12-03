import { getAllProducts, getAllCategory } from '../utils/api';
import { useEffect, useState } from 'react';
import { Card } from '../components/Item';
import { Filter } from '@mui/icons-material';
import { IProduct } from '../types';
import style from './css/CatalogPage.module.css';

export const CatalogPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<string[]>(['All']);

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
        getAllCategory().then((data) => {
            setCategories([...categories, ...data]);
        });
    }, []);

    return (
        <div className={style.container}>
            {products.map((product: IProduct) => {
                const { id } = product;
                return <Card key={id} {...product} />;
            })}
            <Filter />
        </div>
    );
};
