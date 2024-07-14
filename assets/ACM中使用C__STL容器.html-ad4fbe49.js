import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as o,a,b as n,d as s}from"./app-51564aae.js";const e={},c=a(`<h1 id="c-的stl容器在acm算法竞赛中的应用" tabindex="-1"><a class="header-anchor" href="#c-的stl容器在acm算法竞赛中的应用" aria-hidden="true">#</a> C++的STL容器在ACM算法竞赛中的应用</h1><h2 id="一些有用的函数" tabindex="-1"><a class="header-anchor" href="#一些有用的函数" aria-hidden="true">#</a> 一些有用的函数</h2><h3 id="is-sorted-a-begin-a-end-cmp" tabindex="-1"><a class="header-anchor" href="#is-sorted-a-begin-a-end-cmp" aria-hidden="true">#</a> is_sorted(a.begin(),a.end(),cmp);</h3><blockquote><p>判断是否按照cmp中的规则排序，默认升序</p></blockquote><p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> ok <span class="token operator">=</span> <span class="token function">is_sorted</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> ok <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stoi-将字符串转为整数" tabindex="-1"><a class="header-anchor" href="#stoi-将字符串转为整数" aria-hidden="true">#</a> stoi 将字符串转为整数</h3><p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string s <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token function">stoi</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-string-将整数转为字符串" tabindex="-1"><a class="header-anchor" href="#to-string-将整数转为字符串" aria-hidden="true">#</a> to_string 将整数转为字符串</h3><p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string s <span class="token operator">=</span> <span class="token function">to_string</span><span class="token punctuation">(</span><span class="token number">231</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> s <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="max-element-获取数组中最大的元素" tabindex="-1"><a class="header-anchor" href="#max-element-获取数组中最大的元素" aria-hidden="true">#</a> max_element 获取数组中最大的元素</h3><p>用法</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> mx <span class="token operator">=</span> <span class="token operator">*</span><span class="token function">max_element</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>min_element同理</p><h3 id="accumulate-数组求和" tabindex="-1"><a class="header-anchor" href="#accumulate-数组求和" aria-hidden="true">#</a> accumulate 数组求和</h3><p>用法,第三个参数是累加的初值</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> sum <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">accumulate</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lower-bound-和upper-bound-函数" tabindex="-1"><a class="header-anchor" href="#lower-bound-和upper-bound-函数" aria-hidden="true">#</a> lower_bound 和upper_bound 函数：</h2><ol><li>lower_bound返回数组中第一个大于等于x的数的位置,</li><li>upper_bound返回数组中第一个大于x的数的位置，</li></ol><p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">ONLINE_JUDGE</span></span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.in&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;../test.out&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>

    <span class="token comment">//数组用法</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token function">lower_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> a <span class="token operator">+</span> n<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">-</span> a<span class="token punctuation">;</span> <span class="token comment">//大于等于3的最小位置，从0开始</span>
    cout <span class="token operator">&lt;&lt;</span> t <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">int</span> tt <span class="token operator">=</span> <span class="token function">upper_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> a <span class="token operator">+</span> n<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">-</span> a<span class="token punctuation">;</span><span class="token comment">//大于3的最小位置，从0 开始</span>
    cout <span class="token operator">&lt;&lt;</span> tt <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


    <span class="token comment">//vector用法：</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">b</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token function">lower_bound</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//大于等于3的最小位置，从0开始</span>
    cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">int</span> xx <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">upper_bound</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//大于3的最小位置，从0 开始</span>
    cout <span class="token operator">&lt;&lt;</span> xx <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">reverse</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a<span class="token operator">+</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//greater用法 必须从大到小排序</span>
    <span class="token keyword">int</span> q<span class="token operator">=</span> <span class="token function">lower_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a<span class="token operator">+</span>n<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token generic-function"><span class="token function">greater</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span>a<span class="token punctuation">;</span><span class="token comment">//小于等于3的最小位置</span>
    cout<span class="token operator">&lt;&lt;</span>q<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">int</span> qq<span class="token operator">=</span> <span class="token function">upper_bound</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a<span class="token operator">+</span>n<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token generic-function"><span class="token function">greater</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-</span>a<span class="token punctuation">;</span><span class="token comment">//小于3的最大位置</span>
    cout<span class="token operator">&lt;&lt;</span>qq<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vector容器" tabindex="-1"><a class="header-anchor" href="#vector容器" aria-hidden="true">#</a> vector容器</h2><h2 id="bitest容器" tabindex="-1"><a class="header-anchor" href="#bitest容器" aria-hidden="true">#</a> bitest容器</h2>`,25),l=n("p",null,[s("用来存储"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"0/1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"0/1")])])]),s("的大小不可变的容器。在头文件"),n("code",null,"<bitset>"),s("里面")],-1),i=a(`<ol><li>创建bitset：里面全是0</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>bitset<span class="token operator">&lt;</span><span class="token number">64</span><span class="token operator">&gt;</span> bs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>运算：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token comment">//运算</span>
    bitset<span class="token operator">&lt;</span><span class="token number">64</span><span class="token operator">&gt;</span> bs1<span class="token punctuation">,</span> bs2<span class="token punctuation">;</span>
    bs <span class="token operator">=</span> bs1 <span class="token operator">&amp;</span> bs2<span class="token punctuation">;</span><span class="token comment">//1.与</span>
    bs <span class="token operator">=</span> bs1 <span class="token operator">|</span> bs2<span class="token punctuation">;</span><span class="token comment">//2.或</span>
    bs <span class="token operator">=</span> bs1 <span class="token operator">^</span> bs2<span class="token punctuation">;</span><span class="token comment">//3.异或</span>
    bs <span class="token operator">=</span> <span class="token operator">~</span>bs1<span class="token punctuation">;</span><span class="token comment">//4.取反</span>
    bs <span class="token operator">=</span> bs1 <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//5.左移</span>
    bs <span class="token operator">=</span> bs1 <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//6.右移</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>函数：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    bitset<span class="token operator">&lt;</span><span class="token number">64</span><span class="token operator">&gt;</span> bs<span class="token punctuation">;</span>
    <span class="token keyword">int</span> cnt1 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1.返回1的数量</span>
    <span class="token keyword">int</span> size <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2.返回bitset的大小</span>
    <span class="token keyword">bool</span> ok1 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3.判断是否存在1</span>
    <span class="token keyword">bool</span> ok2 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">none</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//4.判断是否全为0</span>
    <span class="token keyword">bool</span> ok3 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//5.判断是否全为1</span>
    bs<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//6.全部置为1</span>
    bs<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//7.全部置为0</span>
    bs<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8.全部取反</span>
    bs<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//9.将第1位取反</span>
    string res <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//10.转为string</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">long</span> res1 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">to_ullong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//11.变为unsigned long long</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> res2 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">to_ulong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//12.变为unsigned long</span>
    <span class="token keyword">int</span> pos1 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">_Find_first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//13.返回第一个1的位置</span>
    <span class="token keyword">int</span> pos2 <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">_Find_next</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//14.返回10后面的第一个1的位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiset容器" tabindex="-1"><a class="header-anchor" href="#multiset容器" aria-hidden="true">#</a> multiset容器</h2><p><code>std::multiset</code>是一个基于红黑树实现的容器，元素可以重复，而set不可以重复</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s<span class="token punctuation">;</span>
    <span class="token comment">//1.增加操作，insert返回插入的位置</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> s<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> pos <span class="token operator">=</span> <span class="token operator">*</span>s<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;插入的位置为：&quot;</span> <span class="token operator">&lt;&lt;</span> pos <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">//2.删除操作 erase返回删除的个数</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除所有的1</span>
    s<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除第一个元素</span>
    <span class="token comment">//    multiset&lt;int&gt;::iterator it = s.end(); 也可以使用auto</span>
    <span class="token keyword">auto</span> it <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    it<span class="token operator">--</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除最后一个元素</span>
    s<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除区间</span>


    <span class="token comment">//3.查找操作,找不到返回end()</span>
    <span class="token keyword">auto</span> it1 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回第一个3的位置</span>
    <span class="token keyword">auto</span> it2 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回第一个大于等于3的位置</span>
    <span class="token keyword">auto</span> it3 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">upper_bound</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回第一个大于3的位置</span>
    <span class="token keyword">int</span> pos1 <span class="token operator">=</span> <span class="token function">distance</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> it1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回迭代器的位置0开始</span>

    <span class="token comment">//区间equal_range,返回一个pair&lt;iterator,iterator&gt; pair的first指向第一个3的位置，second指向第一个大于3的位置</span>
    <span class="token keyword">auto</span> it4 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">equal_range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> it5 <span class="token operator">=</span> it4<span class="token punctuation">.</span>first<span class="token punctuation">;</span>
    <span class="token keyword">auto</span> it6 <span class="token operator">=</span> it4<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
    <span class="token keyword">int</span> pos2 <span class="token operator">=</span> <span class="token function">distance</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> it5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> pos3 <span class="token operator">=</span> <span class="token function">distance</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> it6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4.统计操作</span>
    <span class="token keyword">int</span> cnt1 <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回3的个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u=[c,l,i];function k(r,d){return p(),o("div",null,u)}const b=t(e,[["render",k],["__file","ACM中使用C__STL容器.html.vue"]]);export{b as default};
