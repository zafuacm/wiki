---
comments: true
---

# 前缀和 & 差分

前缀和是预处理思想的一个应用，提前计算好数组的和，需要时直接使用，加快速度。

勉强算是“数据结构”吧。

## P5638 光骓者的荣耀

题目链接：[P5638 光骓者的荣耀](https://www.luogu.com.cn/problem/P5638)

题目大意：可跳过连续的 $k$ 项，求经过边的和的最小值。

肯定是正着跳，暴力也是显然的，对结果取 $\max$。复杂度为 $O(n^2)$。

```cpp
int aa[MAXN], n;
int ans = 0x3f3f3f3f;
for (int i = 0; i < n - 1; i++) {
    int sum = 0;
    for (int j = 0; j < i; j++) {
        sum += aa[j];
    }
    for (int j = i + k; j < n - 1; j++) {
        sum += aa[j];
    }
    ans = min(ans, sum);
}
return ans;
```

## 优化 1

很显然超时的原因是我们每次都做了很多重复计算，主要是在求和。

怎么求和更快呢？这就需要用前缀和优化了。考虑预处理数组 $a$ 的前缀和 $s_i = \displaystyle\sum_{k=1}^ia_k$

```cpp
int aa[MAXN], ss[MAXN];
// init...
int sum = 0;
for (int i = 0; i < n - 1; i++) {
    sum += aa[i];
    ss[i] = sum;
}
```

当我们想计算 $l$ 到 $r$ 之间数组 $a$ 的和时，可以直接使用 $s_r-s_{l-1}$，不必每一次再重新计算。

于是可以优化得到

```cpp

int aa[MAXN], n, ss[MAXN];
// init...
int ans = 0x3f3f3f3f;
for (int i = 0; i < n - 1; i++) {
    int sum = ss[i - 1] + s[n - 2] - s[i + k -1];
    ans = min(ans, sum);
}
```

仔细观察，你就会发现数组 $a$ 并没有什么保存的价值，可以删去，优化内存。

## 优化 2

可能有同学想到了另一种解法，这里也讲一下。

注意到，答案可以看成两段和相加，也可以看作全部的和减去 $k$ 个，而全部的和是固定的。

我们可以采用一种队列的方式，维护从 $l$ 开始到 $r$ 结束的连续一段数字的和 $s$。当求和段向右移动时，只需 $s' = s - a_l + a_{r+1}$。

```cpp
// init...
int tsum = 0;
for (int i = 0; i < k; i++)
    tsum += aa[i];
int ans = tsum;
for (int i = k; i < n - 1; i++) {
    tsum = tsum + aa[i] - aa[i - k];
    ans = max(ans, t);
}
return sum - ans;
```

## 差分

类似的，有前缀和，就有差分。差分数组的前缀和是原数组。

差分有什么用呢？

差分可以把“区间增加”变成“单点增加”。详细见 [P2367 语文成绩](https://www.luogu.com.cn/problem/P2367)。

## 例题

- [P5638 光骓者的荣耀](https://www.luogu.com.cn/problem/P5638)
- [P2367 语文成绩](https://www.luogu.com.cn/problem/P2367)

## 扩展 · 二维前缀和

## 扩展 · 高维前缀和
