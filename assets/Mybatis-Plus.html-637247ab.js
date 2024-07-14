const t=JSON.parse('{"key":"v-f4227fcc","path":"/java/3-JavaWeb/Mybatis-Plus.html","title":"Mybatis-Plus","lang":"zh-CN","frontmatter":{"title":"Mybatis-Plus","date":"2023-11-17T00:00:00.000Z","category":["Java","Mybatis-plus"],"tag":["Java","Mybatis-Plus"],"description":"Mybatis-Plus 官网：Mybatis-plus官网 快速入门 引入依赖，替换掉mybatis &lt;!-- &lt;dependency&gt;--&gt; &lt;!-- &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;--&gt; &lt;!-- &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;--&gt; &lt;!-- &lt;version&gt;2.3.1&lt;/version&gt;--&gt; &lt;!-- &lt;/dependency&gt;--&gt; &lt;dependency&gt; &lt;groupId&gt;com.baomidou&lt;/groupId&gt; &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt; &lt;version&gt;3.5.3.2&lt;/version&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/java/3-JavaWeb/Mybatis-Plus.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"Mybatis-Plus"}],["meta",{"property":"og:description","content":"Mybatis-Plus 官网：Mybatis-plus官网 快速入门 引入依赖，替换掉mybatis &lt;!-- &lt;dependency&gt;--&gt; &lt;!-- &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;--&gt; &lt;!-- &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;--&gt; &lt;!-- &lt;version&gt;2.3.1&lt;/version&gt;--&gt; &lt;!-- &lt;/dependency&gt;--&gt; &lt;dependency&gt; &lt;groupId&gt;com.baomidou&lt;/groupId&gt; &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt; &lt;version&gt;3.5.3.2&lt;/version&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:21:55.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Mybatis-Plus"}],["meta",{"property":"article:published_time","content":"2023-11-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:21:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis-Plus\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:21:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[{"level":3,"title":"常见注解","slug":"常见注解","link":"#常见注解","children":[]},{"level":3,"title":"常用配置","slug":"常用配置","link":"#常用配置","children":[]}]},{"level":2,"title":"核心功能","slug":"核心功能","link":"#核心功能","children":[{"level":3,"title":"条件构造器","slug":"条件构造器","link":"#条件构造器","children":[]},{"level":3,"title":"自定义SQL","slug":"自定义sql","link":"#自定义sql","children":[]},{"level":3,"title":"IService接口","slug":"iservice接口","link":"#iservice接口","children":[]}]},{"level":2,"title":"扩展功能","slug":"扩展功能","link":"#扩展功能","children":[{"level":3,"title":"代码生成器","slug":"代码生成器","link":"#代码生成器","children":[]},{"level":3,"title":"Db静态工具","slug":"db静态工具","link":"#db静态工具","children":[]},{"level":3,"title":"逻辑删除","slug":"逻辑删除","link":"#逻辑删除","children":[]},{"level":3,"title":"枚举处理器","slug":"枚举处理器","link":"#枚举处理器","children":[]},{"level":3,"title":"JSON类型处理器","slug":"json类型处理器","link":"#json类型处理器","children":[]}]},{"level":2,"title":"插件功能","slug":"插件功能","link":"#插件功能","children":[{"level":3,"title":"分页插件","slug":"分页插件","link":"#分页插件","children":[]},{"level":3,"title":"通用分页实体","slug":"通用分页实体","link":"#通用分页实体","children":[]}]}],"git":{"createdTime":1700968577000,"updatedTime":1714288915000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":16.2,"words":4859},"filePathRelative":"java/3-JavaWeb/Mybatis-Plus.md","localizedDate":"2023年11月17日","excerpt":"<h1> Mybatis-Plus</h1>\\n<p>官网：<a href=\\"https://baomidou.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Mybatis-plus官网</a></p>\\n<h2> 快速入门</h2>\\n<p>引入依赖，替换掉mybatis</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!--        &lt;dependency&gt;--&gt;</span>\\n<span class=\\"token comment\\">&lt;!--            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;--&gt;</span>\\n<span class=\\"token comment\\">&lt;!--            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;--&gt;</span>\\n<span class=\\"token comment\\">&lt;!--            &lt;version&gt;2.3.1&lt;/version&gt;--&gt;</span>\\n<span class=\\"token comment\\">&lt;!--        &lt;/dependency&gt;--&gt;</span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>com.baomidou<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>mybatis-plus-boot-starter<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>3.5.3.2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{t as data};