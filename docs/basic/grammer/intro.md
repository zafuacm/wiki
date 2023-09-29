---
comments: true
---

# 语法学习

关于如何入门 C 语言，网上已经有了丰富的资料，我们这里做一些资料推荐。

## 资料推荐

假如您喜欢看听课学习，我推荐以下课程：

- 浙江大学翁恺的《C语言程序设计》，可以在 [mooc](https://www.icourse163.org/course/0809ZJU007A-199001) 上收看。[bilibili](https://www.bilibili.com/video/av768150164) 上可能是转载，不清楚更新是否及时。

假如喜欢看书，我推荐以下书籍：

- [C 语言程序设计：现代方法（第二版修订版）](https://book.douban.com/subject/35503091/)，修订版还与时俱进地增加了 C11 和 C18 中的内容。
- [C Primer Plus](https://book.douban.com/subject/26792521/)，经典老书。
- [C 程序设计语言](https://book.douban.com/subject/1139336/)，作者是 C 语言之父，可能不适合初学者阅读。

特别注意远离谭浩强的 [C 程序设计](https://book.douban.com/subject/30385709/)。

## 补充内容

在此补充一些书籍可能不做介绍的内容。

### 提问的智慧

提问需要一定的技巧，阅读 [提问的技巧 - LUG @ USTC](https://lug.ustc.edu.cn/wiki/doc/smart-questions) 可以帮助你的问题获得关注。

以下列举几个蠢问题：

- 问一个搜索一下就能得到答案的问题；
- 问“这个代码为什么报错”但只发代码不发报错信息的；
- 问“这个代码为什么不对” 但只发代码不发结果的；
- [提问的技巧](https://lug.ustc.edu.cn/wiki/doc/smart-questions/#%E4%B8%8D%E8%AF%A5%E9%97%AE%E7%9A%84%E9%97%AE%E9%A2%98) 中不该问的问题、好问题与蠢问题一节。

### 良好格式

C 语言非常灵活，过于聪明的程序员可以编写出除了他们自己之外没人能读懂的程序。在 C 语言中，空格、换行等在很多位置不影响代码表现，因此可以把 Hello World 写的多种多样：

```c
#include<stdio.h>
int
     main(  )
{  printf(
"hello" " "
     "world!\n"
); return      0;   }
```

可以毫无缩进

```c
#include<stdio.h>
int main()
{printf("hello world!\n");
return 0;}
```

甚至一行流

```c
#include<stdio.h>
int main(){printf("hello world!\n");return 0;}
```

再比如国际模糊 C 代码大赛的 1990 年的“最佳小程序”：

```c
v,i,j,k,l,s,a[99];
main()
{
	for(scanf("%d",&s);*a-s;v=a[j*=v]-a[i],k=i<s,j+=(v=j<s&&(!k&&!!printf(2+"\n\n%c"-(!l<<!j)," #Q"[l^v?(l^j)&1:2])&&++l||a[i]<s&&v&&v-i+j&&v+i-j))&&!(l%=s),v||(i==j?a[i+=k]=0:++a[i])>=s*k&&++a[--i])
		;
}
```

这几份代码都能够成功运行，但显然可读性大大降低。在请求他人帮助时，**将代码格式化是一种礼貌**，否则就是在折磨别人的眼睛。

有很多在线格式化工具，比如 [Code Formatter and Code Beautifier](https://formatter.org/)。

### 代码剪切板

很多时候，光盯着代码看很难看出问题，需要上手跑一跑。

假如你选择直接将代码粘贴到 QQ 等聊天软件，不但会让代码失去格式、高亮，如 `/st` 还会被转义成表情，长文本还会导致刷屏。

建议选择代码剪切板，如：

- [在线剪贴板 - nugine](https://paste.nugine.xyz/)。
- [pastebin](https://pastebin.com/)。
- [Pastebin - Mozilla](https://pastebin.mozilla.org/)。
- [Carbon](https://carbon.now.sh/)，代码转换为图片。
- [Pastebin - Ubuntu](https://paste.ubuntu.com/)。
- [Gist - Github](https://paste.ubuntu.com/)。
- [Paste - 洛谷](https://www.luogu.com.cn/paste)。

## 下一步

在算法竞赛中，我们只需学习语法的一个子集，就足以表达我们所设计的算法了。

入门 C 语言是很快的，可能只需半个月。我个人认为，假如你能搞懂下面计算 Fib 序列的代码，就可以开始刷题了。

```c
#include <stdio.h>
#include <time.h>

typedef long long i64;

i64 f(int n) {
  if (n <= 2)
    return 1;
  else
    return f(n - 1) + f(n - 2);
}

double method1(int n) {
  clock_t start = clock();
  for (int i = 1; i <= n; ++i) {
    printf("f(%d) = %lld\n", i, f(i));
  }
  clock_t stop = clock();
  return (double)(stop - start) / CLOCKS_PER_SEC;
}

i64 fib[100];

double method2(int n) {
  clock_t start = clock();
  for (int i = 1; i <= n; ++i) {
    if (i <= 2)
      fib[i] = 1;
    else
      fib[i] = fib[i - 1] + fib[i - 2];
    printf("fib[%d] = %lld\n", i, fib[i]);
  }
  clock_t stop = clock();
  return (double)(stop - start) / CLOCKS_PER_SEC;
}

int main() {
  int n = 0;
  scanf("%d", &n);
  if (0 < n && n <= 45) {
    double duration1 = method1(n);
    double duration2 = method2(n);
    printf("method 1 use %.6lf ms\n", duration1 * 1000);
    printf("method 2 use %.6lf ms\n", duration2 * 1000);

  } else {
    printf("0 < n <= 45!");
  }
  return 0;
}
```

## 参考资料

- [语言基础 - OIWiki](https://oi-wiki.org/lang/)。
