package com.sign.Project_Login.LoginExceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@Data
public class SocialDetailsInaccessible extends RuntimeException{
    private String errormsg;

}
