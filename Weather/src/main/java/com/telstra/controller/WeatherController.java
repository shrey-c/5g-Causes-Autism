package com.telstra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.LoggerFactory;

import java.util.List;

import org.slf4j.Logger;
import com.telstra.entity.Weather;
import com.telstra.error.WeatherNotFoundException;
import com.telstra.service.WeatherService;

@RestController
@RequestMapping("weather-api")
public class WeatherController{
	
	@Autowired
    private WeatherService weatherService;
	
	
	private final Logger LOGGER = LoggerFactory.getLogger(WeatherController.class);
	
	//Post weather
	@PostMapping("/weather")
	public List<Weather> saveWeather(@RequestBody List<Weather> weather){
		return  weatherService.saveWeather(weather);
		
	}
	
	// list of weather we are returning from service
    @GetMapping("/weather")
    public List<Weather> fetchWeatherList(){
        return weatherService.fetchWeatherList();
    }
    
    //get weather by id
    //throws WeatherNotFoundException
    @GetMapping("/weather/{id}")
    public Weather fetchWeatherById(@PathVariable("id") Long Id){
        return weatherService.fetchWeatherById(Id);
    }
    
    @PutMapping("/weather/{id}")
    public Weather updateWeather(@PathVariable("id") Long weatherId, @RequestBody Weather weather)
    {
    	return weatherService.updateWeather(weatherId, weather);
    }
    
    @DeleteMapping("/weather/{id}")
    public String deleteWeatherById(@PathVariable("id") Long weatherId){
           weatherService.deleteWeatherById(weatherId);
           return "Weather Deleted Successfully";
    }

//    //, method=RequestMethod.GET
//    @RequestMapping(value=PATH, method=RequestMethod.GET)
//    public String DefaultErrorMessage() {
//    	return "Requested Resource is not Found!";
//    }
//	@Override
//	public String getErrorPath() {
//		// TODO Auto-generated method stub
//		return PATH;
//	}
	

}
