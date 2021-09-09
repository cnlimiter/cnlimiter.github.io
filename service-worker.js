/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91056a89922907b42ce85d1ea160b2e8"
  },
  {
    "url": "afdian.png",
    "revision": "4eb0591a2b72283717a117f2fb216689"
  },
  {
    "url": "ali.png",
    "revision": "34396da8311095bcf9ec51605d512d54"
  },
  {
    "url": "alipay.png",
    "revision": "bca77f7cad38ac92553faaab2b575147"
  },
  {
    "url": "assets/css/0.styles.8f581b9b.css",
    "revision": "0861e6d8e81f7a4baa8892b449d9a45f"
  },
  {
    "url": "assets/img/1.2388a0f3.png",
    "revision": "2388a0f347287df240082990e68bf5b8"
  },
  {
    "url": "assets/img/2.c7ed3610.png",
    "revision": "c7ed3610ed00d8a29e9048ab41f92610"
  },
  {
    "url": "assets/img/3.56efea7a.png",
    "revision": "56efea7ad861755aaf42abedeaed00a7"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.cc552dfd.svg",
    "revision": "cc552dfd1641ce914da841151bf34292"
  },
  {
    "url": "assets/img/myicon.c3d06088.svg",
    "revision": "c3d06088925858f6097d1fc61878de72"
  },
  {
    "url": "assets/js/1.d03fc701.js",
    "revision": "aa07b31c4113203b45370bc54e3699b7"
  },
  {
    "url": "assets/js/10.ef5be002.js",
    "revision": "6e9cc089c5ad0e58dbdbca857f59e39b"
  },
  {
    "url": "assets/js/11.738b37e2.js",
    "revision": "dd6ce1611d491f933b70dbdf1115ff01"
  },
  {
    "url": "assets/js/12.7b06c6fe.js",
    "revision": "08f84accb32751e4f0a1ae24a5a44fb8"
  },
  {
    "url": "assets/js/13.b8816588.js",
    "revision": "0dcdca57e96331491fbb4d266583f96c"
  },
  {
    "url": "assets/js/14.7255f606.js",
    "revision": "61f98e8d79e0e8b8e72d1fbc18c1a17c"
  },
  {
    "url": "assets/js/15.2fbb2b70.js",
    "revision": "8c300d758d7f2df920dcb6a44d17eb46"
  },
  {
    "url": "assets/js/16.d06c4905.js",
    "revision": "fafe1164e297d6f485ef08f836858979"
  },
  {
    "url": "assets/js/17.f78b771a.js",
    "revision": "6fcf94ea33dd233ecc16800bee4fdc4d"
  },
  {
    "url": "assets/js/18.621954b8.js",
    "revision": "f3adedf4b4883862ca302da98bc53479"
  },
  {
    "url": "assets/js/19.810f9e30.js",
    "revision": "dd465931982098430af53e2b1e6ba147"
  },
  {
    "url": "assets/js/2.75b96076.js",
    "revision": "258773c849d006836cef995e56447d55"
  },
  {
    "url": "assets/js/20.e834e5ad.js",
    "revision": "ddb7116cb4f591e4c0c7185f9b8e0f76"
  },
  {
    "url": "assets/js/21.0e461ff9.js",
    "revision": "f393afffa274fe33f633f8a4360cd9d9"
  },
  {
    "url": "assets/js/22.baa22d10.js",
    "revision": "bd8c86f91ab3e1eab4794c7576ae8c9d"
  },
  {
    "url": "assets/js/23.e72b57b1.js",
    "revision": "2b7a835f061fc9c46d2174bcbf8941f5"
  },
  {
    "url": "assets/js/24.6ab32964.js",
    "revision": "563bbe8b09fad07bd12a718a90244136"
  },
  {
    "url": "assets/js/25.757526f3.js",
    "revision": "91ab7fa57567d7c765a96a3db5017ee3"
  },
  {
    "url": "assets/js/26.0133c6a2.js",
    "revision": "4e6bed6f0c57833ac8655c2b82a6416d"
  },
  {
    "url": "assets/js/27.3824e74a.js",
    "revision": "e776f05dfa26af51f0b299efa23c4b5b"
  },
  {
    "url": "assets/js/28.81e3de62.js",
    "revision": "8805fc7ca1e07f634020101b04cfb0b1"
  },
  {
    "url": "assets/js/29.3e31f23e.js",
    "revision": "dbaf1a1e4066611f59036bacb522cf04"
  },
  {
    "url": "assets/js/3.8f092152.js",
    "revision": "4c8b4e64b5b2ca265923fa2d3c3d89fb"
  },
  {
    "url": "assets/js/7.db9bf512.js",
    "revision": "72a4273e07a8a28981789df18c2e47c0"
  },
  {
    "url": "assets/js/8.b539a84f.js",
    "revision": "8c9c1aca8bd4b047688e774cf37ce260"
  },
  {
    "url": "assets/js/9.5de70cb0.js",
    "revision": "f25c15679630dcb0704ebe1cc4e48cfe"
  },
  {
    "url": "assets/js/app.9aa65c36.js",
    "revision": "f68f200f6fbca91ec61e21656c7778d1"
  },
  {
    "url": "assets/js/vendors~docsearch.5df63b2a.js",
    "revision": "273b76cfbd173a956aad4e5a1f404172"
  },
  {
    "url": "assets/js/vendors~flowchart.bb3ab278.js",
    "revision": "d4789a0423b138a2cbad76f1b18951b9"
  },
  {
    "url": "categories/index.html",
    "revision": "efe99c8a809b028cead23a186b90e3db"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon.png",
    "revision": "eed06cf2fc5b064e600aa10ea521ef2b"
  },
  {
    "url": "icon.svg",
    "revision": "c3d06088925858f6097d1fc61878de72"
  },
  {
    "url": "index.html",
    "revision": "ea42570e91f4a8d09e25c3501c843486"
  },
  {
    "url": "qq.png",
    "revision": "b60315e63c60cd9ef0d377295f051b87"
  },
  {
    "url": "tag/index.html",
    "revision": "358b13b7c979ababa98d32d78d05f6cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "37f050fc99c3f3b575c46639d1ce3c2b"
  },
  {
    "url": "views/main/config-client.html",
    "revision": "1389e11c19e2f0e898c0e6f14be3d8ce"
  },
  {
    "url": "views/main/donate.html",
    "revision": "8cc88e8784f6877e40005f9c5d05e307"
  },
  {
    "url": "views/main/index.html",
    "revision": "dc21af7a2a849c2ca23875d3d58af1c3"
  },
  {
    "url": "views/main/mod.html",
    "revision": "f048a8c9193bb026fe7879e0b9c5f20c"
  },
  {
    "url": "views/main/question.html",
    "revision": "4920413e66ed2791987747d2be80f02c"
  },
  {
    "url": "views/main/reg-skin.html",
    "revision": "58dc9b21042235c54cb57425a9d4735c"
  },
  {
    "url": "views/main/server.html",
    "revision": "429236482085238416fdc52d6fcd1f62"
  },
  {
    "url": "views/others/download.html",
    "revision": "9ea50313f0ab001627003b897bb6bbc3"
  },
  {
    "url": "views/others/messageBoard.html",
    "revision": "adfc5e75b04752f994d81a24bcf24b74"
  },
  {
    "url": "wechat.png",
    "revision": "3a4c1b5c5c76322ce485dcac7e0e5cc8"
  },
  {
    "url": "wx.png",
    "revision": "37fd9e8167bb118717bf546a58fbe39f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
