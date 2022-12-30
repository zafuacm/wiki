---
comments: true
---

# 舟阁筛

设 $n$ 的唯一分解是

$$
n = p_1^{k_1} p_2^{k_2} \cdots p_s^{k_s}
$$

则积性函数 $f(x)$​​​ 的在 $x=n$ 处的值有

$$
f(n) = f(p_1^{k_1}) f(p_2^{k_2}) \cdots f(p_s^{k_s})
$$

由于数 $i$ 最多只能拥有一个大于 $\sqrt{n}$​ 的因子，因此按照是否具有分类，可以得到

$$
\begin{aligned}
\sum_{i=1}^nf(i) &= \sum_{\begin{subarray}{c}
x \leqslant n \\ x {\rm \ 无大于\ } \sqrt{n} {\rm \ 的质因子}
\end{subarray}}
\left[ f(x) \left( 1 + \sum_{\sqrt{n} < p \leqslant \lfloor n/x \rfloor} f(p) \right)\right] \\
&= \sum_{x=1}^{\sqrt{n}} f(x)\sum_{p > \sqrt{n}}^{\lfloor n/x \rfloor} f(p) + 
\sum_{\begin{subarray}{c}
x \leqslant n\\x {\rm \ 无大于\ } \sqrt{n} {\rm \ 的质因子}
\end{subarray}} f(x)
\end{aligned}
$$

关键就在如何快速求这几部分。

### Part 1

考虑记 $[1,l]$ 中不含因子 $p_1,\cdots,p_t$ 的数在 $f$ 下取值之和为 $g(t,l)$。递推关系有

$$
g(t,j) = g(t-1, j) - f(p_t) g(t-1, \lfloor l/p_t \rfloor)
$$

边界为 $g(0,l) = \sum\limits_{i=1}^l f(i)$​。设 $[1,\sqrt{n}]$​ 内质数的个数为 $m$，因此第一部分即化为计算

$$
\sum_{x=1}^{\sqrt{n}} f(x)\sum_{p > \sqrt{n}}^{\lfloor n/x \rfloor} f(p) = \sum_{x=1}^{\sqrt{n}} f(x) g(m, \lfloor n/x \rfloor)
$$

然而朴素的预处理 $g$ 的复杂度是 $O\left( \dfrac{n}{\log n} \right)$​，需要再优化。

容易发现当 $p_{t+1} > l$ 时有 $g(t,l) = f(1) = 1$。故当 $p_t^2 > l$ 时，代入递推有

$$
g(t,l) = g(t-1, j) - f(p_t)
$$

因此 $p_t^2 > j$​ 时的计算是可以省去的，直接累加这一段质数取值即可。此时复杂度 $O\left( \dfrac{n^{\frac{3}{4}}}{\log n} \right)$​​。

### Part 2

再考虑记 $[1,l]$ 中只含因子 $p_t,\cdots,p_m$ 的数在 $f$​ 下取值之和为 $h(t,l)$​。递推有

$$
h(t,l) = h(t+1, l) + \sum_{c=1} f(p_t^c) h(t+1, \lfloor l/p_t^c \rfloor)
$$

其边界条件为 $h(m+1, l) = f(1) = 1$​。于是

$$
\sum_{\begin{subarray}{c}
x \leqslant n\\x {\rm \ 无大于\ } \sqrt{n} {\rm \ 的质因子}
\end{subarray}} f(x) = h(0, n)
$$

类似的优化 $h$ 的计算。当 $p_t > l$ 时有 $h(t,l) = f(1) = 1$，代入递推，当 $p_t^2 > l$ 时有

$$
h(t,l) = h(t-1,l) + f(p_t)
$$

同样直接累加。此处复杂度 $O\left( \dfrac{n^{\frac{3}{4}}}{\log n} \right)$​​。

### All

总复杂度 $O\left( \dfrac{n^{\frac{3}{4}}}{\log n} \right)$。我们要求 $f(p)$​ 是容易计算的，否则其会增加额外的损耗。

州阁筛似乎后面又进行了一些进化，能够达到更优的结果。
