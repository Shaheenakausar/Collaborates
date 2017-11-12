/*package com.niit.test;



import java.util.Date;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.BlogPostDaoImpl;
import com.niit.model.BlogPost;

public class BlogPostTestCase {
	public static void main(String []args)
	{
	AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext();
	
	context.scan("com.niit");
	context.refresh();
	BlogPostDaoImpl blogpostImpl=(BlogPostDaoImpl) context.getBean("blogpostImpl");
	
	BlogPost blogpost=new BlogPost();
	blogpost.setBlogTitle("java");
	blogpost.setDescription("java blog");
	blogpost.setPostedon(new Date());
	blogpost.setApproved(false);
	blogpostImpl.saveBlogPost(blogpost);
	
	System.out.println("Blog is inserted");
		}

}*/
