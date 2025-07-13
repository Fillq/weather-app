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
        window.location.reload();
    };

    return (
        <button
            onClick={toggleUnit}
            className={`flex items-center justify-between w-24 px-2 py-1 rounded-2xl transition-colors duration-300 ${
                unit === 'C' ? 'bg-blue-500' : 'bg-red-500'
            } text-white shadow-md`}
        >
            <span className={`${unit === 'C' ? 'font-bold' : 'opacity-60'}`}>&deg;C</span>
            <div className="w-5 h-5 bg-white rounded-full shadow-inner mx-1" />
            <span className={`${unit === 'F' ? 'font-bold' : 'opacity-60'}`}>&deg;F</span>
        </button>
    );
};

export default TemperatureSwitch;