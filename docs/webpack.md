## ts-loader

### webpack
```
{
  loader: 'ts-loader',
  options: {
    configFile: path.resolve(
      context,
      './webpack/tsconfig/ts-loader.json'
    ),
    transpileOnly: true,
    happyPackMode: true,
    allowTsInNodeModules: true,
  },
},
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "module": "es6",
    "target": "es5",
    "esModuleInterop": true,
    "allowJs": true,
    "jsx": "react"
  }
}
```

## 参考
- https://juejin.im/post/5cc81368518825750351a50f
