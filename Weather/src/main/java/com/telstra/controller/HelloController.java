package com.telstra.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController implements ErrorController{
	
	private static final String PATH="/error";
	@RequestMapping(value="/",method= RequestMethod.GET)
    public String helloWorld(){
        return "Hello spring boot";
    }
	
	@RequestMapping(value=PATH, method=RequestMethod.GET)
    public String DefaultErrorMessage() {
    	return "Requested Resource is not Found!";
    }
	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return PATH;
	}

	

}
