# 中国剩余定理 CRT

若在 $\{n_i\}$ 中任意两个互质，求方程组

$$
\begin{cases} x \equiv a_1 &\pmod {n_1} \\ x \equiv a_2 &\pmod {n_2} \\ &\vdots \\ x \equiv a_k &\pmod {n_k} \end{cases}
$$

的解。注意到，对于第 $i$ 项，我们可以构造数

$$
m_i = \frac{1}{n_i}\prod_{j=1}^k n_j
$$

它对除了 $n_i$ 以外的数 $n$ 模都是 $0$，再求 $m_i$ 对 $n_i$ 逆元

$$
m_i m_i^{-1} \equiv 1 \pmod {n_i}
$$

因此

$$
a_im_im_i^{-1} \equiv a_i\pmod {n_i}
$$

对所有的解累加求和得到全部的解

$$
x \equiv \sum_{i=1}^k a_im_im_i^{-1} \pmod {\prod_{j=1}^k n_j}
$$

```cpp
int crt(int *aa, int *nn) {
    int prod = 1;
    int ret = 0;
    for (int i = 1; i <= n; i++)
        prod *= nn[i];
    for (int i = 1; i <= n; i++) {
        int m = prod / nn[i];
        ret += aa[i] * m * inv(m, nn[i]);
        ret %= prod;
    }
    return ret;
}
```

## 练习

- [P1495 【模板】中国剩余定理(CRT)/曹冲养猪](https://www.luogu.com.cn/problem/P1495)
