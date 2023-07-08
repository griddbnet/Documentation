# Installation - Docker

## GridDB Server Container

To run GridDB server, you can simply pull from Dockerhub

```bash
$ docker network create griddb-net
$ docker pull griddbnet/griddb
```

We first create a Docker network to allow our application container to easily communicate with our GridDB container.

Now run your GridDB server: 

```bash
$  docker run --network griddb-net --name griddb-server -d -t griddbnet/griddb
```

## Nodejs Application Container

As an example of using GridDB with an application in a docker container, we have prepared here a node.js application container which communicates directly with the griddb-server container.

You can build the image and then run pretty easily: 

```bash
$ docker pull griddbnet/griddb-react-crud
$ docker run --network griddb-net --name griddbnet/griddb-react-crud -p 2828:2828 -d -t griddbnet/griddb-react-crud
```

And now if you navigate to `http://localhost:2828` you will the see full app running.

If you're curious as to how these containers work, you can read this [blog] (https://griddb.net/en/blog/improve-your-devops-with-griddb-server-and-client-docker-containers/).

Full information regarding this nodejs application can be found here: [CRUD Operations with the GERN Stack](https://griddb.net/en/blog/crud-gern-stack/)


### Next Steps

Once you have GridDB running on your machine you can verify by running `docker ps`. To dig further, you can run a gs_stat on your running GridDB Server container: 

```bash
$ docker exec -it griddb-server gs_stat -u admin/admin
```

Using the format above, you can run any commands against your GridDB container. If you want to drop into the bash shell of your GridDB container: 

```bash
$ docker exec -it griddb-server /bin/bash
```

You can also drop directly into the GridDB CLI (GridDB Shell) like so: 

```bash
$ docker exec -it griddb-server gs_sh
```