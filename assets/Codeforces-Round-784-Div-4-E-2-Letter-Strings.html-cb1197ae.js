import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-51564aae.js";const p={},e=t(`<h1 id="e-2-letter-strings" tabindex="-1"><a class="header-anchor" href="#e-2-letter-strings" aria-hidden="true">#</a> E. 2-Letter Strings</h1><figure><img src="https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main/img/image-20230413213354949.png" alt="image-20230413213354949" tabindex="0" loading="lazy"><figcaption>image-20230413213354949</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main/img/image-20230413213414281.png" alt="image-20230413213414281" tabindex="0" loading="lazy"><figcaption>image-20230413213414281</figcaption></figure><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你n个长度为2的字符串，如果对于两个字符串i&lt;j 并且两个字符串只有一个相同的字母，那么他们构成一组，问一共有多少组。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>用数组<code>a</code>记录字符串的第一个字母出现了多少次，<code>b</code>记录第二个，<code>c</code>用来记录这个字符串在此之前一共出现了多少次。对于每个字符串，他对答案的贡献应该为它的第一个字母在<code>a</code>中出现的次数+第二个字母在<code>b</code>中出现的次数-2*整个字符串在之前出现的次数</p><blockquote><p>为什么是两倍？</p><p>假设这个字符串在此之前出现了k次，那么当算第一个字母的时候，会加上k，算上第二个字母的时候会加上k，因此，我们需要减去2*k</p></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">int</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">b</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> c<span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        string s<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> s<span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        res <span class="token operator">+=</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">-</span> c<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">,</span>b<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">,</span>c<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span>res<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","Codeforces-Round-784-Div-4-E-2-Letter-Strings.html.vue"]]);export{k as default};
