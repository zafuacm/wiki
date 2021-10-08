# 贪心

在算法思想一节中，我们已经介绍过贪心的思想了，这里我们谈谈应用。

## P4995 跳跳！

> 给定石头的高度 $h$，从第 $i$ 块石头跳到第 $j$ 块上耗费体力 $(h_i-h_j)^2$，求最耗体力的路径。

凭借一些数学的灵感，可以猜到是在剩余的石头中，高度差当前最大的来回跳。即“大小大小”这样反复横跳。

如何证明呢？假设 $h_i$ 已经是要跳的序列。展开求和式

$$
S = \sum_{k=1}^{n-1}(h_k-h_{k+1})^2 = \sum_{k=1}^nh_k^2 - 2\sum_{k=1}^{n-1}h_kh_{k+1}
$$

注意到平方和为一个定值，重点在后半式。记 $H_{k} = h_{k+1}$，有

$$
\sum_{k=1}^{n-1}h_kH_k
$$

利用高中时学的排序不等式，有

$$
{\text 反序和} \leqslant {\text 乱序和} \leqslant {\text 顺序和}
$$

直接有反序最小。

## 练习

- [P4995 跳跳！](https://www.luogu.com.cn/problem/P4995)
- [P1803 凌乱的yyy / 线段覆盖](https://www.luogu.com.cn/problem/P1803)
- [P5019 铺设道路](https://www.luogu.com.cn/problem/P5019)

------

本页面贡献者：[@rogeryoungh](https://github.com/rogeryoungh)

