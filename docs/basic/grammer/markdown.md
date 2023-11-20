---
comments: true
---

# Markdown 介绍

我推荐 Markdown，因为它足够流行，足够简单。

本文讲介绍一些 Markdown 的基础文法。

更详细的请阅读 [Cyent](https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/)。

## Markdown 适合

Markdown 是 HTML 的简单替代，是一个纯文本文件。它适合于撰写网络文章，通常这些文章只需要很少的格式。

Markdown 不适合做复杂的排版工作，它不能精确的控制文本的样式。

## 编辑器

支持 Markdown 的编辑器很多。我推荐 [VSCode](https://code.visualstudio.com/)，它是一个通用而强大的编辑器，或者尝试 [Typora](https://typora.io/) ，它一个所见即所得的 Markdown 编辑器。

或者你不愿意下载，你可以在线尝试 [CMD 作业部落](https://www.zybuluo.com/mdeditor)。

## 标题与段落

标题使用 `#` 符号，空格后接文本。

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

普通段落。
```

普通段落，每两段之间空一行。

```md
其它格式有 **粗体** 和 *斜体*，
段间记得空行，否则不会换行的。

还有 <u>下划线</u> 和 <del>删除线</del>，和 ==高亮== 。
```
其它格式有 **粗体** 和 *斜体*，
段间记得空行，否则不会换行的。

还有 <u>下划线</u> 和 <del>删除线</del>，和 ==高亮== 。

## 引用

```md
> 这里是引用
>
> > 二级引用。
```

## 代码

```md
内联代码 `var example = true`，按键 <kbd>Ctrl</kbd>
```
代码块后跟语言以使用代码高亮。按键 <kbd>Ctrl</kbd>

```md
    ``` rust
    fn main() {
        println!("Hello World!");
    }
    ```
```

```rust
fn main() {
    println!("Hello World!");
}
```

pygments 支持 434 种语言的高亮，你可以在 [这里](https://cyent.github.io/markdown-with-mkdocs-material/appendix/pygments/) 找到它们。

## 列表

无序列表

```md
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

有序列表，点号与文本间需要加空格。可以全写 1 来自动编号。

```md
1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b
```

任务列表，注意缩进空格是 4 个。

```md
- [x] Item 1
- [ ] Item 2
    - [ ] Item 2a
    - [x] Item 2b
```

- [x] Item 1
- [ ] Item 2
    - [ ] Item 2a
    - [x] Item 2b

## 图片与链接

```md
图片      ![](图片链接地址)
链接      [链接文字](链接地址)
```

文档之间的交叉链接，填相对地址。

## LaTeX 公式

很多同学应该会使用 $\rm\LaTeX$，因此我启用了 MathJax 扩展，可以在文章中穿插公式。比如 $a^2+b^2=c^2$，

$$
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}
$$

```latex
比如 $a^2+b^2=c^2$，

$$
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

深入 $\rm\LaTeX$ 超出了我们的讨论范围，请您自行了解。

## 表格

冒号在哪边表示向哪边对齐，默认是左对齐，两边都有则居中。

```md
| Tables        | Are           | Cool   |
| ------------- |:-------------:| ------:|
| col 3 is      | right-aligned | \$1600 |
| col 2 is      | centered      |   \$12 |
| zebra stripes | are neat      |    \$1 |
```

| Tables        | Are           | Cool   |
| ------------- |:-------------:| ------:|
| col 3 is      | right-aligned | \$1600 |
| col 2 is      | centered      |   \$12 |
| zebra stripes | are neat      |    \$1 |

## 脚注

```md
脚注 [^1] 会自动放到文末。 

[^1]: footnote，脚注
```

脚注 [^1] 会自动放到文末。 

[^1]: footnote，脚注

## 转义

复杂的格式自然会有转义，如下特殊字符需要通过前加 `\` 转义。有些时候不加也可以

```md
\ backslash
` backtick
* asterisk
_ underscore
{} curly braces
[] square brackets
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
```
