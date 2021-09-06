package com.sign.Project_Login.LoginExceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
//@AllArgsConstructor
//@Data
public class SocialDetailsInaccessible extends RuntimeException{
    private String errormsg;

	public String getErrormsg() {
		return errormsg;
	}

	public void setErrormsg(String errormsg) {
		this.errormsg = errormsg;
	}

	public SocialDetailsInaccessible(String errormsg) {
		super();
		this.errormsg = errormsg;
	}

	public SocialDetailsInaccessible() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SocialDetailsInaccessible(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public SocialDetailsInaccessible(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public SocialDetailsInaccessible(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}
