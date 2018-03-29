### 前言

本项目为ReactNative伪代码，仅供测试学习使用。

ReactNative 中文网：https://reactnative.cn/

### 使用方法：

（1）按照上面ReactNative中文网文档安装开发环境，写的很详细，Window平台开发Android应用。

（2）git clone git@github.com:zymseo/ReactNativeTest.git

（3）命令行执行：npm install

（4）执行命令：react-native run-android

（5）如果遇到问题，可参考下文。

### 虚拟机或真机测试，出现红色报错信息-unable to load script from assets 'index.android bundle'...make sure your bundle is packaged correctly or youu’re runing a packager server

解决方法如下：

第一步：在Android/app/src/main目录下创建一个空的assets文件夹；

第二步：新建一个cmd命令行，在项目根目录下执行以下代码：

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

第三步：重新运行程序完美解决。

备注：index.android.bundle是用来调用原生控件的js脚本。

### 常用命令：

1、连接夜神模拟器：adb connect 127.0.0.1:62001

2、查看可用虚拟机或真机：adb devices

3、创建项目：react-native init AwesomeProject（项目名，第一个字母大写）

4、发布：react-native run-android（首次发布稍微慢点，稍等或稍后重新摇一摇刷新下即可）