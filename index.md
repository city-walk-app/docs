---
layout: home

title: City Walk
titleTemplate: 记录你走过的每个地方

hero:
  name: City Walk
  text: 记录你走过的每个地方
  actions:
    - theme: brand
      text: 查看
      link: /docs/1
    - theme: alt
      text: GitHub
      link: https://github.com/city-walk-app

  image:
    src: /Logo.png

features:
  - icon: 📝
    title: 记录
    details: 记录你每次走过的地点和路线

  - icon: 🔑
    title: 解锁
    details: 解锁每个省份的版图，你需要走遍中国才可以收集到所有

  - icon: 📌
    title: 分享
    details: 将你的地点和路线分享给好友，让 TA 也和你一起
---

<style>
  .VPImage {
    transform: translate(-50%, -50%) scale(0.8) !important;
    border-radius: 27%;
  }

  :root { 
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #EF5A66 30%, #F8D035);

    --vp-home-hero-image-background-image: linear-gradient(-45deg, #F8D035 50%, #EF5A66 50%);
    --vp-home-hero-image-filter: blur(44px);
  }

  @media (min-width: 640px) {
    :root {
      --vp-home-hero-image-filter: blur(56px);
    }
  }

  @media (min-width: 960px) {
    :root {
      --vp-home-hero-image-filter: blur(68px);
    }
  }
</style>
