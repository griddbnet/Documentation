## Local (dev) build

1. Clone repository

* GitHub Desktop: (x-github-client://openRepo/https://github.com/griddbnet/Documentation)
* HTTPS: https://github.com/griddbnet/Documentation.git
* SSH : git@github.com:griddbnet/Documentation.git

2. Install local dependency
``` sh
yarn add -D vuepress # OR npm install -D vuepress
```

3. Run in dev mode
``` sh
cd docs && yarn dev # OR cd docs && npm run dev
```

4. To generate static assets
``` sh
cd docs && yarn build # OR cd docs && npm run build
```

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




