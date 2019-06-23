<template>
  <div class="container">
    <div class="groups">
      <div class="group a">
        <div class="team">
          <div class="group-name">
            <h1>このサイトについて</h1>
          </div>
        </div>
        <div class="eyecatch">
          <img :src="iconImage" />
        </div>
        <div class="article">
          <p>
            このサイトは<span>ハロプロワン</span>という名前です。Hello！ProjectのグループおよびメンバーとOGのプロフィールやSNSへのリンクをまとめています。よくチェックするメンバーは「<span>お気に入り</span>」に追加することでアクセスしやすくなります。他にも公式サイトでよく使われるページへのリンクやYoutubeのチャンネルへのリンクも別途まとめています。追加してほしい項目があれば<a
              href="https://twitter.com/razokulover"
              >@razokulover</a
            >までご連絡ください。
          </p>
          <br />
          <p>
            OGに関しては<a href="http://www.helloproject.com/og/" target="_blank">このページ</a
            >に記載されているメンバーのみを対象にしていますのでご了承ください。
          </p>
          <br />
          <p>
            近年SNSやブログなどインターネット上に多くの情報が提供される一方で、多数のメディアに情報が散らばっているため追いづらい状況になっています。そういった状況を解決するため、このサイトは各種サービスへのリンクを一箇所に集めることに特化して作られました。構造としては各種リンクを寄せ集めただけですが、どこかの誰かの一助となれば幸いです。
          </p>
          <br />
          <p>
            動作環境は最新のiOSのSafariとAndroidのChromeでのみ実機テストをしています。古いブラウザなどでは動かない可能性が高いので、そのような場合は最新のブラウザでご利用ください。また、もし修正が必要な項目等あれば<a
              href="https://twitter.com/razokulover"
              >@razokulover</a
            >までお気軽にご連絡ください。
          </p>
          <br />
          <p>
            またシェアしていただけると開発のモチベーションになります。よろしければお願いします。
          </p>
          <p class="sns-area">
            <a
              class="twitter-btn"
              :href="
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  'https://yuheinakasaka.github.io/hello-project-one/'
                )}&text=${encodeURIComponent('ハロプロワン')}`
              "
              target="_blank"
              ><i class="fa fa-twitter" aria-hidden="true"></i>ツイートする</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeImage from '~/assets/icon.png'
export default {
  data() {
    return {
      iconImage: HomeImage
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .groups {
    .group {
      z-index: 1;
      .team {
        .group-name {
          height: 49px;
          background-color: rgb(47, 117, 188);
          padding: 5px;
          h1 {
            margin: 0;
            vertical-align: 50px;
            font-size: 20pt;
            font-weight: bold;
            color: #fff;
          }
        }
      }
      .eyecatch {
        text-align: center;
        padding: 10px 10px 0 10px;
      }
      .article {
        padding: 5px 10px 10px 10px;
        p {
          font-size: 16px;
          line-height: 30px;
          &.sns-area {
            text-align: center;
          }
        }
        a {
          display: inline-block;
          text-shadow: none;
          &.twitter-btn {
            border-radius: 4px;
            background-color: #00aced;
            font-size: 14px;
            padding: 5px;
            color: #fff;
            font-weight: bold;
            i {
              padding-right: 5px;
              font-size: 18px;
              color: #fff;
            }
          }
        }
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
