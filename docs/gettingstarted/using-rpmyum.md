# Using RPM/YUM

We have confirmed the operation on CentOS 8.

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

## Install with RPM

Install the package of your target OS.
	
	(CentOS)
    $ sudo rpm -ivh griddb_nosql-X.X.X-linux.x86_64.rpm
    
	X.X.X means version

## Install with YUM

Alternatively you can install GridDB using YUM. 

First create the Yum Repo File:

    sudo cat > /etc/yum.repos.d/griddb.repo << EOF
    [griddb]
    name=GridDB.net
    baseurl=https://griddb.net/yum/el7/5.0/
    enabled=1
    gpgcheck=1
    gpgkey=https://griddb.net/yum/RPM-GPG-KEY-GridDB.txt
    EOF

Then install GridDB:
    
    $ sudo yum update
    $ sudo yum -y install griddb-meta
    

With that command, GridDB, the C-client, and the GridDB CLI will be installed onto your machine.

You can drop into the shell like so: 

    $ sudo su gsadm
    $ gs_sh

#### :warning: Note
If you would like to use a previous version of GridDB, you can change the baseurl to match that version (for example, version 4.3) 

	
### User and directory structure after installation

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

[When using source code ](using-source-code.md)the "[environmental setting](using-source-code/#environmental-settings)" is the same。

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
    $ sudo rpm -e griddb_nosql

#### :warning: Note
- Files under the GridDB home directory such as definition files and data files will not be uninstalled. If you do not need it, delete it manually.

---
