import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as s,e as t,a}from"./app-51564aae.js";const i={},u={id:"_6327-从两个数字数组里生成最小数字",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#_6327-从两个数字数组里生成最小数字","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你两个只包含 1 到 9 之间数字的数组 nums1 和 nums2 ，每个数组中的元素 互不相同 ，请你返回 最小 的数字，两个数组都 至少 包含这个数字的某个数位。</p><p>示例 1：</p><p>输入：nums1 = [4,1,3], nums2 = [5,7]<br> 输出：15<br> 解释：数字 15 的数位 1 在 nums1 中出现，数位 5 在 nums2 中出现。15 是我们能得到的最小数字。<br> 示例 2：</p><p>输入：nums1 = [3,5,2,6], nums2 = [3,1,7]<br> 输出：3<br> 解释：数字 3 的数位 3 在两个数组中都出现了。</p><p>提示：</p><p>1 &lt;= nums1.length, nums2.length &lt;= 9<br> 1 &lt;= nums1[i], nums2[i] &lt;= 9<br> 每个数组中，元素 互不相同 。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>可以先用一个map记录是否有相同的数字出现，因为map是自动排序的，如果遍历map遇到第一个出现两次的数字，那么说明这个数字就是可以获得的最小值，如果没有同时出现的，那么就分别找两个数组中的最小值a,b如果a&gt;b,则交换，最小值=10*a+b;</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">minNumber</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> nums1<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> min1<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>min2<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
        map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">&gt;</span> m<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">:</span>nums1<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
            min1<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>min1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            m<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">:</span>nums2<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
            min2<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>min2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            m<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> x<span class="token operator">:</span>m<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>second<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> x<span class="token punctuation">.</span>first<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>min1<span class="token operator">&gt;</span>min2<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>min1<span class="token punctuation">,</span>min2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>min2<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> res<span class="token operator">=</span>min2<span class="token operator">+</span>min1<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={id:"_6328-找到最大开销的子字符串",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_6328-找到最大开销的子字符串","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.cn/problems/find-the-substring-with-maximum-cost/",target:"_blank",rel:"noopener noreferrer"},h=a('<h2 id="题目-1" tabindex="-1"><a class="header-anchor" href="#题目-1" aria-hidden="true">#</a> 题目</h2><p>给你一个字符串 s ，一个字符 互不相同 的字符串 chars 和一个长度与 chars 相同的整数数组 vals 。</p><p>子字符串的开销 是一个子字符串中所有字符对应价值之和。空字符串的开销是 0 。</p><p>字符的价值 定义如下：</p><p>如果字符不在字符串 chars 中，那么它的价值是它在字母表中的位置（下标从 1 开始）。 比方说，&#39;a&#39; 的价值为 1 ，&#39;b&#39; 的价值为 2 ，以此类推，&#39;z&#39; 的价值为 26 。 否则，如果这个字符在 chars 中的位置为 i ，那么它的价值就是 vals[i] 。 请你返回字符串 s 的所有子字符串中的最大开销。</p><p>示例 1：</p><p>输入：s = &quot;adaa&quot;, chars = &quot;d&quot;, vals = [-1000] 输出：2 解释：字符 &quot;a&quot; 和 &quot;d&quot; 的价值分别为 1 和 -1000 。 最大开销子字符串是 &quot;aa&quot; ，它的开销为 1 + 1 = 2 。 2 是最大开销。 示例 2：</p><p>输入：s = &quot;abc&quot;, chars = &quot;abc&quot;, vals = [-1,-1,-1] 输出：0 解释：字符 &quot;a&quot; ，&quot;b&quot; 和 &quot;c&quot; 的价值分别为 -1 ，-1 和 -1 。 最大开销子字符串是 &quot;&quot; ，它的开销为 0 。 0 是最大开销。</p><p>提示：</p>',9),g=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"<"),n("mo",null,"="),n("mi",null,"s"),n("mi",{mathvariant:"normal"},"."),n("mi",null,"l"),n("mi",null,"e"),n("mi",null,"n"),n("mi",null,"g"),n("mi",null,"t"),n("mi",null,"h"),n("mo",null,"<"),n("mo",null,"="),n("mn",null,"1"),n("msup",null,[n("mn",null,"0"),n("mn",null,"5")])]),n("annotation",{encoding:"application/x-tex"},"1 <= s.length <= 10^5")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord"},"."),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"h"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mord"},[n("span",{class:"mord"},"0"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"5")])])])])])])])])])]),s(" s 只包含小写英文字母。 1 <= chars.length <= 26 chars 只包含小写英文字母，且 互不相同 。 vals.length == chars.length -1000 <= vals[i] <= 1000")],-1),y=a(`<h2 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h2><p>可以先用一个哈希表记录每个a-z的字符的值，再去将chars的值记录在这个哈希表中。</p><p>然后遍历这个字符串s，用sum表示当前这个字段的总和，如果发现&lt;0了，那么则更新sum为了，否则继续往前加。</p><p>或者用动态规划的思想：</p><p>定义<code>f[i]</code>表示以<code>a[i]</code>结尾的最大子字符串之和，状态转移如下：</p><ul><li>如果<code>a[i]</code>接前面的,则<code>f[i]=f[i-1]+a[i]</code></li><li>如果<code>a[i]</code>不接前面的,则<code>f[i]=a[i]</code></li></ul><p>状态转移方程为：<code>f[i]=max(f[i],0)+a[i]</code></p><h2 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">maximumCostSubstring</span><span class="token punctuation">(</span>string s<span class="token punctuation">,</span> string chars<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> vals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">&gt;</span> m<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">26</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                m<span class="token punctuation">[</span><span class="token keyword">char</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token operator">+</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>chars<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            m<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>vals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> res<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            
            res<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),f={id:"_6330-图中的最短环",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#_6330-图中的最短环","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.cn/problems/shortest-cycle-in-a-graph/",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>现有一个含 n 个顶点的 双向 图，每个顶点按从 0 到 n - 1 标记。图中的边由二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和 vi 之间存在一条边。每对顶点最多通过一条边连接，并且不存在与自身相连的顶点。</p><p>返回图中 最短 环的长度。如果不存在环，则返回 -1 。</p><p>环 是指以同一节点开始和结束，并且路径中的每条边仅使用一次。</p><p>示例 1：</p><figure><img src="https://assets.leetcode.com/uploads/2023/01/04/cropped.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入：n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]</p><p>输出：3</p><p>解释：长度最小的循环是：0 -&gt; 1 -&gt; 2 -&gt; 0</p><p>示例 2：</p><figure><img src="https://assets.leetcode.com/uploads/2023/01/04/croppedagin.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入：n = 4, edges = [[0,1],[0,2]]</p><p>输出：-1</p><p>解释：图中不存在循环</p><p>提示：</p><p>2 &lt;= n &lt;= 1000 1 &lt;= edges.length &lt;= 1000 edges[i].length == 2 0 &lt;= ui, vi &lt; n ui != vi 不存在重复的边</p><h2 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h2><p>BFS求最小环：</p><p>对于每个点，做一遍BFS，如果在BFS的过程中发现某个点的相连的点已经被访问过了，说明找到了一个最小环，更新答案。</p><h2 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">findShortestCycle</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span><span class="token operator">&amp;</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> g<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">auto</span> <span class="token operator">&amp;</span>edge<span class="token operator">:</span>edges<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> x<span class="token operator">=</span>edge<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>y<span class="token operator">=</span>edge<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            g<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">dist</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">pre</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> q<span class="token punctuation">;</span>
            q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">auto</span> x<span class="token operator">=</span>q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">auto</span> <span class="token operator">&amp;</span>y<span class="token operator">:</span>g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>dist<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        dist<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">=</span>dist<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                        pre<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
                        q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">!=</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token keyword">int</span> len<span class="token operator">=</span>dist<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">+</span>dist<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                            <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> res<span class="token operator">=</span>len<span class="token punctuation">;</span>
                            <span class="token keyword">else</span> res<span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function q(z,S){const p=o("ExternalLinkIcon");return c(),l("div",null,[n("h1",u,[r,s(),n("a",k,[s("6327. 从两个数字数组里生成最小数字"),t(p)])]),d,n("h1",m,[v,s(),n("a",b,[s("6328. 找到最大开销的子字符串"),t(p)])]),h,g,y,n("h1",f,[w,s(),n("a",_,[s("6330. 图中的最短环"),t(p)])]),x])}const L=e(i,[["render",q],["__file","LeetCode第101场双周赛.html.vue"]]);export{L as default};
