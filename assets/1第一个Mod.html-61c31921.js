import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as i,b as n,d as o,e as l,a as s}from"./app-51564aae.js";const c={},r=s('<h1 id="第一个mod" tabindex="-1"><a class="header-anchor" href="#第一个mod" aria-hidden="true">#</a> 第一个Mod</h1><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>使用IDEA创建一个Minecraft项目：</p><figure><img src="https://s2.loli.net/2024/06/10/7Zh8P3fcOTstl41.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="解决gradle构建慢的问题" tabindex="-1"><a class="header-anchor" href="#解决gradle构建慢的问题" aria-hidden="true">#</a> 解决gradle构建慢的问题</h2>',5),d={href:"https://fabricmc.cn/2021/06/28/%E5%A6%82%E4%BD%95%E5%8A%A0%E9%80%9FFabric%E6%A8%A1%E7%BB%84%E7%9A%84%E6%9E%84%E5%BB%BA/",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>在<code>gradle.properties</code>中：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">systemProp.http.proxyHost</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">systemProp.http.proxyPort</span><span class="token punctuation">=</span><span class="token value attr-value">7890</span>
<span class="token key attr-name">systemProp.http.nonProxyHosts</span><span class="token punctuation">=</span><span class="token value attr-value">10.*|localhost</span>

<span class="token key attr-name">systemProp.https.proxyHost</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">systemProp.https.proxyPort</span><span class="token punctuation">=</span><span class="token value attr-value">7890</span>
<span class="token key attr-name">systemProp.https.nonProxyHosts</span><span class="token punctuation">=</span><span class="token value attr-value">10.*|localhost</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换fabric以及mavencenter源，<code>settings.gradle</code></p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code>pluginManagement <span class="token punctuation">{</span>
    <span class="token keyword">repositories</span> <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">&#39;Fabric&#39;</span>
            url <span class="token operator">=</span> <span class="token string">&#39;https://repository.hanbings.io/proxy&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token function">gradlePluginPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>build.gradle</code></p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">repositories</span> <span class="token punctuation">{</span>
    maven <span class="token punctuation">{</span>
        url <span class="token string">&#39;https://maven.aliyun.com/nexus/content/groups/public&#39;</span>
    <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span>
        url <span class="token string">&#39;https://repository.hanbings.io/proxy&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始编写代码" tabindex="-1"><a class="header-anchor" href="#开始编写代码" aria-hidden="true">#</a> 开始编写代码</h2><p>我们的DemoMod1需要实现ModInitializer接口</p><p>DemoMod1Client需要实现ClientModInitializer接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMod1</span> <span class="token keyword">implements</span> <span class="token class-name">ModInitializer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMod1Client</span> <span class="token keyword">implements</span> <span class="token class-name">ClientModInitializer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInitializeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时在resources目录下的<code>fabric.mod.json</code>文件中，需要设置这两个类的位置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;entrypoints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;client&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;com.cxk.demo_mod1.client.DemoMod1Client&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;com.cxk.demo_mod1.DemoMod1&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单些一点代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMod1</span> <span class="token keyword">implements</span> <span class="token class-name">ModInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MOD_ID</span> <span class="token operator">=</span> <span class="token string">&quot;demo_mod1&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token constant">MOD_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Fabric world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行代码" tabindex="-1"><a class="header-anchor" href="#运行代码" aria-hidden="true">#</a> 运行代码</h2><figure><img src="https://s2.loli.net/2024/06/10/VW6AcFPhmydaXvZ.webp" alt="image-20240610232320932" tabindex="0" loading="lazy"><figcaption>image-20240610232320932</figcaption></figure><p>可以看到控制台打印信息了，游戏也正常启动，说明mod生效了</p><figure><img src="https://s2.loli.net/2024/06/10/9xaBvwb7UDjiYHF.webp" alt="image-20240610233307231" tabindex="0" loading="lazy"><figcaption>image-20240610233307231</figcaption></figure><p>有时候可能会因为版本冲突原因启动不了，这里给一个不冲突的版本：</p><p><code>gradle.propertities</code></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># Done to increase the memory available to gradle.</span>
<span class="token key attr-name">org.gradle.jvmargs</span><span class="token punctuation">=</span><span class="token value attr-value">-Xmx1G</span>

<span class="token comment"># Fabric Properties</span>
<span class="token comment">    # check these on https://modmuss50.me/fabric.html</span>
<span class="token key attr-name">    minecraft_version</span><span class="token punctuation">=</span><span class="token value attr-value">1.20.6</span>
<span class="token key attr-name">    yarn_mappings</span><span class="token punctuation">=</span><span class="token value attr-value">1.20.6+build.3</span>
<span class="token key attr-name">    loader_version</span><span class="token punctuation">=</span><span class="token value attr-value">0.15.11</span>

<span class="token comment"># Mod Properties</span>
<span class="token key attr-name">    mod_version</span> <span class="token punctuation">=</span> <span class="token value attr-value">1.0</span>
<span class="token key attr-name">    maven_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">com.cxk</span>
<span class="token key attr-name">    archives_base_name</span> <span class="token punctuation">=</span> <span class="token value attr-value">demo_mod1</span>

<span class="token comment"># Dependencies</span>
<span class="token comment">    # check this on https://modmuss50.me/fabric.html</span>
<span class="token key attr-name">    fabric_version</span><span class="token punctuation">=</span><span class="token value attr-value">0.99.0+1.20.6</span>


<span class="token key attr-name">systemProp.http.proxyHost</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">systemProp.http.proxyPort</span><span class="token punctuation">=</span><span class="token value attr-value">7890</span>
<span class="token key attr-name">systemProp.http.nonProxyHosts</span><span class="token punctuation">=</span><span class="token value attr-value">10.*|localhost</span>

<span class="token key attr-name">systemProp.https.proxyHost</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">systemProp.https.proxyPort</span><span class="token punctuation">=</span><span class="token value attr-value">7890</span>
<span class="token key attr-name">systemProp.https.nonProxyHosts</span><span class="token punctuation">=</span><span class="token value attr-value">10.*|localhost</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function v(k,m){const a=t("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[n("a",d,[o("链接"),l(a)])]),u])}const y=e(c,[["render",v],["__file","1第一个Mod.html.vue"]]);export{y as default};
