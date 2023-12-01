import{_ as s,o as a,c as n,R as l}from"./chunks/framework.XiqD54nH.js";const C=JSON.parse('{"title":"环境配置","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"basic/grammer/enviroment.md","filePath":"basic/grammer/enviroment.md","lastUpdated":1701394643000}'),o={name:"basic/grammer/enviroment.md"},p=l(`<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><h2 id="什么是-c-语言" tabindex="-1">什么是 C 语言 <a class="header-anchor" href="#什么是-c-语言" aria-label="Permalink to &quot;什么是 C 语言&quot;">​</a></h2><p>C 语言诞生于 1970 年左右，至今仍然保持着旺盛的活力。</p><p>C 程序是分布在一个或多个源文件（Source file，以 <code>.c</code> 后缀结尾）和头文件（Header file，以 <code>.h</code> 后缀结尾）的代码的集合。这些文件都是<strong>纯文本</strong>。</p><p>C 语言是标准化的语言，主要有以下版本</p><ul><li>C89，最经典、最广泛使用的版本。</li><li>C99，主要特性：变长数组、单行注释 <code>//</code>、更灵活的变量声明、废弃 <code>gets()</code>。</li><li>C11，主要特性：多线程原子支持、泛型选择、匿名结构体、改进求值顺序约定、移除 <code>gets()</code>。</li><li>C17，没有大的变化。</li><li>C23，主要特性：移除旧式函数声明、数字分隔符、未命名参数、<code>true</code> 和 <code>false</code> 成为关键字。</li></ul><h2 id="什么是-c-编译器" tabindex="-1">什么是 C 编译器 <a class="header-anchor" href="#什么是-c-编译器" aria-label="Permalink to &quot;什么是 C 编译器&quot;">​</a></h2><p>编译器是将 C 语言源代码转化为机器代码（也称为二进制代码）的关键工具。有多种 C 语言编译器供选择：</p><ul><li><a href="https://gcc.gnu.org" target="_blank" rel="noreferrer">GCC</a>：是 GCC 工具链的一部分，是 Linux 等系统的默认编译器。 <ul><li><a href="https://www.mingw-w64.org/" target="_blank" rel="noreferrer">MingW</a>：是 GCC 工具链的 Windows 移植版本。</li></ul></li><li><a href="https://docs.microsoft.com/en-us/cpp/" target="_blank" rel="noreferrer">MSVC</a>：是微软的 Visual Studio IDE 的一部分。</li><li><a href="https://clang.llvm.org/" target="_blank" rel="noreferrer">Clang</a>：是 LLVM 工具链的一部分。最新的 Visual Studio 也支持 Clang。</li></ul><p>C 程序是以纯文本形式存储的，因此您可以使用自己喜欢的文本编辑器来编写代码，例如 <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Visual Studio Code</a>、<a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">Sublime Text</a>、<a href="https://www.vim.org" target="_blank" rel="noreferrer">Vim</a>、<a href="https://www.gnu.org/software/emacs/" target="_blank" rel="noreferrer">Emacs</a> 等。</p><p>此外，还有一些将编辑和编译功能集成到一体的 IDE（集成开发环境），例如 <a href="https://www.jetbrains.com/clion/" target="_blank" rel="noreferrer">CLion</a>、<a href="https://visualstudio.microsoft.com/" target="_blank" rel="noreferrer">Visual Studio</a>、<a href="https://www.qt.io/zh-cn/product/development-tools" target="_blank" rel="noreferrer">QT Creator</a> 等，它们提供了更多的工具和功能，以便更方便地编写、调试和构建 C 语言程序。</p><h3 id="windows-安装" tabindex="-1">Windows 安装 <a class="header-anchor" href="#windows-安装" aria-label="Permalink to &quot;Windows 安装&quot;">​</a></h3><p>如果你还没有编程经验，我建议选择轻量级的 IDE，比如 <a href="https://royqh.net/redpandacpp/" target="_blank" rel="noreferrer">小熊猫 DEV</a>。这将让你免去配置开发环境的麻烦，同时不会因为大型 IDE 的项目管理功能而头痛。在需要的时候，你还可以手动调用 gcc 命令。</p><p>学长录制的小熊猫 DEV 安装教程：<a href="https://www.bilibili.com/video/av860184539" target="_blank" rel="noreferrer">https://www.bilibili.com/video/av860184539</a>。</p><blockquote><p>需要特别强调的是，我不推荐初学者使用 Visual Studio。VS 在较长时间内对新的 C 标准支持不积极，2013 年才不完全地支持 C99<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>，且直到 2020 年才开始支持 C11 和 C17<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>。此外，它仍然默认启用了许多非标准的语言扩展，对于刚入门的初学者来说，很难分辨哪些是微软的特有功能。而且使用 Visual Studio 需要一定的学习成本，因此初学者更适合使用即开即用的轻量级 IDE。</p></blockquote><p>如果你有一定的编程经验，那么你可以根据自己的喜好来自由定制开发环境。</p><p>如果你所使用的教材依然使用 VC6.0、CFree、Turbo C 等古老的软件，建议直接丢弃这些教材。</p><h3 id="linux-macos-安装" tabindex="-1">Linux &amp; macOS 安装 <a class="header-anchor" href="#linux-macos-安装" aria-label="Permalink to &quot;Linux &amp; macOS 安装&quot;">​</a></h3><p>假如是 macOS，您可以尝试 <a href="https://oi-wiki.org/tools/editor/xcode/" target="_blank" rel="noreferrer">XCode</a>。如果是 Linux 等其他系统，您可以向身边的专家请教。</p><blockquote><p>如果您使用 Windows，我也强烈推荐您尝试一下 <a href="https://learn.microsoft.com/zh-cn/windows/wsl/" target="_blank" rel="noreferrer">WSL</a>（Windows Subsystem for Linux），与 VSCode 配合的很好。</p></blockquote><p>这里以 Ubuntu 为例子，环境配置只需一行命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span></span></code></pre></div><h2 id="测试编译" tabindex="-1">测试编译 <a class="header-anchor" href="#测试编译" aria-label="Permalink to &quot;测试编译&quot;">​</a></h2><p>您可以使用上文配置好的环境，并输入以下程序：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello, </span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">!</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello, </span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">!</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在弹出的命令行窗口中输入您的名字（甚至可以输入中文），计算机将会向您发送个性化的问候。假如你能够成功的编译运行这份代码，你的环境配置就成功了。</p><h3 id="vs-兼容性问题" tabindex="-1">VS 兼容性问题 <a class="header-anchor" href="#vs-兼容性问题" aria-label="Permalink to &quot;VS 兼容性问题&quot;">​</a></h3><p>再次建议，如果您还未完全熟悉 C 语言，并且周围没有技术专家提供帮助，最好不要过早地使用 VS。这是因为使用 VS 可能会引发与微软特有技术相关的一些兼容性问题，这些问题可能需要一定的经验来解决。</p><p>以下问题是由同学们在交流中提出的，您可能还会遇到其他困难。</p><h4 id="scanf" tabindex="-1">scanf <a class="header-anchor" href="#scanf" aria-label="Permalink to &quot;scanf&quot;">​</a></h4><p>可能会看到以下错误信息：</p><blockquote><p>C4996 <code>scanf</code>: This function or variable may be unsafe. Consider using <code>scanf_s</code> instead. To disable deprecation, use <code>_CRT_SECURE_NO_WARNINGS</code>. See online help for details.</p></blockquote><p>当遇到此错误时，不必惊慌，请仔细阅读报错信息，并辅以网上检索。</p><p>不难理清问题：<code>scanf</code> 可能导致缓冲区溢出等安全问题，被微软认为是不安全的函数从而废弃。可以通过禁用安全检查或者换用安全函数 <code>scanf_s</code> 规避。</p><p>一般情况下，假如您确信自己的代码是安全的，在代码最开头增加一行即可禁用安全检查。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_CRT_SECURE_NO_WARNINGS</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_CRT_SECURE_NO_WARNINGS</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span></code></pre></div><h4 id="min" tabindex="-1">min <a class="header-anchor" href="#min" aria-label="Permalink to &quot;min&quot;">​</a></h4><p>有同学发现以下代码在 VS 中无法编译：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdlib.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdlib.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>其原因是 VS 在 <code>stdlib.h</code> 和 <code>windows.h</code> 等头文件中声明了 <code>min</code> 和 <code>max</code> 等宏，因此无法声明自己的 <code>min</code> 函数。</p><p>您可以通过 <a href="https://learn.microsoft.com/zh-cn/cpp/build/reference/za-ze-disable-language-extensions" target="_blank" rel="noreferrer">禁用语言扩展</a> 来解决此问题。</p><h3 id="命令行编译" tabindex="-1">命令行编译 <a class="header-anchor" href="#命令行编译" aria-label="Permalink to &quot;命令行编译&quot;">​</a></h3><p>如果您使用的是 gcc 或者 clang，您可以在终端（比如 CMD）中编译。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 请按照 gcc &lt;source&gt; -o &lt;output&gt; 的格式填充命令</span></span>
<span class="line"><span style="color:#6A737D;"># 在 Windows 上会生成 hello.exe，在 Linux 上会生成 hello</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello.c</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span></span>
<span class="line"><span style="color:#6A737D;"># 也可以指定 gcc 的目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\S</span><span style="color:#9ECBFF;">oftware</span><span style="color:#79B8FF;">\\D</span><span style="color:#9ECBFF;">ev-Cpp</span><span style="color:#79B8FF;">\\M</span><span style="color:#9ECBFF;">inGW64</span><span style="color:#79B8FF;">\\b</span><span style="color:#9ECBFF;">in</span><span style="color:#79B8FF;">\\g</span><span style="color:#9ECBFF;">cc.exe</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\h</span><span style="color:#9ECBFF;">ello.c</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\h</span><span style="color:#9ECBFF;">ello</span></span>
<span class="line"><span style="color:#6A737D;"># 执行编译产物</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./hello</span></span>
<span class="line"><span style="color:#B392F0;">roger</span></span>
<span class="line"><span style="color:#B392F0;">Hello,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">roger!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 请按照 gcc &lt;source&gt; -o &lt;output&gt; 的格式填充命令</span></span>
<span class="line"><span style="color:#6A737D;"># 在 Windows 上会生成 hello.exe，在 Linux 上会生成 hello</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello.c</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span></span>
<span class="line"><span style="color:#6A737D;"># 也可以指定 gcc 的目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\S</span><span style="color:#032F62;">oftware</span><span style="color:#005CC5;">\\D</span><span style="color:#032F62;">ev-Cpp</span><span style="color:#005CC5;">\\M</span><span style="color:#032F62;">inGW64</span><span style="color:#005CC5;">\\b</span><span style="color:#032F62;">in</span><span style="color:#005CC5;">\\g</span><span style="color:#032F62;">cc.exe</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\h</span><span style="color:#032F62;">ello.c</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\h</span><span style="color:#032F62;">ello</span></span>
<span class="line"><span style="color:#6A737D;"># 执行编译产物</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./hello</span></span>
<span class="line"><span style="color:#6F42C1;">roger</span></span>
<span class="line"><span style="color:#6F42C1;">Hello,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">roger!</span></span></code></pre></div><p>编译程序有很多的参数，比如 <code>-Wall</code> 可以提供更多的检查，<code>-std=c99</code> 可以指定使用的参数。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;x = </span><span style="color:#79B8FF;">%lf\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;x = </span><span style="color:#005CC5;">%lf\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, x);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>强烈建议增加以上三个编译参数，可以帮助检查代码中的错误，节省调试时间。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello.c</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Wall</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Wextra</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-pedantic</span></span>
<span class="line"><span style="color:#B392F0;">hello.c:3:11:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">warning:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">implicit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">conversion</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;double&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;int&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">changes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.5</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> [-Wliteral-conversion]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">~</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">^~~</span></span>
<span class="line"><span style="color:#B392F0;">hello.c:4:23:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">warning:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">format</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">specifies</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;double&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">but</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">argument</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">has</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;int&#39;</span><span style="color:#E1E4E8;"> [-Wformat]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">&quot;x = %lf\\n&quot;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">x</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">~~~</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">^</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">%d</span></span>
<span class="line"><span style="color:#B392F0;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">warnings</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generated.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello.c</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Wall</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Wextra</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-pedantic</span></span>
<span class="line"><span style="color:#6F42C1;">hello.c:3:11:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">warning:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">implicit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">conversion</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;double&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;int&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">changes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">value</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.5</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> [-Wliteral-conversion]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#032F62;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">~</span><span style="color:#24292E;">   </span><span style="color:#032F62;">^~~</span></span>
<span class="line"><span style="color:#6F42C1;">hello.c:4:23:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">warning:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">format</span><span style="color:#24292E;"> </span><span style="color:#032F62;">specifies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;double&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">but</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">argument</span><span style="color:#24292E;"> </span><span style="color:#032F62;">has</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;int&#39;</span><span style="color:#24292E;"> [-Wformat]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">printf</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&quot;x = %lf\\n&quot;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">x</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">~~~</span><span style="color:#24292E;">     </span><span style="color:#032F62;">^</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">%d</span></span>
<span class="line"><span style="color:#6F42C1;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">warnings</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generated.</span></span></code></pre></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://devblogs.microsoft.com/cppblog/c99-library-support-in-visual-studio-2013/" target="_blank" rel="noreferrer">C99 library support in Visual Studio 2013</a> <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p><a href="https://devblogs.microsoft.com/cppblog/c11-and-c17-standard-support-arriving-in-msvc/" target="_blank" rel="noreferrer">C11 and C17 Standard Support Arriving in MSVC</a> <a href="#fnref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,50),e=[p];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{C as __pageData,h as default};