import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as p,a,b as n,d as s}from"./app-51564aae.js";const i={},o=a('<h1 id="g-orray" tabindex="-1"><a class="header-anchor" href="#g-orray" aria-hidden="true">#</a> G. Orray</h1><p>You are given an array 𝑎 consisting of 𝑛 nonnegative integers.</p><p>Let&#39;s define the prefix OR array 𝑏 as the array 𝑏𝑖=𝑎1 𝖮𝖱 𝑎2 𝖮𝖱 … 𝖮𝖱 𝑎𝑖 , where 𝖮𝖱 represents the bitwise OR operation. In other words, the array 𝑏 is formed by computing the 𝖮𝖱 of every prefix of 𝑎 .</p><p>You are asked to rearrange the elements of the array 𝑎 in such a way that its prefix OR array is lexicographically maximum.</p><p>An array 𝑥 is lexicographically greater than an array 𝑦 if in the first position where 𝑥 and 𝑦 differ, 𝑥𝑖&gt;𝑦𝑖 .</p><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>The first line of the input contains a single integer 𝑡 (1≤𝑡≤100 ) — the number of test cases. The description of test cases follows.</p><p>The first line of each test case contains a single integer 𝑛 (1≤𝑛≤2⋅105 ) — the length of the array 𝑎 .</p><p>The second line of each test case contains 𝑛 nonnegative integers 𝑎1,…,𝑎𝑛 (0≤𝑎𝑖≤109 ).</p><p>It is guaranteed that the sum of 𝑛 over all test cases does not exceed 2⋅105 .</p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>For each test case print 𝑛 integers — any rearrangement of the array 𝑎 that obtains the lexicographically maximum prefix OR array.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为n的非负整数数组，问你能不能重新排序，使得前缀异或数组是字典序最大的。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><blockquote><p>这题我看错题目了，一开始以为是异或操作，所以就想的复杂了。</p></blockquote><p>因为两个数会进行或操作，在或运算中，有1得1，全0为0，所以两个数进行或运算只会变大，而不会变小。</p>',17),l=n("p",null,[s("假设当前的前缀或为res,因为要想让数变大，所以我们肯定会尽可能多选能让res变大的数，这个过程最多只会进行30次，因为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"a"),n("mi",null,"i")])]),n("annotation",{encoding:"application/x-tex"},"a_i")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"a"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3117em"}},[n("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"i")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])]),s("最大为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("msup",null,[n("mn",null,"0"),n("mn",null,"9")])]),n("annotation",{encoding:"application/x-tex"},"10^9")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mord"},[n("span",{class:"mord"},"0"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"9")])])])])])])])])])]),s(",因此我们最多会进行"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"m"),n("mi",null,"i"),n("mi",null,"n"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{separator:"true"},","),n("mn",null,"30"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"min(n,30)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"min"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"30"),n("span",{class:"mclose"},")")])])]),s("次排序，选出我们想要的数，剩下的任意输出就可以了。")],-1),c=a(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#include &lt;bits/stdc++.h&gt;</span>

<span class="token comment">#define int long long</span>
using namespace std<span class="token punctuation">;</span>
int res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

bool cmp<span class="token punctuation">(</span>int a, int b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">(</span>res <span class="token operator">|</span> a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>res <span class="token operator">|</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

void <span class="token function-name function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    int n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span>int<span class="token operator">&gt;</span> a<span class="token punctuation">(</span>n + <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    int cnt <span class="token operator">=</span> min<span class="token punctuation">((</span>long long<span class="token punctuation">)</span> <span class="token number">30</span>, n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> cnt<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sort<span class="token punctuation">(</span>a.begin<span class="token punctuation">(</span><span class="token punctuation">)</span> + i, a.end<span class="token punctuation">(</span><span class="token punctuation">)</span>, <span class="token function">cmp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res <span class="token operator">|</span><span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; <span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">[</span>i <span class="token operator">==</span> n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

signed <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">#ifndef ONLINE_JUDGE</span>
    freopen<span class="token punctuation">(</span><span class="token string">&quot;../test.in&quot;</span>, <span class="token string">&quot;r&quot;</span>, stdin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    freopen<span class="token punctuation">(</span><span class="token string">&quot;../test.out&quot;</span>, <span class="token string">&quot;w&quot;</span>, stdout<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#endif</span>
    int _<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> _<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>_--<span class="token punctuation">)</span> solve<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token builtin class-name">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[o,l,c];function r(d,m){return e(),p("div",null,u)}const v=t(i,[["render",r],["__file","Codeforces-Round-827-Div-4-G-Orray.html.vue"]]);export{v as default};
