# 卷积

我对卷积理解很浅，先抛砖引玉，如有错误还请指正。

我也不知道卷积是什么，常见的是连续形式

$$
(f \ast g)(n) = \int_{-\infty}^{\infty} f(\tau)g(n-\tau) {\rm d} \tau
$$

和离散形式

$$
(f \ast g)(n) = \sum_{\tau=-\infty}^\infty f(\tau)g(n-\tau)
$$

如果没有特殊强调，只讨论离散形式的卷积。

卷积总是满足

1. 交换律 $f \ast g = g \ast f$
2. 结合律 $f \ast (g \ast h) = (f \ast g) + (f \ast h)$
3. 分配律 $f \ast (g + h) = (f \ast g) + (f \ast h)$
4. 数乘结合律 $\mu (f \ast g) = (\mu f) \ast g = f \ast (\mu g)$
5. 微分（差分）定理 ${\rm D} (f \ast g) = {\rm D}f \ast g = f \ast {\rm D}g$

## 级数

级数乘法是离散卷积的一个重要例子。对于级数

$$
\begin{aligned}
f(x) = \sum_{i=0}^{\infty} f_ix^i &=  f_0 + f_1 x + f_2x^2 + \cdots \\
g(x) = \sum_{i=0}^{\infty} g_ix^i &=  g_0 + g_1 x + g_2x^2 + \cdots
\end{aligned}
$$

它们的乘法是 $h(x) = f(x)g(x) = \sum\limits_{k=0}^{\infty} h_kx^k$，其中

$$
h_k = \sum_{i+j=k}f_ig_j
$$

因此看到相乘下标之和可能为为定值时，要主动想到卷积。

## 卷积定理

设 Fourier 变换为 $\operatorname{FT}$，有

$$
\operatorname{FT}(f \ast g) = \operatorname{FT}(f) \cdot \operatorname{FT}(g)
$$

该卷积定理是 FFT 的基础。

## 其他卷积

卷积有很多形式。

### Dirichlet 卷积

对于数论函数 $f(x)$ 和 $g(x)$，则定义

$$
(f \ast g)(x) = \sum_{d \mid x} f(d) g\left(\frac{x}{d}\right) = \sum_{ab=x}f(a)g(b)
$$

在 Mobius 反演中有重要应用。详见 [Dirichlet 卷积](dirichlet.html)。

## 快速加法

来看题目 [SP8372 TSUM - Triple Sums](https://www.luogu.com.cn/problem/SP8372)。给定 $n$ 个整数 $\{a_n\}$，对于所有的 $S$，求满足 $a_i+a_j+a_k=S$ 且 $i < j < k$ 的 $(i,j,k)$ 数量。

先不考虑 $i < j < k$，构造多项式

$$
F(x) = \sum_{i=1}^n x^{a_i}
$$

那么 $[x^S]F^3(x)$ 即是所求结果。再考虑去掉重复数，简记轮换和 $\sum\limits_{cyc}$ 为 $\sum$，容斥有

$$
\begin{aligned}
\left(\sum x\right)^3 &= \sum  x^3 + 3 \sum  x^2y + 6 \sum xyz\\
\left(\sum x^2\right)\left(\sum x\right) &= \sum x^3 + \sum  x^2y
\end{aligned}
$$

因此构造 $G(x) = \sum x^{2a_i}, H(x) = \sum x^{3a_i}$，又不同数的轮换共出现六次，解得

$$
6 A(x) = F^3(x) - 3G(x)A(x) + 2H(x)
$$

最终 $[x^S]A(x)$ 即是答案。

## 字符串匹配

考虑用 FFT 解决字符串匹配。定义匹配函数

$$
d(x,y) = [x = y]
$$

给定文本串 $B$ 和长为 $m$ 的模式串 $A$，要找出 $A$ 在 $B$ 的所有出现，可以定义

$$
f(k) = \sum_{i=0}^{m-1} d(A_{i}, B_{i-m+k})
$$

即 $f(k) = 0$ 时有完全匹配 $A = B[k-m\ldots k-1]$。考虑让 $d$ 函数更 “数学” 一点，以更好的计算

$$
d(x,y) = (x - y)^2
$$

再提供模式串 $A$ 的翻转 $S$，即 $A_i = S_{m-i}$，展开有

$$
\begin{aligned}
f(k) &= \sum_{i=0}^{m-1}A_{i}^2 + \sum_{i=0}^{m-1}B_{i-m+k}^2 - 2\sum_{i=0}^{m-1} A_{i}B_{i-m+k}\\
&= \sum_{i=0}^{m-1}A_{i}^2 + \sum_{i=0}^{m-1}B_{i-m+k}^2 - 2\sum_{i=0}^{m-1} S_{m-i}B_{i-m+k}
\end{aligned}
$$

前面两项能够预处理，最后一项是卷积，可以用 FFT。于是最终复杂度是 $O(n \log n)$。

### 带通配符匹配

这个复杂度比 KMP 还高的 FFT 版字符串匹配有什么用呢？来看题目 [P4173 残缺的字符串](https://www.luogu.com.cn/problem/P4173)。

仅令通配符的字符值为 $0$，再搓个匹配函数

$$
d(x,y) = xy(x-y)^2
$$

然后大力展开

$$
\begin{aligned}
f(k) &= \sum_{i=0}^{m-1}A_{i}^3B_{i-m+k} + \sum_{i=0}^{m-1}A_{i}B_{i-m+k}^3 - 2\sum_{i=0}^{m-1} A_{i}^2B_{i-m+k}^2\\
&= \sum_{i=0}^{m-1}S_{m-i}^3B_{i-m+k} + \sum_{i=0}^{m-1}S_{m-i}B_{i-m+k}^3 - 2\sum_{i=0}^{m-1} S_{m-i}^2B_{i-m+k}^2
\end{aligned}
$$

注意到三个都是卷积，全都可以 FFT。于是最终复杂度是 $O(n \log n)$。

### 失配次数

来看题目 [CF528D Fuzzy Search](https://codeforces.com/problemset/problem/528/D)。注意到，我们新搓的匹配函数 $d$ 由于有个平方，只保留了是否完全匹配的信息，不再能计算失配次数。

考虑再搓个新匹配函数。设字符集为 $W$（无通配符），枚举每个字符

$$
d(x,y) = [x = y] = \sum_{t \in W} [x = t][y = t]
$$

然后代入

$$
\begin{aligned}
f(k) &= \sum_{i=0}^{m-1}\sum_{t \in W} [A_i = t][B_{i-m+k} = t]\\
&= \sum_{t \in W} \sum_{i=0}^{m-1}[S_{m-i} = t][B_{i-m+k} = t]
\end{aligned}
$$

于是复杂度 $O(|W|n\log n)$。

再计算通配符的影响。容斥可知通配符的贡献为：字符串 $A$ 和 $B[k-m\ldots k-1]$ 中通配符的数量，减去对应位置都是通配符的数量。

前者可以预处理，后者即是再来一遍卷积。
