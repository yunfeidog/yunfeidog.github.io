import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as s}from"./app-51564aae.js";const i={},l=s(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>拉取镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先用docker启动一次nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-d</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将容器内的配置文件拷贝到当前目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改文件夹名字为conf</p><figure><img src="https://s2.loli.net/2024/01/28/tHbTojyaRBQ1cM5.webp" alt="image-20240128155142924" tabindex="0" loading="lazy"><figcaption>image-20240128155142924</figcaption></figure><p>启动nginx，前端页面可以放在html中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3.0&#39;</span>
services:
  nginx:
    image: nginx:latest <span class="token comment"># 镜像名称</span>
    container_name: nginx1     <span class="token comment"># 容器名字</span>
    restart: always     <span class="token comment"># 开机自动重启</span>
    network_mode: <span class="token function">host</span> <span class="token comment"># 和主机联通</span>
    volumes:      <span class="token comment"># 目录映射（宿主机:容器内）</span>
        - ./conf:/etc/nginx
        - ./log:/var/log/nginx  <span class="token comment">###这里面放置日志</span>
        - ./html:/usr/share/nginx/html <span class="token comment">###这里面放置项目目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function t(d,r){return a(),e("div",null,c)}const m=n(i,[["render",t],["__file","nginx.html.vue"]]);export{m as default};
