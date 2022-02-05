# FFT

前置知识：复数、原根、卷积。

对于 $n$ 次多项式

$$
\begin{aligned}
f(x) = \sum_{i=0}^n f_ix^i &=  f_0 + f_1 x + f_2x^2 + \cdots + g_nx^n \\
g(x) = \sum_{i=0}^n g_ix^i &=  g_0 + g_1 x + g_2x^2 + \cdots + g_nx^n
\end{aligned}
$$

它们的乘法是 $F(x) = f(x)g(x) = \sum\limits_{k=0}^{2n} c_kx^k$，其中

$$
c_k = \sum_{i+j=k}f_ig_j
$$

因此计算多项式的乘积需要 $n^2$ 次系数乘法，我们需要优化。

## 点值表示法

$n$ 次多项式 $f(x)$ 可以由 $n+1$ 个系数决定，也可以由 $n+1$ 个座标（点值）决定。即 $n$ 次多项式可以看作 $n+1$ 维的向量。

考虑选取 $2n+1$ 个座标来确定 $f(x)$ 和 $g(x)$。则 $F(x)$ 可以简单的通过做 $2n+1$ 次乘法得到

$$
(x_k,F(x_k)) = \left(x_k, f(x_k)g(x_k)\right)
$$

于是求多项式的乘法，可以先从系数表示法转换为点值表示法，做完乘法再变回去。

## 单位原根

称方程 $x^n = 1$ 的 $n$ 个解为单位根，其中特殊的一个记作 $\omega_n = e^{\frac{2 \pi i}{n}}$，称为单位原根。根据 Euler 公式，有

$$
\omega_n = e^{\tfrac{2 \pi i}{n}} = \cos \left(\frac{2\pi}{n}\right) + i \sin \left(\frac{2\pi}{n}\right)
$$

即 $\omega_n$ 是单位圆上的一个点，全部的 $n$ 个单位根

$$
x_k = \omega_n^k = e^{k\tfrac{2 \pi i}{n}} = \cos \left(\frac{2\pi k}{n}\right) + i \sin \left(\frac{2\pi k}{n}\right) 
$$

恰全是单位元的 $n$ 等分点。因此根据 Euler 公式，**单位根之间的乘法就是在单位元上转圈圈。**

## DFT

设多项式 $f(x) = \sum\limits_{k=0}^{n-1} f_kx^k$，并记 $\omega = \omega_n$，则称向量

$$
\operatorname{DFT}_{\omega}(f) =( f(1), f(\omega^1), \cdots, f(\omega^{n-1}) )
$$

为 $f$ 的离散 Fourier 变换（DFT）。

DFT 存在逆变换（IDFT），即从点值重新变回系数，仍是从向量到向量的变换。

IDFT 存在性质

$$
(\operatorname{DFT}_{\omega})^{-1} = \frac{1}{n} (\operatorname{DFT}_{\omega^{-1}})
$$

篇幅所限，不放证明。现在我们可以统一的处理 DFT 和 IDFT。

## 分治

利用单位元根的特殊性，我们可以分治计算 DFT。比如对于 $7$ 次多项式

$$
\begin{aligned}
f(x) &= f_0 + f_1x + f_2x^2 + f_3 x^3 + f_4 x^4 + f_5 x^5 + f_6 x^6 + f_7 x^7 \\
&= (f_0 + f_2x^2 + f_4x^4 + f_6x^6) + x(f_1 + f_3x^2 + f_5x^4 + f_7x^6)
\end{aligned}
$$

奇偶分别建立函数

$$
\begin{aligned}
f^{[0]}(x) &= f_0 + f_2x + f_4x^2 + f_6x^3 \\
f^{[1]}(x) &= f_1 + f_3x + f_5x^2 + f_7x^3
\end{aligned}
$$

则原来的函数可以表示为

$$
f(x) = f^{[0]}(x^2) + xf^{[1]}(x^2)
$$

一般的，对于度小于 $n$ 的多项式 $f(x)$，利用单位原根的性质有

$$
\begin{aligned}
f(\omega_{n}^k) &= f^{[0]}(\omega_{n}^k \cdot \omega_{n}^k) + \omega_{n}^kf^{[1]}(\omega_{n}^k \cdot \omega_{n}^k) \\
&= f^{[0]}(\omega_{n}^{2k}) + \omega_{n}^kf^{[1]}(\omega_{n}^{2k}) \\
&= f^{[0]}(\omega_{n/2}^{k}) + \omega_{n}^kf^{[1]}(\omega_{n/2}^{k})
\end{aligned}
$$

同理可得

$$
\begin{aligned}
f(\omega_{n}^{k+n/2}) &= f^{[0]}(\omega_{n}^{2k+n}) + \omega_{n}^{k+n/2}f^{[1]}(\omega_{n}^{2k+n}) \\
&= f^{[0]}(\omega_{n/2}^{k}) - \omega_{n}^{k}f^{[1]}(\omega_{n/2}^{k})
\end{aligned}
$$

因此我们需要把多项式的系数向上补到 $2^n$ 个，方便分治。

在 DFT 中使用有

$$
\begin{aligned}
\operatorname{DFT}_{\omega}(f)[j] &= \operatorname{DFT}_{\omega^2}(f^{[0]})[j] + \omega^j\operatorname{DFT}_{\omega^2}(f^{[1]})[j] \\
\operatorname{DFT}_{\omega}(f)[j + n/2] &= \operatorname{DFT}_{\omega^2}(f^{[0]})[j] - \omega^j\operatorname{DFT}_{\omega^2}(f^{[1]})[j]
\end{aligned}
$$

至此，我们可以写出递归版的 FFT。

```cpp
void DFT(Comp *f, int n, int type) {
    if (n == 1)
        return;
    for (int i = 0; i < n; i++)
        tmp[i] = f[i];
    for (int i = 0; i < n; i++) {  // 偶数放左边，奇数放右边
        if (i & 1)
            f[n / 2 + i / 2] = tmp[i];
        else
            f[i / 2] = tmp[i];
    }
    Comp *g = f, *h = f + n / 2;
    DFT(g, n / 2, type), DFT(h, n / 2, type);
    Comp step(cos(2 * PI / n), sin(2 * PI * type / n));
    Comp cur(1, 0);

    for (int k = 0; k < n / 2; k++) {
        tmp[k] = g[k] + cur * h[k];
        tmp[k + n / 2] = g[k] - cur * h[k];
        cur = cur * step;
    }
    for (int i = 0; i < n; i++)
        f[i] = tmp[i];
}
```

## 蝴蝶变换

递归分治总是不尽人意的，如果能一次到位就更好了。还是以 $7$ 次多项式为例

- 初始 $\{x^0,x^1,x^2,x^3,x^4,x^5,x^6,x^7\}$
- 一次 $\{x^0,x^2,x^4,x^6\},\{x^1,x^3,x^5,x^7\}$
- 两次 $\{x^0,x^4\},\{x^2,x^6\},\{x^1,x^5\},\{x^3,x^7\}$
- 结束 $\{x^0\},\{x^4\},\{x^2\},\{x^6\},\{x^1\},\{x^5\},\{x^3\},\{x^7\}$

写出二进制的形式，可以发现规律

$$
\begin{matrix}
\text{初始}    & 0    & 1    & 2    & 3    & 4    & 5    & 6    & 7    &\\
\text{初始(2)} & 000  & 001  & 010  & 011  & 100  & 101  & 110  & 111  &\\
\text{结束(2)} & 000  & 100  & 010  & 110  & 001  & 101  & 011  & 111  &\\
\text{结束}    & 0    & 4    & 2    & 6    & 1    & 5    & 3    & 7    &
\end{matrix}
$$

结束和开始的二进制恰好是相反的。这个变换称为蝴蝶变换，也称位逆序置换（bit-reversal permutation）。

我们可以 $O(n)$ 的预处理出变换数组。设 `R(x)` 是 $x$ 的变换结果，则 `R(x>>1)` 是已求的。

$$
\begin{aligned}
\texttt{000abcd} &\to \texttt{dcba000} \\
\texttt{00abcdx} &\to \texttt{xdcba00}
\end{aligned}
$$

即是把 `R(x>>1)` 右移一位再补上最高位即可。代码如下

```cpp
int lim = 1, lim_2;
while (lim <= n + m)
    lim <<= 1;
lim_2 = lim >> 1;
for (int i = 0; i < lim; ++i) {
    rev[i] = rev[i >> 1] >> 1;
    if (i & 1)
        rev[i] |= lim >> 1;
    // 或者合并写为
    // rev[i] = (rev[i >> 1] >> 1) | ((i & 1) * lim_2);
}
```

现在我们可以写出非递归版的 FFT。

```cpp
void FFT(Comp *f, int n, int type) {
    for (int i = 0; i < n; ++i) {
        if (i < rev[i]) {
            swap(f[i], f[rev[i]]);
        }
    }
    for (int h = 2; h <= n; h <<= 1) {
        Comp step(cos(2 * PI / h), sin(2 * PI * type / h));
        for (int j = 0; j < n; j += h) {
            Comp cur(1, 0);
            for (int k = j; k < j + h / 2; k++) {
                Comp f1 = f[k], f2 = f[k + h / 2];
                f[k] = f1 + cur * f2;
                f[k + h / 2] = f1 - cur * f2;
                cur = cur * step;
            }
        }
    }
    if (type == 1)
        return;
    for (int i = 0; i < n; i++)
        f[i].x /= n, f[i].y /= n;
}
```

## 三步并做两步

实战一下：[P3803 多项式乘法](https://www.luogu.com.cn/problem/P3803)。

我们的计算步骤是：

```cpp
FFT(F, lim, 1);
FFT(G, lim, 1);
for (int i = 0; i <= lim; i++)
    F[i] = F[i] * G[i];
FFT(F, lim, -1);
```

实际上，我们并不用三次 FFT，两次足以。注意到若把 $F(x)$ 放在实部而 $G(x)$ 放在虚部

$$
(F + iG)^2 = (F^2-G^2) + 2iFG
$$

平方之后虚部恰是答案。

这里展示全部的代码，帮助大家理解。

```cpp
const double PI = acos(-1.0);

const int MAXN = 4e6 + 10;

struct Comp {
    double x, y;
    Comp(double xx = 0, double yy = 0) {
        x = xx, y = yy;
    }
    Comp operator+(Comp c) {
        return Comp(x + c.x, y + c.y);
    }
    Comp operator-(Comp c) {
        return Comp(x - c.x, y - c.y);
    }
    Comp operator*(Comp c) {
        double tx = x * c.x - y * c.y;
        double ty = x * c.y + y * c.x;
        return Comp(tx, ty);
    }
};

Comp ff[MAXN];
int rev[MAXN];

void FFT(Comp *f, int n, int type) {
    for (int i = 0; i < n; ++i) {
        if (i < rev[i]) {
            swap(f[i], f[rev[i]]);
        }
    }
    for (int h = 2; h <= n; h <<= 1) {
        Comp step(cos(2 * PI / h), sin(2 * PI * type / h));
        for (int j = 0; j < n; j += h) {
            Comp cur(1, 0);
            for (int k = j; k < j + h / 2; k++) {
                Comp f1 = f[k], f2 = f[k + h / 2];
                f[k] = f1 + cur * f2;
                f[k + h / 2] = f1 - cur * f2;
                cur = cur * step;
            }
        }
    }
    if (type == 1)
        return;
    for (int i = 0; i < n; i++)
        f[i].x /= n, f[i].y /= n;
}

int main() {
    int n = rr(), m = rr();
    for (int i = 0; i <= n; i++)
        ff[i].x = rr();
    for (int i = 0; i <= m; i++)
        ff[i].y = rr();

    int lim = 1, lim_2;
    while (lim <= n + m)
        lim <<= 1;
    lim_2 = lim >> 1;
    for (int i = 0; i < lim; ++i) {
        rev[i] = (rev[i >> 1] >> 1) | ((i & 1) * lim_2);
    }

    FFT(ff, lim, 1);

    for (int i = 0; i <= lim; i++)
        ff[i] = ff[i] * ff[i];

    FFT(ff, lim, -1);
    
    for (int i = 0; i <= m + n; i++)
        printf("%d ", int(ff[i].y / 2 + 0.5));
    return 0;
}
```

## 应用

FFT 是卷积计算的基础工具。更多应用见 [卷积](../convolution/)。

## 练习

- [P3803 多项式乘法](https://www.luogu.com.cn/problem/P3803)

## 参考资料

- [快速傅里叶变换 - OI Wiki](https://www.luogu.com.cn/problem/P3803)

------

本页面贡献者：[@rogeryoungh](https://github.com/rogeryoungh)
