# Installation - Ubuntu

We have confirmed the operation on Ubuntu 20.04.4.

## Install with deb

Please download the appropriate package files from the GridDB Github page.

Then, install the package of your target OS.
	
	(Ubuntu)
    $ sudo dpkg -i griddb_-X.X.X-linux.amd64.deb
    
	X.X.X means version

## Install with apt-get

Alternatively you can install GridDB using apt. 

First create the Apt Repo File:

    sudo sh -c 'echo "deb https://www.griddb.net/apt griddb/5.0 multiverse" >>  /etc/apt/sources.list.d/griddb.list'

And then import the key: 

    wget -qO - https://www.griddb.net/apt/griddb.asc | sudo apt-key add -

Then install GridDB:
    
    $ sudo apt update
    $ sudo apt install griddb-meta
    

#### :warning: Note
If you would like to use a previous version of GridDB, you can change the baseurl to match that version (for example, version 4.3) 


With that command, GridDB, the C-client, and the GridDB CLI will be installed onto your machine.

Next, install the GridDB JDBC connector 

    $ sudo wget https://repo1.maven.org/maven2/com/github/griddb/gridstore-jdbc/5.0.0/gridstore-jdbc-5.0.0.jar -O /usr/share/java/gridstore-jdbc.jar

And now, you can start your GridDB server

    $ sudo systemctl start gridstore

To stop your server: 

    $ sudo systemctl stop gridstore

Once your server is running, you can drop into the shell like so: 

    $ sudo su gsadm
    $ gs_sh

If you want to run SQL queries within your shell, you will need to connect to your cluster

    gs> setuser <username> <password>
    gs> sync 127.0.0.1 10040 <clusterName> node0
    gs> connect $<clusterName>

	
### User and directory structure after installation



#### :warning: Note
- When you install this package, a gsadm OS user are created in the OS. Execute the operating command as the gsadm user.   
   Example
   ```
   # su - gsadm
   $ pwd
   /var/lib/gridstore
   ```
- You do not need to set environment variable GS_HOME and GS_LOG. And the place of operating command is set to environment variable PATH.
- There is Java client library (gridstore.jar) on /usr/share/java and a sample on /usr/gridb-XXX/docs/sample/programs.


When the GridDB package is installed, the following users and directory structure will be created.

#### GridDB users and group

The OS group gridstore and user gsadm are created. Use the user gsadm as the operator of GridDB.

| User | Group |  GridDB home directory path |
|---------|-------|---------------------|
| gsadm | gridstore | /var/lib/gridstore |

The following environment variables are defined for user gsadm (in the .bash_profile file):

| Environment variables | Value | Meaning |
|---------|----|------|
| GS_HOME | /var/lib/gridstore | User gsadm/GridDB home directory |
| GS_LOG | /var/lib/gridstore/log | The output directory of the event log file of a node |



#### Directory hierarchy

The following two directories are created: GridDB home directory which contains files such as a node definition file and database files, the installation directory which contains the installed files.

###### GridDB home directory
```
/var/lib/gridstore/                      #GridDB home directory
                   conf/                 # Definition file directory
                        gs_cluster.json  #Cluster definition file
                        gs_node.json     #Node definition file
                        password         #User definition file
                   data/                 # Database file directory
                   log/                  # Log directory
```

###### Installation directory
```
Installation directory
            bin/                        # Operation command, module directory
            conf/                       #Definition file directory
                gs_cluster.json         # Custer definition file
                gs_node.json            #Node definition file
                password                #User definition file
            3rd_party/                  
            docs/
                manual/
                sample/
```

## Environmental settings


## Starting/stopping

Operate as the gsadm user. Other than that, it is the same as "Start / Stop" in "[When using source code]".

## Build/execution method

An example on how to build and execute a program is as shown.

[For Java]

1. Setting environment variables
2. Copy the sample program to the gsSample directory
3. Build
4. Run

```
$ export CLASSPATH=${CLASSPATH}:/usr/share/java/gridstore.jar:.
$ mkdir gsSample
$ cp /usr/gridstore-X.X.X/docs/sample/program/Sample1.java gsSample/.
$ javac gsSample/Sample1.java
$ java gsSample/Sample1 239.0.0.1 31999 setup_cluster_name admin your_password
```


## GridDB uninstallation

If you no longer need GridDB, uninstall the package. Execute the following procedure with root authority.

[Example]

    (CentOS)
    $ sudo apt remove griddb

#### :warning: Note
- Files under the GridDB home directory such as definition files and data files will not be uninstalled. If you do not need it, delete it manually.

---
