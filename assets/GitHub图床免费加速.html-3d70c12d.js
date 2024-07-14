import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as d}from"./app-51564aae.js";const a={},t=d(`<h1 id="github图床免费加速" tabindex="-1"><a class="header-anchor" href="#github图床免费加速" aria-hidden="true">#</a> GitHub图床免费加速</h1><h2 id="staticaly-cdn加速github图床" tabindex="-1"><a class="header-anchor" href="#staticaly-cdn加速github图床" aria-hidden="true">#</a> Staticaly CDN加速GitHub图床</h2><p>加速规则如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 格式 其中 user是用户名  repo是仓库名  version代表版本(tag或者分支 默认为main)  flie是文件路径 
https://cdn.jsdelivr.net/gh/user/repo@version/file

以其中一张图片为例：下面是原本GitHub的图片链接：
https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main/img/image-20230419230228217.png

可以改为如下加速方式：
# 比如我的示例仓库就是加速地址就是这个大家可以参考参考
https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main/img/image-20230419230228217.png

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为我之前已经有很多图片了，所以现在需要进行全局替换</p><p>很显然是将前面的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时可以在Picgo里面更改对应的域名：加上上面替换后的那个即可。</p><figure><img src="https://cdn.jsdelivr.net/gh/yunfeidog/picture-bed@main/img/202304222002502.png" alt="image-20230422200207425" tabindex="0" loading="lazy"><figcaption>image-20230422200207425</figcaption></figure>`,11),s=[t];function r(l,c){return i(),n("div",null,s)}const g=e(a,[["render",r],["__file","GitHub图床免费加速.html.vue"]]);export{g as default};
