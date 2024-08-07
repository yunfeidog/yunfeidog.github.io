import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,a as s}from"./app-51564aae.js";const a={},l=s(`<h1 id="用户中心" tabindex="-1"><a class="header-anchor" href="#用户中心" aria-hidden="true">#</a> 用户中心</h1><p>部署上面的优化：</p><p>这些把前端也通过打包的方式进行构建，每次修改页面之后都要重新打包构建一个镜像，不方便动态的修改页面</p><p>考虑使用数据卷挂载的方式来启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> user-center-frontend <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /www/wwwroot/user-center/dist:/usr/share/nginx/html <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /www/wwwroot/user-center/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
	nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><ul><li><code>/www/wwwroot/user-center</code> 是服务器上的前端文件和Nginx配置文件的目录。</li><li><code>/usr/share/nginx/html</code> 是Nginx容器内的默认HTML根目录，通过挂载可以让Nginx访问这些文件。</li><li><code>/etc/nginx/nginx.conf</code> 是Nginx配置文件，也通过挂载让容器内的Nginx使用该配置文件。</li></ul><ol><li><strong>修改前端代码和Nginx配置</strong>：在服务器上的<code>/www/wwwroot/user-center</code>目录中进行前端代码和Nginx配置的修改。</li><li><strong>重启Docker容器</strong>：在容器内，可以使用以下命令来重新加载Nginx，以应用前端文件和Nginx配置的更改：</li></ol><p>进入 nginx容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> user-center-frontend /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>热更新nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx.conf的配置文件内容为：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>events {
    worker_connections  1024;
}


http{
  server {
      listen 80;
      # gzip config
      gzip on;
      gzip_min_length 1k;
      gzip_comp_level 9;
      gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
      gzip_vary on;
      gzip_disable &quot;MSIE [1-6]\\.&quot;;

      root /usr/share/nginx/html;
      include /etc/nginx/mime.types;

      server_name 121.40.105.246;

      location / {
          try_files $uri /index.html;
      }

      location /api {
          proxy_pass http://121.40.105.246:8080;
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下次有想要的东西，可以直接放在dist 目录下面即可。</p>`,15),r=[l];function d(c,t){return e(),i("div",null,r)}const p=n(a,[["render",d],["__file","用户中心项目5-持续优化.html.vue"]]);export{p as default};
