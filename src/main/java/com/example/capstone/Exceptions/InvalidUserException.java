package com.example.capstone.Exceptions;

@SuppressWarnings("serial")
public class InvalidUserException extends RuntimeException {
public InvalidUserException(String msg)
{
	super(msg);
}
}
