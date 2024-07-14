const n=JSON.parse('{"key":"v-2a2143f8","path":"/project/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%E9%A1%B9%E7%9B%AE3.html","title":"用户中心3","lang":"zh-CN","frontmatter":{"title":"用户中心3","date":"2023-10-17T00:00:00.000Z","category":["项目实战","用户中心"],"tag":["项目实战","用户中心"],"description":"用户中心 用户注销 后端代码： @PostMapping(\\"/logout\\") public Integer logout(HttpServletRequest request) { if (request == null) { return null; } return userService.logout(request); } @Override public Integer logout(HttpServletRequest request) { request.getSession().removeAttribute(UserConstant.USER_LOGIN_STATE); return 1; }","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/project/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83/%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%E9%A1%B9%E7%9B%AE3.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"用户中心3"}],["meta",{"property":"og:description","content":"用户中心 用户注销 后端代码： @PostMapping(\\"/logout\\") public Integer logout(HttpServletRequest request) { if (request == null) { return null; } return userService.logout(request); } @Override public Integer logout(HttpServletRequest request) { request.getSession().removeAttribute(UserConstant.USER_LOGIN_STATE); return 1; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:33:06.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"项目实战"}],["meta",{"property":"article:tag","content":"用户中心"}],["meta",{"property":"article:published_time","content":"2023-10-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:33:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户中心3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T07:33:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"用户注销","slug":"用户注销","link":"#用户注销","children":[]},{"level":2,"title":"后端优化","slug":"后端优化","link":"#后端优化","children":[{"level":3,"title":"封装通用返回对象","slug":"封装通用返回对象","link":"#封装通用返回对象","children":[]},{"level":3,"title":"封装全局异常处理","slug":"封装全局异常处理","link":"#封装全局异常处理","children":[]}]},{"level":2,"title":"前端优化","slug":"前端优化","link":"#前端优化","children":[{"level":3,"title":"全局响应处理","slug":"全局响应处理","link":"#全局响应处理","children":[]}]}],"git":{"createdTime":1697633955000,"updatedTime":1714289586000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":3}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"project/用户中心/用户中心项目3.md","localizedDate":"2023年10月17日","excerpt":"<h1> 用户中心</h1>\\n<h2> 用户注销</h2>\\n<p>后端代码：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>    <span class=\\"token annotation punctuation\\">@PostMapping</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/logout\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Integer</span> <span class=\\"token function\\">logout</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>request <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> userService<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">logout</span><span class=\\"token punctuation\\">(</span>request<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Integer</span> <span class=\\"token function\\">logout</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        request<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getSession</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">removeAttribute</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">UserConstant</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">USER_LOGIN_STATE</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{n as data};
