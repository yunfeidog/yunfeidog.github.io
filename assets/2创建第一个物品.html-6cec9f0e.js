import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-51564aae.js";const p={},e=t(`<h1 id="创建第一个物品" tabindex="-1"><a class="header-anchor" href="#创建第一个物品" aria-hidden="true">#</a> 创建第一个物品</h1><p>这里我们新建两个物品：红宝石</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ModItems</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Item</span> <span class="token constant">RUBY</span> <span class="token operator">=</span> <span class="token function">registerItem</span><span class="token punctuation">(</span><span class="token string">&quot;ruby&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Item</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Item<span class="token punctuation">.</span>Settings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Item</span> <span class="token constant">RAW_RUBY</span> <span class="token operator">=</span> <span class="token function">registerItem</span><span class="token punctuation">(</span><span class="token string">&quot;raw_ruby&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Item</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Item<span class="token punctuation">.</span>Settings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">registerModItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Registering items&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ItemGroupEvents</span><span class="token punctuation">.</span><span class="token function">modifyEntriesEvent</span><span class="token punctuation">(</span><span class="token class-name">ItemGroups</span><span class="token punctuation">.</span><span class="token constant">INGREDIENTS</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">ModItems</span><span class="token operator">::</span><span class="token function">addItemsToIngredientTabItemGroup</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">addItemsToIngredientTabItemGroup</span><span class="token punctuation">(</span><span class="token class-name">FabricItemGroupEntries</span> entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">RUBY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">RAW_RUBY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Item</span> <span class="token function">registerItem</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Item</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Registering item &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Registry</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">Registries</span><span class="token punctuation">.</span><span class="token constant">ITEM</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Identifier</span><span class="token punctuation">(</span><span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">MOD_ID</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目启动的时候，调用这个函数进行注册registerModItems：</p><blockquote><p>具体是通过ItemGroupEvents来注册</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMod1</span> <span class="token keyword">implements</span> <span class="token class-name">ModInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MOD_ID</span> <span class="token operator">=</span> <span class="token string">&quot;demo01&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token constant">MOD_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Fabric world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ModItems</span><span class="token punctuation">.</span><span class="token function">registerModItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ModItemGroups</span><span class="token punctuation">.</span><span class="token function">registerItemGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成之后，我们需要在resources目录下创建一些目录，具体如下：</p><figure><img src="https://s2.loli.net/2024/06/11/ue48PGHmJW6FY7I.webp" alt="image-20240611124646605" tabindex="0" loading="lazy"><figcaption>image-20240611124646605</figcaption></figure><p><code>en_us.json</code>主要是用来命名</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;item.demo01.ruby&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ruby&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;item.demo01.raw_ruby&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Raw Ruby&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;itemgroup.ruby&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Group Ruby&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ruby.json</code>主要是用来说明它的材质包的位置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item/generated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;layer0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo01:item/ruby&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而<code>textures</code>目录下面的<code>item</code>目录下面放的就是具体的红宝石材质</p><p>需要注意的是，材质最好不要太大，否则可能会报错，我这里的大小是<code>16x16</code></p><p>启动之后运行结果</p><p>因为我们是把物品设置在<code>ItemGroups.INGREDIENTS</code>这个原材料组里面，所以在这里出现</p><figure><img src="https://s2.loli.net/2024/06/11/MxG8WYDqg2AheRu.webp" alt="image-20240611125025235" tabindex="0" loading="lazy"><figcaption>image-20240611125025235</figcaption></figure><p>我们也可以新建一个物品组，将我们自己写的mod物品都放在这个组里面，可以和原生的物品进行分离</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ModItemGroups</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ItemGroup</span> <span class="token constant">RUBY_GROUP</span> <span class="token operator">=</span> <span class="token class-name">Registry</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">Registries</span><span class="token punctuation">.</span><span class="token constant">ITEM_GROUP</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">Identifier</span><span class="token punctuation">(</span><span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">MOD_ID</span><span class="token punctuation">,</span> <span class="token string">&quot;ruby&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">FabricItemGroup</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">displayName</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">.</span><span class="token function">translatable</span><span class="token punctuation">(</span><span class="token string">&quot;itemgroup.ruby&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ItemStack</span><span class="token punctuation">(</span><span class="token class-name">ModItems</span><span class="token punctuation">.</span><span class="token constant">RUBY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">(</span>displayContext<span class="token punctuation">,</span> entries<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                        entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">ModItems</span><span class="token punctuation">.</span><span class="token constant">RUBY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">ModItems</span><span class="token punctuation">.</span><span class="token constant">RAW_RUBY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Items</span><span class="token punctuation">.</span><span class="token constant">DIAMOND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">registerItemGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Registering Item Groups for &quot;</span> <span class="token operator">+</span> <span class="token class-name">DemoMod1</span><span class="token punctuation">.</span><span class="token constant">MOD_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里面放了红宝石，红宝石原材料，钻石</p><p>运行的结果：</p><figure><img src="https://s2.loli.net/2024/06/11/4t5QZ7eBKxnDyFf.webp" alt="image-20240611125129324" tabindex="0" loading="lazy"><figcaption>image-20240611125129324</figcaption></figure>`,22),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","2创建第一个物品.html.vue"]]);export{r as default};
