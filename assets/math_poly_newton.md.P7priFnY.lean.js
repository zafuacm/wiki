import{_ as l,o as Q,c as T,k as t,a as s,R as a}from"./chunks/framework.XiqD54nH.js";const y3=JSON.parse('{"title":"多项式牛顿迭代","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"math/poly/newton.md","filePath":"math/poly/newton.md","lastUpdated":1701394643000}'),e={name:"math/poly/newton.md"},n=t("h1",{id:"多项式牛顿迭代",tabindex:"-1"},[s("多项式牛顿迭代 "),t("a",{class:"header-anchor",href:"#多项式牛顿迭代","aria-label":'Permalink to "多项式牛顿迭代"'},"​")],-1),o=t("blockquote",null,[t("p",null,"尝试不带 FFT/NTT 讲解，似乎真的能讲？")],-1),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.685ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3838.6 1000","aria-hidden":"true"},d=a("",1),p=[d],c=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mn",null,"0")])],-1),i={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.136ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 6247.9 899","aria-hidden":"true"},g=a("",1),y=[g],H=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"="),t("mi",null,"g"),t("mo",{lspace:"thickmathspace",rspace:"thickmathspace"},"mod"),t("msup",null,[t("mi",null,"x"),t("mi",null,"n")])])],-1),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.935ex",height:"2.351ex",role:"img",focusable:"false",viewBox:"0 -833.9 6601.5 1038.9","aria-hidden":"true"},w=a("",1),f=[w],x=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"g"),t("mn",null,"1")]),t("mo",null,"="),t("mi",null,"g"),t("mo",{lspace:"thickmathspace",rspace:"thickmathspace"},"mod"),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])])])],-1),M={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.536ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2005 1000","aria-hidden":"true"},k=a("",1),Z=[k],_=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")")])],-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.163ex",height:"1.783ex",role:"img",focusable:"false",viewBox:"0 -583 2724.1 788","aria-hidden":"true"},D=a("",1),v=[D],F=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"g"),t("mo",null,"="),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")])])],-1),C={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.552ex"},xmlns:"http://www.w3.org/2000/svg",width:"59.24ex",height:"4.876ex",role:"img",focusable:"false",viewBox:"0 -1469 26184 2155","aria-hidden":"true"},B=a("",1),j=[B],S=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mn",null,"0"),t("mo",null,"="),t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mfrac",null,[t("mrow",null,[t("msup",null,[t("mi",null,"A"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")]),t("mrow",null,[t("mn",null,"1"),t("mo",null,"!")])]),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",null,"−"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mfrac",null,[t("mrow",null,[t("msup",null,[t("mi",null,"A"),t("mo",{"data-mjx-alternate":"1"},"″")]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")]),t("mrow",null,[t("mn",null,"2"),t("mo",null,"!")])]),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",null,"−"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("msup",null,[t("mo",{stretchy:"false"},")"),t("mn",null,"2")]),t("mo",null,"+"),t("mo",null,"⋯")])],-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.912ex",height:"1.783ex",role:"img",focusable:"false",viewBox:"0 -583 2613 788","aria-hidden":"true"},R=a("",1),N=[R],O=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"g"),t("mo",null,"−"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")])])],-1),z={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},J=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),G=[J],X=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n")])],-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.557ex",role:"img",focusable:"false",viewBox:"0 -666 500 688","aria-hidden":"true"},W=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mn"},[t("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",style:{"stroke-width":"3"}})])])],-1),K=[W],Y=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"0")])],-1),t1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},a1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"46.483ex",height:"2.565ex",role:"img",focusable:"false",viewBox:"0 -883.9 20545.6 1133.9","aria-hidden":"true"},Q1=a("",1),T1=[Q1],s1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mn",null,"0"),t("mo",null,"≡"),t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"≡"),t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("msup",null,[t("mi",null,"A"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",null,"−"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])],-1),l1=t("p",null,"因此",-1),e1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},n1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.744ex",height:"5.475ex",role:"img",focusable:"false",viewBox:"0 -1460 12705 2420","aria-hidden":"true"},o1=a("",1),r1=[o1],m1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"g"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mfrac",null,[t("mrow",null,[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")]),t("mrow",null,[t("msup",null,[t("mi",null,"A"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")])]),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])],-1),d1=t("p",null,"更具体的，可以写做",-1),p1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},c1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-3.056ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.965ex",height:"6.359ex",role:"img",focusable:"false",viewBox:"0 -1460 13244.3 2810.8","aria-hidden":"true"},i1=a("",1),h1=[i1],g1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"g"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mfrac",null,[t("mrow",null,[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")]),t("mrow",null,[t("mfrac",null,[t("mrow",null,[t("mi",null,"∂"),t("msup",null,[t("mi",null,"A"),t("mo",{"data-mjx-alternate":"1"},"′")])]),t("mrow",null,[t("mi",null,"∂"),t("mi",null,"g")])]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")")])]),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])],-1),y1=t("h2",{id:"多项式-inv",tabindex:"-1"},[s("多项式 inv "),t("a",{class:"header-anchor",href:"#多项式-inv","aria-label":'Permalink to "多项式 inv"'},"​")],-1),H1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.059ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8866 1000","aria-hidden":"true"},u1=a("",1),w1=[u1],f1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"f"),t("mo",null,"∗"),t("mi",null,"g"),t("mo",null,"−"),t("mn",null,"1"),t("mo",null,"="),t("mn",null,"0")])],-1),x1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},M1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-5.111ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.177ex",height:"11.354ex",role:"img",focusable:"false",viewBox:"0 -2759.2 12454 5018.5","aria-hidden":"true"},E1=a("",1),k1=[E1],Z1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[t("mtr",null,[t("mtd",null,[t("mi",null,"g")]),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mfrac",null,[t("mrow",null,[t("mi",null,"f"),t("mo",null,"∗"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mn",null,"1")]),t("mi",null,"f")])])]),t("mtr",null,[t("mtd"),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mo",{stretchy:"false"},"("),t("mi",null,"f"),t("mo",null,"∗"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mn",null,"1"),t("mo",{stretchy:"false"},")"),t("mo",null,"∗"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")])])]),t("mtr",null,[t("mtd"),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("mn",null,"2"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mi",null,"f"),t("mo",null,"∗"),t("msubsup",null,[t("mi",null,"g"),t("mn",null,"0"),t("mn",null,"2")]),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])])])])],-1),_1=a("",3),V1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},b1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.016ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.026ex",height:"5.262ex",role:"img",focusable:"false",viewBox:"0 -1435 5315.3 2326","aria-hidden":"true"},D1=a("",1),v1=[D1],F1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"ln"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"f"),t("mo",null,"="),t("mo",{"data-mjx-texclass":"OP"},"∫"),t("mfrac",null,[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mi",null,"f")])])],-1),C1=a("",3),A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},B1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.055ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8422.2 1000","aria-hidden":"true"},j1=a("",1),S1=[j1],P1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"ln"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"g"),t("mo",null,"−"),t("mi",null,"f"),t("mo",null,"="),t("mn",null,"0")])],-1),I1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},R1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-3.705ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.966ex",height:"8.541ex",role:"img",focusable:"false",viewBox:"0 -2137.5 15455.1 3774.9","aria-hidden":"true"},N1=a("",1),O1=[N1],z1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[t("mtr",null,[t("mtd",null,[t("mi",null,"g")]),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mfrac",null,[t("mrow",null,[t("mi",null,"ln"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mi",null,"f")]),t("mrow",null,[t("mn",null,"1"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")])])])])]),t("mtr",null,[t("mtd"),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"∗"),t("mo",{stretchy:"false"},"("),t("mn",null,"1"),t("mo",null,"−"),t("mi",null,"ln"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"+"),t("mi",null,"f"),t("mo",{stretchy:"false"},")"),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])])])])],-1),q1=a("",2),J1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},G1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.779ex",height:"2.452ex",role:"img",focusable:"false",viewBox:"0 -833.9 7858.1 1083.9","aria-hidden":"true"},X1=a("",1),$1=[X1],U1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"A"),t("mo",{stretchy:"false"},"("),t("mi",null,"g"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("msup",null,[t("mi",null,"g"),t("mn",null,"2")]),t("mo",null,"−"),t("mi",null,"f"),t("mo",null,"="),t("mn",null,"1")])],-1),W1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},K1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-4.883ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.927ex",height:"10.897ex",role:"img",focusable:"false",viewBox:"0 -2658.2 13227.6 4816.4","aria-hidden":"true"},Y1=a("",1),t3=[Y1],a3=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[t("mtr",null,[t("mtd",null,[t("mi",null,"g")]),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"−"),t("mfrac",null,[t("mrow",null,[t("msubsup",null,[t("mi",null,"g"),t("mn",null,"0"),t("mn",null,"2")]),t("mo",null,"−"),t("mi",null,"f")]),t("mrow",null,[t("mn",null,"2"),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")])])])])]),t("mtr",null,[t("mtd"),t("mtd",null,[t("mi"),t("mo",null,"≡"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")]),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",null,"+"),t("mi",null,"f"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("msub",null,[t("mi",null,"g"),t("mn",null,"0")]),t("mo",{stretchy:"false"},")"),t("mspace",{width:"1em"}),t("mo",{stretchy:"false"},"("),t("mi",null,"mod"),t("mspace",{width:"0.333em"}),t("msup",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"n")])]),t("mo",{stretchy:"false"},")")])])])])],-1),Q3=a("",2),T3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},s3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.847ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4352.3 1000","aria-hidden":"true"},l3=a("",1),e3=[l3],n3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mi",null,"log"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")])],-1),o3=a("",3);function r3(m3,d3,p3,c3,i3,h3){return Q(),T("div",null,[n,o,t("p",null,[s("对于给定的 "),t("mjx-container",r,[(Q(),T("svg",m,p)),c]),s("，假如我们已经求得 "),t("mjx-container",i,[(Q(),T("svg",h,y)),H]),s("，那么可以倍增的求出 "),t("mjx-container",L,[(Q(),T("svg",u,f)),x]),s("。")]),t("p",null,[s("对 "),t("mjx-container",M,[(Q(),T("svg",E,Z)),_]),s(" 在 "),t("mjx-container",V,[(Q(),T("svg",b,v)),F]),s(" 处做泰勒展开")]),t("mjx-container",C,[(Q(),T("svg",A,j)),S]),t("p",null,[s("注意到 "),t("mjx-container",P,[(Q(),T("svg",I,N)),O]),s(" 前 "),t("mjx-container",z,[(Q(),T("svg",q,G)),X]),s(" 项都为 "),t("mjx-container",$,[(Q(),T("svg",U,K)),Y]),s("，那么")]),t("mjx-container",t1,[(Q(),T("svg",a1,T1)),s1]),l1,t("mjx-container",e1,[(Q(),T("svg",n1,r1)),m1]),d1,t("mjx-container",p1,[(Q(),T("svg",c1,h1)),g1]),y1,t("p",null,[s("不妨设 "),t("mjx-container",H1,[(Q(),T("svg",L1,w1)),f1]),s("，套公式有")]),t("mjx-container",x1,[(Q(),T("svg",M1,k1)),Z1]),_1,t("mjx-container",V1,[(Q(),T("svg",b1,v1)),F1]),C1,t("p",null,[s("令 "),t("mjx-container",A1,[(Q(),T("svg",B1,S1)),P1]),s("，有")]),t("mjx-container",I1,[(Q(),T("svg",R1,O1)),z1]),q1,t("p",null,[s("令 "),t("mjx-container",J1,[(Q(),T("svg",G1,$1)),U1]),s("，有")]),t("mjx-container",W1,[(Q(),T("svg",K1,t3)),a3]),Q3,t("p",null,[s("以上代码真的能跑，时间复杂度 "),t("mjx-container",T3,[(Q(),T("svg",s3,e3)),n3]),s("，就是常数比较大。如果被卡常了，请去喷出题人。")]),o3])}const H3=l(e,[["render",r3]]);export{y3 as __pageData,H3 as default};