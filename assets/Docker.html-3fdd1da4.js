const e=JSON.parse('{"key":"v-728648fd","path":"/posts/%E6%9C%8D%E5%8A%A1%E5%99%A8/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"title":"Docker","date":"2023-10-07T00:00:00.000Z","category":["Docker"],"tag":["Docker"],"description":"Docker 仓库：https://hub.docker.com/ Centos安装Docker 卸载旧版本的Docker yum remove docker \\\\ docker-client \\\\ docker-client-latest \\\\ docker-common \\\\ docker-latest \\\\ docker-latest-logrotate \\\\ docker-logrotate \\\\ docker-selinux \\\\ docker-engine-selinux \\\\ docker-engine \\\\ docker-ce","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/posts/%E6%9C%8D%E5%8A%A1%E5%99%A8/Docker.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 仓库：https://hub.docker.com/ Centos安装Docker 卸载旧版本的Docker yum remove docker \\\\ docker-client \\\\ docker-client-latest \\\\ docker-common \\\\ docker-latest \\\\ docker-latest-logrotate \\\\ docker-logrotate \\\\ docker-selinux \\\\ docker-engine-selinux \\\\ docker-engine \\\\ docker-ce"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-14T07:40:06.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2023-10-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-14T07:40:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-14T07:40:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"Centos安装Docker","slug":"centos安装docker","link":"#centos安装docker","children":[]},{"level":2,"title":"Docker启动相关","slug":"docker启动相关","link":"#docker启动相关","children":[]},{"level":2,"title":"Docker基本操作","slug":"docker基本操作","link":"#docker基本操作","children":[{"level":3,"title":"镜像相关","slug":"镜像相关","link":"#镜像相关","children":[]},{"level":3,"title":"容器相关","slug":"容器相关","link":"#容器相关","children":[]},{"level":3,"title":"挂载数据卷","slug":"挂载数据卷","link":"#挂载数据卷","children":[]},{"level":3,"title":"直接挂载","slug":"直接挂载","link":"#直接挂载","children":[]}]},{"level":2,"title":"Dockerfile自定义镜像","slug":"dockerfile自定义镜像","link":"#dockerfile自定义镜像","children":[]},{"level":2,"title":"Docker-Compose","slug":"docker-compose","link":"#docker-compose","children":[{"level":3,"title":"DockerCompose安装","slug":"dockercompose安装","link":"#dockercompose安装","children":[]},{"level":3,"title":"部署微服务","slug":"部署微服务","link":"#部署微服务","children":[]}]},{"level":2,"title":"本地连接服务器docker","slug":"本地连接服务器docker","link":"#本地连接服务器docker","children":[]}],"git":{"createdTime":1696679334000,"updatedTime":1720942806000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":3}]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"posts/服务器/Docker.md","localizedDate":"2023年10月7日","excerpt":"<h1> Docker</h1>\\n<p>仓库：<a href=\\"https://hub.docker.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://hub.docker.com/</a></p>\\n<h2> Centos安装Docker</h2>\\n<ol>\\n<li>卸载旧版本的Docker</li>\\n</ol>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>yum remove <span class=\\"token function\\">docker</span> <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-client <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-client-latest <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-common <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-latest <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-latest-logrotate <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-logrotate <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-selinux <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-engine-selinux <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-engine <span class=\\"token punctuation\\">\\\\</span>\\n                  docker-ce\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{e as data};