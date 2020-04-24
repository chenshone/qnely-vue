# qnelyw-vue

vue 全家桶实战项目

参考慕课网

[在线演示(移动端)](https://chenshone.github.io/qnely-vue)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### 注意

1.  rem

        font-size:50px, 1rem = 50px

        设计稿为 ip6(2 倍像素比) 所以设计稿的数据之间/100 就可以转换为 rem

2.  更改插件的样式（样式穿透）

    ```stylus
    .wrapper >>> .swiper-pagination-bullet-active
      background #fff
    ```

3.  预留组件高度

    ```css
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    ```
