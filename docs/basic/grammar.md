---
comments: true
---

# 语法基础

关于如何入门 C 语言，网上已经有了丰富的资料，我们这里做一些资料推荐。

## 环境配置

在未入门编程的情况下，最好使用一些傻瓜式的集成环境。

假如您使用 Windows，我推荐 [小熊猫 C++](https://royqh1979.gitee.io/redpandacpp/)；假如是 macOS，您可以尝试 [XCode](https://oi-wiki.org/tools/editor/xcode/)。如果是 Linux 等其他系统，您可以向身边的专家请教。

使用教程：<https://www.bilibili.com/video/av860184539>。

```c
#include <stdio.h>

int main() {
  printf("hello world!\n");
  return 0;
}
```

假如你能够成功的编译运行这份代码，你的环境配置就成功了。

## 资料推荐

假如喜欢看听课学习，我推荐 bilibili 平台上的 [浙江大学翁恺教你C语言程序设计！C语言基础入门！](https://www.bilibili.com/video/av768150164)。

假如喜欢看书，可以尝试 [C 程序设计语言](https://book.douban.com/subject/1139336/)。注意远离谭浩强。

## 良好格式

C 语言中，空格、换行等在很多位置不影响代码表现，因此可以把 Hello World 写的多种多样：

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

这几份代码都能够成功运行，但显然可读性大大降低。在请求他人帮助时，**将代码格式化是一种礼貌**，否则就是在折磨别人的眼睛。

有很多在线格式化工具，比如 [Code Formatter and Code Beautifier](https://formatter.org/)。

## 代码剪切板

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
