# Node.JS

[Driver](http://griddb.org/nodejs_client/NodejsAPIReference.htm)

If you prefer to watch a video, you can take a look here:

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/9V780gm28aQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Installation
The GridDB c_client (a preqrequisite to using the Nodejs package) can be found here: [https://github.com/griddb/c_client](https://github.com/griddb/c_client). As with our Node.js package, the c_client too has been simplified. RPM can be downloaded from [here](https://github.com/griddb/c_client/releases). So to get started simply `wget` the latest RPM and install.

``` bash
$ wget \
https://github.com/griddb/c_client/releases/download/v4.2.0/griddb_c_client-4.2.0-1.linux.x86_64.rpm
```
then we need to actually install the rpm
``` bash
$ sudo rpm -ivh griddb_c_client-4.2.0-1.linux.x86_64.rpm
```
and now the c_client is installed and ready in your `/usr/` directory. That was easy!
Now that the node package manager installs our Nodejs client for us, it will also be a very easy install. If you're starting from scratch, just make a new dir and `npm init`. This should handle the basic scaffolding for your project and make a `node_modules` directory. Once it's done, it's simply a matter of:
``` bash
$ npm i griddb_node
```
and now you've got the GridDB Node.js client installed and ready for use.
One small caveat, though, is that the client requires Node.js version 10. If you're using a different version for a different project or something more bleeding edge, I would recommend you to use nvm. The Node Version Manager is a bash script to help you manage several versions of Node.js. Since we currently need version 10, for example, we would:
``` bash
$ nvm install 10.16
```
and then
``` bash
$ nvm use 10.16
```
simply confirm you did it right:
``` bash
$ node -v
 v10.16.0 
```
perfect.
And now we're almost ready to begin using our favorite language `JavaScript` with GridDB. The last step is to point our `LD_LIBRARY` to our c_client installation.
``` bash
$ export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/usr/griddb_c_client-4.2-0/lib/
```
And we can now officially run JavaScript with our GridDB cluster.

## Usage
To use the client, simply import the griddb library into your program
```
const griddb = require('griddb_node');
const fs = require('fs');
```
To define your actual cluster, it looks like this:
```
const factory = griddb.StoreFactory.getInstance();
        const store = factory.getStore({
            "host": '239.0.0.1',
            "port": 31999,
            "clusterName": "defaultCluster",
            "username": "admin",
            "password": "admin"
        });
```
Making containers and defining their schema is easy too (collection container):
```
const colConInfo = new griddb.ContainerInfo({
            'name': "Person",
            'columnInfoList': [
                ["name", griddb.Type.STRING],
                ["age", griddb.Type.INTEGER],
            ],
            'type': griddb.ContainerType.COLLECTION, 'rowKey': true
        });
```
Time Series container:
```
var timeConInfo = new griddb.ContainerInfo({
        'name': "HeartRate",
        'columnInfoList': [
            ["timestamp", griddb.Type.TIMESTAMP],
            ["heartRate", griddb.Type.INTEGER],
            ["activity", griddb.Type.STRING]
        ],
        'type': griddb.ContainerType.TIME_SERIES, 'rowKey': true
    });
```
And then to actually put data into your container (and then query), it looks like this:
```
let time_series;
        store.putContainer(timeConInfo, false)
            .then(ts => {
                time_series = ts;
                return ts.put([new Date(), 60, 'resting']);
            })
            .then(() => {
                query = time_series.query("select * where timestamp > TIMESTAMPADD(HOUR, NOW(), -6)");
                return query.fetch();
            })
            .then(rowset => {
                while (rowset.hasNext()) {
                    var row = rowset.next();
                    console.log("Time =", row[0], "Heart Rate =", row[1].toString(), "Activity =", row[2]);
                }
            })
            .catch(err => {
                if (err.constructor.name == "GSException") {
                    for (var i = 0; i < err.getErrorStackSize(); i++) {
                        console.log("[", i, "]");
                        console.log(err.getErrorCode(i));
                        console.log(err.getMessage(i));
                    }
                } else {
                    console.log(err);
                }
            });
```
## Conclusion
Now that the entire process of getting up and running with Node.js has been streamlined a bit, we hope to see some more projects out there utilizing Node.js. If you would like to see the entire source code used in the usage section, please download the source file from [here](https://griddb.net/en/download/26126/).