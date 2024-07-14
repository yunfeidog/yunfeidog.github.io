import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,b as n,d as s,a as p}from"./app-51564aae.js";const o={},c=n("h1",{id:"b-agaga-xooorrr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#b-agaga-xooorrr","aria-hidden":"true"},"#"),s(" B. AGAGA XOOORRR")],-1),l=n("p",null,"Baby Ehab is known for his love for a certain operation. He has an array 𝑎 of length 𝑛 , and he decided to keep doing the following operation on it:",-1),i=n("p",null,"he picks 2 adjacent elements; he then removes them and places a single integer in their place: their bitwise XOR. Note that the length of the array decreases by one. Now he asks you if he can make all elements of the array equal. Since babies like to make your life harder, he requires that you leave at least 2 elements remaining.",-1),r=n("h2",{id:"input",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#input","aria-hidden":"true"},"#"),s(" Input")],-1),u=n("p",null,"The first line contains an integer 𝑡 (1≤𝑡≤15 ) — the number of test cases you need to solve.",-1),d=n("p",null,"The first line of each test case contains an integers 𝑛 (2≤𝑛≤2000 ) — the number of elements in the array 𝑎 .",-1),k=n("p",null,[s("The second line contains 𝑛 space-separated integers 𝑎1 , 𝑎2 , … , 𝑎𝑛 ("),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mo",null,"≤"),n("mi",null,"𝑎"),n("mi",null,"𝑖"),n("mo",null,"<"),n("msup",null,[n("mn",null,"2"),n("mn",null,"30")])]),n("annotation",{encoding:"application/x-tex"},"0≤𝑎𝑖<2^{30}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7804em","vertical-align":"-0.136em"}}),n("span",{class:"mord"},"0"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6986em","vertical-align":"-0.0391em"}}),n("span",{class:"mord mathnormal"},"ai"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"<"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"30")])])])])])])])])])])]),s(" ) — the elements of the array 𝑎 .")],-1),m=p(`<h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>If Baby Ehab can make all elements equal while leaving at least 2 elements standing, print &quot;YES&quot;. Otherwise, print &quot;NO&quot;.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为n的数组，每次可以选择相邻的两个元素进行异或，并且把这两个元素替换为异或之后的结果，问最后能不能把这个数组变成元素都相同的数组。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>异或：对应二进制位，相同则为0，不同则为1</p><p>几个常用的性质：</p><ul><li>异或简单理解就是不进位加法：，例如1+1=0，0+0=1，1+0=1；</li><li>自反性：a^a=0</li><li>恒等式：0^a=0</li><li>交换律：a<sup>b=b</sup>a</li><li>结合律：(a<sup>b)</sup>c=a<sup>(b</sup>c)</li><li>异或可逆性：a<sup>b</sup>b=a</li></ul><p>在本题中，可以看出本题的一个性质是最后的数组大小不会超过三，因为如果超过三个相等的元素，那么他们之间一定可以通过运算减少元素的个数。本题暴力运算即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>res<span class="token operator">^=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;YES\\n&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> cur<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cnt<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            cur<span class="token operator">^=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token operator">==</span>res<span class="token punctuation">)</span><span class="token punctuation">{</span>
                cnt<span class="token operator">++</span><span class="token punctuation">;</span>
                cur<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt<span class="token operator">&gt;=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;YES\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;NO\\n&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">signed</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">ONLINE_JUDGE</span></span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.in&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.out&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
    <span class="token keyword">int</span> _<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> _<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>_<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h=[c,l,i,r,u,d,k,m];function v(b,g){return e(),t("div",null,h)}const w=a(o,[["render",v],["__file","Codeforces-Round-717-Div-2-B-AGAGA-XOOORRR.html.vue"]]);export{w as default};