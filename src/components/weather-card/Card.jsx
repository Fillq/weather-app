import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import LocationPin from '../../assets/weather/location_pin.svg';
import ThermometerIcon from '../../assets/weather/thermometer_icon.svg';
import ClockIcon from '../../assets/time/clock-icon.svg';
const Card = (props) => {
    const { getItem } = useLocalStorage('temperatureUnit');
    const preferedUnit = getItem() || 'C';

    const weatherData = props.weatherData.current;
    const locationData = props.weatherData.location;
    const forecastData = props.weatherData.forecast;
    try{
        return (
            <div className="flex flex-col items-center justify-center p-3 text-white gap-4">
                <div className="bg-slate-200/40 rounded-lg w-full py-4">
                    <div className="flex flex-row justify-center items-center p-3">  
                        <img src={LocationPin} alt="Location Pin Icon" className='h-16'/>
                        <div className="flex flex-col justify-center items-center p-3">  
                            <h2 className='md:text-4xl text-2xl font-bold'>{locationData.name}</h2>
                            <h2 className='md:text-2xl text-sm font-light tracking-tight -mt-1'>{locationData.country}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <img src={ClockIcon} alt="Clock icon" className='h-8'/>
                        <div className="flex flex-col justify-center items-center p-3">  
                            <h3 className='text-2xl font-bold'>{locationData.localtime.slice(11, 16)}</h3>
                            <h3 className='text-xs font-light tracking-tight -mt-1'>Local time</h3>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center p-3">  
                            <img src={ThermometerIcon} alt="temperature icon" title={weatherData.temp_c} className='h-8'/>
                            <div className="flex flex-col justify-center items-center p-3">  
                                <h3 className='text-2xl font-bold'>{preferedUnit === 'F' ? weatherData.temp_f : weatherData.temp_c}&deg;{preferedUnit}</h3>
                                <h3 className='text-xs font-light tracking-tight -mt-1'>(Feels like {preferedUnit === 'F' ? weatherData.feelslike_f : weatherData.feelslike_c}&deg;{preferedUnit})</h3>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-3 ">  
                            <div className="flex flex-row justify-center items-center p-3">  
                                <img src={weatherData.condition.icon} alt="weather icon" title={weatherData.condition.text} className='h-12'/>
                                <h3 className=''>{weatherData.condition.text}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 md:w-fit flex md:flex-row gap-2 md:gap-8 flex-col flex-nowrap md:min-w-0 min-w-80 md:flex-wrap justify-center">
                    {forecastData.forecastday.map((day, ix) => (
                        <div className="flex flex-col justify-center items-center py-3 px-12 bg-slate-200/40 rounded-lg" key={ix}>  
                            <h3 className='text-lg font-medium tracking-wide'>{ ix === 0 ? 'Today' : (ix === 1 ? 'Tomorrow' : (new Date(day.date_epoch * 1000).toLocaleString('en-US', { weekday: 'long' })) ) }</h3>
                            <div className="flex flex-row justify-center items-center p-3">
                                <img src={day.day.condition.icon} alt="weather icon" title={day.day.condition.text} className='h-12'/>
                                <div className="flex flex-col justify-center items-center p-3">  
                                    <h3 className='text-2xl font-bold'>{preferedUnit === 'F' ? day.day.avgtemp_f : day.day.avgtemp_c}&deg;{preferedUnit}</h3>
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
