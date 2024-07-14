const e=JSON.parse('{"key":"v-d3d527b8","path":"/project/ikun%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/ikun%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F%E4%BC%98%E5%8C%96.html","title":"ikun伙伴匹配系统优化","lang":"zh-CN","frontmatter":{"title":"ikun伙伴匹配系统优化","date":"2023-11-01T00:00:00.000Z","category":["项目实战","ikun伙伴匹配系统"],"tag":["项目实战","ikun伙伴匹配系统"],"description":"ikun伙伴匹配系统优化 以下优化均是在用户量为100万的情况下进行： 分布式Session登录 ⽤户登录：使⽤ Redis 实现分布式 Session，解决集群间登录态同步问题；并使⽤ Hash 代替 String 来存储⽤户信息，节约了 xx% 的内存并便于单字段的修改。 节省内存的原因是不⽤保存序列化对象信息或者 JSON 的⼀些额外字符串 使⽤ Easy Excel 读取收集来的基础⽤户信息，并通过⾃定义线程池 + CompletableFuture 并 发编程提⾼批量导⼊数据库的性能。实测导⼊ 100 万⾏的时间从 xx 秒缩短⾄ xx 秒。（需要 ⾃⼰实际测试对⽐数据）","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/project/ikun%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/ikun%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"ikun伙伴匹配系统优化"}],["meta",{"property":"og:description","content":"ikun伙伴匹配系统优化 以下优化均是在用户量为100万的情况下进行： 分布式Session登录 ⽤户登录：使⽤ Redis 实现分布式 Session，解决集群间登录态同步问题；并使⽤ Hash 代替 String 来存储⽤户信息，节约了 xx% 的内存并便于单字段的修改。 节省内存的原因是不⽤保存序列化对象信息或者 JSON 的⼀些额外字符串 使⽤ Easy Excel 读取收集来的基础⽤户信息，并通过⾃定义线程池 + CompletableFuture 并 发编程提⾼批量导⼊数据库的性能。实测导⼊ 100 万⾏的时间从 xx 秒缩短⾄ xx 秒。（需要 ⾃⼰实际测试对⽐数据）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:54:15.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"项目实战"}],["meta",{"property":"article:tag","content":"ikun伙伴匹配系统"}],["meta",{"property":"article:published_time","content":"2023-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:54:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ikun伙伴匹配系统优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:54:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"分布式Session登录","slug":"分布式session登录","link":"#分布式session登录","children":[]},{"level":2,"title":"Redis缓存首页高频访问用户","slug":"redis缓存首页高频访问用户","link":"#redis缓存首页高频访问用户","children":[]},{"level":2,"title":"定时任务缓存预热","slug":"定时任务缓存预热","link":"#定时任务缓存预热","children":[]},{"level":2,"title":"加入队伍锁","slug":"加入队伍锁","link":"#加入队伍锁","children":[]},{"level":2,"title":"编辑距离算法优化","slug":"编辑距离算法优化","link":"#编辑距离算法优化","children":[]}],"git":{"createdTime":1699536223000,"updatedTime":1714290855000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":3}]},"readingTime":{"minutes":5.06,"words":1519},"filePathRelative":"project/ikun伙伴匹配系统/ikun伙伴匹配系统优化.md","localizedDate":"2023年11月1日","excerpt":"<h1> ikun伙伴匹配系统优化</h1>\\n<p>以下优化均是在用户量为100万的情况下进行：</p>\\n<h2> 分布式Session登录</h2>\\n<p>⽤户登录：使⽤ Redis 实现分布式 Session，解决集群间登录态同步问题；并使⽤ Hash 代替<br>\\nString 来存储⽤户信息，节约了 xx% 的内存并便于单字段的修改。</p>\\n<blockquote>\\n<p>节省内存的原因是不⽤保存序列化对象信息或者 JSON 的⼀些额外字符串</p>\\n</blockquote>\\n<p>使⽤ Easy Excel 读取收集来的基础⽤户信息，并通过⾃定义线程池 + CompletableFuture 并<br>\\n发编程提⾼批量导⼊数据库的性能。实测导⼊ 100 万⾏的时间从 xx 秒缩短⾄ xx 秒。（需要<br>\\n⾃⼰实际测试对⽐数据）</p>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{e as data};
