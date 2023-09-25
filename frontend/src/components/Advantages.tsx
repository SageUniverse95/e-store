import { IAdvantages } from '../customData';
import { Typography } from '@mui/material';
import style from './css/advantages.module.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountIcon from '@mui/icons-material/Discount';

export const Advantages = () => {
    const handleIcon = (typeIcon: string) => {
        switch (typeIcon) {
            case 'LocalShipping':
                return <LocalShippingIcon className={style.icon} />;
            case 'SupportAgent':
                return <SupportAgentIcon className={style.icon} />;
            case 'Money':
                return <AccountBalanceWalletIcon className={style.icon} />;
            case 'Discount':
                return <DiscountIcon className={style.icon} />;
            default:
                break;
        }
    };
    const handleAdvantages = () => {
        return (
            <div className={style.mainWrapper}>
                {IAdvantages.map((item, index) => {
                    const { title, subTitle, typePicture } = item;
                    return (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: ' 120px',
                            }}
                            key={index}
                        >
                            <div className={style.circle}>
                                {handleIcon(typePicture)}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginRight: '30px',
                                }}
                            >
                                <Typography fontSize="18px" variant="body2">
                                    {title}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="body2"
                                >
                                    {subTitle}
                                </Typography>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    return handleAdvantages();
};
