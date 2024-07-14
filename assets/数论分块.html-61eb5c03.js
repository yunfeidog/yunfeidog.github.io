const s=JSON.parse('{"key":"v-b3133764","path":"/algorithm/4-%E6%95%B0%E5%AD%A6%E7%9F%A5%E8%AF%86/%E6%95%B0%E8%AE%BA%E5%88%86%E5%9D%97.html","title":"数论分块","lang":"zh-CN","frontmatter":{"title":"数论分块","date":"2023-07-10T23:04:42.000Z","category":["Algorithm","数学知识"],"tag":["Algorithm","数学知识"],"description":"整数分块 求∑i=1n⌊ni⌋\\\\sum_{i=1}^{n}\\\\left\\\\lfloor\\\\frac{n}{i}\\\\right\\\\rfloor∑i=1n​⌊in​⌋","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/algorithm/4-%E6%95%B0%E5%AD%A6%E7%9F%A5%E8%AF%86/%E6%95%B0%E8%AE%BA%E5%88%86%E5%9D%97.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"数论分块"}],["meta",{"property":"og:description","content":"整数分块 求∑i=1n⌊ni⌋\\\\sum_{i=1}^{n}\\\\left\\\\lfloor\\\\frac{n}{i}\\\\right\\\\rfloor∑i=1n​⌊in​⌋"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:54:15.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Algorithm"}],["meta",{"property":"article:tag","content":"数学知识"}],["meta",{"property":"article:published_time","content":"2023-07-10T23:04:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:54:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数论分块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-10T23:04:42.000Z\\",\\"dateModified\\":\\"2024-04-28T07:54:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"性质1:分块的块数<=","slug":"性质1-分块的块数","link":"#性质1-分块的块数","children":[]},{"level":2,"title":"性质2:l所在块的右端点为","slug":"性质2-l所在块的右端点为","link":"#性质2-l所在块的右端点为","children":[]},{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"输入格式","slug":"输入格式","link":"#输入格式","children":[]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"样例 #1","slug":"样例-1","link":"#样例-1","children":[{"level":3,"title":"样例输入 #1","slug":"样例输入-1","link":"#样例输入-1","children":[]},{"level":3,"title":"样例输出 #1","slug":"样例输出-1","link":"#样例输出-1","children":[]}]},{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]},{"level":2,"title":"题面翻译","slug":"题面翻译","link":"#题面翻译","children":[]},{"level":2,"title":"题目描述","slug":"题目描述-1","link":"#题目描述-1","children":[]},{"level":2,"title":"输入格式","slug":"输入格式-1","link":"#输入格式-1","children":[]},{"level":2,"title":"输出格式","slug":"输出格式-1","link":"#输出格式-1","children":[]},{"level":2,"title":"样例 #1","slug":"样例-1-1","link":"#样例-1-1","children":[{"level":3,"title":"样例输入 #1","slug":"样例输入-1-1","link":"#样例输入-1-1","children":[]},{"level":3,"title":"样例输出 #1","slug":"样例输出-1-1","link":"#样例输出-1-1","children":[]}]},{"level":2,"title":"提示","slug":"提示-1","link":"#提示-1","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码","slug":"代码-1","link":"#代码-1","children":[]}],"git":{"createdTime":1698489661000,"updatedTime":1714290855000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"algorithm/4-数学知识/数论分块.md","localizedDate":"2023年7月10日","excerpt":"<h1> 整数分块</h1>\\n<p>求<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mrow><mo fence=\\"true\\">⌊</mo><mfrac><mi>n</mi><mi>i</mi></mfrac><mo fence=\\"true\\">⌋</mo></mrow></mrow><annotation encoding=\\"application/x-tex\\">\\\\sum_{i=1}^{n}\\\\left\\\\lfloor\\\\frac{n}{i}\\\\right\\\\rfloor</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.2em;vertical-align:-0.35em;\\"></span><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8043em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.2029em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2997em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"minner\\"><span class=\\"mopen delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size1\\">⌊</span></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6954em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mclose delimcenter\\" style=\\"top:0em;\\"><span class=\\"delimsizing size1\\">⌋</span></span></span></span></span></span></p>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{s as data};
