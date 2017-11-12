app.factory('FriendService',function($http)
		{
	var  friendService={}
	
	friendService.listOfSuggestedUsers=function()
	{
		 return  $http.get("http://localhost:8090/backend/getsuggestedusers")
		 
	}
	friendService.friendRequest=function(toId)
	{
		 return  $http.post("http://localhost:8090/backend/friendrequest/"+toId)
		 
	}
	friendService.listOfPendingRequests=function()
	{
		 return  $http.get("http://localhost:8090/backend/getpendingrequests")
		 
	}
	friendService.getUserDetails=function(fromId)
	{
		 return  $http.get("http://localhost:8090/backend/getuserdetails/"+fromId)
		 
	}
	friendService.updatePendingRequest=function(pendingRequest)
	{
		return  $http.put("http://localhost:8090/backend/updatependingrequest",pendingRequest)
	}
	friendService.listOfFriends=function()
	{
		return  $http.get("http://localhost:8090/backend/listoffriends")
	}
	return friendService;
	})