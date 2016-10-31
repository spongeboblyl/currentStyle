# currentStyle
解决.style只能获取行间样式的问题

解决方法:使用currentStyle
        存在问题： 只能在IE中使用，火狐下用getComputedStyle(oDiv,flase)
currentStyle优点：能取默认值；缺点不能取复合样式
