package com.sign.Project_Login.entity;

import lombok.Data;
import org.springframework.security.core.Authentication;

public @Data
class UserLogin {

    private String emailid_login;
    private String password_login;

}
