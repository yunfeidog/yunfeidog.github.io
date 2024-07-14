import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as d,b as a,d as r,e as c,a as s}from"./app-51564aae.js";const t={},o=s(`<h1 id="centos安装mysql-原生安装" tabindex="-1"><a class="header-anchor" href="#centos安装mysql-原生安装" aria-hidden="true">#</a> Centos安装mysql（原生安装）</h1><p>在 CentOS 上安装 MySQL 时，通常建议先删除 MariaDB，以避免潜在的冲突。因为默认情况下，CentOS 内部集成了 MariaDB，而安装 MySQL 的话会和 MariaDB 的文件冲突。</p><p>可以使用以下命令检查是否安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-pa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h2><p>先到目录中进行下载软件包rpm文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token function">mkdir</span> mysql
<span class="token builtin class-name">cd</span> mysql
<span class="token function">wget</span>  https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装下载的 <code>mysql80-community-release-el7-1.noarch.rpm</code> 包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql80-community-release-el7-1.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用 yum 命令安装 MySQL 8 软件包。运行以下命令来安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，启动 MySQL 服务并将其设置为自动启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start mysqld
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，运行安全设置脚本以保护 MySQL 实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker安装mysql" tabindex="-1"><a class="header-anchor" href="#docker安装mysql" aria-hidden="true">#</a> Docker安装mysql</h2><p>国内 daocloud 一键安装命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/docker <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看docker运行状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装mysql-1" tabindex="-1"><a class="header-anchor" href="#安装mysql-1" aria-hidden="true">#</a> 安装mysql：</h3>`,23),p={href:"https://hub.docker.com/search?q=mysql&type=image",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>拉取mysql镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建mysql容器并运行，名字为mysql8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql8 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>cxk@12345 <span class="token parameter variable">-d</span> mysql:8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器mysql8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql8 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入mysql命令行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>这时候需要密码，需要去设置，先关闭mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop mysql8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用以下命令编辑 MySQL 配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>[mysqld]</code> 标志下添加一行 <code>skip-grant-tables</code></p><p>重启mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start mysql8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看容器运行状态： -a可以省去，加上表示查看所有包括已经停止的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入mysql容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql8  /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql8 <span class="token parameter variable">--mount</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>mysql-data,target<span class="token operator">=</span>/var/lib/mysql mysql8 --skip-grant-tables

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>centos查看端口占用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql8 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function m(v,b){const e=l("ExternalLinkIcon");return i(),d("div",null,[o,a("p",null,[a("a",p,[r("https://hub.docker.com/search?q=mysql&type=image"),c(e)])]),u])}const g=n(t,[["render",m],["__file","centos-安装mysql.html.vue"]]);export{g as default};
