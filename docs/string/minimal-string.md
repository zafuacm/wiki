# 最小表示法

若长为 $n$ 的字符串可以选择一个位置 $i$ 使得

$$
S[i \ldots n - 1] + S[0 \ldots i - 1] = T
$$

则称 $S$ 与 $T$ 循环同构。求与 $S$ 循环同构的所有字符串中字典序最小的字符串。

## 原理

不妨记前面的串为 $S_i$。暴力是显然的，枚举所有 $S_i$ 和 $S_j$ 并逐位比较，选择更大的。

```cpp
int k = 0, i = 0, j = 1;
while (k < len && i < len && j < len) {
    if (S[(i + k) % len] == S[(j + k) % len]) {
        ++k;
    } else {
        if (S[(i + k) % len] > S[(j + k) % len])
            i++;
        else
            j++;
        if (i == j)
            i++;
        k = 0;
    }
}
return min(i, j);
```

该算法在特殊情况下的最差复杂度是 $O(n^2)$。我们需要想办法优化。

假设当比对到第 $k + 1$ 位时有 $S_i[k] > S_j[k]$，并且前面的位也都相同。注意到在 $1 \leqslant p \leqslant k$ 时有

$$
S_{i+p}[k-p] > S_{j+p}[k-p]
$$

这意味对于 $S_{j+p}$ 始终是比 $S_{i+p}$ 更优的解。因此可以直接跳到 $S_{j+k+1}$。

```cpp
int k = 0, i = 0, j = 1;
while (k < len && i < len && j < len) {
    if (S[(i + k) % len] == S[(j + k) % len]) {
        ++k;
    } else {
        if (S[(i + k) % len] > S[(j + k) % len])
            i = i + k + 1;
        else
            j = j + k + 1;
        if (i == j)
            i++;
        k = 0;
    }
}
return min(i, j);
```

## 习题

[P1368 最小表示法](https://www.luogu.com.cn/problem/P1368)

------

本页面贡献者：[@sy](https://github.com/clumsy-sy)
