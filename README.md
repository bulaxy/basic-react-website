## GitPages

`npm install gh-pages`

Add 
```"homepage": "http://gitname.github.io/react-gh-pages"```
and 
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

then 
```
 npm run deploy
 ```