# 多项式简介

我们讨论多项式时，基本是在模质数意义下的，最常见的是 $\mathbb{F}_{998244353}$。

一元多项式可以形象的理解为一个数组

$$
f(x) = \sum_{i=0}^n f_i x^i = f_0 + f_1 x + f_2 x^2 + \cdots + f_n x^n
$$

它的“长度” $\operatorname{deg}(f) = n$，记为多项式的度数。其中含 $x^j$ 项对应的系数表示为 $[x^j]f$，或者在不引起冲突的情况下记作 $f_j$。

形式幂级数则拥有无限的长度

$$
g(x) = \sum_{i=0}^{\infty} g_i x^i = g_0 + g_1x + g_2x^2 +  \cdots
$$

多项式可以看作其截取 $f = g \bmod x^{n+1}$。

我们经常在计算机中通过 `vector<int>` 或者数组表示。

```cpp
constexpr int P = 998244353;

int mo(int u) {
    return u >= P ? u - P : u;
}

struct Poly : public vector<int> {
#define T (*this)
    using vector::vector;
    int deg() {
        return size();
    }
    Poly &redeg(int m) {
        return resize(m), T;
    }
    Poly cut(int m) const {
        return {begin(), begin() + min(m, deg())};
    }
    // 其他操作。。。
#undef T
};
```

## 加法

对于形式幂级数 $f$ 和 $g$，我们定义其加法

$$
(f \pm g)(x) = \sum_{i=0}^{\infty} (f_i \pm g_i) x^i
$$

```cpp
friend Poly operator+(const Poly &f, const Poly &g) {
    int m = max(f.deg(), g.deg());
    Poly h = Poly(f).redeg(m);
    for (int i = 0; i < g.deg(); i++)
        h[i] = mo(h[i] + g[i]);
    return h;
}
friend Poly operator-(const Poly &f, const Poly &g) {
    int m = max(f.deg(), g.deg());
    Poly h = Poly(f).redeg(m);
    for (int i = 0; i < g.deg(); i++)
        h[i] = mo(h[i] - g[i] + P);
    return h;
}
```

## 乘法

形式幂级数的乘法也称为卷积，记作

$$
(f \ast g)(x) = \sum_{n=0}^{\infty} \left( \sum_{i=0}^n f_i g_{n-i} \right) x^n
$$

这里给出一种 $O(n^2)$ 的朴素的实现

```cpp
friend Poly operator*(const Poly &f, const Poly &g) {
    int m = f.deg() + g.deg() - 1;
    Poly h(m);
    for (int i = 0; i < f.deg(); i++) {
        for (int j = 0; j < g.deg(); j++) {
            h[i + j] = (h[i + j] + 1ll * f[i] * g[j]) % P;
        }
    }
    return h;
}

Poly operator*(int k) {
    Poly f = T;
    for (auto &fi : f)
        fi = 1ll * fi * k % P;
    return f;
}
```

正常的实现是 FFT/NTT，其复杂度是 $O(n \log n)$，详细请看 [FFT](fft.md)。

卷积本身也很重要，更深入的内容请看，详细请看 [卷积](convolution.md)

## 求导

形式幂级数 $f$ 的导数

$$
f'(x) = \sum_{i=0}^\infty (i+1) f_{i+1} x^i
$$

```cpp
Poly deriv() const {
    Poly f(deg() - 1);
    for (int i = 1; i < deg(); i++)
        f[i - 1] = 1ll * i * T[i] % P;
    return f;
}
```

## 积分

形式幂级数 $f$ 的积分

$$
\int f(x) {\rm d} x = \sum_{i=0}^\infty \frac{f_{i-1}}{i} x^i
$$

```cpp
Poly integr() const {
    Poly f(deg() + 1);
    pre_inv(deg() + 1);
    for (int i = deg(); i > 0; --i)
        f[i] = 1ll * Inv[i] * T[i - 1] % P;
    return f;
}
```

## 乘法逆

对于形式幂级数 $f$，如果存在 $g$ 使得

$$
f \ast g = 1
$$

那么称 $g$ 为 $f$ 的乘法逆，记作 $f^{-1}$。

容易证明，对于 $g_0 = g \bmod x^n$，有

$$
f \ast g_0 \equiv 1 \pmod{x^n}
$$

## 指数

仿照分析学中指数函数的定义，我们可以定义形式幂级数的指数函数。

$$
\exp(f) = \sum_{i=0}^\infty \frac{f^i}{i!} = 1 + f + \frac{f^2}{2!} + \cdots
$$

容易验证其仍有性质

$$
({\rm e}^f)' = f' \ast {\rm e}^f
$$

## 对数

对数函数的定义是指数的逆函数，可以得出其展开式

$$
\ln(1 - f) = - \sum_{i=1}^\infty \frac{f^i}{i!}
$$

容易验证其仍有性质

$$
(\ln f)' = \frac{f'}{f}
$$


