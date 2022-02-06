# 多项式牛顿迭代

> 尝试不带 FFT/NTT 讲解，似乎真的能讲？

对于给定的 $A(g) = 0$，假如我们已经求得 $g_0 = g \bmod x^n$，那么可以倍增的求出 $g_1 = g \bmod x^{2n}$。

对 $A(g)$ 在 $g = g_0$ 处做泰勒展开

$$
0 = A(g) = A(g_0) + \frac{A'(g_0)}{1!}(g - g_0) + \frac{A''(g_0)}{2!}(g - g_0)^2 + \cdots 
$$

注意到 $g-g_0$ 前 $n$ 项都为 $0$，那么

$$
0 \equiv A(g) \equiv  A(g_0) + A'(g_0)(g - g_0) \pmod {x^{2n}}
$$

因此

$$
g \equiv g_0 - \frac{A(g_0)}{A'(g_0)} \pmod{x^{2n}}
$$

更具体的，可以写做

$$
g \equiv g_0 - \frac{A(g_0)}{\frac{\partial A'}{\partial g}(g_0)} \pmod{x^{2n}}
$$

## 多项式 inv

不妨设 $A(g) = f \ast g - 1 = 0$，套公式有

$$
\begin{aligned}
g &\equiv g_0 - \frac{f \ast g_0 - 1}{f}\\
&\equiv g_0 - (f \ast g_0 - 1) \ast g_0\\
&\equiv 2 g_0 - f \ast g_0^2 \pmod{x^{2n}}
\end{aligned}
$$

```cpp
Poly inv(int m) const {
    Poly x = {qpow(T[0])};
    for (int t = 2; t < m * 2; t *= 2) {
        x = x * 2 - (x * x) * cut(t);
        x.redeg(t);
    }
    return x.redeg(m);
}

Poly div(int m, const Poly& g) const {
    if (deg() == 0)
        return {};
    return (cut(m) * g.inv(m)).redeg(m);
}
```

## 多项式 ln

依据

$$
\ln f = \int \frac{f'}{f}
$$

有

```cpp
Poly ln(int m) const {
    return deriv().div(m - 1, cut(m)).integr();
}
```

## 多项式 exp

令 $A(g) = \ln g - f = 0$，有

$$
\begin{aligned}
g &\equiv g_0 - \frac{\ln g_0 - f}{1 / g_0}\\
&\equiv g_0 \ast (1 - \ln g_0 + f) \pmod{x^{2n}}
\end{aligned}
$$

```cpp
Poly exp(int m) const {
    Poly x = {1};
    for (int t = 2; t < m * 2; t *= 2) {
        x = x * (Poly{1} - x.ln(t) + cut(t));
        x.redeg(t);
    }
    return x.redeg(m);
}
```

## 多项式 sqrt

令 $A(g) = g^2 - f = 1$，有

$$
\begin{aligned}
g &\equiv g_0 - \frac{g_0^2 - f}{2 g_0} \\
&\equiv \frac{1}{2}(g_0 + f/g_0) \pmod{x^{2n}}
\end{aligned}
$$

```cpp
Poly sqrt(int m) const {
    Poly x = {1};
    for (int t = 2; t < m * 2; t *= 2) {
        x = (x + cut(t).div(t, x)) * qpow(2);
    }
    return x.redeg(m);
}
```

## 提示

以上代码真的能跑，时间复杂度 $O(n \log n)$，就是常数比较大。如果被卡常了，请去喷出题人。

还有一些循环卷积优化和分块的常数优化，感兴趣的可以阅读。

## 参考

- [多项式牛顿迭代 - OI Wiki](https://oi-wiki.org/math/poly/newton/)
- [关于优化形式幂级数计算的 Newton 法的常数 - negiizhao](https://negiizhao.blog.uoj.ac/blog/4671)
- [多项式牛顿迭代的分块优化 - rogeryoungh](https://rogeryoungh.blog.uoj.ac/blog/7530)
