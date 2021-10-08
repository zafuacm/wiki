# 中国剩余定理 CRT

若在序列 $\{n_i\}$ 中任意两个互质，求方程组

$$
\begin{cases}
x \equiv a_1 &\pmod {n_1} \\
x \equiv a_2 &\pmod {n_2} \\
&\vdots \\
x \equiv a_k &\pmod {n_k}
\end{cases}
$$

的解。注意到，对于第 $i$ 个方程，我们可以构造数

$$
m_i = \frac{1}{n_i}\prod_{j=1}^k n_j
$$

再求 $m_i$ 对 $n_i$ 逆元，则此式具有性质

$$
(m_im_i^{-1}) \bmod n_j = \begin{cases}
1,&j = i\\
0,&j \ne i
\end{cases}
$$

这说明每一个解都不影响其他方程，可以独立求解再求和。因此有

$$
a_im_im_i^{-1} \equiv a_i\pmod {n_i}
$$

对所有的解累加求和得到方程组的解

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

------

本页面贡献者：[@rogeryoungh](https://github.com/rogeryoungh)
