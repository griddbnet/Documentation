# Interactive Webshell
To use the GridDB Shell, please click on the box below. You can get a quick rundown of using the GriDB Web Shell from the [GitHub](https://github.com/griddb/cli/blob/main/Specification_en.md) and from this [blog](https://griddb.net/en/blog/griddb-community-edition-v4-6-new-features/). 

The web shell has been preloaded with the NYC Crime Complaints from [The NYC Open Data project](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i). This previous [blog](https://griddb.net/en/blog/geospatial-analysis-of-nyc-crime-data-with-griddb/) has more info on what is available for querying and what the schema looks like. 

The container for this dataset is called `Cereal`

You can open up a fully interactive webshell using this <a 
onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" 
href="https://demo.griddb.net">link </a>

Some commands: 

- `showcontainer Cereal`
- `tql COMPLAINTS select *;`
- `sql select * from Cereal;`
    - as a follow up: `get 10`;

<div style="display:flex; justify-content:space-around;">
<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="600"
    height="400"
    src="https://demo.griddb.net">
</iframe>
</div>


Remember, the GridDB web shell supports all SQL commands, so you can do something like `sql select * from Cereal ORDER BY CALORIES DESC;`

You can also do an aggregate call: `sql SELECT AVG(sugars) from Cereal;`

## Insert

You can easily insert data into a timeseries container like so: 

`createtimeseries <yourContainerName> NO colTS timestamp`
and 
`createcollection <yourContainerName> col01 string`

and then

`showcontainer <yourContainerName>`
