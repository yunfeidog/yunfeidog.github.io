import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as m,b as s,d as a,e as r,a as n}from"./app-51564aae.js";const c={},d=n('<h1 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序" aria-hidden="true">#</a> 拓扑排序</h1><blockquote><p>给定一个有向无环图(DAG)，排出所有顶点的一个序列A满足：对于图中每条有向边(x,y),x在A中都出现在y之前，则A是该图中的顶点的一个拓扑序</p><p>拓扑排序可以判断 有向图中是否有环 ，可以生成拓扑序列</p></blockquote><h2 id="kahn-卡恩-算法" tabindex="-1"><a class="header-anchor" href="#kahn-卡恩-算法" aria-hidden="true">#</a> Kahn（卡恩）算法</h2><ul><li>e[x]存点x的邻点，res存拓扑序列，d[x]存x的入度</li></ul><p>算法流程：核心用队列维护一个入度为0的节点的集合。</p><ol><li>初始化，队列q压入所有入度为0的点；</li><li>每次从q中取出一个点x放入数组res;</li><li>然后将×的所有出边删除。若将边(x,y)删除后，y的入度变为0，则将y压入q中</li><li>不断重复2,3过程，直到队列q为空。</li><li>res中的元素个数等于n,则有拓扑序；否则，有环。</li></ol><h3 id="题目-有向图的拓扑序列" tabindex="-1"><a class="header-anchor" href="#题目-有向图的拓扑序列" aria-hidden="true">#</a> 题目-有向图的拓扑序列</h3>',7),o={href:"https://www.acwing.com/problem/content/850/",target:"_blank",rel:"noopener noreferrer"},u=s("p",null,[a("给定一个 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 个点 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 条边的有向图，点的编号是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a("，图中可能存在重边和自环。")],-1),h=s("p",null,[a("请输出任意一个该有向图的拓扑序列，如果拓扑序列不存在，则输出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1")])])]),a("。")],-1),p=s("p",null,[a("若一个由图中所有点构成的序列 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"A")]),s("annotation",{encoding:"application/x-tex"},"A")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"A")])])]),a(" 满足：对于图中的每条边 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(x, y)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])]),a("，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" 在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"A")]),s("annotation",{encoding:"application/x-tex"},"A")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"A")])])]),a(" 中都出现在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])]),a(" 之前，则称 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"A")]),s("annotation",{encoding:"application/x-tex"},"A")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"A")])])]),a(" 是该图的一个拓扑序列。")],-1),v=s("h4",{id:"输入格式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#输入格式","aria-hidden":"true"},"#"),a(" 输入格式")],-1),x=s("p",null,[a("第一行包含两个整数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a("。")],-1),b=s("p",null,[a("接下来 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 行，每行包含两个整数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])]),a("，表示存在一条从点 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" 到点 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])]),a(" 的有向边 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(x, y)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])]),a("。")],-1),g=s("h4",{id:"输出格式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#输出格式","aria-hidden":"true"},"#"),a(" 输出格式")],-1),w=s("p",null,"共一行，如果存在拓扑序列，则输出任意一个合法的拓扑序列即可。",-1),y=s("p",null,[a("否则输出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1")])])]),a("。")],-1),k=s("h4",{id:"数据范围",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据范围","aria-hidden":"true"},"#"),a(" 数据范围")],-1),M=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"≤"),s("mi",null,"n"),s("mo",{separator:"true"},","),s("mi",null,"m"),s("mo",null,"≤"),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"5")])]),s("annotation",{encoding:"application/x-tex"},"1 \\le n,m \\le 10^5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7804em","vertical-align":"-0.136em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8304em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"5")])])])])])])])])])])],-1),f=n(`<h4 id="输入样例" tabindex="-1"><a class="header-anchor" href="#输入样例" aria-hidden="true">#</a> 输入样例：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 3
1 2
2 3
1 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输出样例" tabindex="-1"><a class="header-anchor" href="#输出样例" aria-hidden="true">#</a> 输出样例：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 2 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;bits/stdc++.h&gt;

#define int long long
using namespace std;

const int N = 1e5 + 10;
int n, m;
vector&lt;int&gt; e[N], res;
vector&lt;int&gt; d(N);

bool topsort() {
    queue&lt;int&gt; q;
    for (int i = 1; i &lt;= n; i++) {
        if (d[i] == 0) q.push(i);
    }
    while (q.size()) {
        auto t = q.front();
        q.pop();
        res.push_back(t);
        for (auto y: e[t]) {
            if (--d[y] == 0) q.push(y);
        }
    }
    return res.size() == n;
}


signed main() {
#ifndef ONLINE_JUDGE
    freopen(&quot;test.in&quot;, &quot;r&quot;, stdin);
    freopen(&quot;test.out&quot;, &quot;w&quot;, stdout);
#endif
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= m; i++) {
        int x, y;
        cin &gt;&gt; x &gt;&gt; y;
        e[x].push_back(y);
        d[y]++;
    }
    if (topsort()) {
        for (const auto &amp;item: res) {
            cout &lt;&lt; item &lt;&lt; &quot; &quot;;
        }
    } else {
        cout &lt;&lt; -1 &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dfs算法" tabindex="-1"><a class="header-anchor" href="#dfs算法" aria-hidden="true">#</a> DFS算法</h2><ul><li>e[x]存点x的邻点，res存拓扑序列，d[x]存x的入度</li></ul><p>算法的核心是变色法，一路搜一路给点变色，如果有拓扑序，每个点的颜色都会从0→-1→1，经历三次变色。</p><ol><li>初始状态，所有点染色为0。</li><li>枚举每个点，进入×点，把x染色为-1。然后，枚举x的儿子y,如果y的颜色为0，说明没碰过该点，进入y继续走，</li><li>如果枚举完×的儿子，没发现环，则×染色为1，并把×压入tp数组</li><li>如果发现有个熊孩子的颜色为-1，说明回到了祖先节点，发现了环，则一路返回false,退出程序</li></ol><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;bits/stdc++.h&gt;

#define int long long
using namespace std;

const int N = 1e5 + 10;
vector&lt;int&gt; e[N], res, c(N);
int n, m;

int dfs(int x) {
    c[x] = -1;
    for (auto y: e[x]) {
        if (c[y] == -1) return 0;//有环
        else if (c[y] == 0) {
            int t = dfs(y);
            if (t == 0) return 0;
        }
    }
    c[x] = 1;
    res.push_back(x);
    return 1;
}

bool topsort() {
    for (int i = 1; i &lt;= n; i++) {
        if (c[i] == 0) {
            int t = dfs(i);
            if (t == 0) return 0;
        }
    }
    std::reverse(res.begin(), res.end());
    return 1;
}

signed main() {
#ifndef ONLINE_JUDGE
    freopen(&quot;test.in&quot;, &quot;r&quot;, stdin);
    freopen(&quot;test.out&quot;, &quot;w&quot;, stdout);
#endif
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= m; i++) {
        int x, y;
        cin &gt;&gt; x &gt;&gt; y;
        e[x].push_back(y);
    }
    if (topsort()) {
        for (const auto &amp;item: res) {
            cout &lt;&lt; item &lt;&lt; &quot; &quot;;
        }
    } else {
        cout &lt;&lt; -1 &lt;&lt; endl;
    }


    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(q,L){const l=t("ExternalLinkIcon");return i(),m("div",null,[d,s("p",null,[a("链接："),s("a",o,[a("https://www.acwing.com/problem/content/850/"),r(l)])]),u,h,p,v,x,b,g,w,y,k,M,f])}const E=e(c,[["render",_],["__file","拓扑排序.html.vue"]]);export{E as default};
