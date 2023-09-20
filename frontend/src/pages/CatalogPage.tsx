import { getAllProducts } from '../utils/api';
import { useEffect, useState } from 'react';
import { Card } from '../components/Item';
import { IProduct } from '../types';

export const CatalogPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div>
            {products.map((product: IProduct) => {
                const { id } = product;
                return <Card key={id} {...product} />;
            })}
        </div>
    );
};
