import{_ as r,c as a,o as t,P as o}from"./chunks/framework.Bc42vIKE.js";const f=JSON.parse('{"title":"简介","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"basic/intro.md","filePath":"basic/intro.md","lastUpdated":1743070079000}'),i={name:"basic/intro.md"};function l(n,e,s,p,c,d){return t(),a("div",null,e[0]||(e[0]=[o('<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>入门大致分为三步，先学习 C 语言的语法，于刷题中熟练，最后学习一些基础算法。</p><p>接下来我将介绍一些入门资料。</p><h2 id="算法竞赛怎么比" tabindex="-1">算法竞赛怎么比 <a class="header-anchor" href="#算法竞赛怎么比" aria-label="Permalink to &quot;算法竞赛怎么比&quot;">​</a></h2><p>算法竞赛有多种赛制，不同赛制在资料携带、评测方式上有一定不同，但大都是在一定时限内解决算法问题。</p><p>为了评判代码的正确性，题目会准备若干数量的测试数据，你的代码只有在规定的内存、时间限制下结束并返回正确结果，才会被认为是正确的。</p><p>题目都会公开少量数据用于理解题意，称之样例。大部分题目都会隐藏后续的测试数据。因此你很有可能通过了样例，但无法通过全部的数据，所以被判为不通过。</p><p>从上面可以看出，算法竞赛对代码能力要求极高，因此在学习算法的过程中一定要重视刷题。</p><h2 id="学习平台" tabindex="-1">学习平台 <a class="header-anchor" href="#学习平台" aria-label="Permalink to &quot;学习平台&quot;">​</a></h2><p>通常来说，算法竞赛很少通过书籍来学习，因为网上到处是公开的资料。</p><p>互联网上有很多的 OJ（Online Judge，在线评测系统），有数万道各种难度的题目。我们只需在 OJ 上进行提交，会立即返回评测结果。</p><p>为了防止套取数据，从而写了一大堆 <code>if-else</code> 过题，大部分网站会对下载数据的频率做一定限制。部分 OJ 会随机打乱评测顺序。</p><p>一般来说，返回结果有如下几种类型：</p><ul><li>Accepted（AC），程序通过了所有数据，是正确的。</li><li>Wrong Answer（WA），程序返回了错误的答案。</li><li>Presentation Error（PE），程序输出含有格式错误。</li><li>Time Limited Exceeded（TLE），程序未在规定的时间返回答案。</li><li>Memory Limited Exceeded（MLE），程序使用了超出限制的内存。</li><li>Runtime Error（RTE 或 RE），程序未能正常结束。</li><li>Compile Error（CE），程序未能通过编译，无法运行。</li></ul><h2 id="acm-比赛考啥" tabindex="-1">ACM 比赛考啥 <a class="header-anchor" href="#acm-比赛考啥" aria-label="Permalink to &quot;ACM 比赛考啥&quot;">​</a></h2><p>算法竞赛一般全称程序设计竞赛，考察如何设计算法以解决题目，重点是解决问题的能力。</p><blockquote><p>高中也有算法竞赛，<a href="https://www.noi.cn/" target="_blank" rel="noreferrer">NOI 全国青少年信息学奥林匹克竞赛</a>，五大竞赛之一，NOI 金牌可以获得清北的保送资格。很多高中参与过 OI 的学生大学会继续参加 ACM，因此差距会非常巨大，当你还为 <code>for/if</code> 等语法烦恼时，OIer 可能已经有 10 年代码经验了，刚入学便能够摘金夺银。但是也不必焦虑，只要努力，我们都有机会摘金夺银！</p></blockquote><p>网上很少有总结 ACM 到底是啥，就一句写题。这里谈谈我的理解。</p><div class="warning custom-block"><p class="custom-block-title">常见误区</p><p>很多不了解的人对算法竞赛有所误解，认为 ACM 类似知识竞赛，只要“博览”常见算法就能取得一个不错的成绩；也有人认为 ACM 只是对着一堆算法模版去照着敲，没多少创新，比的都是理解题目的能力。</p><p>“会的算法多”不代表“竞赛能力强”。如果把算法比作轮子的话，算法比赛比的就是谁能拿轮子造出优秀的汽车。在刚学新算法时，题目要求你造的只是一辆独轮车，而比赛时选手需要造的有可能是一辆坦克。一味的增加轮子的种类数而不去训练造车的方法，是无法在比赛中拿到好成绩的。“算法竞赛”不是“算法数量大赛”。<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><p>重点是做题方法与思考能力，也就是常说的思维，而不是知识清单。这类似无招胜有招的道理。</p></div><p>算法竞赛更倾向于“设计”与“创造”。简而言之，你需要创造算法，而不是使用算法。</p><p>算法竞赛有点研究的气质，可能与大家接触的工程相关画风很不一致。事实也确实如此，算法竞赛和学术界的联系比较紧密。</p><p>竞赛界目前远落后于学术界，经常有选手研读并引入的论文里的算法。但在部分问题上，竞赛界也有一些领先，OI 国家集训队每年都会出一本 <a href="https://github.com/OI-wiki/libs/tree/master/%E9%9B%86%E8%AE%AD%E9%98%9F%E5%8E%86%E5%B9%B4%E8%AE%BA%E6%96%87" target="_blank" rel="noreferrer">论文集</a>，部分优秀论文可以发 <a href="https://drops.dagstuhl.de/opus/volltexte/2018/10043/" target="_blank" rel="noreferrer">SOSA Paper</a>。也有很多算法选手会往计算机的理论方向发展，如 TCS（<a href="https://en.wikipedia.org/wiki/Theoretical_computer_science" target="_blank" rel="noreferrer">Theoretical computer science</a>）和 PLT（<a href="https://en.wikipedia.org/wiki/Programming_language_theory" target="_blank" rel="noreferrer">Programming language theory</a>）。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>摘自 <a href="https://www.zhihu.com/question/391533687/answer/1194659474" target="_blank" rel="noreferrer">您认为您最想告诉OI初学者的是什么？ - 扶苏的回答 - 知乎</a>。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',24)]))}const m=r(i,[["render",l]]);export{f as __pageData,m as default};
