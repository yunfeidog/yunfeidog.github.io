import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-51564aae.js";const e={},p=t(`<h1 id="idea开发基本配置" tabindex="-1"><a class="header-anchor" href="#idea开发基本配置" aria-hidden="true">#</a> IDEA开发基本配置</h1><p>配置jar包输入位置直接到服务端的plugin目录下：</p><p>主要是配置outputDirectory为自己的服务端plugin位置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>properties<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>java<span class="token punctuation">.</span>version<span class="token punctuation">&gt;</span></span><span class="token number">21</span><span class="token operator">&lt;</span><span class="token operator">/</span>java<span class="token punctuation">.</span>version<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>project<span class="token punctuation">.</span>build<span class="token punctuation">.</span>sourceEncoding<span class="token punctuation">&gt;</span></span><span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>project<span class="token punctuation">.</span>build<span class="token punctuation">.</span>sourceEncoding<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>server<span class="token punctuation">.</span>output<span class="token punctuation">&gt;</span></span><span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>houyunfei<span class="token operator">/</span>code<span class="token operator">/</span>minecraft<span class="token operator">/</span>server2<span class="token operator">/</span>plugins<span class="token operator">&lt;</span><span class="token operator">/</span>server<span class="token punctuation">.</span>output<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>properties<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;!--            指定jar输出目录--&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.2.2&lt;/version&gt;
            &lt;configuration&gt;
                &lt;outputDirectory&gt;
                    \${server.output}
                &lt;/outputDirectory&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function l(i,r){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","IDEA开发基本配置.html.vue"]]);export{d as default};
