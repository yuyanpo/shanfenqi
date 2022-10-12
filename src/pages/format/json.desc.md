JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。

它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。

这些特性使JSON成为理想的数据交换语言。易于人阅读和编写，同时也易于机器解析和生成。

书写格式是：以 `{` 开始，`}` 结束。是一个无序的  `名称/值`  对集合。名称写在前面(在双引号中)，值对写在后面(同样在双引号中)，中间用冒号隔开。如果是字符串，那不管是键或值都需要用双引号引起来。

```json
{
  "name": "闪·芬奇",
  "description": "五彩缤纷工具箱",
  "star": 1024,
  "skills": ["format", "encrypt", "doc"],
  "url": "https://shanfenqi.com"
}
```