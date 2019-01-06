const Clarifai = require('clarifai');
const fs = require('fs')

const app = new Clarifai.App({
    apiKey: 'b17a9673d35f4f3ab4085e3213658e06'
   });


   const concatFile = (fileNames, fileToWrite) => {
    let filePromises = fileNames.map(e => readFilePromise(e))
    return Promise.all(filePromises).then((vals) => {
        valsToJSON = vals.map(e => JSON.parse(e))
        return writeFilePromise(fileToWrite, JSON.stringify({
            users: valsToJSON
        }))
    })
}

//    app.inputs.create({
//     url: "https://samples.clarifai.com/puppy.jpeg",
//     concepts: [
//       {
//         id: "boscoe",
//         value: true
//       }
//     ]
//   });

//   app.models.create(
//     "pets",
//     [
//       { "id": "boscoe" }
//     ]
//   ).then(
//     function(response) {
//       // do something with response
//     },
//     function(err) {
//       // there was an error
//     }
//   );

//   app.models.train("{model_id}").then(
//     function(response) {
//       // do something with response
//     },
//     function(err) {
//       // there was an error
//     }
//   );
  
//   // or if you have an instance of a model
  
//   model.train().then(
//     function(response) {
//       // do something with response
//     },
//     function(err) {
//       // there was an error
//     }
//   );

//   app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, "https://samples.clarifai.com/metro-north.jpg").then(
//   function(response) {
//     // do something with response
//   },
//   function(err) {
//     // there was an error
//   }
// );





  //  // add inputs with concepts
  //  app.inputs.create([{
  //    "url": "http://pluspng.com/img-png/diamond-shape-png-hd--1805.png",
  //    "concepts": [
  //      { "id": "diamond", "value": true }
  //    ]
  //  }, {
  //    "url": "https://cdn3.iconfinder.com/data/icons/elements-of-geometry/154/rhomb-rhombus-diamond-geometry-shape-512.png",
  //    "concepts": [
  //      { "id": "diamond", "value": false }
  //    ]
  //  }, {
  //    "url": "https://www.wpclipart.com/signs_symbol/shapes/diamond_shape.png",
  //    "concepts": [
  //     { "id": "diamond", "value": true }
  //    ]
  //  }, {
  //    "url": "http://cliparts.co/cliparts/pco/5AM/pco5AMyqi.png",
  //    "concepts": [
  //      { "id": "diamond", "value": true }
  //    ]
  //  }]).then(
  //    createModel,
  //    errorHandler
  //  );
   
  //  // once inputs are created, create model by giving name and list of concepts
  //  function createModel(inputs) {
  //    app.models.create('shapes', ["diamond"]).then(
  //      trainModel,
  //      errorHandler
  //    );
  //  }
   
  //  // after model is created, you can now train the model
  //  function trainModel(model) {
  //    model.train().then(
  //      predictModel,
  //      errorHandler
  //    );
  //  }
   
  //  // after training the model, you can now use it to predict on other inputs
  //  function predictModel(model) {
  //    model.predict(['https://samples.clarifai.com/dog3.jpeg', 'https://samples.clarifai.com/cat3.jpeg']).then(
  //      function(response) {
  //        console.log(response);
  //      }, errorHandler
  //    );
  //  }
   
  //  function errorHandler(err) {
  //    console.error(err);
  //  }
  
  //  fs.readFile('./set_solid.png',(err,data)=>{
  //     app.models.predict({id:'shapes', version:'3c107f091eb74ef9a63fb89f5f604355'}, {base64:data.toString('base64')})
  //   .then(response => {
  //     console.log(response.outputs[0].data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
    
  //  })
  


// fs.readFile('./set_solid.png',(err,set)=>{
//     fs.readFile('./diamond.png',(err,diamond)=>{
//         app.inputs.create({base64:set.toString('base64')}).then(
//             searchForDiamond,
//             function(err) {
//               console.error(err);
//             }
//           );
          
//           // search for concepts
//           function searchForDiamond(response) {
//             app.inputs.search({ input: {base64:diamond.toString('base64')}}).then(
//               function(response) {
//                 console.log(response.hits);
//               },
//               function(response) {
//                 console.error(response);
//               }
//             );
//           }
//     })
 
// })

// app.inputs.create('https://samples.clarifai.com/puppy.jpeg').then(
//   searchForDiamond,
//   function(err) {
//     console.error(err);
//   }
// );

// // search for concepts
// function searchForDiamond(response) {
//   app.inputs.search({
//     concept: {
//       name: 'diamond'
//     }
//   }).then(
//     function(response) {
//       console.log(response);
//     },
//     function(response) {
//       console.error(response);
//     }
//   );
// }




