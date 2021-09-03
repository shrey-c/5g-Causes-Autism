package com.telstra.error;

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
