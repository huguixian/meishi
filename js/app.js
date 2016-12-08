/**
 * Created by 火星时代 on 2016/11/23.
 */
var myapp=angular.module("myapp",["ionic"]);
//配置路由

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        /*引导页*/
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })
        /*导航栏*/
        .state("tabs",{
            url:"/tabs",
            /*abstract:true,*/
            templateUrl:"templates/tabs/tabs.html"
        })
        /*美食主页*/
        .state("tabs.home",{
            url:"/home",
            views:{"tabs.home":{ templateUrl:"templates/home/home.html"}},
        })
        /*美食馆*/
         .state("tabs.restaurants",{
            url:"/restaurants",
             views:{"tabs.restaurants":{ templateUrl:"templates/restaurants/restaurants.html"}},

          })
        /*头条*/
        .state("tabs.headlines",{
            url:"/headlines",
            views:{"tabs.headlines":{ templateUrl:"templates/headlines/headlines.html"}},

        })
        /*我的*/
         .state("tabs.my",{
            url:"/my",
             views:{"tabs.my":{ templateUrl:"templates/my/my.html"}},
         })
        //认证美食家
        .state("tabs.epicure",{
            url:"/epicure",
            views:{"tabs.epicure":{ templateUrl:"templates/epicure/epicure.html"}},
        })



    //如果以上路由都不匹配，使用这个备选方案
    $urlRouterProvider.otherwise("/tour")

});

