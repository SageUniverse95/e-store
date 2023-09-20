import { IProduct } from '../types';
import style from './item.module.css';
import { Link } from 'react-router-dom';

export const Card = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}: IProduct) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img
                    className={style.img}
                    width={200}
                    height={300}
                    src={image}
                />
            </div>
            <div className={style.categoryWrapper}>
                <a href="*" className={style.categoryContent}>
                    {category}
                </a>
            </div>
            <div className={style.wrapperTitleAndPrice}>
                <Link to={`/products/${id}`}>{title}</Link>
                <div className={style.price}>{`$${price}`}</div>
            </div>
            <div className={style.description}>{description}</div>
            <div className={style.addButtonWrapper}>
                <button className={style.btn}>ADD</button>
            </div>
        </div>
    );
};
