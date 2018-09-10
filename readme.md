# Multi SPA example

## Why?

Since single SPA's are usually deployed and served as static assets, deployment processes are built around re-deploying the single static bundle to a particular server.

With multiple teams in the same project domain trying to deploy any arbitrary number of times a day, issues can arise due to teams pushing unfinished work to branches and deploys taking place.

It is also a huge benefit to have teams in different areas of the project working independently.
Some benefits to this philosophy include:
  1. Teams can have individual SCM workflows that don't combat with eachother.
  2. Teams can deploy their applications to sub directories on a web server causing no harm to other application code.
  3. Multiple applications allow for the use of easy re-writes.
  4. Scalability is a breeze since new applications can be added and modified without causing issues with other areas in the main application.

## How?

This example uses Amazon S3 for static file hosting and both applications live under ***/appOne*** and ***/appTwo*** under one single bucket.

An nginx server is next hosted on an Amazon EC2 instance, which works as a reverse-proxy matching the particular routes in the app, and proxying to the designated app location inside of the s3 bucket.
  - For example, if /appOne is routed in the app, the reverse-proxy will serve files from <MY_S3_BUCKET>/appOne.

Not only does this work for a reverse-proxy, but allows for load balancing in the future if needed.

## Looking at the code

Both /appOne and /appTwo directories contain two different applications.

- *deploy.sh* - [build] command contains logic to run the webpack builds.
- *deploy.sh* - [deploy] command contains logic to deploy the /dist folders to the subdirectories in the S3 bucket

You can see the code for the server.conf file inside of nginx [here](https://github.com/brodeynewman/multi-spa-example/blob/master/nginx.conf).

The *location* blocks describe the routes which we want to reverse-proxy to s3 on.


