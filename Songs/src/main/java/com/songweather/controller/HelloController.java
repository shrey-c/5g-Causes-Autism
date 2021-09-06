package com.songweather.controller;


import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("son")
public class HelloController implements ErrorController{

	@RequestMapping(value=PATH, method=RequestMethod.GET)
	public String DefaultErrorMessage() {
		return "Requested Resource is not Found!";
	}

	private static final String PATH="/error";
	@RequestMapping(value="/",method= RequestMethod.GET)
	public String helloWorld(){
		return "Hello spring boot";
	}

	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return PATH;
	}

}
