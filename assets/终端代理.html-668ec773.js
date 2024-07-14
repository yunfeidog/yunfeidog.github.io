import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,a as n}from"./app-51564aae.js";const t={},l=n(`<h1 id="macos终端代理" tabindex="-1"><a class="header-anchor" href="#macos终端代理" aria-hidden="true">#</a> Macos终端代理</h1><p>在<code>~/.bash_profile</code>中：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">alias</span> <span class="token value attr-value">proxy=&quot;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">http_proxy=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">https_proxy=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">all_proxy=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">no_proxy=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">HTTP_PROXY=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">HTTPS_PROXY=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">ALL_PROXY=socks5://127.0.0.1:7890;</span>
<span class="token key attr-name">    export</span> <span class="token value attr-value">NO_PROXY=socks5://127.0.0.1:7890;&quot;</span>
<span class="token key attr-name">alias</span> <span class="token value attr-value">unproxy=&quot;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">http_proxy;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">https_proxy;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">all_proxy;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">no_proxy;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">HTTP_PROXY;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">HTTPS_PROXY;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">ALL_PROXY;</span>
<span class="token key attr-name">    unset</span> <span class="token value attr-value">NO_PROXY&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后开启代理：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭代理：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检测是否开启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> cip.cc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://s2.loli.net/2024/06/13/x5azhVbStICvqkF.webp" alt="image-20240613165054669" tabindex="0" loading="lazy"><figcaption>image-20240613165054669</figcaption></figure>`,10),p=[l];function r(i,c){return s(),e("div",null,p)}const d=a(t,[["render",r],["__file","终端代理.html.vue"]]);export{d as default};
