import { useState } from 'react';
import style from './css/slider.module.css';

export const Slider = () => {
    const [currentPicture, setCurrentPic] = useState<string | undefined>(
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    );
    const hundleSetSrc = (src: any) => setCurrentPic(src);
    return (
        <div className={style.wrapper}>
            <div className="mainPicture">
                <img className={style.imgMain} src={currentPicture} />
            </div>
            <div className={style.wrapperForSelectNav}>
                <div className={style.imgContainer}>
                    <img
                        onClick={(e) =>
                            hundleSetSrc(e.currentTarget.getAttribute('src'))
                        }
                        className={style.img}
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    />
                </div>
                <div className={style.imgContainer}>
                    <img
                        onClick={(e) =>
                            hundleSetSrc(e.currentTarget.getAttribute('src'))
                        }
                        className={style.img}
                        src="https://a.lmcdn.ru/img600x866/R/T/RTLACF349702_19297940_2_v1_2x.jpg"
                    />
                </div>

                <div className={style.imgContainer}>
                    <img
                        onClick={(e) =>
                            hundleSetSrc(e.currentTarget.getAttribute('src'))
                        }
                        className={style.img}
                        src="https://a.lmcdn.ru/img600x866/R/T/RTLACF349702_19297941_3_v1_2x.jpg"
                    />
                </div>
                <div className={style.imgContainer}>
                    <img
                        onClick={(e) =>
                            hundleSetSrc(e.currentTarget.getAttribute('src'))
                        }
                        className={style.img}
                        src="https://a.lmcdn.ru/img600x866/R/T/RTLACF349702_19297942_4_v1_2x.jpg"
                    />
                </div>
            </div>
        </div>
    );
};
