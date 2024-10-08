---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZAFU ACM"
  text: "浙农林 ACM 集训队"
  tagline: Choose the ZAFU, Choose the ACM.
  image:
    src: /icpc.png
    alt: icpc
  actions:
    - theme: brand
      text: 算竞，启动！
      link: /basic/
    - theme: alt
      text: 关于我们
      link: /about/introduction

features:
  - icon: 😎
    title: 我们是？
    details: 我们是浙江农林大学 ACM 集训队，为同学们提供算法交流、训练平台，多次代表学校出征程序设计竞赛（ICPC/CCPC、浙江省赛、蓝桥杯等）。
  - icon: 🚀
    title: 我们氛围超棒
    details: 承担队内管理职责的均为本科学长学姐，氛围相当自由。很多队员最终拿到了大厂 Offer，也有很多队员考研到浙大等名校。
  - icon: 🎉
    title: 欢迎加入我们
    details: 我们随时欢迎感兴趣的同学加入我们！QQ：ACM 协会大群 628253675，2024 迎新群 684616577。
---

<!-- From `https://github.com/vuejs/vitepress/blob/main/docs/index.md` -->

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe50 50%, #47caff50 50%);
  --vp-home-hero-image-filter: blur(44px);
}

:root.dark {
  --vp-home-hero-image-background-image: none;
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
