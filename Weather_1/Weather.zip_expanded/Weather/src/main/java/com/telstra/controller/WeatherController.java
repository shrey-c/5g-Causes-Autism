package com.telstra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.LoggerFactory;

import java.util.List;

import org.slf4j.Logger;
import com.telstra.entity.Weather;
import com.telstra.error.WeatherNotFoundException;
import com.telstra.service.WeatherService;

@RestController
@RequestMapping("wea")
public class WeatherController {
	
	@Autowired
    private WeatherService weatherService;
	
	private final Logger LOGGER = LoggerFactory.getLogger(WeatherController.class);
	
	//Post weather
	@PostMapping("/weather")
	public Weather saveWeather(@RequestBody Weather weather){
		return  weatherService.saveWeather(weather);
		
	}
	
	// list of weather we are returning from service
    @GetMapping("/weather")
    public List<Weather> fetchWeatherList(){
        return weatherService.fetchWeatherList();
    }
    
    //get weather by id
    @GetMapping("/weather/{id}")
    public Weather fetchWeatherById(@PathVariable("id") Long Id) throws WeatherNotFoundException{
        return weatherService.fetchWeatherById(Id);
    }
	

}
