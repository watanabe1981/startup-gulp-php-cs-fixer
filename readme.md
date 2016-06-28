* 環境構築後 *
```
  作業場所にて
  gulp を実行

  src/test/sample.php をデタラメに編集し、保存。gulp を起動しているターミナルに実行コマンドがロギングされるので、ロギングされることを確認し、ファイルを確認。無事整形されていることを確認。
```

* 環境構築準備 *

```
  $ mkdir vagrant-gulp-php-cs-fixer
  ・ベースの各種設定ファイル作成
  $ \cp -rf gulpfile.js vagrant-gulp-php-cs-fixer/
  $ \cp -rf config.js vagrant-gulp-php-cs-fixer/
  $ \cp -rf package.json vagrant-gulp-php-cs-fixer/
  $ cd vagrant-gulp-php-cs-fixer/
　・パッケージ管理ファイル作成
  $ vi package.json
　・gulpタスク記述
  $ vi gulpfile.js
  ・gulp用設定の外だし
  $ vi config.js
  ・gulp 用モジュールインストール
  $ npm install
  ・gulp-php-cs-fixer インストール
  $ npm install --save-dev gulp-php-cs-fixer
  ・php composer インストール
  $ curl -sS https://getcomposer.org/installer | php
  $ mkdir ./bin
  ・php composer ライブラリインストール場所設定
  $ php composer.phar config --global bin-dir "./bin"
  ・php-cs-fixer インストール
  $ php composer.phar require fabpot/php-cs-fixer
```

