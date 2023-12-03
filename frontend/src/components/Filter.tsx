import cl from 'clsx';
import style from './css/filter.module.css';

interface IFilterProps {
    filterItems: string[];
    currentValue: string;
    handleClick: (filterItem: string) => void;
}

export const Filter = ({
    filterItems,
    currentValue,
    handleClick,
}: IFilterProps) => {
    return (
        <div>
            {filterItems.map((item, index) => {
                return (
                    <div
                        className={cl(style.buttons, {
                            [style.selected]: item === currentValue,
                        })}
                        key={index}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
};
