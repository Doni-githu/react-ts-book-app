import React, { useEffect, useState } from 'react';
import './customSelect.scss'
interface Option {
    title: string;
}

interface ICustomSelectProps {
    options: Option[]
}


const CustomSelect = ({ options }: ICustomSelectProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);


    options = options.filter((item) => item.title !== selectedOption.title)

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select">
            <div className="select-trigger" onClick={toggleSelect}>
                {selectedOption ? selectedOption.title : "all"}
            </div>
            <ul className={`select-options ${isOpen ? 'active' : ''}`}>
                {options.map((option) => (
                    <li
                        key={option.title}
                        value={option.title}
                        onClick={() => selectOption(option)}
                    >
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomSelect;