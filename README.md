# Re:VIEW template

個人用[Re:VIEW](https://github.com/kmuto/review)テンプレート。

## 初期設定

vscode で執筆する。

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

## 執筆

`textlint`拡張が使い物にならないので、`npm script`で保存時 lint に対応。

```sh
yarn watch
```

## ビルド

```sh
yarn build:pdf
```
