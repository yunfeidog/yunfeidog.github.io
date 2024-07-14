import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as o,b as s,d as a,e as l,a as c}from"./app-51564aae.js";const p={},r=c(`<h1 id="centos替换终端为zsh" tabindex="-1"><a class="header-anchor" href="#centos替换终端为zsh" aria-hidden="true">#</a> Centos替换终端为zsh</h1><p>安装zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置为默认的shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装<code>oh-my-zsh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装插件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting

<span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions

<span class="token function">git</span> clone https://github.com/zsh-users/zsh-completions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:=</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-completions

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能遇到的问题：</p><figure><img src="https://s2.loli.net/2024/07/08/uZJTogiWfKPM13U.webp" alt="image-20240708094510636" tabindex="0" loading="lazy"><figcaption>image-20240708094510636</figcaption></figure><p>解决：</p><p>将<code>~/.bashrc</code>文件中的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;. /etc/bashrc&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d={href:"https://shirolin.github.io/posts/d7590978/index.html",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const n=t("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[a("解决zsh版本过低问题："),s("a",d,[a("https://shirolin.github.io/posts/d7590978/index.html"),l(n)])])])}const g=e(p,[["render",u],["__file","Centos终端美化.html.vue"]]);export{g as default};
