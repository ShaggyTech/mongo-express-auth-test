import express from 'express';

const app = express();
const port = 3030; // default port to listen

// define a route handler for the default home page
app.get( "/", ( _req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );