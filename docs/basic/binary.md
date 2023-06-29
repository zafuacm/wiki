---
comments: true
---

# 二分

二分查找比较基础，这里我就讲的简略一点。

## 算法思想

对于有序的数组，查找一个元素如果还是线性查找，实在是太浪费了。

假设数组 $a$ 递增，设查找区间是 $[l,r]$，被查找元素是 $x$。

取查找范围的中间值 $m = \dfrac{l+r}{2}$。

- 如果 $a_m \geqslant x$，说明 $x$ 会在 $[l,m]$ 范围
- 否则 $x$ 会在 $[m,r]$。

如此反复。

```cpp
while (l < r) {
  int mid = (l + r) / 2;
  if (aa[mid] >= x)
    r = mid;
  else
    l = mid + 1;
}
return l;
```

确切的说，上述代码实现的是：在单增数组中查找 $\geqslant x$ 的数中最前的一个。

类似的，还有：在单减数组中查找 $\geqslant x$ 的数中最后的一个。

```cpp
while (l < r) {
  int mid = (l + r + 1) / 2;
  if (aa[mid] >= x)
    l = mid;
  else
    r = mid - 1;
}
return l;
```

如果感觉较为抽象，可以查看 [可视化](https://www.cs.usfca.edu/~galles/visualization/Search.html)。

## 应用

对于单调的函数，也可以通过二分查找查找其符合条件的值。

有时需要转换思考角度，比如 [P1873 砍树](https://www.luogu.com.cn/problem/P1873)。

> 给定森林中每棵树的高度，伐木工将砍伐所有的树比 $H$ 高的部分，要求锯下的木材的总长至少为 $M$，并且尽量小，求 $H$。

直接计算一个值可能不太容易，但我们可以较容易的判断某个值是否符合条件。

同时，答案是单调的，换句话说，随着 $H$ 降低，锯下的木材只会增加。

我们可以设计函数 $f(H)$，令其值为锯下木材的总长。于是我们可以对答案二分，每次检验其可行性，找到可行中最大的 $H$。

## 参考资料

- [二分 - OIWiki](https://oi-wiki.org/basic/binary/)

## 例题

- [P1024 一元三次方程求解](https://www.luogu.com.cn/problem/P1024)
- [P2249 查找](https://www.luogu.com.cn/problem/P2249)
- [P1873 砍树](https://www.luogu.com.cn/problem/P1873)
- [P2678 跳石头](https://www.luogu.com.cn/problem/P2678)
