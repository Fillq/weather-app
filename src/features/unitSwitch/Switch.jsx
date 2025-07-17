import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TemperatureSwitch = () => {
    const { setItem, getItem } = useLocalStorage('temperatureUnit');
    const [unit, setUnit] = useState('C');

    useEffect(() => {
        const saved = getItem();
        if (saved === 'F' || saved === 'C') {
            setUnit(saved);
        }
    }, []);

    const toggleUnit = () => {
        const newUnit = unit === 'C' ? 'F' : 'C';
        setUnit(newUnit);
        setItem(newUnit);
        const timeoutHandler = setTimeout(() => {
            setDebouncedVal(val);
        }, 150);
        clearTimeout(timeoutHandler);
        window.location.reload();
    };

    return (
        <>
        <h4 className='text-center font-medium text-white text-xs' >Select Unit</h4>
        <button
            onClick={toggleUnit}
            className={`flex items-center justify-between w-24 px-2 py-1 rounded-2xl transition-all duration-300 ${
                unit === 'C' ? 'bg-gradient-to-r from-sky-300 to-blue-500' : 'bg-gradient-to-r from-red-400 to-red-700'
            } text-white shadow-md`}
        >
            <span className={`${unit === 'C' ? 'font-bold' : 'opacity-60'}`}>&deg;C</span>
            <div className={"transition-all duration-150 ease-in-out w-5 h-5 bg-white rounded-full " + (unit === 'C' ? 'translate-x-8' : '-translate-x-8') } />
            <span className={`${unit === 'F' ? 'font-bold' : 'opacity-60'}`}>&deg;F</span>
        </button>
        </>
    );
};

export default TemperatureSwitch;