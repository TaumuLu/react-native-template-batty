### template.config.js

```js
modules.exports  =  {
  // package.json index.json android/ ios/中替换为项目名称的占位符名称
  placeholderName: 'ProjectName',

  // 占位符标题,该值将在values.xml和Info.plist中替换为用户提供的标题。
  // 默认值设置为"Hello App Display Name"（Hello App显示名称）,它是react-native模板中的默认占位符
  titlePlaceholder: 'Hello App显示名称' ,

  // 具有模板的目录,该模板将由React Native CLI复制和处理。模板目录应具有package.json并指定所有依赖项,包括`react-native`。
  templateDir: './template' ,

  // 脚本的路径,将在初始化过程之后但在安装模板中指定的所有依赖项之前执行。该脚本作为Shell脚本运行
  postInitScript: ' ./script.js ' ,
}
```