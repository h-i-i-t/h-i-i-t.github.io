---
title: Github Actionsでnpm ciがうまく通らなかった
date: "2022-03-04T11:11:11.111Z"
---

原因はyarnでmaterial uiのパッケージを入れたことだった
```js
$ npm ci
```
はpackage-lock.jsonを参照し適切なnode_modulesを使えるようにするみたい
```js
$ yarn add @material-ui/core
```
した後は
```js
$ npm i
```
でpackage-lock.jsonを最新にしないといけない

`npm ci`を使う場面があるなら、パッケージを入れたら、`npm install`又は`npm update`を実行し`papckage-lock.json`を更新しておく
