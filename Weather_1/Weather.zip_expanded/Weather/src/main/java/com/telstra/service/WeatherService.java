package com.telstra.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.telstra.entity.Weather;
import com.telstra.error.WeatherNotFoundException;

@Service
public interface WeatherService {

	public Weather saveWeather(Weather weather);

	public List<Weather> fetchWeatherList();

	public Weather fetchWeatherById(Long id) throws WeatherNotFoundException;

	
	


}
