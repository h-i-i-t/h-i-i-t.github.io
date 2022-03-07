---
title: お名前.comで取得したドメインをGithub Pagesで使おうとしたらエラー出た。そしてhttps化させる
date: "2022-03-07T11:11:11.110Z"
tags: ["Github Pages", "tips", "お名前.com"]
---

お名前.comでドメインを取得し、

[GitHub Pagesに独自ドメインを設定する方法](https://zenn.dev/donchan922/articles/59c54fe659128294bb65)

こちらを参考にDNSレコードの設定をしました

<div style="width: 100%; margin-left: auto; margin-right: auto">

![test1](1.png)

</div>

Github Pagesでカスタムドメインを入力しSaveを押すとエラーになります

<div style="width: 100%; margin-left: auto; margin-right: auto">

![test2](2.png)

</div>

時間をおいてから試してみろと書いてあったので後で試す

[How to fix: Domain does not resolve to the GitHub Pages server. Error in Github Pages for custom domain setup with Enforce HTTPS Enabled?](https://stackoverflow.com/questions/54059217/how-to-fix-domain-does-not-resolve-to-the-github-pages-server-error-in-github)

...

...

...
結果

...

...

...

ただのボタンの押し忘れでした

<div style="width: 80%; margin-left: auto; margin-right: auto">

![test3](3.png)

</div>

<div style="width: 80%; margin-left: auto; margin-right: auto">

![test4](4.png)

</div>

Github Pagesの方も普通に通りました

<div style="width: 100%; margin-left: auto; margin-right: auto">

![test5](5.png)

</div>

めでたしめでたし

とここで問題が！

https化できてない...

<div style="width: 100%; margin-left: auto; margin-right: auto">

![test6](6.png)

</div>

Enforce HTTPSのチェックボックスが押せない。。。

。。。

。。。

お名前.com　Github Pages　https化でググっても
みんなやり方が同じ。。。

わからん。。

。

と再度Github Pagesでチェックポックスを押せないか試したところ。。。


なんと押せました！

<div style="width: 100%; margin-left: auto; margin-right: auto">

![test7](7.png)

</div>

少し時間を置かないといけないみたいですね

めでたしめでたし