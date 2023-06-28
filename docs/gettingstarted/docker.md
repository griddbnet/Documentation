# Installation - Docker

## Dockerhub

You can pull the latest ready-made images of the GridDB Server directly from [dockerhub](https://hub.docker.com/r/griddb/griddb)

To do so: 

```bash
$ docker pull griddb/griddb
```

Once you have pulled the image, you can run GridDB on your machine using Docker. An example command: 

```bash
$ docker run --name griddb_server -p 10001:10001 -e GRIDDB_CLUSTER_NAME=myCluster -e GRIDDB_PASSWORD=admin -e NOTIFICATION_MEMBER=1 griddb/griddb -d
```

This will run the latest GridDB from the official dockerhub repoistory with cluster and password specified and with the notification member set to true, which will make GridDB run in Fixed-list (similar to running GridDB using systemd), you can read more on the Dockerhub page linked above.

### Next Steps

Once you have GridDB running on your machine you can verify by running `docker ps`. To dig further, you can run a gs_stat on your running GridDB Server container: 

```bash
$ docker exec -it griddb_server gs_stat -u admin/admin
```

Using the format above, you can run any commands against your GridDB container. If you want to drop into the bash shell of your GridDB container: 

```bash
$ docker exec -it griddb_server /bin/bash
```

## Video Instructions

If you prefer to watch via video:

<p class="iframe-container">
<iframe src="https://www.youtube.com/embed/P52o9iuXOVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p> 