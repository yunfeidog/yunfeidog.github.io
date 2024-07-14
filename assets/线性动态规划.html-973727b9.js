const l=JSON.parse('{"key":"v-78f12966","path":"/algorithm/2-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E7%BA%BF%E6%80%A7%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"线性动态规划","lang":"zh-CN","frontmatter":{"title":"线性动态规划","date":"2023-05-12T08:49:10.000Z","category":["Algorithm","动态规划"],"tag":["Algorithm","动态规划"],"description":"编辑距离 题目描述 设 AAA 和 BBB 是两个字符串。我们要用最少的字符操作次数，将字符串 AAA 转换为字符串 BBB。这里所说的字符操作共有三种：","head":[["meta",{"property":"og:url","content":"https://github.com/yunfeidog/algorithm/2-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E7%BA%BF%E6%80%A7%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"全民制作人ikun"}],["meta",{"property":"og:title","content":"线性动态规划"}],["meta",{"property":"og:description","content":"编辑距离 题目描述 设 AAA 和 BBB 是两个字符串。我们要用最少的字符操作次数，将字符串 AAA 转换为字符串 BBB。这里所说的字符操作共有三种："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T07:54:15.000Z"}],["meta",{"property":"article:author","content":"全民制作人ikun"}],["meta",{"property":"article:tag","content":"Algorithm"}],["meta",{"property":"article:tag","content":"动态规划"}],["meta",{"property":"article:published_time","content":"2023-05-12T08:49:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T07:54:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性动态规划\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-12T08:49:10.000Z\\",\\"dateModified\\":\\"2024-04-28T07:54:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"全民制作人ikun\\",\\"url\\":\\"https://github.com/yunfeidog\\"}]}"]]},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"输入格式","slug":"输入格式","link":"#输入格式","children":[]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"样例 #1","slug":"样例-1","link":"#样例-1","children":[{"level":3,"title":"样例输入 #1","slug":"样例输入-1","link":"#样例输入-1","children":[]},{"level":3,"title":"样例输出 #1","slug":"样例输出-1","link":"#样例输出-1","children":[]}]},{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":2,"title":"输入格式","slug":"输入格式-1","link":"#输入格式-1","children":[]},{"level":2,"title":"输出格式","slug":"输出格式-1","link":"#输出格式-1","children":[]},{"level":2,"title":"数据范围","slug":"数据范围","link":"#数据范围","children":[]},{"level":2,"title":"输入样例：","slug":"输入样例","link":"#输入样例","children":[]},{"level":2,"title":"输出样例：","slug":"输出样例","link":"#输出样例","children":[]},{"level":2,"title":"思路","slug":"思路-1","link":"#思路-1","children":[]},{"level":2,"title":"代码","slug":"代码-1","link":"#代码-1","children":[]},{"level":2,"title":"题目描述","slug":"题目描述-1","link":"#题目描述-1","children":[]},{"level":2,"title":"输入格式","slug":"输入格式-2","link":"#输入格式-2","children":[]},{"level":2,"title":"输出格式","slug":"输出格式-2","link":"#输出格式-2","children":[]},{"level":2,"title":"样例 #1","slug":"样例-1-1","link":"#样例-1-1","children":[{"level":3,"title":"样例输入 #1","slug":"样例输入-1-1","link":"#样例输入-1-1","children":[]},{"level":3,"title":"样例输出 #1","slug":"样例输出-1-1","link":"#样例输出-1-1","children":[]}]},{"level":2,"title":"提示","slug":"提示-1","link":"#提示-1","children":[]},{"level":2,"title":"思路 (LIS+贪心 )","slug":"思路-lis-贪心","link":"#思路-lis-贪心","children":[{"level":3,"title":"代码","slug":"代码-2","link":"#代码-2","children":[]}]},{"level":2,"title":"思路2()","slug":"思路2","link":"#思路2","children":[{"level":3,"title":"代码","slug":"代码-3","link":"#代码-3","children":[]}]},{"level":2,"title":"思路3(二分+LIS )","slug":"思路3-二分-lis","link":"#思路3-二分-lis","children":[{"level":3,"title":"代码","slug":"代码-4","link":"#代码-4","children":[]}]},{"level":2,"title":"输入格式","slug":"输入格式-3","link":"#输入格式-3","children":[]},{"level":2,"title":"输出格式","slug":"输出格式-3","link":"#输出格式-3","children":[]},{"level":2,"title":"数据范围","slug":"数据范围-1","link":"#数据范围-1","children":[]},{"level":2,"title":"输入样例：","slug":"输入样例-1","link":"#输入样例-1","children":[]},{"level":2,"title":"输出样例：","slug":"输出样例-1","link":"#输出样例-1","children":[]},{"level":2,"title":"样例解释","slug":"样例解释","link":"#样例解释","children":[]},{"level":2,"title":"思路（DFS，迭代加深，剪枝，贪心）","slug":"思路-dfs-迭代加深-剪枝-贪心","link":"#思路-dfs-迭代加深-剪枝-贪心","children":[]},{"level":2,"title":"代码","slug":"代码-5","link":"#代码-5","children":[]},{"level":2,"title":"输入格式","slug":"输入格式-4","link":"#输入格式-4","children":[]},{"level":2,"title":"输出格式","slug":"输出格式-4","link":"#输出格式-4","children":[]},{"level":2,"title":"数据范围","slug":"数据范围-2","link":"#数据范围-2","children":[]},{"level":2,"title":"输入样例：","slug":"输入样例-2","link":"#输入样例-2","children":[]},{"level":2,"title":"输出样例：","slug":"输出样例-2","link":"#输出样例-2","children":[]},{"level":2,"title":"思路","slug":"思路-2","link":"#思路-2","children":[{"level":3,"title":"代码","slug":"代码-6","link":"#代码-6","children":[]},{"level":3,"title":"代码","slug":"代码-7","link":"#代码-7","children":[]}]}],"git":{"createdTime":1698489661000,"updatedTime":1714290855000,"contributors":[{"name":"yunfeidog","email":"1844025705@qq.com","commits":2}]},"readingTime":{"minutes":13.88,"words":4165},"filePathRelative":"algorithm/2-动态规划/线性动态规划.md","localizedDate":"2023年5月12日","excerpt":"<h1> 编辑距离</h1>\\n<h2> 题目描述</h2>\\n<p>设 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\\"application/x-tex\\">A</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\">A</span></span></span></span> 和 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\\"application/x-tex\\">B</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span></span></span></span> 是两个字符串。我们要用最少的字符操作次数，将字符串 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\\"application/x-tex\\">A</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\">A</span></span></span></span> 转换为字符串 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\\"application/x-tex\\">B</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05017em;\\">B</span></span></span></span>。这里所说的字符操作共有三种：</p>","copyright":{"author":"全民制作人cxk","license":"CC-BY-NC-SA-4.0"},"autoDesc":true}');export{l as data};
