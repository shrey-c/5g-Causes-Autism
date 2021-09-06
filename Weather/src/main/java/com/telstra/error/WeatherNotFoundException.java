package com.telstra.error;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
public class WeatherNotFoundException extends Exception{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public WeatherNotFoundException() {
        super();
    }

    public WeatherNotFoundException(String message) {
        super(message);
    }

}
//@Controller
//public class WeatherNotFoundException implements ErrorController{
//	@RequestMapping("/error")
//    public String handleError() {
//        //do something like logging
//        return "error";
//    }
//
//	@Override
//	public String getErrorPath() {
//		// TODO Auto-generated method stub
//		return null;
//	}

