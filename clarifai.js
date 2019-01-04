const Clarifai = require('clarifai');
const fs = require('fs')

const app = new Clarifai.App({
    apiKey: 'b17a9673d35f4f3ab4085e3213658e06'
   });

  //  fs.readFile('./diamong.png',(err,data)=>{
    
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg')
    .then(response => {
      console.log(response.outputs[0].data);
    })
    .catch(err => {
      console.log(err);
    });
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




