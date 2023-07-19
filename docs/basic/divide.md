---
comments: true
---

# 递归

递归是分治思想的一个应用，是一种编程技巧。

递归本身是语法的一部分，这里我们更多的讲讲递归可以干什么。

## 举例

理解递归，我们只需要关注如何把原问题划分成符合条件的子问题，而不需要过分关注这个子问题是如何被解决的，不必跳进这个函数里面企图探究更多细节。

类似于数学归纳法，我们假设最基础的问题 $f(0)$ 被解决了，$f(n)$ 可以被转换为 $f(n - 1)$，那么对于全体正整数上 $f$ 都被解决了。

### 阶乘

假如我们要计算阶乘，初始值 $f(1) = 1$，且

$$
f(n) = nf(n-1), \quad n \geqslant 2
$$

于是

```cpp
int f(int n) {
  if (n == 1)
    return 1;
  return n * f(n - 1);
}
```

阶乘代码的 [可视化](https://www.cs.usfca.edu/~galles/visualization/RecFact.html)。

### Fibonacci 数列

假如我们要计算 Fibonacci 数列，初始值 $f(1) = f(2) = 1$，且

$$
f(n) = f(n-1) + f(n-2)
$$

于是

```cpp
int f(int n) {
  if (n <= 2)
    return 1;
  return f(n) + f(n - 1);
}
```

## 递归的特性

递归有很多优点，结构清晰，可读性强。

但是递归具有一些缺点。在程序执行中，递归是利用堆栈来实现的。每当进入一个函数调用，栈就会增加一层栈帧，每次函数返回，栈就会减少一层栈帧。栈是在内存里申请的，所以当递归层数过多时，就会造成 **栈溢出** 的后果。

因为栈本身存在额外的开销，而循环没有。初级的递归实现可能会因为递归次数太多，容易超时。这时需要对递归进行优化，或者尝试非递归解法。

## 记忆化

递归计算阶乘还不太慢，但假若计算的是 Fibonacci 数列第 $60$ 项，可能就等不到输出了。

究其根本，时间主要消耗在重复计算上，展开几次递归就会发现重复计算了很多的数据。

是否可以记忆每一次计算的值，等后面用的时候再用呢？

```cpp
const int N = 100;
int fib[N], vis[N];

int f(int n) {
  if (vis[n]) {     // 假如计算过 f(n)
    return fib[n];  // 直接返回之前计算结果
  } else {
    fib[n] = f(n - 1) + f(n - 2);
    vis[n] = 1;     // 标志 f(n) 已被计算并存储
    return fib[n];
  }
}
```

我们增加了 `vis` 数组，用来标志 $f(n)$ 是否计算过，如果没有计算过才去计算它，若计算过就直接返回。

记忆化能够很好的改善重复计算的问题，但是递归太深仍可能栈溢出。

## 回溯法

回溯法是搜索的一种技巧。所谓搜索，就是对全体解空间的一种枚举。

回溯法的要诀是：走不通就回头。

### 全排列

为了让递归过程更利于理解，我们让代码输出了调试信息，可以在运行中理解。

=== "核心代码"

    ```cpp
    #include <stdio.h>
    
    const int N = 25;
    int perm[N];
    
    void dfs(int i, int n) {
      if (i == n + 1) {       // 枚举完成
        for (int j = 1; j <= n; ++j) {
          printf("%d%c", perm[j], " \n"[j == n]);
        }
      } else {                // 继续枚举
        for (int j = 1; j <= n; ++j) {
          if (perm[j] == 0) { // 位置 j 还未填写数字
            perm[j] = i;      // 枚举为 i
            dfs(i + 1, n);    // 继续递归
            perm[j] = 0;      // 撤销修改，即回溯
          }
        }
      }
    }
    
    int main() {
      int n = 3;
      dfs(1, n);
    }
    ```

=== "调试输出"

    ```cpp
    #include <stdio.h>
    
    const int N = 25;
    int perm[N];
    
    // 调试输出
    
    void info(int n) {
      printf("[debug] ");
      for (int i = 0; i < n; ++i) printf("  ");
    }
    
    void output(int n) {
      printf("perm = ");
      for (int j = 1; j <= n; ++j) {
        printf("%d%c", perm[j], " \n"[j == n]);
      }
    }
    
    // 核心代码
    
    void dfs(int i, int n) {
      // 假设枚举到第 i 位，总共 n 位
      info(i), printf("进入 dfs(i = %d, n = %d)\n", i, n);
      info(i), output(n);  // 输出排列
      if (i == n + 1) {
        info(i), printf("枚举完成\n");
        output(n);  // 输出排列
      } else {
        info(i), printf("还有空位\n");
        for (int j = 1; j <= n; ++j) {
          if (perm[j] == 0) {  // 位置 j 还未填写数字
            info(i), printf("填写 perm[%d] = %d\n", j, i);
            perm[j] = i;
            dfs(i + 1, n);
            info(i), printf("清除 perm[%d] = 0\n", j);
            perm[j] = 0;
          }
        }
      }
      info(i), printf("离开 dfs(i = %d, n = %d)\n", i, n);
    }
    
    int main() {
      int n = 3;
      dfs(1, n);
    }
    ```

另一个回溯法的经典问题是 $N$ 皇后，网上资料很多。这里有一份 [可视化](https://www.cs.usfca.edu/~galles/visualization/RecQueens.html)。

更深入的可以查看 [Link]() 了解。

## 分治

即分而治之，将一个大的问题划分成规模较小的子问题。大致可分成三步

1. 分解：将原问题分解为多个类似的子问题。
2. 解决：反复分解，直到子问题可以被直接解决。
3. 合并：将子问题的解合并成原问题的解。

分治法能解决的问题一般有以下特征：

- 该问题的规模较小时可以被容易的解决。
- 子问题的解可以合并为原问题的解。

常用的实现分治的方法有递归、递推、动态规划、搜索等，灵活多变。

## 参考资料

- [递归 & 分治 - OIWiki](https://oi-wiki.org/basic/divide-and-conquer/)。
- [回溯法 - OIWiki](https://oi-wiki.org/search/backtracking/)。

## 例题

- [P2089 烤鸡](https://www.luogu.com.cn/problem/P2089)
- [P1464 Function](https://www.luogu.com.cn/problem/P1464)
- [P1706 全排列问题](https://www.luogu.com.cn/problem/P1706)
- [B3623 枚举排列](https://www.luogu.com.cn/problem/B3623)
- [P1605 迷宫](https://www.luogu.com.cn/problem/P1605)
