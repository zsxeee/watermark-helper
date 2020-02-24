# 水印助手
给证件图打水印是一个必要的习惯，奈何每次都要用PS这把大刀来搞。考虑隐私问题，一堆一个个都要联网，所以就随便写了这个工具。

## 需求
一个启用了JavaScript的现代浏览器，不需要联网。

## 使用
- HTML文件

    直接用浏览器打开[watermark-helper.html](watermark-helper.html) 或 [watermark-helper.min.html](watermark-helper.min.html)(压缩版)即可。
- DataLink **推荐**
    
    使用浏览器打开[data-link.txt](data-link.txt)文件中的链接即可，直接执行文件，可添加到收藏夹。
    > 请注意部分国产浏览器不支持这么长的链接，如果出现网页显示不全或操作无反应的话，请换用上一种方法。
    
## 额外说明
- 水印大小比：根据图片的大小缩放字体的比例（3%~10%）
- 水印间隔比：根据字体大小缩放两行水印间距的比例（20%~300%）
