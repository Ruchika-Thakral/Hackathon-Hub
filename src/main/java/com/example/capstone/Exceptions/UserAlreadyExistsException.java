package com.example.capstone.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
public class UserAlreadyExistsException extends ConflictException{
public UserAlreadyExistsException(String msg)
{
	super(msg);
}
}
