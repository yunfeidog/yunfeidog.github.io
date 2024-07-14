const t=JSON.parse('{"key":"v-121e870c","path":"/java/4-Spring/SpringBoot%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html","title":"SpringBoot文件上传","lang":"zh-CN","frontmatter":{"title":"SpringBoot文件上传","date":"2023-10-08T00:00:00.000Z","category":["Java","SpringBoot"],"tag":["Java","SpringBoot","OSS"],"description":"前端 &lt;form action=\\"/upload\\" method=\\"post\\" enctype=\\"multipart/form-data\\"&gt; 姓名: &lt;input type=\\"text\\" name=\\"username\\"&gt;&lt;br&gt; 年龄: &lt;input type=\\"text\\" name=\\"age\\"&gt;&lt;br&gt; 头像: &lt;input type=\\"file\\" name=\\"image\\"&gt;&lt;br&gt; &lt;input type=\\"submit\\" value=\\"提交\\"&gt; &lt;/form&gt;","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/java/4-Spring/SpringBoot%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"SpringBoot文件上传"}],["meta",{"property":"og:description","content":"前端 &lt;form action=\\"/upload\\" method=\\"post\\" enctype=\\"multipart/form-data\\"&gt; 姓名: &lt;input type=\\"text\\" name=\\"username\\"&gt;&lt;br&gt; 年龄: &lt;input type=\\"text\\" name=\\"age\\"&gt;&lt;br&gt; 头像: &lt;input type=\\"file\\" name=\\"image\\"&gt;&lt;br&gt; &lt;input type=\\"submit\\" value=\\"提交\\"&gt; &lt;/form&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:21:55.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"OSS"}],["meta",{"property":"article:published_time","content":"2023-10-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:21:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot文件上传\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:21:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":2,"title":"后端","slug":"后端","link":"#后端","children":[{"level":3,"title":"本地存储","slug":"本地存储","link":"#本地存储","children":[]},{"level":3,"title":"阿里云OSS存储","slug":"阿里云oss存储","link":"#阿里云oss存储","children":[]}]}],"git":{"createdTime":1698489661000,"updatedTime":1714288915000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"java/4-Spring/SpringBoot文件上传.md","localizedDate":"2023年10月8日","excerpt":"<h2> 前端</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>form</span> <span class=\\"token attr-name\\">action</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>/upload<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">method</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>post<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">enctype</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>multipart/form-data<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  姓名: <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>username<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  年龄: <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>age<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  头像: <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>file<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>image<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>提交<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{t as data};
