import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,b as n,d as s,e,a as i}from"./app-51564aae.js";const p={},r=i('<h1 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h1><h2 id="consul" tabindex="-1"><a class="header-anchor" href="#consul" aria-hidden="true">#</a> consul</h2><h3 id="mac版本" tabindex="-1"><a class="header-anchor" href="#mac版本" aria-hidden="true">#</a> mac版本</h3>',3),d={href:"https://www.cnblogs.com/niceyoo/p/14223158.html",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),m={href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),v=n("code",null,"/usr/local/bin 检查安装情况：",-1),b=n("p",null,[s("启动"),n("code",null,"consul agent -dev")],-1),h=n("h2",{id:"etcd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#etcd","aria-hidden":"true"},"#"),s(" Etcd")],-1),g=n("h3",{id:"mac版本-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mac版本-1","aria-hidden":"true"},"#"),s(" mac版本")],-1),f={href:"https://etcd.io/docs/v3.5/install/",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update
brew <span class="token function">install</span> etcd
etcd <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h2>`,2),_=n("br",null,null,-1),x={href:"https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.8.4/apache-zookeeper-3.8.4-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"},w=i('<p>解压后，创建一个用于存放data的地方</p><figure><img src="https://s2.loli.net/2024/04/23/8qPMmJNrYZbvuW3.webp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>到conf文件夹</p><figure><img src="https://s2.loli.net/2024/04/23/xdikhUrg5pL6ucq.webp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>复制一个cfg文件编辑:<code>cp zoo_sample.cfg zoo.cfg</code><br> 修改dataDir目录位置</p><figure><img src="https://s2.loli.net/2024/04/23/3MfqrejEuwx4zny.webp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>启动zookeeper：<br><code>sh zkServer.sh start</code><br> 使用<code>jps</code>命令查看Java进程</p><figure><img src="https://s2.loli.net/2024/04/23/Xjakqz6VrZvyUpc.webp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>QuorumPeerMain为zookeeper<br> 查看运行状态：<br><code>sh zkServer.sh status</code><br> 停止运行：<code>sh zkServer.sh stop</code></p><p>使用homebrew安装:<code>brew install zookeeper</code><br> 启动命令：<code>zkServer start</code></p><figure><img src="https://s2.loli.net/2024/04/23/2eY5wdMtmFpVHQj.webp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p><code>安装后的默认路径为： /usr/local/etc/zookeeper</code></p><p>节点占用端口：2181,</p><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2>',14),q={href:"https://rocketmq.apache.org/download/",target:"_blank",rel:"noopener noreferrer"},z=i(`<p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 启动namesrv</span>
<span class="token function">nohup</span> <span class="token function">sh</span> bin/mqnamesrv <span class="token operator">&amp;</span>
 
<span class="token comment">### 验证namesrv是否启动成功</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> ~/logs/rocketmqlogs/namesrv.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="docker安装redis" tabindex="-1"><a class="header-anchor" href="#docker安装redis" aria-hidden="true">#</a> Docker安装Redis</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用docker-compose进行部署：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span> <span class="token comment"># 服务名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest <span class="token comment"># redis镜像版本</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis1 <span class="token comment"># 容器名称</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6379<span class="token punctuation">:</span><span class="token number">6379</span> <span class="token comment"># 指定宿主机端口与容器端口映射关系，宿主机：容器</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./conf/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf <span class="token comment"># 映射配置文件目录，宿主机:容器</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data <span class="token comment"># 映射数据目录，宿主机:容器</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always <span class="token comment"># 容器开机自启</span>
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 获取宿主机root权限</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;redis-server&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/etc/redis/redis.conf&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 指定配置文件启动redis-server进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构如下，把文件挂载到本地：</p><figure><img src="https://s2.loli.net/2024/06/17/V62dYITukthWErg.webp" alt="image-20240617225053149" tabindex="0" loading="lazy"><figcaption>image-20240617225053149</figcaption></figure><p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用docker exec 执行容器名称为redis6容器中的redis-cli命令连接redis</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis1 redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span>
<span class="token comment"># 查看当前redis的服务信息</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h3 id="docker安装mysql" tabindex="-1"><a class="header-anchor" href="#docker安装mysql" aria-hidden="true">#</a> Docker安装MySQL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用docker-compose部署</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span> <span class="token comment"># 服务名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>latest <span class="token comment"># 或其它mysql版本</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql1 <span class="token comment"># 容器名称</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123456 <span class="token comment"># root用户密码</span>
<span class="token comment">#      - TZ=Asia/Shanghai # 设置容器时区 我这里通过下面挂载方式同步的宿主机时区和时间了,这里忽略</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./log<span class="token punctuation">:</span>/var/log/mysql <span class="token comment"># 映射日志目录，宿主机:容器</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/mysql <span class="token comment"># 映射数据目录，宿主机:容器</span>
      <span class="token punctuation">-</span> ./conf.d<span class="token punctuation">:</span>/etc/mysql/conf.d <span class="token comment"># 映射配置目录，宿主机:容器</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro <span class="token comment"># 让容器的时钟与宿主机时钟同步，避免时间的问题，ro是read only的意思，就是只读。</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span> <span class="token comment"># 指定宿主机端口与容器端口映射关系，宿主机:容器</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always <span class="token comment"># 容器随docker启动自启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建文件如下：</p><p>主要建<code>conf.d</code>,<code>data</code>,<code>log</code>文件夹</p><figure><img src="https://s2.loli.net/2024/06/18/7qFZ3eUEP1y5vJ2.webp" alt="image-20240618110810674" tabindex="0" loading="lazy"><figcaption>image-20240618110810674</figcaption></figure><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将mysql配置文件复制一份到本地的<code>conf.d</code>文件夹中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> mysql1:/etc/my.cnf ./my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后停止并删除原来的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再重启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启远程访问：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入mysql容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql1 <span class="token function">bash</span>
<span class="token comment"># 连接mysql -u后接账户 -p接自定义的密码</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
<span class="token comment"># 使用mysql库</span>
use mysql<span class="token punctuation">;</span>
alter <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&quot;%&quot;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 刷新权限</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> Jenkins</h2><h3 id="docker安装jenkins" tabindex="-1"><a class="header-anchor" href="#docker安装jenkins" aria-hidden="true">#</a> Docker安装Jenkins</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull jenkins/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当前目录创建一个<code>jenkins_home</code>目录</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span> <span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jenkins1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8085<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token punctuation">-</span> 50000<span class="token punctuation">:</span><span class="token number">50000</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./jenkins_home/<span class="token punctuation">:</span>/var/jenkins_home/
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
      <span class="token punctuation">-</span> /usr/bin/docker<span class="token punctuation">:</span>/usr/bin/docker
      <span class="token punctuation">-</span> /etc/docker/daemon.json<span class="token punctuation">:</span>/etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://s2.loli.net/2024/06/19/4aT5Vn8SBxChmlg.webp" alt="image-20240619172001438" tabindex="0" loading="lazy"><figcaption>image-20240619172001438</figcaption></figure><p>这个目录已经被我们映射出来了，直接查看密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cat</span> ./jenkins_home/secrets/initialAdminPassword 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>剩余配置内容放入Jenkins自动化部署博客中</p><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h3>`,44);function j(S,E){const a=c("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[s("教程："),n("a",d,[s("https://www.cnblogs.com/niceyoo/p/14223158.html"),e(a)]),u,s(" 官网下载链接："),n("a",m,[s("https://www.consul.io/downloads.html"),e(a)]),k,s(" 下载后，放入："),v,s("consul --version")]),b,h,g,n("p",null,[n("a",f,[s("https://etcd.io/docs/v3.5/install/"),e(a)])]),y,n("p",null,[s("下载地址："),_,n("a",x,[s("https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.8.4/apache-zookeeper-3.8.4-bin.tar.gz"),e(a)])]),w,n("p",null,[s("下载："),n("a",q,[s("https://rocketmq.apache.org/download/"),e(a)])]),z])}const V=t(p,[["render",j],["__file","常见环境搭建.html.vue"]]);export{V as default};
