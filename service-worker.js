if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let c={};const r=e=>s(e,d),b={module:{uri:d},exports:c,require:r};a[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-86b4a219"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.39452b2a.js",revision:"76e42513514788910f0b06d77e6b999f"},{url:"assets/404.html.1b3618bb.js",revision:"8507b6a785d863b46d0da59b751466c5"},{url:"assets/404.html.ae9ffa92.js",revision:"6f3b65fc794e3d82eea0449cbe117bee"},{url:"assets/align.b9425857.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/app.e1440902.js",revision:"fea1d40d4a6041f9e5a5c3eb6726944a"},{url:"assets/Blog.d66a1197.js",revision:"22918bf266a55448ebdea6295d3d467c"},{url:"assets/certifications.html.a35d58a0.js",revision:"906df7b2748185bd7b95dfd18c5a089a"},{url:"assets/certifications.html.bf151d82.js",revision:"063ff3f1eca4f275c2f0df504cec53dd"},{url:"assets/courses.html.417ef7ef.js",revision:"345cc53d0dc67af8f2d3a04f7d16968b"},{url:"assets/courses.html.452bb604.js",revision:"c16b949fec5851f5b7b11d5c734241e2"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/entorno.html.7fbb18f5.js",revision:"7e4485f63fa9418cbdfee98185999c49"},{url:"assets/entorno.html.b149819e.js",revision:"3f16e927be879114b3c5e5f7557ef662"},{url:"assets/experience.html.322c8d45.js",revision:"88403a610db30aa8ac34bd693e0ebdb0"},{url:"assets/experience.html.c3d49c3c.js",revision:"40f3a884ae69844f74bf409f81a777be"},{url:"assets/footnote.3dff8346.js",revision:"6284fd4521d66768b8f3eae27dd9ab46"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.c7681852.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.0804c0c3.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.0fddd0b2.js",revision:"b47f791e0f983c70c72bf508f5d8055f"},{url:"assets/index.html.11309618.js",revision:"b7bc6d67cced87cb4e1dffbadebd1527"},{url:"assets/index.html.13a37ba2.js",revision:"1f4ddcf4d1de21052f4fa9eff7f7cdbe"},{url:"assets/index.html.20a7fe44.js",revision:"f9108befad1fecba78480c2ee94d551e"},{url:"assets/index.html.2c4b9c51.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.32ba4628.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.3a0c6b37.js",revision:"64a0924db06cb54902646bdb226b880b"},{url:"assets/index.html.47d3a366.js",revision:"28ae63aff419e43c869cfea62f435d4d"},{url:"assets/index.html.498d219e.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.4b63c2c2.js",revision:"231d69a43b061911d4d6b50d23735e67"},{url:"assets/index.html.50a6f9e5.js",revision:"58c93fb9b32ee61fc8a51c33855752e6"},{url:"assets/index.html.545263d0.js",revision:"0e24b87a7126c5534dae1aedc3b6ddbf"},{url:"assets/index.html.6e623085.js",revision:"e430e924569fe68535e7864aee19adc1"},{url:"assets/index.html.7caa9dc7.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.9538d171.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.a96a8157.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.c12ac3f5.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.c1834260.js",revision:"71bf28a091e05c74a805f542bda4612a"},{url:"assets/index.html.cf12dece.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.e0134b25.js",revision:"a82d6854d2f1f23294b54ff0e76fa30a"},{url:"assets/index.html.ead9b069.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/index.html.ee63b22d.js",revision:"f3bef64b52df1dffffae7c3806c4d575"},{url:"assets/index.html.fe056fff.js",revision:"cfa272f4f587b2810b67f5ed48bd137b"},{url:"assets/intro.html.6681198b.js",revision:"10068d468a259085ffdb99703b075bf3"},{url:"assets/intro.html.698bb107.js",revision:"310d03bd28adafd490bd57ca00dffd30"},{url:"assets/katex.min.9e18f3a9.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/Layout.b2937437.js",revision:"7d4d32e9f3a0221000a4df06474f07b1"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.c4abc7cd.js",revision:"21671993a99b45175ac8b0fb22d196d1"},{url:"assets/mermaid.esm.min.0306b61d.js",revision:"035bd6b5d885219b9a0c4d42ea8063d9"},{url:"assets/notes.esm.5e4599cc.js",revision:"52f22429d98d593272462e18169534f2"},{url:"assets/photoswipe-ui-default.df145434.js",revision:"490065da5582cad306a67cfec5a3b7ec"},{url:"assets/photoswipe.b3c6eba6.js",revision:"1024182f1482c1375a7035fd817bee8f"},{url:"assets/reveal.esm.af2960e3.js",revision:"dc5da53c75c3f6655dcad5a579549426"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.b5269393.js",revision:"bfdf3fc57f427ef7b4e37559e9036ad6"},{url:"assets/SlidePage.6d7faf0d.js",revision:"072fe35b6ec1ec68a2c92d3c24f62904"},{url:"assets/style.6e067737.css",revision:"3b744208c3e7b70fbe7789220fae8eda"},{url:"assets/tasklist.3db80391.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/tex.f70ce2ee.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/utils-commands.html.d988f241.js",revision:"8394a57cb0836944464e2c3d24204010"},{url:"assets/utils-commands.html.d997746f.js",revision:"279d180e76248d82d3fee27966d90f5b"},{url:"assets/Waline.min.14307884.js",revision:"9eecc021ae422e3c6bf106403d0b357a"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"cc95c0628f7b0ec4ee972bc7cb9b93f7"},{url:"about/certifications.html",revision:"1bdd00e576f58f49d3a97087b5d10510"},{url:"about/courses.html",revision:"c443319b7f7fbdaab625f3b03a5b7b74"},{url:"about/experience.html",revision:"6095e6aeb5fddb3e22af28e440ec39ff"},{url:"about/index.html",revision:"8d019549c2e294f194d92f4c553cb62e"},{url:"article/index.html",revision:"3f7f58f1706005df6a64af1142a6635c"},{url:"category/data-science/index.html",revision:"751e835dd432a821b27547ba127e47c0"},{url:"category/index.html",revision:"c21bd652c1ffefd7ad919f27dc1664db"},{url:"category/linux/index.html",revision:"918f156330b7b267e7e4fb663d2e48e5"},{url:"encrypted/index.html",revision:"ff0d9b77aeecf709fb071c0c73d6dcd2"},{url:"index.html",revision:"b47d82577c533b53f5fe125d0e93ea64"},{url:"intro.html",revision:"26444d208f085bd52266c2b29a8ad2d7"},{url:"portfolio/index.html",revision:"9017459bbfd50769155a06ac5a344ccd"},{url:"posts/datascience/entorno.html",revision:"deb4bbf8b047f3376b1c7bd61deeba46"},{url:"posts/linux/utils-commands.html",revision:"80d4712434ef94e21c0869b391c4ed8d"},{url:"slides/index.html",revision:"819a1509a0944ee5e80cff5dd433f951"},{url:"star/index.html",revision:"d89b265e2ad000687707ff9321fd860e"},{url:"tag/index.html",revision:"c75792c5794c98d855f162186a561870"},{url:"timeline/index.html",revision:"98ebf4e23f7b2c678a0b5549c8039ff2"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/android-chrome-192x192.png",revision:"722fadcdb1fc6f11fc020a136c41fcc0"},{url:"assets/icon/android-chrome-512x512.png",revision:"136c1046d8227be9a6e98b5a4ac1093a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/apple-touch-icon.png",revision:"4925be5be1bdfd990cc6a5a04b17905d"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/favicon-16x16.png",revision:"9f64628e96d334ff70eb8f9a0420c53f"},{url:"assets/icon/favicon-32x32.png",revision:"32ca946cefe92a9ba0e6e28c3fca250d"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"background-hero.jpg",revision:"c9c1bc31fb474ca4f42e769fe9222d1f"},{url:"datascience/anaconda-boltons-channel.png",revision:"4aeaa5f3cf1656f90aecbf7f8871b5ae"},{url:"datascience/anaconda-boltons.png",revision:"8b083f736d41854ae1ab9d3faf08ea45"},{url:"datascience/anaconda.png",revision:"23c5b688dd22587134e44e59d20c7f01"},{url:"datascience/anaconda1.png",revision:"61e5dff086ac1ff0a86710e473860293"},{url:"datascience/anaconda2.png",revision:"f8805f0f9c45002920dbde95202b464b"},{url:"datascience/jupiter_notebook1.png",revision:"3a5ecea4648aa90e43af5bec9eb706ec"},{url:"datascience/jupyter-anaconda.png",revision:"2ca016f999cbcebc853181a8b4d87c5f"},{url:"pablo.jpg",revision:"e1e285eceb0985534f3f245597e18de3"},{url:"pablo.png",revision:"d784be4789c9e081ab9be432fc2fcddf"},{url:"photo-personal.png",revision:"d42947bd9ec52035818b1bf602298adc"},{url:"platzi/diploma-asincronismo-js.png",revision:"002f8b4a80a5be1954030987234326bc"},{url:"platzi/diploma-basico-javascript.png",revision:"61d9c03f9adb273976c574cad36b9880"},{url:"platzi/diploma-ecmascript-6.png",revision:"c9d4cae556c346fb8839add6301780de"},{url:"platzi/diploma-estrategias-ingles.png",revision:"54ea6d566aa5102d71d348da7ebdb448"},{url:"platzi/diploma-html-css.png",revision:"a597c9f8e7443e68153426cb5fed7961"},{url:"platzi/diploma-html-practico.png",revision:"0c9fcfb310bbdc3c573d613e9c44738c"},{url:"platzi/diploma-intro-laravel.png",revision:"fcf9de4dc746d34abd1db294d8955e5e"},{url:"platzi/diploma-java-basico.png",revision:"b9510db5840b7d5cfe5d998cc194762d"},{url:"platzi/diploma-java-oop.png",revision:"0989f7c890b2c2e90f26acad3a6b8aed"},{url:"platzi/diploma-java-persistencia.png",revision:"b157bd2d584d31db1c330666886dab15"},{url:"platzi/diploma-jee-2017.png",revision:"d9741b2b9423a3302ed85b807dd58d5d"},{url:"platzi/diploma-jupyter-notebook.png",revision:"c8c7fcd6c6e0d04dccd348f68fc240f3"},{url:"platzi/diploma-marca-personal.png",revision:"95bc2d98adb035580d4623a85867b355"},{url:"platzi/diploma-oop.png",revision:"5cbe8c0783e06f1ac4e1f86d66683463"},{url:"platzi/diploma-prework.png",revision:"c48023aa6653cdf1690d4789785b49e6"},{url:"platzi/diploma-python.png",revision:"f4a4b082045ae3bc0bc258b11daf01f9"},{url:"platzi/diploma-terminal.png",revision:"2a9598158d5b0aa9a38db1a2dc2664b7"},{url:"platzi/diploma-vuejs2.png",revision:"cb81bd829769316b8b55e13abd761daa"},{url:"platzi/diploma-woocommerce.png",revision:"264cf0eb57e2c2345e656de4271f2a1f"},{url:"portfolio.png",revision:"e9215e73dd86781b9d95a27f819ba897"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
