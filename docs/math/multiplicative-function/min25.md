---
comments: true
---

# Min_25 筛

[Min_25](https://min-25.hatenablog.com/) 提出了 “Min_25 筛” 。之后，Min_25 还进行了改进，想了解的可以自行了解，这里我们只讲朴素 Min_25 筛。

把质数集记作 $x \notin \mathbb{P}$，第 $i$ 个质数记作 $p_i$。特殊的，$p_0 = 1$。

记 $x$ 的最小非 $1$ 因子为 $\operatorname{lpf}(x)$，显然也是质因子。容易发现，若 $x \notin \mathbb{P}$，则有 $\operatorname{lpf}(x) \leqslant \sqrt{x}$。

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

!!! note "[LOJ6053 简单的函数](https://loj.ac/p/6053)"
    给定一个积性函数 $f(x)$，其中：

    1. $f(p^c) = p \oplus c$。
    2. $f(1) = 1$。

    求其前缀和。

??? info "提示"
    因为 $f(p) = p - 1 + 2 [p = 2]$，拆分成 $p$ 和 $-1$ 即可，注意最后需要加 $2$。

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

!!! note "[P5325 Min25 筛](https://www.luogu.com.cn/problem/P5325)"
    给定一个积性函数 $f(x)$，其中：

    1. $f(p^c) = p^c(p^c - 1)$。
    2. $f(1) = 1$。

    求其前缀和，答案对 $10^9+7$ 取模。

??? info "提示"
    注意到 $f(p) = p^2 - p$，拆分成 $p^2$ 和 $p$ 即可。

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

!!! note "[P4213 杜教筛](https://www.luogu.com.cn/problem/P4213)"
    求积性函数 $\varphi(x)$ 和 $\mu(x)$ 的前缀和

    1. $\varphi(p^c) = p^c - p^{c-1}$。
    2. $\mu(p^c) = -[c=1]$。

??? info "提示"
    因为 $\varphi(p) = p - 1$，和 $\mu(p) = -1$，处理上大同小异。

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

## 参考资料

- [Min_25 筛 - OI Wiki](https://oi-wiki.org/math/number-theory/min-25/)
