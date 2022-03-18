# Java

<p class="iframe-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/TMQAZrRHFuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

First, the required import statements:

``` java
import com.toshiba.mwcloud.gs.Collection;
import com.toshiba.mwcloud.gs.GSException;
import com.toshiba.mwcloud.gs.GridStore;
import com.toshiba.mwcloud.gs.GridStoreFactory;
import com.toshiba.mwcloud.gs.Query;
import com.toshiba.mwcloud.gs.RowKey;
import com.toshiba.mwcloud.gs.RowSet;
```
The container schema is defined as a static Class in Java.
``` java
static class Person {
	@RowKey String name;
	int age;
}
static class HeartRate {
	@RowKey Date ts;
	int heartRate;
        String activity;
}
```
To connect to GridDB, you create a Properties instance with the particulars of your GridDB installation.
``` java
Properties props = new Properties();
props.setProperty("notificationAddress", "239.0.0.1");
props.setProperty("notificationPort", "31999");
props.setProperty("clusterName", "defaultCluster");
props.setProperty("user", "admin");
props.setProperty("password", "admin");
GridStore store = GridStoreFactory.getInstance().getGridStore(props);
```
To perform queries or write records, you first need to get the container:
``` java
Collection<String, Person> people = store.putCollection("PEOPLE", Person.class);
```
Querying is similar to SQL/JDBC drivers.
``` java
Query<Person< query = col.query("select * where name = 'John'");
RowSet<Person> rs = query.fetch(false);
while (rs.hasNext()) {
	// Update the searched Row
	Person person1 = rs.next();
        System.out.println("Name: "+ person1.name +" Age: "+ person1.age)
}
```
Writing is simple...
``` java
HeartRate hr = new HeartRate();
hr.ts = new Date();
hr.heartrate = 60;
hr.activity = "resting";
TimeSeries<HeartRate> heartRate = store.putTimeSeries("HR_"+person1.name, HeartRate.class);
heartRate.put(hr);
```
Updating is simple:
``` java
Query<Person> query = col.query("select * where name = 'John'");
RowSet<Person> rs = query.fetch(true);
while (rs.hasNext()) {
	// Update the searched Row
	Person person1 = rs.next();
        person1.age++;
        rs.update(person1);
}
```
To compile use the following snippet:
``` bash
$ cd gsSample/
$ export CLASSPATH=$CLASSPATH:/usr/share/java/gridstore.jar
$ javac Sample1.java
$ cd .. && java gsSample/Sample1
```
Alternatively, you can check out how to use maven with GridDB [here](https://griddb.net/en/blog/using-maven-to-develop-griddb-applications/).