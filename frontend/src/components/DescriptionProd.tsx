import { TabList, TabPanel, TabContext } from '@mui/lab';
import { Tab } from '@mui/material';
import { useState } from 'react';
import { IProduct } from '../types';
import { description } from '../customData';
import { IDescription } from '../customData';

export const DescriptionProd = (props: any) => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const test = Object.keys(description);

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
                            <span>{props.description}</span>
                        </div>
                        <div>
                            {test.map((key) => {
                                return (
                                    <div>
                                        <p>
                                            <span>
                                                <span>{key}</span>
                                                <span>{'..............'}</span>
                                            </span>
                                            <span>{description[key]}</span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
            <div>
                
            </div>
        </div>
    );
};
