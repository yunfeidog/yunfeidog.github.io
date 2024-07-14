import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-51564aae.js";const i={},l=e(`<h1 id="linux系统定时脚本" tabindex="-1"><a class="header-anchor" href="#linux系统定时脚本" aria-hidden="true">#</a> Linux系统定时脚本</h1><h2 id="定时清空nohup-out" tabindex="-1"><a class="header-anchor" href="#定时清空nohup-out" aria-hidden="true">#</a> 定时清空nohup.out</h2><p>shell脚本<code>clear_nohup.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 清空/opt/server/目录下每个子目录中的nohup.out文件</span>

<span class="token comment"># 定义基础目录路径</span>
<span class="token assign-left variable">base_dir</span><span class="token operator">=</span><span class="token string">&quot;/opt/server/&quot;</span>

<span class="token comment"># 获取基础目录下的所有子目录列表</span>
<span class="token assign-left variable">sub_dirs</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token string">&quot;<span class="token variable">$base_dir</span>&quot;</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-mindepth</span> <span class="token number">1</span> <span class="token parameter variable">-type</span> d<span class="token variable">)</span></span><span class="token punctuation">)</span>

<span class="token comment"># 遍历每个子目录</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">dir</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${sub_dirs<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token comment"># 构造当前子目录中nohup.out文件的路径</span>
    <span class="token assign-left variable">nohup_out</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$dir</span>/nohup.out&quot;</span>

    <span class="token comment"># 检查当前子目录是否存在nohup.out文件</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$nohup_out</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;清空 <span class="token variable">$nohup_out</span>&quot;</span>
        
        <span class="token comment"># 使用cat和/dev/null清空nohup.out文件的内容</span>
        <span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$nohup_out</span>&quot;</span>
        
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$nohup_out</span> 已清空&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$dir</span> 中未找到 nohup.out 文件&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x clear_nohup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定时任务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span> 
<span class="token number">10</span> <span class="token number">0</span> * * * /bin/bash /path/to/clear_nohup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[l];function o(p,c){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","Linux系统定时脚本.html.vue"]]);export{d as default};
