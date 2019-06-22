<template>
  <div class="container">
    <div class="groups">
      <div class="group a">
        <div class="team">
          <div class="group-name">
            <h1>このサイトについて</h1>
          </div>
        </div>
        <div class="article">
          <p>
            このサイトではHello！ProjectのグループおよびメンバーのプロフィールやSNSへのリンクをまとめています。よくチェックするメンバーは「<span>お気に入り</span>」に追加することでアクセスしやすくなります。他にも公式サイトでよく使われるページへのリンクやYoutubeのチャンネルへのリンクも別途まとめています。追加してほしい項目があれば<a
              href="https://twitter.com/razokulover"
              >@razokulover</a
            >までご連絡ください。
          </p>
          <p>
            近年SNSやブログなどインターネット上に多くの情報が提供される一方で、多数のメディアに情報が散らばっているため追いづらい状況になっています。このサイトは各種サービスへのリンクを寄せ集めただけですがどこかの誰かの一助となれば幸いです。
          </p>
          <p>
            もし修正が必要な項目等あれば<a href="https://twitter.com/razokulover">@razokulover</a
            >までお気軽にご連絡ください。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
      .article {
        padding: 10px;
        p {
          font-size: 16px;
          line-height: 30px;
        }
        a {
          display: inline-block;
          text-shadow: none;
        }
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
