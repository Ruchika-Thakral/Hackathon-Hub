package com.example.capstone.Exceptions;

@SuppressWarnings("serial")
public class InvalidOtpException extends RuntimeException{
public InvalidOtpException(String msg)
{
	super(msg);
}
}
