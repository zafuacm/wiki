---
comments: true
---

# 环境配置

## 什么是 C 语言

C 语言诞生于 1970 年左右，至今仍然保持着旺盛的活力。

C 程序是分布在一个或多个源文件（Source file，以 `.c` 后缀结尾）和头文件（Header file，以 `.h` 后缀结尾）的代码的集合。这些文件都是**纯文本**。

C 语言是标准化的语言，主要有以下版本

- C89，最经典、最广泛使用的版本。
- C99，主要特性：变长数组、单行注释 `//`、更灵活的变量声明、废弃 `gets()`。
- C11，主要特性：多线程原子支持、泛型选择、匿名结构体、改进求值顺序约定、移除 `gets()`。
- C17，没有大的变化。
- C23，主要特性：移除旧式函数声明、数字分隔符、未命名参数、`true` 和 `false` 成为关键字。

## 什么是 C 编译器

编译器是将 C 语言源代码转化为机器代码（也称为二进制代码）的关键工具。有多种 C 语言编译器供选择：

- [GCC](https://gcc.gnu.org)：是 GCC 工具链的一部分，是 Linux 等系统的默认编译器。
    - [MingW](https://www.mingw-w64.org/)：是 GCC 工具链的 Windows 移植版本。
- [MSVC](https://docs.microsoft.com/en-us/cpp/)：是微软的 Visual Studio IDE 的一部分。
- [Clang](https://clang.llvm.org/)：是 LLVM 工具链的一部分。最新的 Visual Studio 也支持 Clang。

C 程序是以纯文本形式存储的，因此您可以使用自己喜欢的文本编辑器来编写代码，例如 [Visual Studio Code](https://code.visualstudio.com/download)、[Sublime Text](https://www.sublimetext.com/)、[Vim](https://www.vim.org)、[Emacs](https://www.gnu.org/software/emacs/) 等。

此外，还有一些将编辑和编译功能集成到一体的 IDE（集成开发环境），例如 [CLion](https://www.jetbrains.com/clion/)、[Visual Studio](https://visualstudio.microsoft.com/)、[QT Creator](https://www.qt.io/zh-cn/product/development-tools) 等，它们提供了更多的工具和功能，以便更方便地编写、调试和构建 C 语言程序。

### Windows 安装

如果你还没有编程经验，我建议选择轻量级的 IDE，比如 [小熊猫 DEV](https://royqh.net/redpandacpp/)。这将让你免去配置开发环境的麻烦，同时不会因为大型 IDE 的项目管理功能而头痛。在需要的时候，你还可以手动调用 gcc 命令。

学长录制的小熊猫 DEV 安装教程：<https://www.bilibili.com/video/av860184539>。

> 需要特别强调的是，我不推荐初学者使用 Visual Studio。VS 在较长时间内对新的 C 标准支持不积极，2013 年才不完全地支持 C99[^1]，且直到 2020 年才开始支持 C11 和 C17[^2]。此外，它仍然默认启用了许多非标准的语言扩展，对于刚入门的初学者来说，很难分辨哪些是微软的特有功能。而且使用 Visual Studio 需要一定的学习成本，因此初学者更适合使用即开即用的轻量级 IDE。

如果你有一定的编程经验，那么你可以根据自己的喜好来自由定制开发环境。

[^1]: [C99 library support in Visual Studio 2013](https://devblogs.microsoft.com/cppblog/c99-library-support-in-visual-studio-2013/)

[^2]: [C11 and C17 Standard Support Arriving in MSVC](https://devblogs.microsoft.com/cppblog/c11-and-c17-standard-support-arriving-in-msvc/)

如果你所使用的教材依然使用 VC6.0、CFree、Turbo C 等古老的软件，建议直接丢弃这些教材。

### Linux & macOS 安装

假如是 macOS，您可以尝试 [XCode](https://oi-wiki.org/tools/editor/xcode/)。如果是 Linux 等其他系统，您可以向身边的专家请教。

> 如果您使用 Windows，我也强烈推荐您尝试一下 [WSL](https://learn.microsoft.com/zh-cn/windows/wsl/)（Windows Subsystem for Linux），与 VSCode 配合的很好。

这里以 Ubuntu 为例子，环境配置只需一行命令：

```shell
$ sudo apt install gcc
```

## 测试编译

您可以使用上文配置好的环境，并输入以下程序：

```c
#include <stdio.h>

int main() {
  char s[1000];
  scanf("%s", s);
  printf("Hello, %s!\n", s);
  return 0;
}
```

在弹出的命令行窗口中输入您的名字（甚至可以输入中文），计算机将会向您发送个性化的问候。假如你能够成功的编译运行这份代码，你的环境配置就成功了。

### VS 兼容性问题

再次建议，如果您还未完全熟悉 C 语言，并且周围没有技术专家提供帮助，最好不要过早地使用 VS。这是因为使用 VS 可能会引发与微软特有技术相关的一些兼容性问题，这些问题可能需要一定的经验来解决。

以下问题是由同学们在交流中提出的，您可能还会遇到其他困难。

#### scanf

可能会看到以下错误信息：

> C4996 `scanf`: This function or variable may be unsafe. Consider using `scanf_s` instead. To disable deprecation, use `_CRT_SECURE_NO_WARNINGS`. See online help for details.

当遇到此错误时，不必惊慌，请仔细阅读报错信息，并辅以网上检索。

不难理清问题：`scanf` 可能导致缓冲区溢出等安全问题，被微软认为是不安全的函数从而废弃。可以通过禁用安全检查或者换用安全函数 `scanf_s` 规避。

一般情况下，假如您确信自己的代码是安全的，在代码最开头增加一行即可禁用安全检查。

```c
#define _CRT_SECURE_NO_WARNINGS 1
```

#### min

有同学发现以下代码在 VS 中无法编译：

```c
#include <stdio.h>
#include <stdlib.h>

int min(int a, int b) {
  return a < b ? a : b;
}

int main() {
  printf("%d\n", min(1, 2);
  return 0;
}
```

其原因是 VS 在 `stdlib.h` 和 `windows.h` 等头文件中声明了 `min` 和 `max` 等宏，因此无法声明自己的 `min` 函数。

您可以通过 [禁用语言扩展](https://learn.microsoft.com/zh-cn/cpp/build/reference/za-ze-disable-language-extensions) 来解决此问题。

### 命令行编译

如果您使用的是 gcc 或者 clang，您可以在终端（比如 CMD）中编译。

```bash
# 请按照 gcc <source> -o <output> 的格式填充命令
# 在 Windows 上会生成 hello.exe，在 Linux 上会生成 hello
$ gcc hello.c -o hello
# 也可以指定 gcc 的目录
$ D:\Software\Dev-Cpp\MinGW64\bin\gcc.exe D:\hello.c -o D:\hello
# 执行编译产物
$ ./hello
roger
Hello, roger!
```

编译程序有很多的参数，比如 `-Wall` 可以提供更多的检查，`-std=c99` 可以指定使用的参数。

```c
#include <stdio.h>
int main() {
  int x = 3.5;
  printf("x = %lf\n", x);
  return 0;
}
```

强烈建议增加以上三个编译参数，可以帮助检查代码中的错误，节省调试时间。

```bash
$ clang hello.c -o hello -Wall -Wextra -pedantic
hello.c:3:11: warning: implicit conversion from 'double' to 'int' changes value from 3.5 to 3 [-Wliteral-conversion]
  int x = 3.5;
      ~   ^~~
hello.c:4:23: warning: format specifies type 'double' but the argument has type 'int' [-Wformat]
  printf("x = %lf\n", x);
              ~~~     ^
              %d
2 warnings generated.
```


