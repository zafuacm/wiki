# Powerful Number 筛

对于数 $n$，记其质因分解为

$$
n = \prod_{i=1}^k p_i^{c_i}
$$

若其所有幂次都大于 $1$，即 $c_i > 1$，则称 $n$ 为 Powerful Number，简称 PN。

## 性质

若 $n$ 是 PN，则 $n$ 总是可以表示成 $a^2b^3$ 的形式。

$n$ 以内 PN 的个数是 $O(\sqrt{n})$ 的。

## 计算

考虑构造一个易于求和的函数 $g$，其在 $p$ 处有 $g(p) = f(p)$。

之后，构造 $h = f \ast g^{-1}$，不难计算得到

$$
f(p) - g(p) = g(p)h(1) + h(p)g(1) - g(p) = h(p) = 0
$$

因此 $h$ 只在 PN 处有值。由杜教筛可以得到：

$$
\begin{aligned}
\sum_{i=1}^n f(i) &= \sum_{i=1}^n (g \ast h)(i) \\
&= \sum_{d = 1}^n h(d) \sum_{i=1}^{\lfloor n/d \rfloor} g(i) \\
&= G(n) + \sum_{d \in {\mathrm{PN}}} h(d) G(\lfloor n/d \rfloor)
\end{aligned}
$$

若 $G(n)$ 可以通过杜教筛等方式快速求和，那么上式就可以快速计算。

对于 $h(p^c)$，可以直接计算，又因为因为质数的幂次不会很大，直接卷积也可以。

对 PN 的搜索可以简单的直接 DFS。

## 参考资料

- [Powerful Number 筛](https://oi-wiki.org/math/number-theory/powerful-number/)
