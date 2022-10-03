 # Udagram Image Filtering Microservice
Udagram Image Filter by Don
Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### How to use the project

You'll need to clone the project then create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
This will get the project dependencies installed

2. Run the development server with `npm run dev`
If dependants are successfully installed, no errors are likely to be seen here

3. Type the url `localhost:8082/filteredimage` in your browser address bar
`Oops, please provide image URL(Invalid URL)` is displayed in your browser. Server is running well at this point

4. To filter an image type `http://localhost:8082/filteredimage?image_url=TheURLgoesHere`
For example http://localhost:8082/filteredimage?image_url=https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg will filter an image of a coder obtained from pixabay



### Elastic Beanstalk URL for this project
http://image-filter-starter-code-dev222222222222222222222.us-east-1.elasticbeanstalk.com/

http://image-filter-starter-code-dev222222222222222222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg




