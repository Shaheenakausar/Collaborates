var app = angular.module('Collaboration',['ngRoute', 'ngCookies']);

app.config(function($routeProvider)
	{
	$routeProvider
	
		.when('/',
	{
		templateUrl : 'views/home.html',
	})
		.when('/login',
	{
		templateUrl : 'views/login.html',
		controller : 'UserController'
	})
		.when('/logout',
	{
		templateUrl : 'views/home.html',
		controller : 'UserController'
	})
		.when('/register',
	{
		templateUrl : 'User/register.html',
		controller : 'UserController'
	})
		.when('/viewUsers',
	{
		templateUrl : 'User/userList.html',
		controller : 'UserListController'	
	})
		.when('/viewBlogs',
	{
		templateUrl : 'Blog/blogs.html',
		controller : 'BlogController'	
	})
	.when('/viewBlog',
	{
		templateUrl : 'Blog/viewBlog.html',	
	})
	.when('/addBlogs',
	{
		templateUrl : 'Blog/blogs.html',	
	})
		.when('/viewJobs',
	{
		templateUrl : 'Job/jobs.html',
		controller : 'JobController'	
	})
		.when('/viewForums',
	{
		templateUrl : 'Forum/forums.html',
		controller : 'ForumController'	
	})
		.when('/addForum',
	{
		templateUrl : 'Forum/forums.html',
	})	
	.when('/viewForum',
	{
		templateUrl : 'Forum/viewForum.html',
	})
	
		.when('/viewEvents',
			{
				templateUrl : 'Event/viewEvents.html',
				controller : 'EventController'	
			})
		.when('/viewForums',
			{
				templateUrl : 'Forum/forums.html',
				controller : 'ForumController'	
			})
		.when('/Chat',
			{
				templateUrl : 'Chat/chat.html',
				controller : 'ChatController'	
			})
		.when('/upload',
			{
				templateUrl : 'User/fileUpload.html',
//				controller : 'ChatController'	
			})
		.when('/admin',
			{
				templateUrl : 'Admin/adminHome.html',	
			})	
		.when('/manageBlogs',
			{
				templateUrl : 'Admin/manageBlogs.html',
				controller : 'AdminController'
			})
		.when('/manageEvents',
			{
				templateUrl : 'Admin/manageEvents.html',	
				controller : 'AdminController'
			})
			.when('/addEvents',
			{
				templateUrl : 'Admin/manageEvents.html',	
//				controller : 'AdminController'
			})
		.when('/manageForums',
			{
				templateUrl : 'Admin/manageForums.html',
				controller : 'AdminController'
			})
		.when('/manageJobs',
			{
				templateUrl : 'Admin/manageJobs.html',
				controller : 'AdminController'
			})
		.when('/addJobs',
			{
				templateUrl : 'Admin/manageJobs.html',	
//				controller : 'AdminController'
			})
		.when('/manageUsers',
			{
				templateUrl : 'Admin/manageUsers.html',	
				controller : 'AdminController'
			})
		.when('/myProfile',
			{
				templateUrl : 'User/myProfile.html',	
				controller : 'FriendController'
			})		
		.when('/myFriends',
			{
				templateUrl : 'User/myProfile.html',	
				controller : 'FriendController'
			})	
		.when('/pendingRequests',
			{
				templateUrl : 'User/myProfile.html',	
				controller : 'FriendController'
			})
		.when('/sentRequests',
			{
				templateUrl : 'User/myProfile.html',	
				controller : 'FriendController'
			})
		.when('/cmred',
			{
				templateUrl : 'Blog/comment-redirect.html',
			})	
			.when('/cmred',
			{
				templateUrl : 'Blog/comment-redirect.html',
			})
			
			.when('/fmred',
			{
				templateUrl : 'Forum/forum-redirect.html',
			})			
			.when('/jred',
			{
				templateUrl : 'Admin/jred.html',
			})
			.when('/ered',
			{
				templateUrl : 'Admin/ered.html',
			})
		.when('/appliedJobs',
		{
			templateUrl : 'Admin/manageJobs.html',
			controller : 'AdminController'
		})
		.when('/myJobs',
		{
			templateUrl : 'User/myProfile.html',
			controller : 'UserController'
		})		
		.when('/viewProfile',
		{
			templateUrl : 'Friend/viewProfile.html',
		})		


		.otherwise({redirectTo: '/'});
	
});

app.run( function ($rootScope, $location, $cookieStore, $http) 
{
	 $rootScope.$on('$locationChangeStart', function (event, next, current) 
	 {
		 console.log("$locationChangeStart")
		    
		 var userPages = ['/myProfile','myFriends','pendingRequests','sentRequests','/upload','/viewUsers','/addBlogs','/addForum','/viewProfile','/viewBlog','/viewForum','/viewForums'];
		 var adminPages = ['/admin','/manageUsers','/manageJobs','/manageEvents','/manageForums','/manageBlogs','/addEvents','/addJobs','/jred','/ered','/appliedJobs'];
		 
		 var currentPage = $location.path();
		 
		 var isUserPage = $.inArray(currentPage, userPages);
		 var isAdminPage = $.inArray(currentPage, adminPages);
		 
		 var isLoggedIn = $rootScope.currentUser.username;
	        
	     console.log("isLoggedIn:" +isLoggedIn)
	     console.log("isUserPage:" +isUserPage)
	     console.log("isAdminPage:" +isAdminPage)
	        
	        if(!isLoggedIn)
	        	{
	        	
	        		if(isUserPage!=-1 || isAdminPage!=-1)  
	        	 	{
		        	  console.log("Navigating to login page:")
		        	  alert("You need to Login first!")
		        	  $location.path('/login');
		         	}
	        	}
	        
			 else //logged in
	        	{
	        	
				 var role = $rootScope.currentUser.role;
				 if(isAdminPage!=-1 && role!='ADMIN' )
					 {
					  alert("You cannot view this page as a " + role )
					  $location.path('/');
					 }
	        	}
	 });
	 
	 // to keep the user logged in after page refresh
    $rootScope.currentUser = $cookieStore.get('currentUser') || {};
    if ($rootScope.currentUser)
    {
        $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.currentUser; 
    }
});