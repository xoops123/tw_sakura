【テーマ名　】 tw_sakura
【バージョン】 0.12
【作　成　者】 marine / mistgreen
【動作　環境】 XOOPS Cube Legacy 2.1x (HD1.04)、2.2
【ライセンス】 CC
【公 開 日　】 2013-3-10

======================================================
説明（概要）
======================================================

　HTML5+TwitterBootstrap採用のXCL2.2用テーマです。
　横幅940pxで１２分割のグリッドシステムを採用しているので、自由な画面レイアウトが可能となっています。Xoops Cube Legacy 2.2 で動作確認しました。

　構造が通常のテーマとは異なっておりますので、ご利用の際は構造を理解のうえ、ブロック配置を行ってください。

　ヘッダーには、xugj_assign プラグインを利用して、インストールされたモジュールに対応するメニューバーを自動表示するようにしています。
　また、フッターにユーザーメニュー項目も自動表示するので、xoopsの互換モジュールである「メインメニュー」「ユーザーメニュー」を利用しない運用が可能となっています。

　このテーマについては CCライセンスとさせていただきます。（TwitterBootstrapについては、Apache2ライセンス）


======================================================
説明（詳細）
======================================================

　とりあえず、utf8とeucのlanguageファイルは用意しましたが、HTML5ということで utf8ベースで動作すると思います。eucでの動作は確認していません。

　メニューは、Xoops Users Group Japan(XUGJ) で GIJOEさんが提唱された xugj_assign.php を利用したメニューを採用しています。
　通常のメインメニューに表示されるのと同じ項目が自動で表示されるので、メニューの項目を編集する必要もありません。
　　http://www.xugj.org/modules/d3forum/index.php?topic_id=125

　なお、同封しているものは、オリジナルの xugj_assign.php から少し変更しているので、xugj_assign_theme.php という名称に変更しています。

　jQuery.js + jquery.jgrowlプラグインを利用して、画面遷移せずにリダイレクト表示できるので、スピーディーでセンスの良い表示が可能となっています。　なお、本テーマには、domifaraさん作成のphpファイルによるインクルード方法を用いております。
　domifaraさん、ありがとうございます。（javascriptオフ時には、リダイレクトの文字などがボックス表示されます。）

　jQueryについては、domifaraさんによるXCL2.2対応措置がとられており、jQueryの二重読み込み防止や他のjavascriptとのバッティングを可能な限り避ける仕組みが用いられております。　(xugj_already_js.php をXCL2.1対応版に差し替えております。）


【画面表示について】

　このテーマは、TwitterBootstrapのcssを採用し、横幅940pxで１２分割のグリッドシステムを採用しています。
　１〜３カラム表示対応ですが、３カラムは通常の「左（小）・中央（大）・右（小）」という表示ではなく、「中央（大）・左（小）・右（小）」という表示になっています。また、３カラム表示時、右カラムについては、weight 1000〜1999 では、左右カラムの上に広く表示。weight 2000以上では左右カラムの下に表示するようにしています。
　さらに左右カラムの規定値として、左カラムはspan2、右カラムはspan3として、少し大きさを変えています。

　jQUeryプラグインを利用して、トップページのヘッダー画像をスライド表示するように設定しています。

　なお、フッターのメニューにはログインなどのリンクを装備しており、jQueryのプラグインを用いて、ポップアップでログインブロックが表示されるようにしています。


======================================================
インストール
======================================================

　インストールは通常テーマと同じですが、一部モジュールのテンプレートを本テーマに最適化させるため、テーマ下テンプレートとして同梱していますので、できればテーマ下テンプレートが有効となるように設定していただいた方が良いでしょう。(XoopsXをご利用の場合は、そのままで利用可能）

　まずは、解凍してできあがったフォルダの最下層にある「tw_sakua」をFTPにてサイトのテーマ・ディレクトリへコピーしてください。（場合によっては、/tw_sakura/html/themes/tw_sakura/ のように、解凍したフォルダの階層が深くなっていることもありますので、ご注意ください。html/themes/の下にある tw_sakura フォルダをアップロードしてください。）

　次に、以下の手順でテーマ下テンプレート利用のための作業を行ってください。

　完了したら通常のテーマと同様、管理画面の「互換モジュール」「テーマの管理」でこのテーマを使用する設定としてください。


【テーマ下テンプレート利用可能だが、本テーマのテーマ下テンプレートを使いたくない場合】

　もし、本テーマ下のテンプレートを使いたくない場合は、テーマ下にある「templates」ディレクトリを削除してください。

■理由：テーマ下テンプレート利用可能なxoops（HDやXOOPS X（Pack2011～）など）では、次の優先順位でテンプレートを読み込むため
　１　テーマ下テンプレート
　２　現在ActiveなDBテンプレート
　３　Default(DB)テンプレート

テンプレートを変更しようとして、Altsysで「現在ActiveなDBテンプレート」をいくら修正しても、テーマ下テンプレートがある場合はそちらが優先されてしまうということに注意が必要です。



======================================================
カスタマイズ
======================================================

【メニュー表示項目の変更】

　このテーマでは、xugj_assign_phpを用いたメニュー表示を行いますが、インストールして初回表示した時に、メインメニュー表示する設定となっているメニュー項目を自動で引用してきます。（表示用のキャッシュファイルを自動作成して利用）

　従って、モジュールの管理にてモジュールの表示名を変えたり、並び順を「０」として非表示指定した場合でも、テーマのメニュー表示は以前作成したキャッシュファイルを利用することから、変更した表示となりません。

　そのような場合、FTPソフトを使って、cacheディレクトリ内の theme_trend_menus_****.php を削除してください。再度、サイトを表示した際に、新しくメニュー用のキャッシュファイルが自動生成されます。

　なお、domifaraさん作成の「xugjメニューキャッシュリフレシュ　管理画面モジュール」を利用すると、FTPソフトを使わずにキャッシュファイルの削除ができるので、便利だと思います。（domifaraさん、ありがとうございます。）
　　http://xodomifara.lolipop.jp/doxo/modules/d3downloads/index.php?cid=2


【色合いの調整等】

　本格的な調整は、TwitterBootstrapのcssを修正する必要があります。
　TwitterBootstrapのcssについては、オリジナルをそのまま採用していますので、当該サイトにおけるカスタマイズや関連サイトで紹介されている設定変更方法などを参照してください。

　なお、本テーマについては、style.css にて、背景色などの設定を行なってTwitterBootstrapの設定を上書きしています。

【jQUeryプラグイン利用のスライド画像】
　


==================================================================================
利用について
==================================================================================

　利用ライセンスは、クリエイティブ・コモンズ(CC)となっております。
　フッターのcopyright（Theme designed by marine/mistgreen）表示していただければ、非商用に限り無償で、自由に改変してご利用頂くことができます。（フッターのcopyright表示を消して利用したい場合は、商用利用扱いとなります。）
　ただし、スライド画像は、私 marine が撮影したもので、著作権も私 marine が保有しています。当該画像については、本テーマでの表示については無償で利用可能ですが、このテーマ以外での利用や画像だけの再配布、無加工・加工・修正を問わず２次利用はご遠慮ください。

　なお、TwitterBootstrapのcssについては、Apache2ライセンスとなっておりますので、留意願います。
　
　雑誌・書籍への掲載の場合には、あらかじめ当サイト管理人へご一報ください。
　　連絡先：http://xoops123.com/modules/liaise/

==================================================================================
商用利用について
==================================================================================

　企業様、または営利個人様でのご利用は、原則商用とさせていただきます。
　個人利用であっても、著作権表示を削除してご利用される場合は、商用利用扱いとなります。

　商用利用の場合は有償とさせていただきたく、１サイト（ドメイン）につき3000円にてお願い致します。管理人へのご連絡のうえ、手続きをお願い申し上げます。


==================================================================================
利用拒否について
==================================================================================

　違法行為を行っているサイト、公序良俗に反するサイトでの利用は、お断り申し上げます。


==================================================================================
連絡先
==================================================================================

　 http://xoops123.com/modules/liaise/


======================================================
バージョンアップ履歴
======================================================

2013-3-10 ver0.1
　とりあえず公開してみる。
2013-3-20 ver0.11
　CSS微調整等を実施
2014-3-29 ver0.12
　テーマディレクトリにreadme.txtを追加

======================================================
お願い
======================================================

　できましたら、当方のサイト掲示板（ご訪問帳）に何か書き込んでいただけると嬉しいです～m(_ _)m
　　 http://xoops123.com/modules/d3forum/?forum_id=1



