import{_ as i,c as a,o as n,ag as t}from"./chunks/framework.UtM2fnOC.js";const c=JSON.parse('{"title":"MkDocs","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"other/mkdocs.md","filePath":"other/mkdocs.md","lastUpdated":1756702380000}'),e={name:"other/mkdocs.md"};function l(p,s,h,k,d,r){return n(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="mkdocs" tabindex="-1">MkDocs <a class="header-anchor" href="#mkdocs" aria-label="Permalink to &quot;MkDocs&quot;">​</a></h1><p>决定同时使用 MdBook，应该尽量避免使用这里不通用的东西。</p><p>这里介绍一些 MkDocs 特有的格式。</p><p>更详细的请阅读 <a href="https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/" target="_blank" rel="noreferrer">Cyent</a>。</p><h2 id="警告框" tabindex="-1">警告框 <a class="header-anchor" href="#警告框" aria-label="Permalink to &quot;警告框&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">!!! warning &quot;警告&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    样式有 ： </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`octicons\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`abstract\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`info\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`tip\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`success\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`example\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`question\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`warning\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`failure\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`danger\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`bug\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`quote\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">!!! warning &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    无标题式</span></span></code></pre></div><p>!!! warning &quot;警告&quot; 样式有 ： <code>octicons</code> <code>abstract</code> <code>info</code> <code>tip</code> <code>success</code> <code>example</code> <code>question</code> <code>warning</code> <code>failure</code> <code>danger</code> <code>bug</code> <code>quote</code></p><p>!!! warning &quot;&quot; 无标题式</p><p>警告框的形式很丰富，更多种类的示例见 <a href="https://squidfunk.github.io/mkdocs-material/reference/admonitions/" target="_blank" rel="noreferrer">Admonitions</a>。</p><h2 id="折叠块" tabindex="-1">折叠块 <a class="header-anchor" href="#折叠块" aria-label="Permalink to &quot;折叠块&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">??? bug &quot;折叠&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    折叠</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">???+ bug &quot;展开&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    展开</span></span></code></pre></div><p>??? bug &quot;折叠&quot; 折叠</p><p>???+ bug &quot;展开&quot; 展开</p><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><p>代码块支持背景高亮，支持更改代码起始行号。</p><pre><code>\`\`\`python hl_lines=&quot;2 3&quot; linenums=&quot;2&quot;
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] &gt; items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
\`\`\`
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bubble_sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items):</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items)):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items[j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                items[j], items[j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items[j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], items[j]</span></span></code></pre></div><h2 id="标签页" tabindex="-1">标签页 <a class="header-anchor" href="#标签页" aria-label="Permalink to &quot;标签页&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=== &quot;C&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\` c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #include &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int main(void) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    printf(&quot;Hello world!\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=== &quot;C++&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\` c++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #include &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int main(void) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    std::cout &lt;&lt; &quot;Hello world!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=== &quot;Haskell&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    偷偷告诉你我不会：）</span></span></code></pre></div><p>=== &quot;C&quot;</p><pre><code>\`\`\` c
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
</code></pre><h2 id="文本样式" tabindex="-1">文本样式 <a class="header-anchor" href="#文本样式" aria-label="Permalink to &quot;文本样式&quot;">​</a></h2><p>额外的文本样式，有需要请直接查阅 <a href="https://squidfunk.github.io/mkdocs-material/reference/formatting/" target="_blank" rel="noreferrer">Formatting</a>。</p>`,27)])])}const E=i(e,[["render",l]]);export{c as __pageData,E as default};
