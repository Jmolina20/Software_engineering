package com.example.Start;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class CONTROLLER {

@RequestMapping ("/Hello_world")
		public String Hello() {
		return "Hello world!";} 

@RequestMapping ("/pizza")
		public String pizza() {
		return "Pineapple belongs on pizza.";}

	
}
