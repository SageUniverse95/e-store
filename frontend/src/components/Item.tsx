import { IProduct } from '../types';
import style from './css/item.module.css';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Counter } from './Counter';

export const Card = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}: IProduct) => {
    const [isFavorite, setFavorite] = useState<boolean>(false);
    const [isAdd, setAdd] = useState<boolean>(false);
    const handleAddFavorite = () => setFavorite(!isFavorite);
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
                <CardActions>
                    <IconButton onClick={handleAddFavorite}>
                        <FavoriteIcon
                            sx={{ color: isFavorite ? 'red' : null }}
                        />
                    </IconButton>
                </CardActions>
                {isAdd ? (
                    <Counter func = {setAdd} />
                ) : (
                    <Button
                        onClick={() => setAdd(true)}
                        variant="contained"
                        endIcon={<ShoppingBasketIcon />}
                    >
                        Add
                    </Button>
                )}
            </div>
        </div>
    );
};
