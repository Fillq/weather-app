import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import LocationPin from '../../assets/weather/location_pin.svg';
import ThermometerIcon from '../../assets/weather/thermometer_icon.svg';
const Card = (props) => {
    const { getItem } = useLocalStorage('temperatureUnit');
    const preferedUnit = getItem();

    const weatherData = props.weatherData.current;
    const locationData = props.weatherData.location;
    const forecastData = props.weatherData.forecast;
    try{
        return (
            <div className="flex flex-col items-center justify-center p-3 text-white">
                <div className="flex flex-row justify-center items-center p-3">  
                <img src={LocationPin} alt="Location Pin Icon" className='h-8 text-white fill-current'/>
                    <div className="flex flex-col justify-center items-center p-3">  
                        <h2 className='text-2xl font-bold'>{locationData.name}</h2>
                        <h2 className='text-xs font-light tracking-tight -mt-1'>{locationData.country}</h2>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-3">  
                    <img src={ThermometerIcon} alt="temperature icon" title={weatherData.temp_c} className='h-8'/>
                    <div className="flex flex-col justify-center items-center p-3">  
                        <h3 className='text-2xl font-bold'>{preferedUnit === 'C' ? weatherData.temp_c : weatherData.temp_f}&deg;{preferedUnit}</h3>
                        <h3 className='text-xs font-light tracking-tight -mt-1'>(Feels like {preferedUnit === 'C' ? weatherData.feelslike_c : weatherData.feelslike_f}&deg;{preferedUnit})</h3>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-3">  
                    <img src={weatherData.condition.icon} alt="weather icon" title={weatherData.condition.text} className='h-12'/>
                    <h3 className=''>{weatherData.condition.text}</h3>
                </div>
                <div className="flex flex-row justify-between">
                    {forecastData.forecastday.map((day, ix) => (
                        <div className="flex flex-col justify-center items-center p-3" key={ix}>  
                            <h3>{ ix === 0 ? 'Tomorrow' : (new Date(day.date_epoch * 1000).toLocaleString('en-US', { weekday: 'long' })) }</h3>
                            <div className="flex flex-row justify-center items-center p-3">
                                <img src={day.day.condition.icon} alt="weather icon" title={day.day.condition.text} className='h-12'/>
                                <div className="flex flex-col justify-center items-center p-3">  
                                    <h3 className='text-2xl font-bold'>{preferedUnit === 'C' ? day.day.avgtemp_c : day.day.avgtemp_f}&deg;{preferedUnit}</h3>
                                    <h3 className='text-xs font-light tracking-tight -mt-1'>{day.day.condition.text}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }catch(e){
        if(!props.error){
            return (
                <div className="flex flex-col items-center justify-center p-3 text-white">
                    <h2 className='text-lg font-medium'>Select a city in the searchbar above</h2>
                </div>
            );
        }
    }
    
  };
export default Card
