const e=JSON.parse('{"key":"v-f525e6b6","path":"/project/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%84/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%844.html","title":"黑马点评4","lang":"zh-CN","frontmatter":{"title":"黑马点评4","date":"2023-11-05T00:00:00.000Z","category":["项目实战","黑马点评"],"tag":["项目实战","黑马点评"],"description":"黑马点评4 分布式锁 分布式锁：满足分布式系统或集群模式下多进程可见并且互斥的锁。 分布式锁的核心思想就是让大家都使用同一把锁，只要大家使用的是同一把锁，那么我们就能锁住线程，不让线程进行，让程序串行执行，这就是分布式锁的核心思路 常见的分布式锁有三种 Mysql：mysql本身就带有锁机制，但是由于mysql性能本身一般，所以采用分布式锁的情况下，其实使用mysql作为分布式锁比较少 Redis：redis作为分布式锁是非常常见的一种使用方式，现在企业级开发中基本都使用redis或者zookeeper作为分布式锁，利用setnx这个方法，如果插入key成功，则表示获得到了锁，如果有人插入成功，其他人插入失败则表示无法获得到锁，利用这套逻辑来实现分布式锁 Zookeeper：zookeeper也是企业级开发中较好的一个实现分布式锁的方案。","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/project/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%84/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%844.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"黑马点评4"}],["meta",{"property":"og:description","content":"黑马点评4 分布式锁 分布式锁：满足分布式系统或集群模式下多进程可见并且互斥的锁。 分布式锁的核心思想就是让大家都使用同一把锁，只要大家使用的是同一把锁，那么我们就能锁住线程，不让线程进行，让程序串行执行，这就是分布式锁的核心思路 常见的分布式锁有三种 Mysql：mysql本身就带有锁机制，但是由于mysql性能本身一般，所以采用分布式锁的情况下，其实使用mysql作为分布式锁比较少 Redis：redis作为分布式锁是非常常见的一种使用方式，现在企业级开发中基本都使用redis或者zookeeper作为分布式锁，利用setnx这个方法，如果插入key成功，则表示获得到了锁，如果有人插入成功，其他人插入失败则表示无法获得到锁，利用这套逻辑来实现分布式锁 Zookeeper：zookeeper也是企业级开发中较好的一个实现分布式锁的方案。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:33:06.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"项目实战"}],["meta",{"property":"article:tag","content":"黑马点评"}],["meta",{"property":"article:published_time","content":"2023-11-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:33:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"黑马点评4\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:33:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"分布式锁","slug":"分布式锁","link":"#分布式锁","children":[{"level":3,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":3,"title":"实现分布式锁","slug":"实现分布式锁","link":"#实现分布式锁","children":[]},{"level":3,"title":"Redis分布式锁误删","slug":"redis分布式锁误删","link":"#redis分布式锁误删","children":[]},{"level":3,"title":"分布式锁原子性问题","slug":"分布式锁原子性问题","link":"#分布式锁原子性问题","children":[]},{"level":3,"title":"Lua脚本解决多条命令原子性问题","slug":"lua脚本解决多条命令原子性问题","link":"#lua脚本解决多条命令原子性问题","children":[]}]},{"level":2,"title":"分布式锁Redission","slug":"分布式锁redission","link":"#分布式锁redission","children":[{"level":3,"title":"分布式锁-redission可重入锁原理","slug":"分布式锁-redission可重入锁原理","link":"#分布式锁-redission可重入锁原理","children":[]}]}],"git":{"createdTime":1699536223000,"updatedTime":1714289586000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":11.85,"words":3554},"filePathRelative":"project/黑马点评/黑马点评4.md","localizedDate":"2023年11月5日","excerpt":"<h1> 黑马点评4</h1>\\n<h2> 分布式锁</h2>\\n<p>分布式锁：满足分布式系统或集群模式下多进程可见并且互斥的锁。<br>\\n分布式锁的核心思想就是让大家都使用同一把锁，只要大家使用的是同一把锁，那么我们就能锁住线程，不让线程进行，让程序串行执行，这就是分布式锁的核心思路<br>\\n<img src=\\"https://s2.loli.net/2023/11/05/QJp4NXcwsIyEKd2.webp\\" alt=\\"1653374296906.png\\" loading=\\"lazy\\"><br>\\n常见的分布式锁有三种<br>\\nMysql：mysql本身就带有锁机制，但是由于mysql性能本身一般，所以采用分布式锁的情况下，其实使用mysql作为分布式锁比较少<br>\\nRedis：redis作为分布式锁是非常常见的一种使用方式，现在企业级开发中基本都使用redis或者zookeeper作为分布式锁，利用setnx这个方法，如果插入key成功，则表示获得到了锁，如果有人插入成功，其他人插入失败则表示无法获得到锁，利用这套逻辑来实现分布式锁<br>\\nZookeeper：zookeeper也是企业级开发中较好的一个实现分布式锁的方案。<br>\\n<img src=\\"https://s2.loli.net/2023/11/05/MdpRIe86objO2JU.webp\\" alt=\\"1653382219377.png\\" loading=\\"lazy\\"></p>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{e as data};
