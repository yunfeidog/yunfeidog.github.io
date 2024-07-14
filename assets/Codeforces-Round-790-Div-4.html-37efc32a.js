import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as s,d as n,e as l,a as c}from"./app-51564aae.js";const i={},r={id:"h2-maximum-crossings-hard-version",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#h2-maximum-crossings-hard-version","aria-hidden":"true"},"#",-1),k={href:"https://codeforces.com/contest/1676/problem/H2",target:"_blank",rel:"noopener noreferrer"},m=s("p",null,"The only difference between the two versions is that in this version 𝑛≤2⋅105 and the sum of 𝑛 over all test cases does not exceed 2⋅105 .",-1),d=s("p",null,"A terminal is a row of 𝑛 equal segments numbered 1 to 𝑛 in order. There are two terminals, one above the other.",-1),h=s("p",null,"You are given an array 𝑎 of length 𝑛 . For all 𝑖=1,2,…,𝑛 , there should be a straight wire from some point on segment 𝑖 of the top terminal to some point on segment 𝑎𝑖 of the bottom terminal. You can't select the endpoints of a segment. For example, the following pictures show two possible wirings if 𝑛=7 and 𝑎=[4,1,4,6,7,7,5] .",-1),v=s("figure",null,[s("img",{src:"https://espresso.codeforces.com/660719c81039b1ce9c48c6c80d2c922157422c16.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),g=s("p",null,"A crossing occurs when two wires share a point in common. In the picture above, crossings are circled in red.",-1),b=s("p",null,"What is the maximum number of crossings there can be if you place the wires optimally?",-1),y=s("h2",{id:"input",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#input","aria-hidden":"true"},"#"),n(" Input")],-1),f=s("p",null,"The first line contains an integer 𝑡 (1≤𝑡≤1000 ) — the number of test cases.",-1),w=s("p",null,[n("The first line of each test case contains an integer 𝑛 ("),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"≤"),s("mi",null,"𝑛"),s("mo",null,"≤"),s("mn",null,"2"),s("mo",null,"⋅"),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"5")])]),s("annotation",{encoding:"application/x-tex"},"1≤𝑛≤2⋅10^5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7804em","vertical-align":"-0.136em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"5")])])])])])])])])])]),n(" ) — the length of the array.")],-1),_=s("p",null,"The second line of each test case contains 𝑛 integers 𝑎1,𝑎2,…,𝑎𝑛 (1≤𝑎𝑖≤𝑛 ) — the elements of the array.",-1),x=s("p",null,"The sum of 𝑛 across all test cases does not exceed 2⋅105 .",-1),j=s("h2",{id:"output",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#output","aria-hidden":"true"},"#"),n(" Output")],-1),L=s("p",null,"For each test case, output a single integer — the maximum number of crossings there can be if you place the wires optimally.",-1),z=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),N=s("p",null,[n("仔细研究发现其实就是求逆序对，只不过是求"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"a"),s("mi",null,"i")]),s("mo",null,">"),s("mo",null,"="),s("msub",null,[s("mi",null,"a"),s("mi",null,"j")]),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"<"),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"a_i>=a_j(i<j)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6891em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])]),n("，套逆序对的模版即可，求逆序对应该还可以用树状数组的。")],-1),q=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> PII<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> INF <span class="token operator">=</span> <span class="token number">0x3f3f3f3f</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">2e5</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> temp<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

LL <span class="token function">merge_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    LL res <span class="token operator">=</span> <span class="token function">merge_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">)</span> <span class="token operator">+</span>
             <span class="token function">merge_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">=</span> l<span class="token punctuation">,</span> j <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> mid <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token function">merge_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">ONLINE_JUDGE</span></span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.in&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.out&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
    <span class="token keyword">int</span> _<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> _<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>_<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function I(M,T){const a=e("ExternalLinkIcon");return p(),o("div",null,[s("h2",r,[u,n(),s("a",k,[n("H2. Maximum Crossings (Hard Version)"),l(a)])]),m,d,h,v,g,b,y,f,w,_,x,j,L,z,N,q])}const C=t(i,[["render",I],["__file","Codeforces-Round-790-Div-4.html.vue"]]);export{C as default};