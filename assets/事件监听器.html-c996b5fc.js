import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-51564aae.js";const t={},p=e(`<h1 id="事件监听器" tabindex="-1"><a class="header-anchor" href="#事件监听器" aria-hidden="true">#</a> 事件监听器</h1><h2 id="事件监听器-1" tabindex="-1"><a class="header-anchor" href="#事件监听器-1" aria-hidden="true">#</a> 事件监听器</h2><p>事件监听器需要实现Listener接口，然后在方法上面加@EventHandler注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">void</span> <span class="token function">onBlockPlace</span><span class="token punctuation">(</span><span class="token class-name">BlockPlaceEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Block</span> block <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getBlockPlaced</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方块类型：&quot;</span> <span class="token operator">+</span> block<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 方块坐标：&quot;</span> <span class="token operator">+</span> block<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完了，需要注册，在我们的主类中进行注册</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Auth</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPluginManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消注册：</p><figure><img src="https://s2.loli.net/2024/05/30/eIsGix8SmMh76nU.webp" alt="image-20240530171824192" tabindex="0" loading="lazy"><figcaption>image-20240530171824192</figcaption></figure><h2 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h2><p>创建一个自己的事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyEvent</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HandlerList</span> <span class="token constant">HANDLERS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Player</span> player<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyEvent</span><span class="token punctuation">(</span><span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>player <span class="token operator">=</span> player<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@NotNull</span>
    <span class="token keyword">public</span> <span class="token class-name">HandlerList</span> <span class="token function">getHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">HANDLERS</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","事件监听器.html.vue"]]);export{d as default};
