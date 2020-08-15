// const data = require('./data/data.js');

// const routes = app => {
//     app.get('/', (req, res) => {
//         res.send(`<html>
//             <body>
//                 <h1>Get All Travels</h1> 
//                 <ul>
//                     <li>
//                         <p><strong>URL</strong></p>
//                         <p>/list</p>
//                     </li>
//                     <li>
//                         <p><strong>Method</strong></p>
//                         <p>GET</p>
//                     </li>
//                 </ul>
//             </body>
//         </html>
//         `);
//     });
    
//     // list travel
//     app.get('/list', (req, res) => {
//         return res.json(data);
//     });

//     // search travel by name
//     // app.get('/list/:name', (req, res) => {
//     //     const result = data.beach.filter( value => {
//     //         return value.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase();
//     //     });
//     //     return res.json(result);
//     // })

//     // add travel
//     // app.post('/list', (req, res) => {
//     //     const newTravel = {
//     //         id: data.length + 1,
//     //         image: req.body.image,
//     //         name: req.body.name,
//     //         city: req.body.city, 
//     //         description: req.body.description,
//     //     };

//     //     data.push(newTravel);

//     //     return res.json(newTravel);
//     // });
// }

// module.exports = routes;