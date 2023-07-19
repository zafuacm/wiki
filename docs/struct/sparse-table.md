---
comments: true
---

# ST 表

ST 表基于倍增思想，可以做到 $O(n\log n)$ 预处理，$O(1)$ 回答每个询问，所用空间为 $O(n\log n)$。

ST 表仅适用于 **可重复贡献问题** 问题。

> **什么是可重复贡献问题** 
> 
> 对于运算 $\ast$，满足结合律且 $x \ast x = x$，则对应的区间询问就是一个可重复贡献问题。例如 $\max(x,x),\gcd(x,x)$。像区间和就不具有这个性质。

令 $ST(i,j)$ 表示区间 $[i,i+2^j-1]$ 的最大值，显然 $ST(i,0)=a_i$。

熟悉 C++ 的同学可能知道，`std::__lg` 可以 $O(1)$ 的计算 $\log_2$，不再需要预处理。

以 $\max$ 为例，我们可以列出状态转移方程

$$
ST(i,j+1) = \max\{ST(i,j) , ST(i+2^{j},j)\}
$$

于是可以写出代码

```cpp
for (int i = 1; i <= n; i++) {
    st[0][i] = a[i];
}
for (int j = 1; j <= std::__lg(n); j++) {
    int tj = 1 << (j - 1), ti = n - tj * 2 + 1;
    for (int i = 1; i <= ti; i++) {
        st[j][i] = max(st[j - 1][i], st[j - 1][i + tj]);
    }
}
```

记 $s = \lfloor\log_2(r-l+1)\rfloor$，我们总是可以用两个区间 $[l,l+2^s-1]$ 和 $[r-2^s+1,r]$ 来覆盖所查询区间。

```cpp
int query(int x, int y) {
    int s = std::__lg(y - x + 1);
    return max(st[s][x], st[s][y - (1 << s) + 1]);
}
```

## 参考资料

- [ST 表 - OIWiki](https://oi-wiki.org/ds/sparse-table/)。

## 练习

- [P3865 【模板】ST 表](https://www.luogu.com.cn/problem/P3865)
