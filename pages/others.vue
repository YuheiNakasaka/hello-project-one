<template>
  <div class="container">
    <Header :title="`その他のリンク`"></Header>
    <div class="groups">
      <div class="group a">
        <div class="team">
          <div class="group-name">
            <h1>About</h1>
          </div>
        </div>
        <div class="members">
          <div v-for="(item, i) in aboutItems" :key="i" class="member">
            <div class="member-name" :style="`background-color:${colors[colors.length - 1]}`">
              <nuxt-link :to="item.link">
                <span>{{ item.name }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="group b">
        <div class="team">
          <div class="group-name">
            <h1>公式情報</h1>
          </div>
        </div>
        <div class="members">
          <div v-for="(item, i) in officialLinkItems" :key="i" class="member">
            <div class="member-name" :style="`background-color:${colors[i % colors.length]}`">
              <a :href="item.link" target="_blank">
                <span>{{ item.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="group c">
        <div class="team">
          <div class="group-name">
            <h1>Youtube Channel</h1>
          </div>
        </div>
        <div class="members">
          <div v-for="(item, i) in youtubeItems" :key="i" class="member">
            <div class="member-name" :style="`background-color:${colors[i % colors.length]}`">
              <a :href="item.link" target="_blank">
                <span>{{ item.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Others',
  components: { Header },
  data() {
    return {
      officialLinkItems: [
        {
          name: '最新ニュース',
          link: 'http://www.helloproject.com/news/'
        },
        {
          name: 'メディア情報',
          link: 'http://www.helloproject.com/media/'
        },
        {
          name: 'ファンクラブ',
          link: 'https://www.up-fc.jp/helloproject/fanclub_Login.php'
        },
        {
          name: 'ハロプロ研修生',
          link: 'http://www.helloproject.com/helloprokenshusei/'
        },
        {
          name: 'ハロプロ研修生北海道',
          link: 'http://www.helloproject.com/helloprokenshuseihokkaido/'
        }
      ],
      youtubeItems: [
        {
          name: 'ハロプロ研修生',
          link: 'https://www.youtube.com/user/helloprokenshusei'
        },
        {
          name: 'ハロステ',
          link: 'https://www.youtube.com/channel/UCnoYhOtV0IXZ6lv2R-ZnB_Q'
        },
        {
          name: 'tiny tiny',
          link: 'https://www.youtube.com/channel/UCyoK1-NYjHoWWylFy-5nHgw'
        },
        {
          name: 'OMAKE CHANNEL',
          link: 'https://www.youtube.com/channel/UCFBY6EJFIwCQCl-DiYYNKlg'
        },
        {
          name: 'アプカミ',
          link: 'https://www.youtube.com/user/theuflicks'
        },
        {
          name: 'アップフロントチャンネル',
          link: 'https://www.youtube.com/user/upfrontchannel'
        },
        {
          name: 'UF Goods Land',
          link: 'https://www.youtube.com/user/ufgoodsland'
        },
        {
          name: 'SATOYAMA & SATOUMI',
          link: 'https://www.youtube.com/user/satoyamachannel'
        }
      ],
      aboutItems: [
        {
          name: 'このサイトについて',
          link: '/about'
        }
      ],
      colors: [
        '#e5007f',
        '#adff2f',
        '#0233CB',
        '#00b379',
        '#dda0dd',
        '#800080',
        '#f1d1d4',
        '#ffa500',
        '#F31C3B',
        '#FFDF00',
        '#FFFFFF',
        '#0f2d9e',
        '#ff80ff',
        '#dda0dd',
        '#ffa500',
        '#007ec7',
        '#ffd700',
        '#7fffd4',
        '#ff69b4',
        '#acdd4d',
        '#00b379'
      ]
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  .groups {
    padding-top: 40px;
    .group {
      z-index: 1;
      .team {
        z-index: 10000;
        &.fixed {
          position: fixed;
          width: 100%;
          top: 0;
        }
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
      .members {
        width: 100%;
        &.fixed {
          padding-top: 49px;
        }
        .member {
          height: 68px;
          .member-name {
            position: relative;
            background-color: #eeeeee;
            a {
              height: 68px;
              width: 100%;
              padding: 15px 0;
              text-align: center;
              font-size: 18pt;
              color: #fff;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
