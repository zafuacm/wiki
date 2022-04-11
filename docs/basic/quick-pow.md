# 快速幂

假如我们想要得到 $3^{100} \bmod 10007$，你会怎么做？

你可能会写出这样的代码

```cpp
const int mod = 10007;
int ans = 1;
for (int i = 0; i < 100; i++)
    ans = ans * 3 % mod;
return ans;
```

假如要计算的是 $a^n \bmod p$，那么这种写法的时间复杂度是 $O(n)$。尽管 $O(n)$ 听起来已经很不错，但是，我们可以做到更快。

## 平方法

假设初始为 $a$，自乘后得到 $a^2$，再对结果自乘得到 $a^4$，反复下去，我们可以得到一列数

$$
a \to a^2 \to a^{4} \to a^{8} \to a^{16} \to a^{32} \to a^{64} \to \cdots
$$

容易发现，它的指数的增长速度是 $2^k$，比线性增长的速度快的多。

我们可以尝试利用“平方法”加速幂的运算。

## 递归方法

很自然的想到

$$
a^n = \begin{cases}
a^{n-1} \times a, &n \bmod 2 = 1\\
a^{\frac{n}{2}} \times a^{\frac{n}{2}}, &n \bmod 2 = 0
\end{cases}
$$

可以据此实现代码

```cpp
const int mod = 10007;
int qpow(int a, int n) {
    if(n == 0) {
        return 1;
    } else if(n % 2 == 1) {
        return qpow(a, n - 1) * a % mod;
    } else {
        int t = qpow(a, n / 2);
        return t * t % mod;
    }
}
```

> **思考**
> 
> 为什么不写 `qpow(a, n / 2) * qpow(a, n / 2)`，而用 `t` 进行存储？

递归本身也具有一定的开销，我们可以稍加思考，改进得到非递归法。

## 非递归法

还是讨论 $a^{100}$，我们可以把它拆分成“平方法”数列中的项的乘积

$$
a^{100} = a^{64} \times a^{32} \times a^4
$$

那么对于任意的 $n$，如何拆分 $a^n$ 才可以利用平方法加速呢？

注意到平方法数列中的指数都是 $2$ 的幂，即把 $n$ 分解为 $2$ 的幂的和，于是很自然的想到 $n$ 的二进制表示。

因为 $100_{10} = 1100100_2$，于是有

$$
\begin{matrix} 
& a^1 & a^2 & a^4 & a^8 & a^{16} & a^{32} & a^{64} \\
100 & & & 4 & & & 32 & 64\\
100 & 0 & 0 & 1 & 0 & 0 & 1 & 1 
\end{matrix}
$$

即二进制下该位为 $1$，则计算该位的贡献；若该位为 $0$，则不计算该位的贡献。

于是可以写出代码

```cpp
const int mod = 10007;
int qpow(int a, int n) {
    int ans = 1;
    while(n > 0) {
        if(n % 2 == 1)
            ans = ans * a % mod;
        a = a * a % mod;
        n = n / 2;
    }
    return ans;
}
```

在实际使用时往往写成这样

```cpp
ll qpow(ll a, ll b, ll p) {
    ll ret = p != 1;
    for(; b; b >>= 1) {
        if(b & 1)
            ret = a * ret % p;
        a = a * a % p;
    }
    return ret;
}
```

## 应用

快速幂只是一个小技巧，但是应用的范围很广泛。

### 数列递推

拿我们熟悉的 Fibonacci 数列举例

$$
F_{n+2} = F_{n+1} + F_{n}
$$ 

可以写成矩阵乘法形式

$$
\left(\begin{matrix}F_{n+1}\\F_{n+2}\end{matrix}\right)
= \left(\begin{matrix}0 & 1\\1 & 1\end{matrix}\right)
\left(\begin{matrix}F_{n}\\F_{n+1}\end{matrix}\right)
$$

设 $P = \left(\begin{matrix}0 & 1\\1 & 1\end{matrix}\right)$ ，于是有

$$
\left(\begin{matrix}F_{n+1}\\F_{n+2}\end{matrix}\right)
= P^n\left(\begin{matrix}F_{1}\\F_{2}\end{matrix}\right)
$$

可以对矩阵使用快速幂，那么计算第 $n$ 项只需 $O(\log n)$。

## 例题

- [P1226 【模板】快速幂](https://www.luogu.com.cn/problem/P1226)
- [P1962 斐波那契数列](https://www.luogu.com.cn/problem/P1962)
