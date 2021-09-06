package com.sign.Project_Login.entity;

import lombok.Data;
import org.springframework.security.core.Authentication;

public @Data
class UserLogin {

    public UserLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserLogin(String emailid_login, String password_login) {
		super();
		this.emailid_login = emailid_login;
		this.password_login = password_login;
	}
	@Override
	public String toString() {
		return "UserLogin [emailid_login=" + emailid_login + ", password_login=" + password_login + "]";
	}
	public String getEmailid_login() {
		return emailid_login;
	}
	public void setEmailid_login(String emailid_login) {
		this.emailid_login = emailid_login;
	}
	public String getPassword_login() {
		return password_login;
	}
	public void setPassword_login(String password_login) {
		this.password_login = password_login;
	}
	private String emailid_login;
    private String password_login;

}
