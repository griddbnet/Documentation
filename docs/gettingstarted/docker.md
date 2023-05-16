# Installation - Docker

## Dockerhub

You can pull the latest ready-made images of the GridDB Server directly from [dockerhub](https://hub.docker.com/r/griddb/griddb)

To do so: 

```bash
$ docker pull griddb/griddb
```

Once you have pulled the image, you can run GridDB on your machine using Docker. An example command: 

```bash
$ docker run --name griddb_server --network="host" -e GRIDDB_CLUSTER_NAME=myCluster -e GRIDDB_PASSWORD=admin -e NOTIFICATION_MEMBER=1 griddb/griddb -d
```

This will run the latest GridDB from the official dockerhub repoistory, using the host machine's network, with cluster and password specified. The notification member flag will make GridDB run in Fixed-list (similar to running GridDB using systemd), you can read more on Dockerhub.

## Video Instructions

If you prefer to watch via video:

<p class="iframe-container">
<iframe src="https://www.youtube.com/embed/P52o9iuXOVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p> 