# 优化例题

## CCF 1034 钞票兑换 · 枚举优化

题目链接：[CCF 1034 钞票兑换](https://www.luogu.com.cn/problem/U160446)。

题目大意：将任意给定的整百元钞票，兑换成10元、20元、50元小钞票形式。输出兑换方案总数。

数据范围：输入需要兑换的钞票总数 $n$， $100 \leqslant n \leqslant 1.7 \times 10^{11}$

### 思路 0

简单起见，记兑换得到 $10$ 元 $a$ 张，$20$ 元 $b$ 张，$50$ 元 $c$ 张，并记 $n=100k$。

只需测试 $10a+20b+50c = 100k$，暴力是显然的。


```cpp
for (int c = 0; c <= n/50; c++) {
    for (int b = 0; b <= n/20; b++) {
        for (int a = 0; a <= n/10; a++) {
            if (a*10 + b*20 + c*50 == n)
                sum++;
        }
    }
}
```

### 优化 1

注意到 $a = 10k - 5c - 2b$，即当 $b,c$ 确定时可以计算出 $a$，判断是否 $a \geqslant 0$ 即可。

如此可以消掉一层循环。

```cpp
for (int c = 0; c <= n/50; c++) {
    for (int b = 0; b <= n/20; b++) {
        if(n/10 - 5*c - 2*b >= 0)
            sum++;
    }
}
```

### 优化 2

对 $a \geqslant 0$ 求解，得到 $b \leqslant 5k-2.5c$。因此 $b$ 是 $[0,5k-2.5c]$ 之间的整数，又消掉一层。

```cpp
for (int c = 0; c <= n/50; c++) {
    sum += (n - 50 * c) / 20 + 1;
}
```

### 优化 3

优化 2 中我们得到了一个求和式，其实可以对求和式直接计算。提出首项

$$
\sum_{i=0}^{2k}\left(\lfloor 5k-2.5i \rfloor + 1\right)
= 5k + \sum_{i=1}^{2k}\lfloor 5k-2.5i \rfloor + 2k
$$

分奇偶展开有

$$
\begin{aligned}
\sum_{i=1}^{2k}\lfloor 5k-2.5i \rfloor
&= \sum_{i=1}^{k}\lfloor 5k-2.5(2i-1) \rfloor + \sum_{i=1}^{k}\lfloor 5k-2.5(2i) \rfloor \\
&= \sum_{i=1}^{k}(10k-10i+2) = 5k^2 -3k + 1
\end{aligned}
$$

于是可以写出代码

```cpp
sum = (5 * k + 4) * k + 1;
```


```admonish info "提示"
直接抄是过不了题的，观察一下数据范围。有时候拿不了全分，也要争取部分分。
```

三思而后行。
