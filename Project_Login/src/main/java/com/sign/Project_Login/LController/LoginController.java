package com.sign.Project_Login.LController;

import com.sign.Project_Login.LoginServices.ControllerServices;
import com.sign.Project_Login.LoginServices.CustomOath2User;
import com.sign.Project_Login.LoginServices.myUserDetails;
import com.sign.Project_Login.entity.User;
import com.sign.Project_Login.entity.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
public class LoginController {

    @Autowired
    private ControllerServices controllerServices;

    @GetMapping("/")
    public String homePage(){
        return "home";
    }

    @GetMapping("/register")
    public String registerUser(Model m){
        m.addAttribute("reguser", new User());
        return "register";
    }

    @PostMapping("/process_register")
    public String processregistration(User user) throws Exception {
        controllerServices.processregistration(user);
            return "SuccessfulRegistration";

    }

    @GetMapping("/login")
    public String LoginUser(Model m){
        m.addAttribute("login_creds", new UserLogin());
        return "loginPage";
    }

    @PostMapping("/process_login")
    public void processlogin(UserLogin userLogin, HttpServletResponse response) throws Exception {
        controllerServices.processlogin(userLogin);
            response.sendRedirect("/use");
    }

    @GetMapping("/use")
    public String usePage(Model model){
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof CustomOath2User){
            CustomOath2User curruser = (CustomOath2User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            model.addAttribute("currentuser", curruser.getName());
        }
        else if (SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof myUserDetails){
            myUserDetails curruser = (myUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            model.addAttribute("currentuser", curruser.getPrincipalName());
        }

        return "dashboard";
    }





}
