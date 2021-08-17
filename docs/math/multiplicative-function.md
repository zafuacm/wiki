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

快速求前缀和，[杜教筛](../dirichlet/#杜教筛) 是一种可选的方案。但是其该算法有一些局限性，下面给出两种适用更广泛的快速计算方法。

把质数集记作 $x \notin \mathbb{P}$，第 $i$ 个质数记作 $p_i$。特殊的，$p_0 = 1$。

记 $x$ 的最小非 $1$ 因子为 $\operatorname{lpf}(x)$，显然也是质因子。容易发现，若 $x \notin \mathbb{P}$，则有 $\operatorname{lpf}(x) \leqslant \sqrt{x}$。

## Min_25 筛

[Min_25](https://min-25.hatenablog.com/) 提出了 “Min_25 筛” 。之后，Min_25 还进行了改进，想了解的可以自行了解，这里我们只讲朴素 Min_25 筛。

记

$$
F(n,k) = \sum_{x=2}^n[p_k < \operatorname{lpf}(x)]f(x)
$$

和

$$
h(n) = \sum_{2 \leqslant p \leqslant n} f(p)
$$

于是 $S(n)$ 可以表示为

$$
\sum_{i=1}^n f(i) = f(1) + F(n, 0)
$$

接下来对各个部分分别求解。

### Part 1

类似的手法，处理 $F(n,k)$ 函数的计算。

质数单独计算贡献，合数则枚举最小因子 $p_i$，可以得到 $F(n, k)$ 的递推式

$$
\begin{aligned}
F(n, k) & = \sum_{p_k < p_i \leqslant \sqrt{n}} \sum_{p_i^c \leqslant n} f(p_i^c) \left( [c > 1] + \sum_{x = 2}^{\lfloor n/ p_i^c \rfloor} \left[ {p_i}  < \operatorname{lpf} (x) \right] f(x) \right) + \sum_{p_k < p \leqslant n} f(p)\\
& = \sum_{p_k < p_i \leqslant \sqrt{n}} \sum_{p_i^c \leqslant n} f(p_i^c) \left([c > 1] + F \left( \left\lfloor \frac{n}{p_i^c} \right\rfloor, i \right) \right) + h(n) - h (p_k)
\end{aligned}
$$

再注意到，若 $c$ 满足 $p_i^c \leqslant n < p_i^{c + 1}$，可以得到

$$
\left\lfloor \frac{n}{p_i^c} \right\rfloor < p_i < p_{i + 1} \Longrightarrow F \left( \left\lfloor \frac{n}{p_i^c} \right\rfloor, i \right) = 0
$$

而当 $c = 1$ 时第一项 $[c > 1] = 0$，因此可以错开有

$$
F(n, k) = \sum_{p_k < p_i \leqslant \sqrt{n}} \sum_{p_i^{c + 1} \leqslant n} \left(f(p_i^c) g \left( \left\lfloor \frac{n}{p_i^c} \right\rfloor, i \right) + f(p_i^{c + 1}) \right) + h(n) - h (p_i)
$$

如上所述，我们可以写出递归代码。取模有时可以用 `int128` 优化。

```cpp
ll F(ll n, int k) {
    if(n <= prime[k])
        return 0;
    ll ret = s[id(n)] - s[prime[k]];
    for (int i = k + 1; i <= cnt && prime[i] * prime[i] <= n; i++) {
        ll pi = prime[i], pk = pi;
        for (int c = 1; pk * pi <= n; c++, pk *= pi)
            ret += f_p(pi, c) * F(n / pk, i) + f_p(pi, c + 1);
    }
    return mo(ret);
}
```

### Part 2

接下来，关键在于求 $h$。预处理 $[1,n]$ 所有的 $h$ 不但时间上不够，空间上也不够。注意到我们所有用到的 $h(x)$ 都是 $F(n,0)$ 递归产生的，分类讨论：

- 对于递归产生的 $h(p_i)$，总是有 $p_i \leqslant \sqrt{n}$。
- 对于递归产生的 $h(n)$，都是通过 $g$ 的递推得到的，是 $n$ 的不断整除。又有定理

$$
\left\lfloor \frac{\lfloor a / b \rfloor}{c} \right\rfloor = \left\lfloor \frac{a}{b c} \right\rfloor
$$

这启发我们用整数分块，精简大于 $\sqrt{n}$ 的预处理。

我们只考虑 $f(p)$ 是较低次数的多项式的情况，令 $g_s(p) = p^s$（这样凑出来的 $g$ 是完全积性函数），单独计算每一项后求和。

再联想到 Eratosthenes 筛法：每次枚举一个 $p$，筛去所有不小于 $p^2$ 的 $p$ 的倍数。设第 $k$ 论筛完后剩下的数的 $g(p)$ 之和为

$$
G_k(n) = \sum_{i = 2}^n [p_k < \operatorname{lpf} (i) \vee i \in \mathbb{P}] g(i)
$$

容易发现，当 $n < p_k^2$ 时，$G_k(n) = G_{k - 1}(n)$。当 $n \geqslant p_i^2$ 时，递推有

$$
G_k(n) = G_{k - 1}(n) - g(p_k) \left( G_{k - 1} \left( \left\lfloor \frac{n}{p_k} \right\rfloor \right) - G_{i - 1} (p_k - 1) \right)
$$

至此，我们完成了朴素 Min_25 筛的全部推导。

### LOJ 6053 简单的函数

定义 $f(p^c) = p \oplus c$。

因此 $g(p) = f(p) = p - 1 + 2 [p = 2]$。与筛 $\varphi$
操作一样，最后加上 $2$ 即可。

??? Info "Min25 模板（LOJ 6053）"
    ```cpp
    const ll mod = 1000000007, inv2 = 500000004;
    const int maxn = 200005;
    ll n, prime[maxn], cnt, w[maxn], s[maxn], c[maxn];
    ll sqrt_n, m;

    ll mo(ll x) {
        return (x + mod) % mod;
    }

    ll f_p(ll p, ll e) {
        return p ^ e;
    }

    int id(ll x) {
        return x <= sqrt_n ? x : m - (n / x) + 1;
    }

    ll F(ll n, int k) {
        if(n <= prime[k])
            return 0;
        ll ret = s[id(n)] - s[prime[k]];
        for (int i = k + 1; i <= cnt && prime[i] * prime[i] <= n; i++) {
            ll pi = prime[i], pk = pi;
            for (int c = 1; pk * pi <= n; c++, pk *= pi)
                ret += f_p(pi, c) * F(n / pk, i) + f_p(pi, c + 1);
        }
        return mo(ret);
    }

    int main() {
        n = rr();
        sqrt_n = sqrt(n + 0.01);
        m = cnt = 0;
        for (ll l = 1, r; l <= n; l = r + 1) {
            w[++m] = r = n / (n / l);
            ll mr = mo(r);
            s[m] = mr * (mr + 1) / 2 - 1;
            c[m] = mr - 1;
        }
        for (ll p = 2; p <= sqrt_n; p++) {
            if(c[p] != c[p - 1]) {
                prime[++cnt] = p;
                for (ll j = m; w[j] >= p * p; j--) {
                    s[j] -= p * (s[id(w[j] / p)] - s[p - 1]);
                    c[j] -= c[id(w[j] / p)] - c[p - 1];
                }
            }
        }
        for (int i = 2; i <= m; i++)
            s[i] = mo(s[i] - c[i] + 2);
        printf("%lld", F(n, 0) + 1);
    }
    ```

### P4213 杜教筛

求 Euler $\varphi$ 函数的前缀和，有 $\varphi (p^k) = p^k - p^{k - 1}$。

令 $g(p) = p$，那么 $G_0(n) = \dfrac{1}{2} n (n + 1) - 1$。令 $g(p) = 1$，那么 $G_0(n) = n - 1$。

两次计算分别累加即可。

求 Mobius $\mu$ 函数的前缀和，有 $\mu (p^k) = - [k = 1]$，令 $g(p) = 1$，在筛 $\varphi(n)$ 中已经计算过所以不用再次计算。

再由于当 $c > 1$ 时有 $\mu (p^c) = 0$，故计算 $F$ 时可以再优化。在计算时要注意卡常，避免除法，最后一个点对时间的要求比较紧。

### P5325 Min25 筛

定义 $f(p^c) = p^c (p^c - 1)$。

令 $g(p) = p^2$，得 $G_0(n) = \dfrac{1}{6} n (n + 1) (2 n + 1) - 1$。令 $g(p) = p$，得 $G_0(n) = \dfrac{1}{2} n (n + 1) - 1$。

取模的细节有亿点多，大家小心。

## PN 筛

TODO

## 舟阁筛


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

因为出现了更好用的 Min_25 筛，舟阁筛已经用不到了。
