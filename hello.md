# 快捷键
 * import React from 'react'
 ```
 imr
 ```
 * 创建组件
    ```
    rcc、rce
    ```
* 导入组件 import moduleName from 'module'
   
   ```
   rmp
   ```
* 创建组件（function component & class component）
   ```
   rfce、rfc
   ```

 # prop
 * read-only
 * state hook,only in body of functional component
 * https://www.jianshu.com/p/281bdaa34cfe

 # style
  * 支持多种
   ```
   style={[styles.cell, { backgroundColor: this.props.color }]}
   
   ```

 # navigation
   * 页面中的navigation是放在props中的，前提页面要注册到Navigator中
   * 当页面是const HelloWorld = () => {}写法，无法取到props中的navigation，要用function xxx{}写法
   * props中有navigation的页面，会自动加上navigation bar，你也可以自定义style


# layout
 * View
   - width
      '50%' 父布局的一半宽度(当父布局是ScrollView时，有问题,todo)
   - flexDirection
      - row横向、column纵向
      - 默认是垂直
   - justifyContent
      - 类似flutter Row/Column 的MainAxis
   - alignItems 
      - 类似flutter Row/Column 的CrossAxis
# todo
 * React.useEffect
 