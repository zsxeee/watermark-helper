# 水印助手
给证件图打水印是一个必要的习惯，奈何每次都要用PS这把大刀来搞。考虑隐私问题，一堆一个个都要联网，所以就随便写了这个工具。

## 需求
一个启用了JavaScript的现代浏览器，不需要联网。

## 使用
- HTML文件

    直接用浏览器打开[watermark-helper.html](watermark-helper.html) 或 [watermark-helper.min.html](watermark-helper.min.html)（压缩版）即可。

- DataLink **推荐**
    
    使用浏览器打开[data-link.txt](data-link.txt)文件中的链接或直接点击[此链接](data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz16aD48aGVhZD48bWV0YSBjaGFyc2V0PVVURi04Pjx0aXRsZT7msLTljbDliqnmiYs8L3RpdGxlPjxtZXRhIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiIG5hbWU9dmlld3BvcnQ+PHN0eWxlPmJvZHl7bWFyZ2luOmF1dG87bWF4LXdpZHRoOjYwdmh9aW1ne2JvcmRlcjozcHggc29saWQgIzJjM2U1MDtib3JkZXItcmFkaXVzOjVweDt3aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveH1jYW52YXN7d2lkdGg6MDtoZWlnaHQ6MH1hLGxhYmVse2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDo4cHh9PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGNhbnZhcz48L2NhbnZhcz48aW1nIHN0eWxlPWJvcmRlcjowPjxkaXY+PGlucHV0IGlkPXVwbG9hZC1pbnB1dCB0eXBlPWZpbGUgYWNjZXB0PWltYWdlLyo+PGxhYmVsPuawtOWNsOaWh+Wtl++8miA8aW5wdXQgaWQ9Y29udGVudCB0eXBlPXRleHQgdmFsdWU95LuF5L6bWFjlrp7lkI3orqTor4Hkvb/nlKg+PC9sYWJlbD48bGFiZWw+5rC05Y2w6aKc6Imy77yaIDxpbnB1dCBpZD1jb2xvciB0eXBlPWNvbG9yIHZhbHVlPSNmZmZmZmY+PC9sYWJlbD48bGFiZWw+5Zu+54mH5aSn5bCP77yaIDxpbnB1dCBpZD13aWR0aCB0eXBlPW51bWJlciB2YWx1ZT0yMDQ4PjwvbGFiZWw+PGxhYmVsPuWbvueJh+i0qOmHj++8miA8aW5wdXQgaWQ9cXVhbGl0eSB0eXBlPXJhbmdlIHZhbHVlPTgwIG1heD0xMDAgbWluPTE+PC9sYWJlbD48bGFiZWw+5LiN6YCP5piO5bqm77yaIDxpbnB1dCBpZD1hbHBoYSB0eXBlPXJhbmdlIHZhbHVlPTUwIG1heD0xMDAgbWluPTEwPjwvbGFiZWw+PGxhYmVsPuawtOWNsOWkp+Wwj+avlO+8miA8aW5wdXQgaWQ9c2l6ZSB0eXBlPXJhbmdlIHZhbHVlPTUgbWF4PTEwIG1pbj0zPjwvbGFiZWw+PGxhYmVsPuawtOWNsOmXtOmalOavlO+8miA8aW5wdXQgaWQ9Z2FwIHR5cGU9cmFuZ2UgdmFsdWU9MTUwIG1heD0zMDAgbWluPTIwPjwvbGFiZWw+PGxhYmVsPuawtOWNsOWtl+S9k++8miA8aW5wdXQgaWQ9Zm9udCB0eXBlPXRleHQgdmFsdWU9c2Fucy1zZXJpZj48L2xhYmVsPjxhIGRvd25sb2FkIGhyZWY9ImphdmFzY3JpcHQ6YWxlcnQoJ+ivt+WFiOaJk+W8gOWbvueJhycpIj7kv53lrZjlm77niYc8L2E+PC9kaXY+PHNjcmlwdD52YXIgaW1nPW51bGw7ZnVuY3Rpb24gcmVwYWludCgpe25ldyBEYXRlO2lmKGltZyl7dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImNhbnZhcyIpWzBdLmdldENvbnRleHQoIjJkIiksdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgid2lkdGgiKS52YWx1ZSxhPWltZy5oZWlnaHQqdC9pbWcud2lkdGgsbj0oZS5jYW52YXMud2lkdGg9dCxlLmNhbnZhcy5oZWlnaHQ9YSxNYXRoLm1heChhLHQpKSxtPShlLnJlc3RvcmUoKSxlLmRyYXdJbWFnZShpbWcsMCwwLHQsYSksZS5maWxsU3R5bGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNvbG9yIikudmFsdWUsZS5nbG9iYWxBbHBoYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYWxwaGEiKS52YWx1ZS8xMDAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInNpemUiKS52YWx1ZSpuLzEwMCksbD0oZS5mb250PW0rJ3B4ICInK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJmb250IikudmFsdWUrJyInLGUudGV4dEJhc2VsaW5lPSJtaWRkbGUiLGUucm90YXRlKC00NSpNYXRoLlBJLzE4MCksbSpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZ2FwIikudmFsdWUvMTAwKSxpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250ZW50IikudmFsdWU7aWYoaS5sZW5ndGgpe2Zvcih2YXIgZD1NYXRoLnNxcnQobipuKjIpLGc9ZS5tZWFzdXJlVGV4dChpKS53aWR0aCxjPS1uLG89ITE7Yzw9ZDtjKz1tK2wsbz0hbylmb3IodmFyIHI9LW4tKG8/Zy8yOjApO3I8PWQrKG8/Zy8yOjApO3IrPWcrbSllLmZpbGxUZXh0KGkscixjKTt0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJxdWFsaXR5IikudmFsdWU7ZS5jYW52YXMudG9CbG9iKGU9Pnt2YXIgdD1VUkwuY3JlYXRlT2JqZWN0VVJMKGUpLGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImEiKVswXTthLmhyZWY9dCxhLmlubmVyVGV4dD1g5L+d5a2Y5Zu+54mH77yIJHtNYXRoLmNlaWwoZS5zaXplLzEwMjQpfWti77yJYCxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaW1nIilbMF0uc3JjPXR9LCJpbWFnZS9qcGVnIix0LzEwMCl9fX1mdW5jdGlvbiBjcmVhdGVCaXRtYXAoZSx0KXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpbWciKTthLmFkZEV2ZW50TGlzdGVuZXIoImxvYWQiLGZ1bmN0aW9uKCl7dCh0aGlzKX0pLGEuc3JjPVVSTC5jcmVhdGVPYmplY3RVUkwoZSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigiY2hhbmdlIixmdW5jdGlvbihlKXsiZmlsZSI9PT1lLnRhcmdldC50eXBlP2UudGFyZ2V0LmZpbGVzLmxlbmd0aCYmKGNyZWF0ZUJpdG1hcChlPWUudGFyZ2V0LmZpbGVzWzBdLGZ1bmN0aW9uKGUpe2ltZz1lLHJlcGFpbnQoKX0pLChlPWUubmFtZS5zcGxpdCgiLiIpKS5zcGxpY2UoLTEsMCwid2F0ZXJtYXJrZWQiKSxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiYSIpWzBdLmRvd25sb2FkPWUuam9pbigiLiIpKTpyZXBhaW50KCl9KTwvc2NyaXB0PjwvYm9keT48L2h0bWw+)即可，此链接直接包含了整个网页文件，可添加到收藏夹云同步等。
    > 请注意部分国产浏览器不支持这么长的链接，如果出现网页显示不全或操作无反应的话，请换用上一种方法。
    
## 额外说明
- 水印大小比：根据图片的大小缩放字体的比例（3%~10%）
- 水印间隔比：根据字体大小缩放两行水印间距的比例（20%~300%）

## 构建
如果有自行修改的需求，请直接修改 `./watermark-helper.html` 文件，然后运行 `./index.js` 将会自动根据修改生成其他文件。

```bash
npm install
node .
```
