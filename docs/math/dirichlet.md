# Dirichlet 卷积

对于数论函数 $f(x)$ 和 $g(x)$，则定义

$$
(f \ast g)(x) = \sum_{d \mid x} f(d) g\left(\frac{x}{d}\right) = \sum_{ab=x}f(a)g(b)
$$

## 性质

Dirichlet 卷积除了满足卷积的几个性质，还有额外的性质。

卷积存在单位函数 $\varepsilon(n) = [n = 1]$。

卷积存在逆元 $f^{-1}$，其中 $f^{-1}(1) = 0$，当 $n > 1$ 时有

$$
g(n) = - \frac{1}{f(1)} \sum_{d \mid n, d < n} f\left(\frac{n}{d}\right) g(d)
$$

## 常见公式

常见的公式有

$$
\begin{matrix}
\mu \ast 1 = \varepsilon & 1 \ast 1 = d & {\rm Id}_k \ast 1 = \sigma_k \\
{\varphi} \ast 1 = {\rm Id} & \lambda \ast 1 = 1_{\rm Sq} & d^3 \ast 1 = (d \ast 1)^2
\end{matrix}
$$

## Mobius 反演

利用 $\mu \ast 1 = \varepsilon$，展开有

$$
\sum_{d \mid n} \mu(d) = \varepsilon(n) = [n = 1]
$$

进一步，对于数论函数 $f(n), g(n)$，有

$$
\begin{aligned}
f(n) = \sum_{d \mid n}g(d) \Rightarrow g(n) = \sum_{d \mid n} \mu (d) f\left(\frac{n}{d}\right) \\
f(n) = \sum_{n \mid d}g(d) \Rightarrow g(n) = \sum_{n \mid d} \mu \left(\frac{n}{d}\right) f(d) \\
\end{aligned}
$$

## 杜教筛

对于数论函数 $f(n)$ 和它的和函数 $S(n) = \sum f(n)$，再给数论函数 $g(n)$ 的卷积求和有

$$
\begin{aligned}
\sum_{i=1}^n (f \ast g)(n) &= \sum_{i=1}^n \sum_{d=1}^i g(d) f\left(\frac{i}{d}\right)[d \mid i]\\
&= \sum_{d=1}^n \sum_{i=d}^n g(d) f\left(\frac{i}{d}\right)[d \mid i]\\
&= \sum_{d=1}^n g(d) \sum_{i=1}^{\lfloor n/d \rfloor} f(i)
\end{aligned}
$$

从中摘出第一项，有

$$
g(1)S(n) = \sum_{i=1}^n (f \ast g)(i) - \sum_{i=2}^n g(i) S\left(
\left\lfloor \frac{n}{i} \right\rfloor \right)
$$

若前者可以快速计算，后者可以数论分块，就可以在较快的时间求得 $S(n)$。复杂度 $O(n^{\frac{3}{4}})$。

## Dirichlet 级数

知道这个级数并没有什么用。。。

首先来看 Riemann $\zeta(s)$ 函数

$$
\zeta(s) = \sum_{n=1}^\infty\frac{1}{n^s} = \frac{1}{1^s} + \frac{1}{2^s} + \cdots, \operatorname{Re}(s) > 1
$$

类似的，我们定义 Dirichlet 生成函数

$$
DG(f;s) = \sum_{n=1}^\infty \frac{f(n)}{n^s}, \operatorname{Re}(s) > 1
$$

于是乘积有

$$
\begin{aligned}
DG(f;s)DG(g;s) &= \left( \sum_{n=1}^\infty \frac{f(n)}{n^s} \right) \left( \sum_{n=1}^\infty \frac{g(n)}{n^s} \right)\\
&= \sum_{n=1}^\infty \left( \sum_{ab=n} \frac{f(a)}{a^s} \frac{g(b)}{b^s} \right)\\
&= \sum_{n=1}^\infty \left( \sum_{ab=n} \frac{(f \ast g)(n)}{n^s} \right)\\
&= DG(f \ast g;s)
\end{aligned}
$$

常见的有

$$
\begin{aligned}
DG(\mu;s) &= \sum_{n=1}^\infty \frac{\mu(n)}{n^s} = \frac{1}{\zeta(s)} \\
DG(\varphi;s) &= \sum_{n=1}^\infty \frac{\varphi(n)}{n^s} = \frac{\zeta(s-1)}{\zeta(s)}
\end{aligned}
$$
