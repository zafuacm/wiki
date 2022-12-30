---
comments: true
---

# 递推初步

递推求数列应该都很熟悉，这里讲的简略一点。

## 原理

还是拿 Fibonacci 数列举例，递推公式为

$$
F_{n+2} = F_{n+1} + F_{n}
$$

我们可以直接从第 $1$ 项开始推到第 $n$ 项

```cpp
int f[MAXN];
f[1] = f[2] = 1;
for (int i = 3; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
}
```

类似的，只要我们能求出递推公式，那么用循环遍历求值即可。

## 快速倍增法

在快速幂一节中，我们讲了如何利用矩阵加速做到 $O(\log n)$ 求第 $n$ 项。实际上我们还有一种快速倍增法。

$$
\begin{aligned}
F_{2k} &= F_k (2F_{k+1} - F_k)\\
F_{2k+1} &= F_{k+1}^2+F_k^2
\end{aligned}
$$

于是我们可以用这样的方法快速计算相邻两个相邻的 Fibonacci 数，复杂度与矩阵快速幂一样，但是运算量稍小一点。

## 例题

- [P1028 数的计算](https://www.luogu.com.cn/problem/P1028)
- [P1192 台阶问题](https://www.luogu.com.cn/problem/P1192)
- [P1595 信封问题](https://www.luogu.com.cn/problem/P1595)
- [P1115 最大子段和](https://www.luogu.com.cn/problem/P1115)
- [P1962 斐波那契数列](https://www.luogu.com.cn/problem/P1962)
