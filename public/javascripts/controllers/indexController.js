var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
    $scope.month_data = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
    $scope.plot_graph = function(){
      console.log("we are in plot_top_repos function");
      console.log(event.target.getAttribute('data-yparam'));
      console.log(event.target.getAttribute('data-xparam'));
      console.log(event.target.getAttribute('data-type'));
      var y_axis_dim = event.target.getAttribute('data-yparam');
      var x_axis_dim = event.target.getAttribute('data-xparam');
      var type = event.target.getAttribute('data-type');

      var to_date = $scope.to_date;
      var from_date = $scope.from_date;


      // console.log(to_date + ' '+ from_date);
      // console.log(to_year + " " + from_year + " " + to_month + " " + from_month);

      if(x_axis_dim == 'time'){
        if($scope.to_date === undefined && $scope.from_date === undefined){
          alert("Please select the date");
          return;
        }

        var to_year = to_date.getFullYear();
        var to_month= to_date.getMonth();
        var from_year = from_date.getFullYear();
        var from_month = from_date.getMonth();
        var obj = {
            "y_axis_dim": y_axis_dim,
            "x_axis_dim": x_axis_dim,
            "type": type,
            "from_date" : from_date,
            "to_date" : to_date,
            "from_year" : from_year,
            "from_month" : from_month,
            "to_year":  to_year,
            "to_month" : to_month
        }
      }else{
        var obj = {
            "y_axis_dim": y_axis_dim,
            "x_axis_dim": x_axis_dim,
            "type": type
        }
      }
      //console.log(obj);
      plotthedata(obj);
    }


    var plotthedata = function(obj) {
        console.log("we are in the function");

        //var json= JSON.parse(obj);
        console.log(obj);

            $http({method: 'Post', url: '/plotgraph', data:{data:obj}}).
                success(function(data, status, headers, config) {
                      console.log(data);
                      plotting_graph(data);
                });
    };
  });






























          //  for(var i=0;i<data.length;i++){
          //    key_data[i] = [];
          //    filter_data[i] = [];
          //    for(var j=0;j<data[i].length;j++){
          //      console.log(data[i][j]["_id"]);
          //      for(key in data[i][j]["_id"]){
          //        console.log(key + " " + data[i][j]["_id"][key]);
          //        key_data[i].push(key);
          //        filter_data[i].push(data[i][j]["_id"][key]);
          //        // for(key1 in data[i][j]["_id"][0]){
          //        //   console.log(data[i][j]["_id"][0][key1]);
          //        // }
          //      }
          //    }
          //  }
          //  //console.log(filter_data);
          //  //console.log(key_data);
           //
          //  for(var i=0;i<key_data.length;i++){
          //    console.log(key_data[i]);
          //    $scope.keys_filter= key_data[i];
          //    for(var j=0;j<filter_data[i].length;j++){
          //        console.log(filter_data[i][j]);
          //        $scope.data_filter = filter_data[i][j];
          //    }
          //  }





//   $scope.getFilterData = function(){
//     console.log("we are calling this function");
//     var str = $scope.json;
//     //var str_new = angular.toJson(str);
//     var str_new = JSON.parse(str);
//     var filter_data = [];
//     var key_data = [];
//     console.log(str_new);
//     // $http({url:"/getFilterData",'data':str,'method':'POST',headers: {'Content-Type':'text/plain'}}).then(function(data){
//     //   console.log("we recieved the data from server");
//     //   console.log(data);
//     // }, function(err){
//     //   console.log("we are having issues in retrieving the data from server");
//     //   console.log(err);
//     // });
//     // var config= {headers: {'Content-Type':'text/plain'}};
//     // $http.post("/getFilterData",str,config).then(function(data){
//     //   console.log("we recieved the data from server");
//     //   console.log(data);
//     // }, function(err){
//     //   console.log("we are having issues in retrieving the data from server");
//     //   console.log(err);
//     // });
//
//     $http({method: 'Post', url: '/getFilterData', data:{data:str_new}}).
//     success(function(data, status, headers, config) {
//         //console.log(data);
//         for(var i=0;i<data.length;i++){
//           key_data[i] = [];
//           filter_data[i] = [];
//           for(var j=0;j<data[i].length;j++){
//             console.log(data[i][j]["_id"]);
//             for(key in data[i][j]["_id"]){
//               console.log(key + " " + data[i][j]["_id"][key]);
//               key_data[i].push(key);
//               filter_data[i].push(data[i][j]["_id"][key]);
//               // for(key1 in data[i][j]["_id"][0]){
//               //   console.log(data[i][j]["_id"][0][key1]);
//               // }
//             }
//           }
//         }
//         //console.log(filter_data);
//         //console.log(key_data);
//
//         for(var i=0;i<key_data.length;i++){
//           console.log(key_data[i]);
//           $scope.keys_filter= key_data[i];
//           for(var j=0;j<filter_data[i].length;j++){
//               console.log(filter_data[i][j]);
//               $scope.data_filter = filter_data[i][j];
//           }
//         }
//
//
//     });
//     // console.log(JSON.stringify(str));
//     // console.log(JSON.parse(str));
//   }
// });
// }
