import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-51564aae.js";const p={},e=t(`<h2 id="g-slavicg-s-favorite-problem" tabindex="-1"><a class="header-anchor" href="#g-slavicg-s-favorite-problem" aria-hidden="true">#</a> G. SlavicG&#39;s Favorite Problem</h2><p>You are given a weighted tree with 𝑛 vertices. Recall that a tree is a connected graph without any cycles. A weighted tree is a tree in which each edge has a certain weight. The tree is undirected, it doesn&#39;t have a root.</p><p>Since trees bore you, you decided to challenge yourself and play a game on the given tree.</p><p>In a move, you can travel from a node to one of its neighbors (another node it has a direct edge with).</p><p>You start with a variable 𝑥 which is initially equal to 0 . When you pass through edge 𝑖 , 𝑥 changes its value to 𝑥 𝖷𝖮𝖱 𝑤𝑖 (where 𝑤𝑖 is the weight of the 𝑖 -th edge).</p><p>Your task is to go from vertex 𝑎 to vertex 𝑏 , but you are allowed to enter node 𝑏 if and only if after traveling to it, the value of 𝑥 will become 0 . In other words, you can travel to node 𝑏 only by using an edge 𝑖 such that 𝑥 𝖷𝖮𝖱 𝑤𝑖=0 . Once you enter node 𝑏 the game ends and you win.</p><p>Additionally, you can teleport at most once at any point in time to any vertex except vertex 𝑏 . You can teleport from any vertex, even from 𝑎 .</p><p>Answer with &quot;YES&quot; if you can reach vertex 𝑏 from 𝑎 , and &quot;NO&quot; otherwise.</p><p>Note that 𝖷𝖮𝖱 represents the bitwise XOR operation.</p><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>The first line contains a single integer 𝑡 (1≤𝑡≤1000 ) — the number of test cases.</p><p>The first line of each test case contains three integers 𝑛 , 𝑎 , and 𝑏 (2≤𝑛≤105 ), (1≤𝑎,𝑏≤𝑛;𝑎≠𝑏 ) — the number of vertices, and the starting and desired ending node respectively.</p><p>Each of the next 𝑛−1 lines denotes an edge of the tree. Edge 𝑖 is denoted by three integers 𝑢𝑖 , 𝑣𝑖 and 𝑤𝑖 — the labels of vertices it connects (1≤𝑢𝑖,𝑣𝑖≤𝑛;𝑢𝑖≠𝑣𝑖;1≤𝑤𝑖≤109 ) and the weight of the respective edge.</p><p>It is guaranteed that the sum of 𝑛 over all test cases does not exceed 105 .</p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>For each test case output &quot;YES&quot; if you can reach vertex 𝑏 , and &quot;NO&quot; otherwise.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵树，边与边之间有权值，从a出发，每次经过一条边，就对边的权值进行一次异或操作，问最后到达b的时候，这条路异或的结果能否是0。</p><p>在走的过程中，可以进行一次传送，可以到达任意一点，但不可以是b点。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>可以从a点开始，对走过的路径进行异或操作，开一个数组w1，存从a异或到这个点的值，</p><p>第二次从b点开始，进行异或操作，也存下来，可以存在哈希表中。</p><p>然后可以去判断b走过的值能不能和a相等，如果相等，说明肯定可以找到一条合法路径，a-&gt;i,i-&gt;j,j-&gt;b</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> PII<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1e5</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span>PII<span class="token operator">&gt;</span> v<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
<span class="token keyword">bool</span> st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s<span class="token punctuation">;</span>
<span class="token keyword">int</span> w1<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> w2<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//从a开始遍历</span>
<span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>w1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> w1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> st<span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> q<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    w1<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">continue</span><span class="token punctuation">;</span>
        st<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> x<span class="token operator">:</span> v<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> x<span class="token punctuation">.</span>first<span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> x<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    w1<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> w1<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">^</span> w<span class="token punctuation">;</span>
                    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">bfs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> q<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> st<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>w2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> w2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    w2<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>st<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        st<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> x<span class="token operator">:</span> v<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> x<span class="token punctuation">.</span>first<span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> x<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                w2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> w <span class="token operator">^</span> w2<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>w2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> w<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> x <span class="token operator">&gt;&gt;</span> y <span class="token operator">&gt;&gt;</span> w<span class="token punctuation">;</span>
        v<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>y<span class="token punctuation">,</span> w<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        v<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">,</span> w<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">bfs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>w1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;YES&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;NO&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Codeforces-Round-835-Div-4-G-SlavicG-s-Favorite-Problem.html.vue"]]);export{r as default};