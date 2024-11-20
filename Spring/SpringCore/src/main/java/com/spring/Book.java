package com.spring;

import java.util.List;
import java.util.Map;

public class Book {
	private Map<String, String> books;
	private List<Author> authors;

	public Map<String, String> getBooks() {
		return books;
	}

	public void setBooks(Map<String, String> books) {
		this.books = books;
	}

	public Book(Map<String, String> books) {
		super();
		this.books = books;
	}
	

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Book [books=" + books + ", authors=" + authors + "]";
	}

	

}
