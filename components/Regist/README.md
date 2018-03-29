### Touchable相关组件，作用是给组件绑定事件

ReactNative提供3个组件（需要从react-native导入）用于给其他没有触摸事件的组件绑定触摸事件：
  
（1）TouchableOpacity 透明触摸：点击时，组件会出现透明过渡效果

（2）TouchableHighlight 高亮触摸，点击时，组件会出现高亮效果

（3）TouchableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
 
 ### extInput是一个允许用户在应用中通过键盘输入文本的基本组件

本组件的属性提供了多种特性的配置，比如自动完成、自动大小写、占位文字，以及多种不同的键盘事件（如纯数字键盘）等等,常用的有：

（1）placdholder 占位符

（2）value 输入框的值

（3）password 是否密文输入

（4）editable 输入框是否可编辑

（5）returnKeyType 键盘return键类型

（6）onChange 当文本变化时调用

（7）onEndEditing 当结束编辑时调用

（8）onSubmitEditing 当结束编辑，点击提交按钮时调用

（9）...更多查看官网