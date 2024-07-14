const e=JSON.parse('{"key":"v-9af92096","path":"/java/5-%E4%B8%AD%E9%97%B4%E4%BB%B6/Redis%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B.html","title":"SpringBoot使用Redis","lang":"zh-CN","frontmatter":{"title":"SpringBoot使用Redis","date":"2023-11-02T00:00:00.000Z","category":["Java","中间件","Redis"],"tag":["Java","中间件","Redis"],"description":"Redis基础教程 Redis介绍 官方网站：https://redis.io/ Redis是一种键值型的NoSql数据库，这里有两个关键字： 键值型：Redis中存储的数据都是以key、value对的形式存储 NoSql：相对于传统关系型数据库而言，有很大差异的一种数据库。（not only sql,非关系型数据库） NoSql则对数据库格式没有严格约束，往往形式松散，自由。 对比传统数据库： 关系型数据库（RDBMS）和非关系型数据库（NoSQL数据库）是两种不同类型的数据库管理系统，它们在数据存储、数据模型和适用场景等方面存在显著的区别。","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/java/5-%E4%B8%AD%E9%97%B4%E4%BB%B6/Redis%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"SpringBoot使用Redis"}],["meta",{"property":"og:description","content":"Redis基础教程 Redis介绍 官方网站：https://redis.io/ Redis是一种键值型的NoSql数据库，这里有两个关键字： 键值型：Redis中存储的数据都是以key、value对的形式存储 NoSql：相对于传统关系型数据库而言，有很大差异的一种数据库。（not only sql,非关系型数据库） NoSql则对数据库格式没有严格约束，往往形式松散，自由。 对比传统数据库： 关系型数据库（RDBMS）和非关系型数据库（NoSQL数据库）是两种不同类型的数据库管理系统，它们在数据存储、数据模型和适用场景等方面存在显著的区别。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:21:55.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2023-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:21:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot使用Redis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:21:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"Redis介绍","slug":"redis介绍","link":"#redis介绍","children":[]},{"level":2,"title":"Macos安装Redis","slug":"macos安装redis","link":"#macos安装redis","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"启动问题","slug":"启动问题","link":"#启动问题","children":[]},{"level":3,"title":"客户端工具","slug":"客户端工具","link":"#客户端工具","children":[]}]},{"level":2,"title":"Redis中的数据结构","slug":"redis中的数据结构","link":"#redis中的数据结构","children":[{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"哈希","slug":"哈希","link":"#哈希","children":[]},{"level":3,"title":"列表","slug":"列表","link":"#列表","children":[]},{"level":3,"title":"集合","slug":"集合","link":"#集合","children":[]},{"level":3,"title":"有序集合","slug":"有序集合","link":"#有序集合","children":[]},{"level":3,"title":"通用命令","slug":"通用命令","link":"#通用命令","children":[]}]},{"level":2,"title":"Redis的Java客户端Jedis","slug":"redis的java客户端jedis","link":"#redis的java客户端jedis","children":[{"level":3,"title":"入门","slug":"入门","link":"#入门","children":[]},{"level":3,"title":"连接池","slug":"连接池","link":"#连接池","children":[]}]},{"level":2,"title":"SpringBoot中使用Redis","slug":"springboot中使用redis","link":"#springboot中使用redis","children":[{"level":3,"title":"入门","slug":"入门-1","link":"#入门-1","children":[]},{"level":3,"title":"自定义序列化方式","slug":"自定义序列化方式","link":"#自定义序列化方式","children":[]},{"level":3,"title":"使用StringRedisTemplate","slug":"使用stringredistemplate","link":"#使用stringredistemplate","children":[]}]}],"git":{"createdTime":1699015325000,"updatedTime":1714288915000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":9.5,"words":2850},"filePathRelative":"java/5-中间件/Redis基础教程.md","localizedDate":"2023年11月2日","excerpt":"<h1> Redis基础教程</h1>\\n<h2> Redis介绍</h2>\\n<p>官方网站：<a href=\\"https://redis.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://redis.io/</a><br>\\nRedis是一种键值型的NoSql数据库，这里有两个关键字：</p>\\n<ul>\\n<li>键值型：Redis中存储的数据都是以key、value对的形式存储</li>\\n<li>NoSql：相对于传统关系型数据库而言，有很大差异的一种数据库。（not only sql,非关系型数据库）</li>\\n</ul>\\n<p>NoSql则对数据库格式没有严格约束，往往形式松散，自由。<br>\\n对比传统数据库：<br>\\n<img src=\\"https://s2.loli.net/2023/11/02/bcEjS2Cdy5fRAKM.webp\\" alt=\\"kZP40dQ.png\\" loading=\\"lazy\\"><br>\\n关系型数据库（RDBMS）和非关系型数据库（NoSQL数据库）是两种不同类型的数据库管理系统，它们在数据存储、数据模型和适用场景等方面存在显著的区别。</p>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{e as data};
