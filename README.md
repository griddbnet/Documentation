# GridDBnet OSS Documentation
Welcome to GridDBnet OSS Documentation. GridDB is an open source time-series database optimized for IoT and Big Data System. You can find the latest documentation at [docs.griddb.net](https://docs.griddb.net). To contribute, please fork the repository and make a pull request.

## Getting Started
This documentation is generated using [vuepress](https://github.com/vuejs/vuepress). Please check their repository for more detail.
To get started, run this docs locally by following the steps below:

- Clone repository
```
git clone https://github.com/griddbnet/Documentation.git
```

- Install local dependency
``` sh
cd docs && npm install -D vuepress
```

- Run in dev mode
``` sh
npm run dev
```

- To generate static assets
``` sh
npm run build
```

To build the previous versions, e.g. GridDB v4.5, look for the specific version from the branch and build the doc directly on that branch.

## Markdown Guide

[Vuepress Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html)

### Custom Style
To embed youtube, use the iframe-container:
```markdown
<p class="iframe-container">
	<iframe src="youtube URL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
```

Custom containers:

* Notes
```
::: tip Notes
This is a note
:::
```

* Attention
```
::: warning Attention
This is Attention
:::
```




