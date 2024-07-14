import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as d,b as s,d as n,e,a as i}from"./app-51564aae.js";const o={},t=s("h1",{id:"docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),p={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},u=i(`<h2 id="centos安装docker" tabindex="-1"><a class="header-anchor" href="#centos安装docker" aria-hidden="true">#</a> Centos安装Docker</h2><ol><li>卸载旧版本的Docker</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine <span class="token punctuation">\\</span>
                  docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>centos安装yum工具</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
           device-mapper-persistent-data <span class="token punctuation">\\</span>
           lvm2 --skip-broken
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>设置docker镜像源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo

yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>安装docker</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),v={start:"5"},m={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://nmbvk9xi.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker启动相关" tabindex="-1"><a class="header-anchor" href="#docker启动相关" aria-hidden="true">#</a> Docker启动相关</h2><ol><li>开关防火墙：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭</span>
systemctl stop firewalld
<span class="token comment"># 禁止开机启动防火墙</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>启动docker</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>  <span class="token comment"># 启动docker服务</span>

systemctl stop <span class="token function">docker</span>  <span class="token comment"># 停止docker服务</span>

systemctl restart <span class="token function">docker</span>  <span class="token comment"># 重启docker服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker基本操作" tabindex="-1"><a class="header-anchor" href="#docker基本操作" aria-hidden="true">#</a> Docker基本操作</h2><h3 id="镜像相关" tabindex="-1"><a class="header-anchor" href="#镜像相关" aria-hidden="true">#</a> 镜像相关</h3>`,8),k={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},h=i(`<ol><li>拉取镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>查询目前拥有的镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>将镜像导出到磁盘</li></ol><blockquote><p>docker save -o [保存的目标文件名称] [镜像名称]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save <span class="token parameter variable">-o</span> nginx.tar nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>删除镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>加载本地镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="容器相关" tabindex="-1"><a class="header-anchor" href="#容器相关" aria-hidden="true">#</a> 容器相关</h3><ol><li>创建运行容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> cxk <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>docker run ：创建并运行一个容器</li><li>--name : 给容器起一个名字，比如叫做mn</li><li>-p ：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口</li><li>-d：后台运行容器</li><li>nginx：镜像名称，例如nginx</li></ul></blockquote><ol start="2"><li>进入容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> cxk <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>docker exec ：进入容器内部，执行一个命令</li><li>-it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互</li><li>cxk ：要进入的容器的名称</li><li>bash：进入容器后执行的命令，bash是一个linux终端交互命令</li></ul></blockquote><ol start="3"><li>查看容器日志</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>查看容器状态</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="挂载数据卷" tabindex="-1"><a class="header-anchor" href="#挂载数据卷" aria-hidden="true">#</a> 挂载数据卷</h3><ol><li>创建数据卷</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建数据卷html</span>
<span class="token function">docker</span> volume create html 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查看数据卷</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>查看数据卷详细信息</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume inspect html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>可以通过这个命令看到挂载点为：&quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/html/_data&quot;,</p></blockquote><ol start="4"><li>删除数据卷</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">rm</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>删除所有未使用的数据卷</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>挂载数据卷</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> cxk <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> html:/root/html <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">80</span>:80
  nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>-v html:/root/htm ：把html数据卷挂载到容器内的/root/html这个目录中</li></ul></blockquote><p>nginx的html目录所在位置/usr/share/nginx/html</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> cxk <span class="token parameter variable">-v</span> html:/usr/share/nginx/html <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="直接挂载" tabindex="-1"><a class="header-anchor" href="#直接挂载" aria-hidden="true">#</a> 直接挂载</h3><blockquote><p>区别：</p><ul><li>带数据卷模式：宿主机目录 --&gt; 数据卷 ---&gt; 容器内目录</li><li>直接挂载模式：宿主机目录 ---&gt; 容器内目录</li></ul></blockquote><p>以Mysql为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">docker</span> run <span class="token punctuation">\\</span>
  	<span class="token parameter variable">--name</span> some-mysql <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>cxk123123 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /tmp/mysql/data:/var/lib/mysql  <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>左边挂载的/tmp/mysql/conf/hmy.cnf和/tmp/mysql/data:是自己的</p></blockquote><h2 id="dockerfile自定义镜像" tabindex="-1"><a class="header-anchor" href="#dockerfile自定义镜像" aria-hidden="true">#</a> Dockerfile自定义镜像</h2>`,45),g={href:"https://docs.docker.com/engine/reference/builder",target:"_blank",rel:"noopener noreferrer"},f=s("br",null,null,-1),x=i(`<ul><li>docker-demo.jar</li><li>jdk8.tar.gz</li><li>Dockerfile</li></ul><p>Dockerfile文件内容：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 指定基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:16.04</span>
<span class="token comment"># 配置环境变量，JDK的安装目录</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_DIR=/usr/local</span>

<span class="token comment"># 拷贝jdk和java项目的包</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./jdk8.tar.gz <span class="token variable">$JAVA_DIR</span>/</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./docker-demo.jar /tmp/app.jar</span>

<span class="token comment"># 安装JDK</span>
<span class="token instruction"><span class="token keyword">RUN</span> cd <span class="token variable">$JAVA_DIR</span> <span class="token operator">\\</span>
 &amp;&amp; tar -xf ./jdk8.tar.gz <span class="token operator">\\</span>
 &amp;&amp; mv ./jdk1.8.0_144 ./java8</span>

<span class="token comment"># 配置环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME=<span class="token variable">$JAVA_DIR</span>/java8</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH=<span class="token variable">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin</span>

<span class="token comment"># 暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8090</span>
<span class="token comment"># 入口，java项目的启动命令</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> java -jar /tmp/app.jar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> javaweb:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式安装Java8复杂，可以使用基于java:8-alpine镜像<br>Dockerfile文件</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> java:8-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./app.jar /tmp/app.jar</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8090</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> java -jar /tmp/app.jar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-Compose</h2><p>Docker Compose可以基于Compose文件帮我们快速的部署分布式应用，而无需手动一个个创建和运行容器！<br>DockerCompose文件可以看做是将多个docker run命令写到一个文件，只是语法稍有差异。<br>格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>version<span class="token operator">:</span> <span class="token string">&quot;3.8&quot;</span>
 services<span class="token operator">:</span>
  mysql<span class="token operator">:</span>
    image<span class="token operator">:</span> mysql<span class="token operator">:</span><span class="token number">5.7</span>.<span class="token number">25</span>
    environment<span class="token operator">:</span>
     MYSQL_ROOT_PASSWORD<span class="token operator">:</span> <span class="token number">123</span> 
    volumes<span class="token operator">:</span>
     - <span class="token string">&quot;/tmp/mysql/data:/var/lib/mysql&quot;</span>
     - <span class="token string">&quot;/tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf&quot;</span>
  web<span class="token operator">:</span>
    build<span class="token operator">:</span> .
    ports<span class="token operator">:</span>
     - <span class="token string">&quot;8090:8090&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockercompose安装" tabindex="-1"><a class="header-anchor" href="#dockercompose安装" aria-hidden="true">#</a> DockerCompose安装</h3><ol><li>下载docker-compose文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.23.1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改文件权限：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改权限</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>命令不全</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 补全命令</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果无法访问GitHub，可以修改host文件<br><code>echo &quot;199.232.68.133 raw.githubusercontent.com&quot; &gt;&gt; /etc/hosts</code></p></blockquote><h3 id="部署微服务" tabindex="-1"><a class="header-anchor" href="#部署微服务" aria-hidden="true">#</a> 部署微服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3.2&quot;</span>

services:
  nacos:
    image: nacos/nacos-server
    environment:
      MODE: standalone
    ports:
      - <span class="token string">&quot;8848:8848&quot;</span>
  mysql:
    image: mysql:5.7.25
    environment:
      MYSQL_ROOT_PASSWORD: <span class="token number">123</span>
    volumes:
      - <span class="token string">&quot;<span class="token environment constant">$PWD</span>/mysql/data:/var/lib/mysql&quot;</span>
      - <span class="token string">&quot;<span class="token environment constant">$PWD</span>/mysql/conf:/etc/mysql/conf.d/&quot;</span>
  userservice:
    build: ./user-service
  orderservice:
    build: ./order-service
  gateway:
    build: ./gateway
    ports:
      - <span class="token string">&quot;10010:10010&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到，其中包含5个service服务：</p><ul><li>nacos：作为注册中心和配置中心 <ul><li>image: nacos/nacos-server： 基于nacos/nacos-server镜像构建</li><li>environment：环境变量 <ul><li>MODE: standalone：单点模式启动</li></ul></li><li>ports：端口映射，这里暴露了8848端口</li></ul></li><li>mysql：数据库 <ul><li>image: mysql:5.7.25：镜像版本是mysql:5.7.25</li><li>environment：环境变量 <ul><li>MYSQL_ROOT_PASSWORD: 123：设置数据库root账户的密码为123</li></ul></li><li>volumes：数据卷挂载，这里挂载了mysql的data、conf目录，其中有我提前准备好的数据</li></ul></li><li>userservice、orderservice、gateway：都是基于Dockerfile临时构建的</li></ul></blockquote><p>每个微服务中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM java:8-alpine
COPY ./app.jar /tmp/app.jar
ENTRYPOINT <span class="token function">java</span> <span class="token parameter variable">-jar</span> /tmp/app.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，需要将将order-service、user-service、gateway服务的mysql、nacos地址都修改为基于容器名的访问。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>spring:
  datasource:
    url: jdbc:mysql://mysql:3306/cloud_order?useSSL<span class="token operator">=</span>false
    username: root
    password: <span class="token number">123</span>
    driver-class-name: com.mysql.jdbc.Driver
  application:
    name: orderservice
  cloud:
    nacos:
      server-addr: nacos:8848 <span class="token comment"># nacos服务地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="本地连接服务器docker" tabindex="-1"><a class="header-anchor" href="#本地连接服务器docker" aria-hidden="true">#</a> 本地连接服务器docker</h2>`,28),q={href:"https://blog.csdn.net/jy02268879/article/details/111185371",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>服务器上修改配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
 
<span class="token punctuation">{</span>
  <span class="token string">&quot;hosts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tcp://0.0.0.0:2375&quot;</span>, <span class="token string">&quot;unix:///var/run/docker.sock&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本地运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-H</span> tcp://IP:2375 version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简化命令：修改<code>~/.bash_profile</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">dk</span><span class="token operator">=</span><span class="token string">&quot;docker -H tcp://127.0.0.1:2375&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后可以：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dk <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function _(j,D){const a=c("ExternalLinkIcon");return r(),d("div",null,[t,s("p",null,[n("仓库："),s("a",p,[n("https://hub.docker.com/"),e(a)])]),u,s("ol",v,[s("li",null,[n("配置docker镜像加速："),s("a",m,[n("https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors"),e(a)])])]),b,s("p",null,[n("先去仓库搜索镜像："),s("a",k,[n("https://hub.docker.com/"),e(a)])]),h,s("p",null,[n("官方文档："),s("a",g,[n("https://docs.docker.com/engine/reference/builder"),e(a)]),f,n("构建一个Java项目：")]),x,s("p",null,[s("a",q,[n("https://blog.csdn.net/jy02268879/article/details/111185371"),e(a)])]),y])}const E=l(o,[["render",_],["__file","Docker.html.vue"]]);export{E as default};
