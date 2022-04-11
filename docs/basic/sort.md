# 排序

假定冒泡排序是熟知。

## 快速排序

快速排序的均摊复杂度是 $O(n\log n)$，最坏复杂度是 $O(n^2)$，通常快一点。

它的核心思想是分治。

1. 取出一个元素，这里我选的是中间的，也可以选开头，无所谓的。

2. 把比这个元素小的换到左边，比这个元素大的换到右边，最后把刚才选中的元素放回去。

3. 再对左右两个区间同样进行操作。

正确性可能不是那么显然。

注意到第 2 步结束时，对于选中的元素来说，左边一定是比它小的，右边一定是比它大的。排序后左边的元素一定不会溜到右边去，右边也不会来左边。这种看起来没什么用的有序性，足以完成全部的排序。

```cpp
int nn[MAXN];

void quick_sort(int l, int r) {
    if(l >= r)
        return;
    int i = l, j = r;
    int x = nn[(l+r)/2];
    while(i <= j) {
        while(nn[j] > x)
            j--;
        while(nn[i] < x)
            i++;
        if(i <= j) {
            swap(nn[i], nn[j]);
            i++;
            j--;
        }
    }
    quick_sort(l, j);
    quick_sort(i, r);
}
```

更多的排序方法，例如希尔排序、归并排序、桶排序、堆排序等，这里就不讲了，一般快排够用了。想了解的可以去 [排序 - OI Wiki](https://oi-wiki.org/basic/sort-intro/) 看看。

## 应用

检查数列相等元素：排序后，判断相邻元素是否相等。

二分查找：预处理后有序的，查找会快很多，

快排可以做到 $O(n)$ 求第 $k$ 小数。

## 例题

- [P5143 攀爬者](https://www.luogu.com.cn/problem/P5143)
- [P1223 排队接水](https://www.luogu.com.cn/problem/P1223)
- [P1177 快速排序](https://www.luogu.com.cn/problem/P1177)
- [P1923 求第 k 小的数 ](https://www.luogu.com.cn/problem/P1923)
- [P1908 逆序对](https://www.luogu.com.cn/problem/P1908)（提示：两重循环会超时哦）
