import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //BEGIN @TODO1
  app.get( "/filteredimage", async(req:express.Request, res:express.Response) => {
    let {image_url} = req.query;

    //validating image_url query
    if (!image_url){
      res.status(422).send('Oops, please provide image URL(Invalid URL)');
    } else {

      //call filterImageFromURL() and send resulting file as response
      await filterImageFromURL(image_url).then( function (image_filtered_path){
        res.sendFile(image_filtered_path, () => {       
          deleteLocalFiles([image_filtered_path]);//this part delete files off the server when done       
        });   
      }).catch(function(){
        res.status(500).send('Image filtering failed. Make sure you are using a proper image URL');
      });  

    }
  });
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();