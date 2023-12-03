import { TabList, TabPanel, TabContext } from '@mui/lab';
import { Tab } from '@mui/material';
import { useState } from 'react';
import style from './css/DescriptMenu.module.css';

export const DescriptionProd = (props: any) => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const { description } = props;
    const Menu = ({ description }: any) => {
        if (description) {
            return (
                <div className={style.menu}>
                    {Object.keys(description).map((item: string) => (
                        <div className={style.item}>
                            <div>{item}</div>
                            <div className={style.dotted}></div>
                            <div>{description[item]}</div>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    <Tab label="О товаре" value="1" />
                    <Tab label="Отзывы" value="2" />
                    <Tab label="Вопросы" value="3" />
                </TabList>
                <div>
                    <TabPanel value="1">
                        <div style={{ width: '576px', height: '60px' }}>
                            <span>{description}</span>
                        </div>
                        <div>
                            <Menu {...description} />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </div>
    );
};
