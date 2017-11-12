/*
BlogPostDetailController
*/
app.controller('BlogPostDetailController',function($scope,$location,$routeParams,BlogPostService){
	
      var id=$routeParams.id
      $scope.ShowComments=false
      $scope.blogPost=BlogPostService.getBlogPostById(id).then(function(response)
    		  {
    	  $scope.blogPost=response.data;
    	  console.log(response.data)
    	  
    		  },function(response)
    		  {
    	    console.log(response.status)
    	    if(response.status==401)
    	    	$location.path('/login')
    		  })
    		  
    	$scope.getComments=function()
    	{
    	  $scope.ShowComments=true;
    	}
   function getBlogComments(){
      	BlogPostService.getBlogComments(id).then(function(response){
      	$scope.blogComments=response.data	
      		
      	},function(response){
      		 console.log(response.status)
     	    if(response.status==401)
     	    	$location.path('/login')
      	})
      }
      
      getBlogComments()
   $scope.updateBlogPost=function(blogPost)
   {
    	  BlogPostService.updateBlogPost($scope.blogPost).then(function(response)
    			  {
    		  console.log(response.status)
    		   $location.path('/getallblogs')
    			  },function(response){
    				  if(response.status==401)
    		    	    	$location.path('/login')
    			  })
   }
      
    $scope.addComment=function()
    {
    	$scope.blogComment.blogPost=$scope.blogPost
    	console.log($scope.blogComment)
    	BlogPostService.addComment($scope.blogComment).then(function(response){
    		$scope.blogComment.commentText=''
    			 getBlogComments()
    		console.log(response.data)
    	},function(response){
    		if(response.status==401)
    	    	$location.path('/login')
    	   $scope.error=response.data 
    	   $location.path('/getblogpostbyid/'+id)
    	})
    }
    
    
      
})