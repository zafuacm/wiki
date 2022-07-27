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

如上所述，我们可以写出递归代码。

```cpp
Z F(ll u, int k) {
    if (u <= primes[k])
        return 0;
    Z ret = sum[id(u)] - sum[primes[k]];
    for (int i = k + 1; i < primes.size() && 1ll * primes[i] * primes[i] <= u; i++) {
        ll pi = primes[i], pc = pi;
        for (int c = 1; pc * pi <= u; c++, pc *= pi)
            ret += fp(pi, c) * F(u / pc, i) + fp(pi, c + 1);
    }
    return ret;
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


### 例题

~~~admonish note "[LOJ6053 简单的函数](https://loj.ac/p/6053)"
给定一个积性函数 $f(x)$，其中：

1. $f(p^c) = p \oplus c$。
2. $f(1) = 1$。

求其前缀和。
~~~

因为 $f(p) = p - 1 + 2 [p = 2]$，拆分成 $p$ 和 $-1$ 即可，注意最后需要加 $2$。

~~~admonish info collapsible=true  title="参考代码"

```cpp
struct Min25 {
    ll n, sn, m = 0;
    vector<int> primes;
    vector<Z> sum;
    Z fp(int p, int k) {
        return p ^ k;
    }
    int id(ll x) {
        return x <= sn ? x : m - (n / x) + 1;
    }
    Min25(ll u) : n(u), sn(sqrt(n) + 1), sum(sn * 2 + 5) {
        vector<bool> not_p(sn + 1);
        vector<ll> w(sn * 2 + 5);
        for (ll l = 1, r; l <= n; l = r + 1) {
            w[++m] = r = n / (n / l);
        }
        vector<Z> s0(m + 1), s1(m + 1);
        for (int i = 1; i <= m; i++) {
            Z r = w[i] % P;
            s0[i] = r - 1;
            s1[i] = r * (r + 1) / 2 - 1;
        }
        primes.push_back(0);
        for (int i = 2; i <= sn; i++) {
            if (not not_p[i]) {
                primes.push_back(i);
                for (int j = i; j <= (sn - 1) / i; j++)
                    not_p[i * j] = true;
                for (int j = m; w[j] >= 1ll * i * i; j--) {
                    s1[j] -= i * (s1[id(w[j] / i)] - s1[i - 1]);
                    s0[j] -= s0[id(w[j] / i)] - s0[i - 1];
                }
            }
        }
        for (int i = 2; i <= m; i++) {
            sum[i] = s1[i] - s0[i] + 2;
        }
    }
    Z eval() {
        return F(n, 0) + 1;
    }
    Z F(ll u, int k) {
        if (u <= primes[k])
            return 0;
        Z ret = sum[id(u)] - sum[primes[k]];
        for (int i = k + 1; i < primes.size() && 1ll * primes[i] * primes[i] <= u; i++) {
            ll pi = primes[i], pc = pi;
            for (int c = 1; pc * pi <= u; c++, pc *= pi)
                ret += fp(pi, c) * F(u / pc, i) + fp(pi, c + 1);
        }
        return ret;
    }
};
```

~~~

~~~admonish note "[P5325 Min25 筛](https://www.luogu.com.cn/problem/P5325)"
给定一个积性函数 $f(x)$，其中：

1. $f(p^c) = p^c(p^c - 1)$。
2. $f(1) = 1$。

求其前缀和，答案对 $10^9+7$ 取模。
~~~

注意到 $f(p) = p^2 - p$，拆分成 $p^2$ 和 $p$ 即可。

~~~admonish info collapsible=true  title="参考代码"

```cpp
struct Min25 {
    ll n, sn, m = 0;
    vector<int> primes;
    vector<Z> sum;
    Z fp(int p, int k) {
        Z pk = Z(p).pow(k);
        return pk * (pk - 1);
    }
    int id(ll x) {
        return x <= sn ? x : m - (n / x) + 1;
    }
    Min25(ll u) : n(u), sn(sqrt(n) + 1), sum(sn * 2 + 5) {
        vector<bool> not_p(sn + 1);
        vector<ll> w(sn * 2 + 5);
        for (ll l = 1, r; l <= n; l = r + 1) {
            w[++m] = r = n / (n / l);
        }
        vector<Z> s2(m + 1), s1(m + 1);
        for (int i = 1; i <= m; i++) {
            Z r = w[i] % P;
            s1[i] = r * (r + 1) / 2 - 1;
            s2[i] = r * (r + 1) * (2 * r + 1) / 6 - 1;
        }
        primes.push_back(0);
        for (int i = 2; i <= sn; i++) {
            if (not not_p[i]) {
                primes.push_back(i);
                for (int j = i; j <= (sn - 1) / i; j++)
                    not_p[i * j] = true;
                for (int j = m; w[j] >= 1ll * i * i; j--) {
                    s1[j] -= i * (s1[id(w[j] / i)] - s1[i - 1]);
                    s2[j] -= Z(i) * i * (s2[id(w[j] / i)] - s2[i - 1]);
                }
            }
        }
        for (int i = 2; i <= m; i++) {
            sum[i] = s2[i] - s1[i];
        }
    }
    Z eval() {
        return F(n, 0) + 1;
    }
    Z F(ll u, int k) {
        if (u <= primes[k])
            return 0;
        Z ret = sum[id(u)] - sum[primes[k]];
        for (int i = k + 1; i < primes.size() && 1ll * primes[i] * primes[i] <= u; i++) {
            ll pi = primes[i], pc = pi;
            for (int c = 1; pc * pi <= u; c++, pc *= pi)
                ret += fp(pi, c) * F(u / pc, i) + fp(pi, c + 1);
        }
        return ret;
    }
};
```

~~~

~~~admonish note "[P4213 杜教筛](https://www.luogu.com.cn/problem/P4213)"
求积性函数 $\varphi(x)$ 和 $\mu(x)$ 的前缀和

1. $\varphi(p^c) = p^c - p^{c-1}$。
2. $\mu(p^c) = -[c=1]$。
~~~

因为 $\varphi(p) = p - 1$，和 $\mu(p) = -1$，处理上大同小异。

~~~admonish info collapsible=true  title="参考代码"

```cpp
struct Min25_phi {
    ll n, sn, m = 0;
    vector<int> primes;
    vector<Z> sum;
    Z fp(int p, int k) {
        return qpow(p, k - 1) * (p - 1);
    }
    int id(ll x) {
        return x <= sn ? x : m - (n / x) + 1;
    }
    Min25_phi(ll u) : n(u), sn(sqrt(n) + 1), sum(sn * 2 + 5) {
        vector<bool> not_p(sn + 1);
        vector<ll> w(sn * 2 + 5);
        for (ll l = 1, r; l <= n; l = r + 1) {
            w[++m] = r = n / (n / l);
        }
        vector<Z> s0(m + 1), s1(m + 1);
        for (int i = 1; i <= m; i++) {
            Z r = w[i];
            s0[i] = r - 1;
            s1[i] = r * (r + 1) / 2 - 1;
        }
        primes.push_back(0);
        for (int i = 2; i <= sn; i++) {
            if (not not_p[i]) {
                primes.push_back(i);
                for (int j = i; j <= (sn - 1) / i; j++)
                    not_p[i * j] = true;
                for (int j = m; w[j] >= 1ll * i * i; j--) {
                    s1[j] -= i * (s1[id(w[j] / i)] - s1[i - 1]);
                    s0[j] -= s0[id(w[j] / i)] - s0[i - 1];
                }
            }
        }
        for (int i = 2; i <= m; i++) {
            sum[i] = s1[i] - s0[i];
        }
    }
    Z eval() {
        return F(n, 0) + 1;
    }
    Z F(ll u, int k) {
        if (u <= primes[k])
            return 0;
        Z ret = sum[id(u)] - sum[primes[k]];
        for (int i = k + 1; i < primes.size() && 1ll * primes[i] * primes[i] <= u; i++) {
            ll pi = primes[i], pc = pi;
            for (int c = 1; pc * pi <= u; c++, pc *= pi) {
                ret += fp(pi, c) * F(u / pc, i) + fp(pi, c + 1);
            }
        }
        return ret;
    }
};

struct Min25_mu {
    ll n, sn, m = 0;
    vector<int> primes;
    vector<Z> sum;
    Z fp(int p, int k) {
        return -(k == 1);
    }
    int id(ll x) {
        return x <= sn ? x : m - (n / x) + 1;
    }
    Min25_mu(ll u) : n(u), sn(sqrt(n) + 1), sum(sn * 2 + 5) {
        vector<bool> not_p(sn + 1);
        vector<ll> w(sn * 2 + 5);
        for (ll l = 1, r; l <= n; l = r + 1) {
            w[++m] = r = n / (n / l);
        }
        vector<Z> s0(m + 1);
        for (int i = 1; i <= m; i++) {
            Z r = w[i];
            s0[i] = r - 1;
        }
        primes.push_back(0);
        for (int i = 2; i <= sn; i++) {
            if (not not_p[i]) {
                primes.push_back(i);
                for (int j = i; j <= (sn - 1) / i; j++)
                    not_p[i * j] = true;
                for (int j = m; w[j] >= 1ll * i * i; j--) {
                    s0[j] -= s0[id(w[j] / i)] - s0[i - 1];
                }
            }
        }
        for (int i = 2; i <= m; i++) {
            sum[i] = -s0[i];
        }
    }
    Z eval() {
        return F(n, 0) + 1;
    }
    Z F(ll u, int k) {
        if (u <= primes[k])
            return 0;
        Z ret = sum[id(u)] - sum[primes[k]];
        for (int i = k + 1; i < primes.size() && 1ll * primes[i] * primes[i] <= u; i++) {
            ll pi = primes[i], pc = pi;
            for (int c = 1; pc * pi <= u; c++, pc *= pi)
                ret += fp(pi, c) * F(u / pc, i) + fp(pi, c + 1);
        }
        return ret;
    }
};
```

~~~

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

## 参考资料

- [Min_25 筛 - OI Wiki](https://oi-wiki.org/math/number-theory/min-25/)
