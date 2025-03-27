import{_ as T,o as Q,c as s,k as t,a,R as e}from"./chunks/framework.XiqD54nH.js";const K=JSON.parse('{"title":"递推初步","description":"","frontmatter":{"comments":true},"headers":[],"relativePath":"basic/recursion.md","filePath":"basic/recursion.md","lastUpdated":1743069988000}'),l={name:"basic/recursion.md"},n=t("h1",{id:"递推初步",tabindex:"-1"},[a("递推初步 "),t("a",{class:"header-anchor",href:"#递推初步","aria-label":'Permalink to "递推初步"'},"​")],-1),o=t("p",null,"递推求数列应该都很熟悉，这里讲的简略一点。",-1),r=t("h2",{id:"原理",tabindex:"-1"},[a("原理 "),t("a",{class:"header-anchor",href:"#原理","aria-label":'Permalink to "原理"'},"​")],-1),d=t("p",null,"还是拿 Fibonacci 数列举例，递推公式为",-1),m={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.471ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.679ex",height:"2.009ex",role:"img",focusable:"false",viewBox:"0 -680 7814.2 888","aria-hidden":"true"},i=e("",1),c=[i],h=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n"),t("mo",null,"+"),t("mn",null,"2")])]),t("mo",null,"="),t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n"),t("mo",null,"+"),t("mn",null,"1")])]),t("mo",null,"+"),t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n")])])])],-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 500 666","aria-hidden":"true"},u=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mn"},[t("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])])],-1),w=[u],x=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1")])],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},f=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),k=[f],V=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n")])],-1),b=e("",3),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.112ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3585.7 1000","aria-hidden":"true"},M=e("",1),v=[M],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"log"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},F=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),A=[F],j=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n")])],-1),B={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.262ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.467ex",height:"5.655ex",role:"img",focusable:"false",viewBox:"0 -1499.8 10372.5 2499.6","aria-hidden":"true"},S=e("",1),R=[S],O=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[t("mtr",null,[t("mtd",null,[t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"k")])])]),t("mtd",null,[t("mi"),t("mo",null,"="),t("msub",null,[t("mi",null,"F"),t("mi",null,"k")]),t("mo",{stretchy:"false"},"("),t("mn",null,"2"),t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"k"),t("mo",null,"+"),t("mn",null,"1")])]),t("mo",null,"−"),t("msub",null,[t("mi",null,"F"),t("mi",null,"k")]),t("mo",{stretchy:"false"},")")])]),t("mtr",null,[t("mtd",null,[t("msub",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2"),t("mi",null,"k"),t("mo",null,"+"),t("mn",null,"1")])])]),t("mtd",null,[t("mi"),t("mo",null,"="),t("msubsup",null,[t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"k"),t("mo",null,"+"),t("mn",null,"1")]),t("mn",null,"2")]),t("mo",null,"+"),t("msubsup",null,[t("mi",null,"F"),t("mi",null,"k"),t("mn",null,"2")])])])])])],-1),N=e("",3);function I(J,X,z,G,q,$){return Q(),s("div",null,[n,o,r,d,t("mjx-container",m,[(Q(),s("svg",p,c)),h]),t("p",null,[a("我们可以直接从第 "),t("mjx-container",H,[(Q(),s("svg",g,w)),x]),a(" 项开始推到第 "),t("mjx-container",y,[(Q(),s("svg",_,k)),V]),a(" 项")]),b,t("p",null,[a("在快速幂一节中，我们讲了如何利用矩阵加速做到 "),t("mjx-container",L,[(Q(),s("svg",E,v)),Z]),a(" 求第 "),t("mjx-container",D,[(Q(),s("svg",C,A)),j]),a(" 项。实际上我们还有一种快速倍增法。")]),t("mjx-container",B,[(Q(),s("svg",P,R)),O]),N])}const W=T(l,[["render",I]]);export{K as __pageData,W as default};
