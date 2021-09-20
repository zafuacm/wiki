# 树状数组

树状数组可以实现

- 将某一个数加上 $x$
- 求出某区间每一个数的和

树状数组只能维护运算的前缀和，当逆元存在时才能得到区间的信息。比如取 $\max$，其逆运算不存在的时候只能写线段树了。

## 单点增加，区间求和

建树只需要 $O(n)$。

```cpp
void build() {
    for (int i = 1; i <=n; i++) {
        cc[i] += aa[i];
        int j = i + (i&(-i));
        if(j <= n)
            cc[j] += cc[i];
    }
}
```

查询前缀和 $[1,x]$。

```cpp
int ask(int *cc, int x) {
    int sum = 0;
    while (x >= 1) {
        sum += cc[x];
        x -= x&(-x);
    }
    return sum;
}
```

单点增加，在 $x$ 点处增加 $k$。

```cpp
void add(int *cc, int x, int k) {
    while (x <= n) {
        cc[x] += k;
        x += x&(-x);
    }
}
```

## 区间加 & 单点查询

维护数组 $a$ 的额外差分数组 $b$，区间加就被转化为 $b$ 的单点增加，单点查询就被转化为 $b$ 的区间查询。

```cpp
int bb[MAXN];

void badd(int l, int r, int k) {
    add(bb, l, k);
    add(bb, r+1, -k);
}

int bask(int x) {
    return ask(bb, x) + aa[x];
}
```

## 区间加 & 区间求和

维护数组 $a$ 的额外差分数组 $b$，当我们对 $a$ 的前缀 $r$ 求和时有

$$
\sum_{i=1}^r \sum_{j=1}^i b_j = \sum_{i=1}^rb_i(r-i+1) = (r+1)\sum_{i=1}^rb_i - \sum_{i=1}^rb_ii
$$

因此还需要两个树状数组来维护 $\sum b_i$ 和 $\sum b_ii$。查询前缀和 `cask`。

```cpp
int bb1[MAXN], bb2[MAXN];

void cadd(int l, int r, int k) {
    add(bb1, l, k);
    add(bb1, r+1, -k);
    add(bb2, l, l*k);
    add(bb2, r+1, -(r+1)*k);
}

int cask(int x) {
    return (x+1)*ask(bb1, x) + ask(cc,x) - ask(bb2,x);
}
```

## 练习

- [L130 树状数组 1：单点修改，区间查询](https://loj.ac/problem/130)
- [L131 树状数组 2：区间修改，单点查询](https://loj.ac/problem/131)
- [L132 树状数组 3：区间修改，区间查询](https://loj.ac/problem/132)
- [L133 二维树状数组 1：单点修改，区间查询](https://loj.ac/problem/133)
- [L135 二维树状数组 3：区间修改，区间查询](https://loj.ac/problem/135)
