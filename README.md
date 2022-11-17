## Local (dev) build

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

- To generate current version + older versions in static assets (usable only from main branch)
``` sh 
$ ./build-docs.sh
```
All contents will be available in docs/.vuepress/dist

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




