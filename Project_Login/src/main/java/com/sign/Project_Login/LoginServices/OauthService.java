package com.sign.Project_Login.LoginServices;

import com.sign.Project_Login.LoginExceptions.SocialDetailsInaccessible;
import com.sign.Project_Login.Repo.UserRepository;
import com.sign.Project_Login.entity.Provider;
import com.sign.Project_Login.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class OauthService {
    @Autowired
    UserRepository repo;

    public void processOAuthPostLogin(CustomOath2User customOath2User) throws Exception {

        if (customOath2User.getEmail()==null|| customOath2User.getName()==null){
            throw new SocialDetailsInaccessible("Your EmailId and Password are not Accessible");
        }
        ArrayList<User> existUser = repo.findByEmailid(customOath2User.getEmail());

        if(existUser.isEmpty()){

                User newUser = new User();
                newUser.setEmailid(customOath2User.getEmail());
                newUser.setFirstname(customOath2User.getName());
                newUser.setProvider(Provider.valueOf(customOath2User.getProviderName()));
                System.out.println("saving new user");
                repo.save(newUser);


                }
        else{
            existUser = existUser.stream().filter(i->i.getProvider().name().equals(customOath2User.getProviderName())).collect(Collectors.toCollection(ArrayList::new));
            if (existUser.isEmpty()) {
                User newUser = new User();
                newUser.setEmailid(customOath2User.getEmail());
                newUser.setFirstname(customOath2User.getName());
                newUser.setProvider(Provider.valueOf(customOath2User.getProviderName()));
                System.out.println("saving new user");
                repo.save(newUser);

            }

        }
    }
}
