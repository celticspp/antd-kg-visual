# antd-kg-visual-demo

This is a knowledge graph visualization demo base on Ant Degesin and some popular visualization libraries.
Below are some useful links:
1. Ant Design: <https://ant.design/index-cn>
2. ant-design-tutorial: <https://www.yuque.com/ant-design/course/intro>
3. AntV: <https://antv.alipay.com/zh-cn/index.html>
4. BizCharts: <https://bizcharts.net/index>
5. Echarts: <https://www.echartsjs.com/index.html>

# Preview
![image](https://github.com/celticspp/antd-kg-visual/blob/master/src/images/preview.jpg)

## Environment

```
node >= 8.5.0
```

## Develop

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install
cnpm run dev
```

访问 http://127.0.0.1:8000 

## Build

```
cnpm run build
```

## Deploy local

```
cnpm install serve -g
serve ./dist
```

## Dependencies
see package.json for full details.
```
{
  "@antv/data-set": "^0.10.2",
  "@antv/g2": "^3.4.10",
  "antd": "^3.13.2",
  "bizcharts": "^3.4.3",
  "echarts": "^4.1.0"
}
```

