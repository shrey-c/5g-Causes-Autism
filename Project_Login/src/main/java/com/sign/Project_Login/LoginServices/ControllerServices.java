package com.sign.Project_Login.LoginServices;

import com.sign.Project_Login.entity.User;
import com.sign.Project_Login.entity.UserLogin;

public interface ControllerServices {
    void processregistration(User user);

    void processlogin(UserLogin userLogin) throws Exception;
}
