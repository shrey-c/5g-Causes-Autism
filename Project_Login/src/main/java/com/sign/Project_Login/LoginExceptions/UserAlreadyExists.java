package com.sign.Project_Login.LoginExceptions;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public class UserAlreadyExists extends RuntimeException{

    private String errorMsg;

    public UserAlreadyExists(String s) {
        this.errorMsg = s;
    }
}
