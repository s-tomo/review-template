# Re:VIEW template

個人用[Re:VIEW](https://github.com/kmuto/review)テンプレート。

## 初期設定

vscode で開発する。

`Re:VIEW`拡張を入れる。

```sh
code --install-extension atsushieno.language-review
```

`taichi.vscode-textlint`は入れない。
`.re`に反応しないし、`.md`を除外できないので。。。

npm ライブラリのインストール。

```sh
yarn
```

## ビルド

```sh
yarn build:pdf
```
