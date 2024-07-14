import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,b as e,d as a,e as l,a as i}from"./app-51564aae.js";const d={},c=e("h1",{id:"mac使用ngrok进行内网穿透",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac使用ngrok进行内网穿透","aria-hidden":"true"},"#"),a(" Mac使用ngrok进行内网穿透")],-1),p={href:"https://dashboard.ngrok.com/get-started/setup/macos",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> ngrok/ngrok/ngrok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录网站的时候可能还需要下载Google的Authenticator用于验证。手机APP下载Google Play<br> 获取你的authtoken<br><img src="https://s2.loli.net/2024/04/25/yRF2BAs1oE8aWQV.webp" alt="image.png" loading="lazy"></p><p>配置auth</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngrok config add-authtoken 你的authtoken
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启内网穿透：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngrok http http://localhost:10000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我本地开了一个Java程序，端口10000:<br><img src="https://s2.loli.net/2024/04/25/jMAtXFS8JGZqpCO.webp" alt="image.png" loading="lazy"></p><p>开启内网穿透后：<br><img src="https://s2.loli.net/2024/04/25/4OhSZDlvAunIq5H.webp" alt="image.png" loading="lazy"></p><p>此时访问网址可以访问到：<br><img src="https://s2.loli.net/2024/04/25/e9271SlNAOc6fyK.webp" alt="image.png" loading="lazy"></p><p>可以申请一个域名：<br><img src="https://s2.loli.net/2024/04/25/heAwYtsG1NaOqdU.webp" alt="image.png" loading="lazy"></p>`,10);function h(m,u){const n=t("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[a("安装："),e("a",p,[a("https://dashboard.ngrok.com/get-started/setup/macos"),l(n)])]),g])}const v=s(d,[["render",h],["__file","Mac使用ngrok进行内网穿透.html.vue"]]);export{v as default};
