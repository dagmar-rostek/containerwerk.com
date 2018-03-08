package com.containerwerk.configurator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.containerwerk.configurator.configuration.JpaConfiguration;


@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"com.containerwerk.configurator"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class CONFIGURATORApp {

	public static void main(String[] args) {
		SpringApplication.run(CONFIGURATORApp.class, args);
	}
}