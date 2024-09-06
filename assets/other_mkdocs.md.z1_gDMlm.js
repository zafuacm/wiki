import{_ as s,o as n,c as a,R as l}from"./chunks/framework.XiqD54nH.js";const h=JSON.parse('{"title":"MkDocs","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"other/mkdocs.md","filePath":"other/mkdocs.md","lastUpdated":1725628506000}'),p={name:"other/mkdocs.md"},o=l(`<h1 id="mkdocs" tabindex="-1">MkDocs <a class="header-anchor" href="#mkdocs" aria-label="Permalink to &quot;MkDocs&quot;">​</a></h1><p>决定同时使用 MdBook，应该尽量避免使用这里不通用的东西。</p><p>这里介绍一些 MkDocs 特有的格式。</p><p>更详细的请阅读 <a href="https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/" target="_blank" rel="noreferrer">Cyent</a>。</p><h2 id="警告框" tabindex="-1">警告框 <a class="header-anchor" href="#警告框" aria-label="Permalink to &quot;警告框&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">!!! warning &quot;警告&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    样式有 ： </span><span style="color:#79B8FF;">\`octicons\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`abstract\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`info\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`tip\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`success\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`example\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`question\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`warning\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`failure\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`danger\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`bug\`</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\`quote\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">!!! warning &quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    无标题式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">!!! warning &quot;警告&quot;</span></span>
<span class="line"><span style="color:#24292E;">    样式有 ： </span><span style="color:#005CC5;">\`octicons\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`abstract\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`info\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`tip\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`success\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`example\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`question\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`warning\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`failure\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`danger\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`bug\`</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\`quote\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">!!! warning &quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    无标题式</span></span></code></pre></div><p>!!! warning &quot;警告&quot; 样式有 ： <code>octicons</code> <code>abstract</code> <code>info</code> <code>tip</code> <code>success</code> <code>example</code> <code>question</code> <code>warning</code> <code>failure</code> <code>danger</code> <code>bug</code> <code>quote</code></p><p>!!! warning &quot;&quot; 无标题式</p><p>警告框的形式很丰富，更多种类的示例见 <a href="https://squidfunk.github.io/mkdocs-material/reference/admonitions/" target="_blank" rel="noreferrer">Admonitions</a>。</p><h2 id="折叠块" tabindex="-1">折叠块 <a class="header-anchor" href="#折叠块" aria-label="Permalink to &quot;折叠块&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">??? bug &quot;折叠&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    折叠</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">???+ bug &quot;展开&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    展开</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">??? bug &quot;折叠&quot;</span></span>
<span class="line"><span style="color:#24292E;">    折叠</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">???+ bug &quot;展开&quot;</span></span>
<span class="line"><span style="color:#24292E;">    展开</span></span></code></pre></div><p>??? bug &quot;折叠&quot; 折叠</p><p>???+ bug &quot;展开&quot; 展开</p><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><p>代码块支持背景高亮，支持更改代码起始行号。</p><pre><code>\`\`\`python hl_lines=&quot;2 3&quot; linenums=&quot;2&quot;
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] &gt; items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
\`\`\`
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bubble_sort</span><span style="color:#E1E4E8;">(items):</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(items)):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(items) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> i):</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> items[j] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> items[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]:</span></span>
<span class="line"><span style="color:#E1E4E8;">                items[j], items[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> items[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], items[j]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bubble_sort</span><span style="color:#24292E;">(items):</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(items)):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(items) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> i):</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> items[j] </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> items[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]:</span></span>
<span class="line"><span style="color:#24292E;">                items[j], items[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> items[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">], items[j]</span></span></code></pre></div><h2 id="标签页" tabindex="-1">标签页 <a class="header-anchor" href="#标签页" aria-label="Permalink to &quot;标签页&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">=== &quot;C&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\` c</span></span>
<span class="line"><span style="color:#E1E4E8;">    #include &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    int main(void) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    printf(&quot;Hello world!\\n&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    return 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">=== &quot;C++&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\` c++</span></span>
<span class="line"><span style="color:#E1E4E8;">    #include &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    int main(void) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    std::cout &lt;&lt; &quot;Hello world!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    return 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">=== &quot;Haskell&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    偷偷告诉你我不会：）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">=== &quot;C&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    \`\`\` c</span></span>
<span class="line"><span style="color:#24292E;">    #include &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    int main(void) {</span></span>
<span class="line"><span style="color:#24292E;">    printf(&quot;Hello world!\\n&quot;);</span></span>
<span class="line"><span style="color:#24292E;">    return 0;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">=== &quot;C++&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    \`\`\` c++</span></span>
<span class="line"><span style="color:#24292E;">    #include &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    int main(void) {</span></span>
<span class="line"><span style="color:#24292E;">    std::cout &lt;&lt; &quot;Hello world!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#24292E;">    return 0;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">=== &quot;Haskell&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    偷偷告诉你我不会：）</span></span></code></pre></div><p>=== &quot;C&quot;</p><pre><code>\`\`\` c
#include &lt;stdio.h&gt;

int main(void) {
  printf(&quot;Hello world!\\n&quot;);
  return 0;
}
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\` c++
#include &lt;iostream&gt;

int main(void) {
  std::cout &lt;&lt; &quot;Hello world!&quot; &lt;&lt; std::endl;
  return 0;
}
\`\`\`
</code></pre><p>=== &quot;Haskell&quot;</p><pre><code>偷偷告诉你我不会：）
</code></pre><h2 id="文本样式" tabindex="-1">文本样式 <a class="header-anchor" href="#文本样式" aria-label="Permalink to &quot;文本样式&quot;">​</a></h2><p>额外的文本样式，有需要请直接查阅 <a href="https://squidfunk.github.io/mkdocs-material/reference/formatting/" target="_blank" rel="noreferrer">Formatting</a>。</p>`,27),e=[o];function t(c,r,i,E,y,d){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
