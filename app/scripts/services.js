'use strict';

angular.module('confusionApp')
       .constant("baseURL","http://localhost:3000/")
       //.service('menuFactory',['$http','baseURL',function($http,baseURL){
       .service('menuFactory',['$resource','baseURL',function($resource,baseURL){

            this.getDishes=function(){
              //return $http.get(baseURL+"dishes");
              return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
            };

             // no need for this function when using $resources,
             //can be obtained using getDishes+id
          /*  this.getDish=function(index){
              return $http.get(baseURL+"dishes/"+index);
            };*/

            // implement a function named getPromotion
            // that returns a selected promotion.
            this.getPromotion=function(){
              //return promotions[index];
              return $resource(baseURL+"promotions/:id",null, {'update':{method:'PUT'}});
            };

       }])

       .factory('corporateFactory', ['$resource','baseURL',function($resource,baseURL) {

                   var corpfac = {};

                   // Implement two functions, one named getLeaders,
                   corpfac.getLeaders=function(){
                     //return leadership;
                     return $resource(baseURL+"leadership/:id",null, {'update':{method:'PUT'}});
                   };
                   // the other named getLeader(index)
              /*     corpfac.getLeader=function(index){
                     return leadership[index];
                   };*/
                   // Remember this is a factory not a service
                   return corpfac;

               }])

        .factory('feedbackFactory',['$resource','baseURL',function($resource,baseURL){
                  var feedbackfac={};

                  feedbackfac.getFeedback=function(){
                    return $resource(baseURL+"feedback/:id",null, {'update':{method:'PUT'}});
                  };

                  return feedbackfac;

        }])

       ;
