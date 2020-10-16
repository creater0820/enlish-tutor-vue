# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

・はじめに

このサイトは英語をテーマに教師と生徒を繋ぐ「マッチングサイト」です。
多様な英語学習プランを用意しユーザーのニーズに応じて様々なプランを提供します。
ユーザーの登録タグに応じて表示するプランや先生の内容を変化させることで
契約促進させるように設計しています。基本機能として、フォロー、メッセージ、プラン登録、プラン検索、レビュー機能などがあります
完成度は６割ほどで今後は決済機能も実装していく予定です。

フレームワーク:Laravel+Vue.js

DB:MySQL

・実装機能紹介

プラン検索をしてユーザーが気に入ったプランがあればその先生に対してメッセージを送る機能
![movie](https://github.com/creater0820/enlish-tutor-vue/blob/master/movie/message.gif)
ユーザーが登録しているタグに応じて興味のありそうな先生を表示、その先生の評価を見てフォローできる機能
![movie](https://github.com/creater0820/enlish-tutor-vue/blob/master/movie/newfollow.gif)



売上履歴の管理機能
![movie](https://github.com/creater0820/enlish-tutor-vue/blob/master/movie/otherfunction.gif)



フォローリストの表示、契約中プランの表示機能
![movie](https://github.com/creater0820/enlish-tutor-vue/blob/master/movie/contractfollow.gif)

