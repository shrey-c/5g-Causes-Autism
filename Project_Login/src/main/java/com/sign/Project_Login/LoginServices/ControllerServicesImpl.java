package com.sign.Project_Login.LoginServices;

import com.sign.Project_Login.LoginExceptions.InvalidCredentialsException;
import com.sign.Project_Login.LoginExceptions.UserAlreadyExists;
import com.sign.Project_Login.Repo.UserRepository;
import com.sign.Project_Login.entity.Provider;
import com.sign.Project_Login.entity.User;
import com.sign.Project_Login.entity.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ControllerServicesImpl implements ControllerServices {
    @Autowired
    UserRepository userRepository;

    @Autowired
    myUserDetailsService myuds;


    @Override
    public void processregistration(User user) {
        Optional<User> optionalUser = userRepository.findByLocalEmailid(user.getEmailid());
        if (optionalUser.isEmpty()) {
            user.setProvider(Provider.local);
            userRepository.save(user);
        } else {
            throw new UserAlreadyExists("This Email Id already exists!");
        }
    }

//    @Autowired
//    myAuthProvider myAuthenticationProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public void processlogin(UserLogin userLogin) throws Exception {
        System.out.println(userLogin.toString());
        try {
            SecurityContextHolder.getContext().setAuthentication(authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            userLogin.getEmailid_login(),
                            userLogin.getPassword_login()
                    )
            ));

        } catch (BadCredentialsException e) {
            throw new InvalidCredentialsException("600","Invalid Credentials entered");
        }
    }



}

