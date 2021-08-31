package com.telstra.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.telstra.entity.Weather;
import com.telstra.error.WeatherNotFoundException;
import com.telstra.repository.WeatherRepository;

@Service
public class WeatherServiceImpl implements WeatherService{

	@Autowired
    private WeatherRepository weatherRepository;
	
	@Override
    public Weather saveWeather(Weather weather) {
        return weatherRepository.save(weather);
    }
	
	@Override
	public List<Weather> fetchWeatherList(){
        return weatherRepository.findAll();
    }
	
	@Override
    public Weather fetchWeatherById(Long Id) throws WeatherNotFoundException {
        Optional<Weather> weather = weatherRepository.findById(Id);

        if(!weather.isPresent())
        {
            throw new WeatherNotFoundException("Weather Not Available");
        }
        return weather.get();
    }

}
