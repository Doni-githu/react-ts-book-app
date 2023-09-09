import React, { useEffect, useState } from 'react';
import './customSelect.scss'
import { ICustomSelectProps, Option } from '../../interfaces/types';


const CustomSelect = ({ options, getSelected, label }: ICustomSelectProps): JSX.Element => {

    return (
        <div className="form-floating w-100">
            <select onChange={(e) => getSelected(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                {options.map((item) => (
                    <option key={item.title} value={item.title}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</option>
                ))}
            </select>
            <label htmlFor="floatingSelect">{label}</label>
        </div>
    );
};

export default CustomSelect;