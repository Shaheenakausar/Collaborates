app.factory('JobService',function($http){
	var jobService={}
	
	jobService.saveJob=function(job){
	  return  $http.post("http://localhost:8090/backend/savejob",job)
	}
	jobService.getAllJobs=function(){
		 return  $http.get("http://localhost:8090/backend/getalljobs")
	}
	jobService.getJobDetails=function(id){
		 return  $http.get("http://localhost:8090/backend/getjobbyid/"+id)
	}
	return jobService;
})