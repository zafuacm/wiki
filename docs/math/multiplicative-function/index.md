---
comments: true
---

# 积性函数

对于数论函数 $f(x)$​，若对于任意的 $a,b$​ 满足 $a \bot b$​​（即 $a,b$ 互质） 都有

$$
f(ab) = f(a)f(b)
$$

则称 $f(x)$ 为积性函数。

若对任意的 $a,b$ 都有 $f(ab)=f(a)f(b)$，则称 $f(x)$ 为完全积性函数。

## 例子

积性函数的例子有

- Euler 函数：$\varphi(n) := \sum\limits_{i=1}^n[\gcd(i,n)=1]$。
- Mobius 函数：$\mu(n) := \begin{cases}1 & n=1 \\ 0 & \exists d>1,d^{2} \mid n \\ (-1)^{\omega(n)} & \text{otherwise}\end{cases}$


完全积性函数的例子有

- 单位函数：$\varepsilon(x) := [x=1]$。
- 指数函数：$\operatorname{id}_k(x) := x^k$。
- 常数函数：$1(x) := 1$​。

## 性质

积性函数与积性函数的卷积是积性函数，积性函数对卷积的逆元也是积性函数，即积性函数的全体构成了一个 Abel 群，其单位元是 $\varepsilon$​。

快速求前缀和，[杜教筛](../dirichlet/#杜教筛) 是一种可选的方案。但是其该算法有一些局限性，下面给出几种适用更广泛的快速计算方法。

- 州阁筛。
- Min_25 筛。
- Powerful Number 筛。

