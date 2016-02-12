 var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var schema = require('./org_data_schema');

router.post('/',function(req,res,next){
  //  mongoose.connect('mongodb://localhost/someOtherDbName');
    //console.log(schema);
    var filter = [];        //filter data available in this variable will be added to the Ui for selection
   //var data = req.body.str;
   var data = req.body.data;
     console.log(data);
    // console.log("We are here");

  //  var commitData = mongoose.model('someOtherCollectionName',schema,'someOtherCollectionName');

    // var json_param ={
    //   "y_axis_dim" : "insertion",       //insertion,deletion,noOfFiles,commits
    //   "x_axis_dim" : "time",            //repo,committer.name,reviewers.name,author.name,(time)
    //   "filter" : ["repo","commitYear","commitMonth"],                //repo,committer.name,reviewers.name,authors.name,(time)
    //   "year": 100,
    //   "month" : 03,
    //   "type" : "top 100"                //top,bottom
    // }

//var json_param = data;

    //this peice of code will fetch the filtered data and fill it in drop down


// var  filter = get_the_filters(commitData,json_param,filter,0);
// // res.send(filter);
// function get_the_filters(commitData,json_param,filter,i){
//   console.log("we are inthe get the filters function "+ i);
//   var filter_query ={};   //used to generate filter object for finding the data
//
//   //for(var i=0; i<json_param["filter"].length;i++){
//
//     var str = json_param["filter"][i];
//     var str1 = '$' + json_param["filter"][i];
//     console.log(json_param["filter"][i]);
//     filter_query[str] = str1;
//     console.log(filter_query);
//     commitData.aggregate([
//                   {
//                     "$group":
//                     {
//                       //"_id": {"repo":"$repo","user":"$committer.name"}
//                       "_id": filter_query
//                     }
//                   }
//     ],function(err,result){
//       if(err){
//         console.log("we are having issue in retriving data");
//       }
//       else{
//         //console.log(result);
//         if(i<json_param["filter"].length-1)
//         {
//           filter.push(result);
//           console.log(filter);
//           i++;
//           get_the_filters(commitData,json_param,filter,i);
//         }
//         else{
//           mongoose.connection.close();
//           filter.push(result);
//           console.log(filter);
//           res.send(filter);
//           return filter;
//
//         }
//
//       }
//     });
//   //}
// }

res.send("Got the Data");
});

module.exports = router
