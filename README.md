# 色々するよう(✿´ ꒳ ` ) 以下よく使うgitコマンド書いたのみ。

- 沢山(今は数少ないファイル達)詰まったフォルダのところまで行って

```
$ git init
```

- 次にコミットできる準備。とりあえず全て放り込む

```
$ git add .
```

- 放り込んだ段階、今の段階にコミットする。メモ

```
$ git commit --m "最初"
```

- githubにあげたいからgithubのリポジトリ作成してそのhttpの奴を使いとりあえずリモートのgit作成

```
git remote add origin https://github.com/sachiko-kame/sample.git
```

- リモートの準備ができた(自分のパソコンの中にあるgitの履歴をgithubというみんながブラウザで見れるgit的な)のでpushする(githubに作成したgitの履歴あげる)

```
$ git push origin master
```

- 新しくブランチ作って、さらにそのまま移動 checkoutは移動と思えば問題ない。

```
$ git checkout -b newbranch
```

- ブランチは移動されてるからそのままファイルの中の何か変更してまたコミットまで上の奴の繰り返し

```
$ git add *
```

```
$ git commit --m "ブランチ変更で中身変えた"
```

- リモートに作ったブランチをあげる

```
$ git push -u origin newbranch
```

- 最初に作ったブランチに戻る

```
$ git checkout master
```

- 戻ったらさっきの新しく作ったブランチの内容をくっつける　マージという

```
$ git merge newbranch
```

- できたらgithubにはまだ反映されていないのでgithubにあげる処理を行う

```
$ git push origin master
```

- 変更が完了でもうさっきのブランチいらなくなったから削除する

```
$ git branch -D newbranch
```

- リモート(github)にも残ってるからそれも削除(消すのを伝える的な)

```
$ git push --delete origin newbranch
```

- タグをつける Tag1がタグの名前""で囲ってある部分がタグのコメント

```
$ git tag -a Tag1 -m "タグのコメント"
```

- タグをgithubにあげる

```
$ git push origin Tag1
```


<br>
<br>

# そのほか

- 好きなgithubのgit履歴(沢山ファイルが詰まった宝物をインストール)

```
$ git clone https://github.com/sachiko-kame/sample.git
```

- 自分のgitの今の状態見るのに

```
$ git status
```

- 自分のgitの履歴を見るのに

```
$ git log
```

- git logで出てきたコミットの変更見るのは

```
$ git show <commit番号>
```

- gitの差分は

```
$ git diff <commit番号> <commit番号>
```

- ローカルブランチ見るのに

```
$ git branch
```

- リモートブランチ見るのに

```
$ git branch -r
```

- 全てのブランチ見るのに

```
$ git branch -a
```

- リモートブランチの取得

```
$ git checkout -b branch1 origin/branch1
```

- ブランチの移動

```
$ git checkut branch1
```



```
参考:

https://git-scm.com/docs/git-push
https://git-scm.com/book/ja/v1/Git-%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E6%A9%9F%E8%83%BD-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8%E3%81%AE%E5%9F%BA%E6%9C%AC
https://qiita.com/TetsuTaka/items/5ab227a8bd2cd7106833
https://qiita.com/iorionda/items/c7e0aca399371068a9b8
```


