# 筛法

我们有时需要预处理一些质数。对每一个数都进行素性测试太慢了，筛法是更好的选择。

以下讨论时不再强调 $1$ 的反常。

## Eratosthenes 筛法

考虑数 $x$，不管 $x$ 是否是质数，$x$ 的倍数都是合数，我们可以把 $x$ 的倍数全在表中标记划去。

从 $2$ 开始，把每一个遇到的数的倍数都从表中划去，则接下来第一个没被划到的数必为质数。再划去该数的倍数，找到下一个没被划到的质数……

```cpp
vector<bool> not_p;
vector<int> primes;
void Eratosthenes(int n) {
    not_p.resize(n + 1);
    for (int i = 2; i <= n; i++) {
        if (!not_p[i]) {
            primes.push_back(i);
            for (int j = i; j < n / i; j++)
                not_p[i * j] = true;
        }
    }
}
```

记 $x$ 的最小的非 $1$ 因子为 $\operatorname{lpf}(x)$，显然也是质因子。

容易发现，若 $x \notin \mathbb{P}$，则有 $\operatorname{lpf}(x) \leqslant \sqrt{x}$，即我们只需要筛到 $\sqrt{n}$ 就行；也可以把 $2$ 单独提出。

以上操作不改变复杂度，都是 $O(n \log \log n)$，但会显著改变常数。

## Euler 筛法

注意到，我们每一个合数都重复标记了几次，需要优化。

从小到大枚举 $p \in \mathbb{P}$，到 $i$ 整除 $p$ 时停止，这说明 $p$ 始终是 $i \cdot p$ 最小的因子。

因此对于每个合数，一定且仅会因为最小因子筛掉。因此复杂度 $O(n)$，故此筛法也称为线性筛。

```cpp
vector<bool> not_p;
vector<int> primes;
void Euler(int n) {
    not_p.resize(n + 1);
    for (int i = 2; i <= n; i++) {
        if (!not_p[i])
            primes.push_back(i);
        for (auto pj : primes) {
            if (pj > n / i)
                break;
            not_p[i * pj] = true;
            if (i % pj == 0)
                break;
        }
    }
}
```

## Euler 筛预处理积性函数

用 Euler 筛预处理积性函数 $f(x)$，需要函数满足一定的性质。常见的积性函数有 Euler $\varphi(n)$ 函数和 Mobius $\mu(n)$ 函数。

筛法过程中中，我们可以得到一个数的最小质因子 $p$，并且知道该数是否具有多个因子 $p$ 。

假设数 $i \cdot p$ 仅具有一个因子 $p$ ，由积性函数定义知

$$
f(i \cdot p) = f(i) f(p)
$$

当数 $i \cdot p$ 具有多个因子 $p$ 时，仅仅积性函数的性质是不够的，需要此时 $f(x)$ 能够容易的计算。例如

$$
\varphi(i \cdot p^k) = \varphi(i \cdot p^{k-1}) \cdot p, \qquad \mu(i \cdot p^k) = 0
$$

并且要求 $f(p)$ 也要容易计算，有代码

```cpp
vector<bool> not_p;
vector<int> primes, phi, mu;
void Euler(int n) {
    not_p.resize(n + 1);
    phi.resize(n + 1);
    mu.resize(n + 1);
    mu[1] = phi[1] = 1;
    for (int i = 2; i <= n; i++) {
        if (!not_p[i]) {
            primes.push_back(i);
            phi[i] = i - 1, mu[i] = -1;
        }
        for (auto pj : primes) {
            if (pj > n / i)
                break;
            not_p[i * pj] = true;
            if (i % pj == 0) {
                phi[i * pj] = phi[i] * pj;
                mu[i * pj] = 0;
                break;
            }
            phi[i * pj] = phi[i] * (pj - 1);
            mu[i * pj] = -mu[i];
        }
    }
}
```

## 例题

- [P2568 GCD](https://www.luogu.com.cn/problem/P2568)，本题有 $\phi(x)$ 和 $\mu(x)$ 两种做法，详见 [题解](https://rogeryoungh.github.io/code-of-acm/post/2021-05/p2257/)，需要一定数学推导。

## 参考资料

- [筛法 - OI Wiki](https://oi-wiki.org/math/number-theory/sieve/)。

------

本页面贡献者：[@rogeryoungh](https://github.com/rogeryoungh)

