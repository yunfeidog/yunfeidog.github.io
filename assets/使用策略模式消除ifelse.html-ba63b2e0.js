import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-51564aae.js";const t={},e=p(`<h1 id="使用策略模式消除ifelse" tabindex="-1"><a class="header-anchor" href="#使用策略模式消除ifelse" aria-hidden="true">#</a> 使用策略模式消除ifelse</h1><blockquote><p>有这样的场景，根据不同的套餐，有不同的计算方式，全部在一个函数里面，使用if+else不停的判断，导致一个方法堆了成百上千行，而且不同的service里面都有这个关于不同套餐的计算方式。为了解决这个问题，学习使用策略模式消除，使得代码遵循开闭原则，新增新的套餐会变得容易</p></blockquote><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><p>代码</p><p>现在有一个coding函数，我们想要根据传入的codeType来进行判断使用那个编辑器coding，如果这样ifelse写的话，每次新加一个编辑器，这边都要进行修改，不符合软件设计的开闭原则。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;IDEA&quot;</span><span class="token punctuation">,</span> codeType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用IDEA编码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;Eclipse&quot;</span><span class="token punctuation">,</span> codeType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用Eclipse编码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改</p><p>我们先定义一个编码接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Program</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后去实现不同种的编码方案：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Eclipse</span> <span class="token keyword">implements</span> <span class="token class-name">Program</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用Eclipse编码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IDEA</span> <span class="token keyword">implements</span> <span class="token class-name">Program</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用IDEA编码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><p>定义一个操作类，注入Program</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Program</span> program<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">StrategyPattern</span><span class="token punctuation">(</span><span class="token class-name">Program</span> program<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>program <span class="token operator">=</span> program<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Program</span> <span class="token function">getProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> program<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProgram</span><span class="token punctuation">(</span><span class="token class-name">Program</span> program<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>program <span class="token operator">=</span> program<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startCoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    program<span class="token punctuation">.</span><span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>codeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;Eclipse&quot;</span><span class="token operator">:</span>
                <span class="token keyword">new</span> <span class="token class-name">StrategyPattern</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Eclipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startCoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;IDEA&quot;</span><span class="token operator">:</span>
                <span class="token keyword">new</span> <span class="token class-name">StrategyPattern</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">IDEA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startCoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用其他IDE编码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样其实还是ifelse，但是代码会简洁很多更容易维护，下面进行消除</p><h2 id="策略模式-工厂模式-模版方法" tabindex="-1"><a class="header-anchor" href="#策略模式-工厂模式-模版方法" aria-hidden="true">#</a> 策略模式+工厂模式+模版方法</h2><p>上面的代码其实还是有点冗余问题，我们可以使用策略模式+工厂模式+模版方法接口，</p><p>todo</p><h2 id="策略枚举" tabindex="-1"><a class="header-anchor" href="#策略枚举" aria-hidden="true">#</a> 策略枚举</h2><p>定义一个枚举类，表示有哪些分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ProgramEnums</span> <span class="token punctuation">{</span>
    <span class="token function">ECLIPSE</span><span class="token punctuation">(</span><span class="token string">&quot;Eclipse&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">IDEA</span><span class="token punctuation">(</span><span class="token string">&quot;IDEA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> codeType<span class="token punctuation">;</span>

    <span class="token class-name">ProgramEnums</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>codeType <span class="token operator">=</span> codeType<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> codeType<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个工厂类，用来根据type获取对应的实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProgramFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Program</span><span class="token punctuation">&gt;</span></span> <span class="token constant">PROGRAM_MAP</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token constant">PROGRAM_MAP</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;Eclipse&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Eclipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">PROGRAM_MAP</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;IDEA&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">IDEA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Program</span><span class="token punctuation">&gt;</span></span> <span class="token function">getProgramMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">PROGRAM_MAP</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> codeType <span class="token operator">=</span> <span class="token string">&quot;IDEA&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Program</span> programMap <span class="token operator">=</span> <span class="token class-name">ProgramFactory</span><span class="token punctuation">.</span><span class="token function">getProgramMap</span><span class="token punctuation">(</span>codeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    programMap<span class="token punctuation">.</span><span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","使用策略模式消除ifelse.html.vue"]]);export{d as default};
