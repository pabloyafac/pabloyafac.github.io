if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let d={};const r=e=>s(e,f),b={module:{uri:f},exports:d,require:r};a[f]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-86b4a219"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.f2ca18d6.js",revision:"1f027d9dd87be781fc6233e196e08af3"},{url:"assets/404.html.1b3618bb.js",revision:"8507b6a785d863b46d0da59b751466c5"},{url:"assets/404.html.4e405bca.js",revision:"277048f2069a898f858a9c2b8813bf7b"},{url:"assets/align.b9425857.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/app.fd5bcb83.js",revision:"37660f5151e8fa3245fa2a897b50d949"},{url:"assets/Blog.c655ffe4.js",revision:"4b44c62802afc2e1b9750afef49a5a49"},{url:"assets/certifications.html.586eba27.js",revision:"d9cb6e9e2a39744e4ebc53b091ddf4c4"},{url:"assets/certifications.html.a35d58a0.js",revision:"906df7b2748185bd7b95dfd18c5a089a"},{url:"assets/courses.html.417ef7ef.js",revision:"345cc53d0dc67af8f2d3a04f7d16968b"},{url:"assets/courses.html.7960cbe1.js",revision:"20fc53bc7b59d834a9717c046196ef89"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/entorno.html.91ca13f4.js",revision:"4776ee92681e4e9612b86d59d23ed6f1"},{url:"assets/entorno.html.c1129e6a.js",revision:"f5edf6a0995725025a1dfbb42da3c6e2"},{url:"assets/experience.html.c211fc13.js",revision:"acbc619e361a6e01686aa4b0297f8494"},{url:"assets/experience.html.c3d49c3c.js",revision:"40f3a884ae69844f74bf409f81a777be"},{url:"assets/footnote.3dff8346.js",revision:"6284fd4521d66768b8f3eae27dd9ab46"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.c7681852.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.0fddd0b2.js",revision:"b47f791e0f983c70c72bf508f5d8055f"},{url:"assets/index.html.11309618.js",revision:"b7bc6d67cced87cb4e1dffbadebd1527"},{url:"assets/index.html.13a37ba2.js",revision:"1f4ddcf4d1de21052f4fa9eff7f7cdbe"},{url:"assets/index.html.1cbf2c9e.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.20a7fe44.js",revision:"f9108befad1fecba78480c2ee94d551e"},{url:"assets/index.html.24e16388.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.256dc0ff.js",revision:"4e24df4173491d3d3a587001e509c2fd"},{url:"assets/index.html.35426483.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.3a0c6b37.js",revision:"64a0924db06cb54902646bdb226b880b"},{url:"assets/index.html.47d3a366.js",revision:"28ae63aff419e43c869cfea62f435d4d"},{url:"assets/index.html.4b63c2c2.js",revision:"231d69a43b061911d4d6b50d23735e67"},{url:"assets/index.html.50a6f9e5.js",revision:"58c93fb9b32ee61fc8a51c33855752e6"},{url:"assets/index.html.51da468d.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.545263d0.js",revision:"0e24b87a7126c5534dae1aedc3b6ddbf"},{url:"assets/index.html.78107009.js",revision:"b031ad730b7ecf106c764b125b21557c"},{url:"assets/index.html.83357db6.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.9a7ebec3.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.a82c9f8f.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.aae10111.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.ac2670bd.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.b99ffc3b.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.c1834260.js",revision:"71bf28a091e05c74a805f542bda4612a"},{url:"assets/index.html.e0134b25.js",revision:"a82d6854d2f1f23294b54ff0e76fa30a"},{url:"assets/index.html.ee63b22d.js",revision:"f3bef64b52df1dffffae7c3806c4d575"},{url:"assets/index.html.f5112ade.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/index.html.ffc2d242.js",revision:"0c1204efba68c1db4a470c100855fca0"},{url:"assets/intro.html.6681198b.js",revision:"10068d468a259085ffdb99703b075bf3"},{url:"assets/intro.html.9ad9f01d.js",revision:"950b9777b0b8b37cefb4b09a35688843"},{url:"assets/katex.min.9e18f3a9.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/Layout.6c6554e4.js",revision:"5f46a1a7f3e3619345a964579c4a85da"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.c4abc7cd.js",revision:"21671993a99b45175ac8b0fb22d196d1"},{url:"assets/mermaid.esm.min.0306b61d.js",revision:"035bd6b5d885219b9a0c4d42ea8063d9"},{url:"assets/notes.esm.5e4599cc.js",revision:"52f22429d98d593272462e18169534f2"},{url:"assets/photoswipe-ui-default.3969bf88.js",revision:"c2ef5ea35f68397c95ae7a3ebfc5ada2"},{url:"assets/photoswipe.b09a476b.js",revision:"be1a124cac4541569b89b7ec09927b7b"},{url:"assets/reveal.esm.af2960e3.js",revision:"dc5da53c75c3f6655dcad5a579549426"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.44c8425d.js",revision:"64965d6bc19dff9229d39c46d38b7c4e"},{url:"assets/SlidePage.9efc4757.js",revision:"1d794c3758b51db0776cca8711cb42df"},{url:"assets/style.6e067737.css",revision:"3b744208c3e7b70fbe7789220fae8eda"},{url:"assets/tasklist.3db80391.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/tex.f70ce2ee.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/utils-commands.html.0d97675d.js",revision:"9eeeb0d6d388db4e26be069d35530dd7"},{url:"assets/utils-commands.html.120a1756.js",revision:"60ed81cd9798d0e4360b61afbb9617ab"},{url:"assets/utils-commands.html.13e6c480.js",revision:"cd50a57d330ae2e04bd974d67d000a87"},{url:"assets/utils-commands.html.8425800b.js",revision:"7d5f81a94eea5da78015841552808cf6"},{url:"assets/Waline.min.c13ba710.js",revision:"e70f8f8b4615e85dc1b8993f39f258e1"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"b1824ae0d6588430c9def17bf7f4871d"},{url:"about/certifications.html",revision:"8626a1f93b01def8d04290f7109f4404"},{url:"about/courses.html",revision:"ae27ea9eec048737770ee099a8756509"},{url:"about/experience.html",revision:"8709698cdcf29fdd5c4895c377f371fa"},{url:"about/index.html",revision:"6ec7c4d068c2eca71e4c2bc9ad399137"},{url:"article/index.html",revision:"7b0fb7c9bd534f2a0c67977c892921d5"},{url:"category/data-science/index.html",revision:"a29da8a72c0b0bae9f2a5839f9401fab"},{url:"category/index.html",revision:"836048c386a72b343b520c96d5422077"},{url:"category/linux/index.html",revision:"833d9f7813ada529666c4eba11d8252d"},{url:"category/mysql/index.html",revision:"448234b3bcd91052881d419f7cd7c6e1"},{url:"encrypted/index.html",revision:"0fc41c9e9ffabe152887b742a767014d"},{url:"index.html",revision:"0fdc8a51476e994e5bef9817d7f292c2"},{url:"intro.html",revision:"796d541ef26756be6603b46972d48c96"},{url:"portfolio/index.html",revision:"255d22fc45994b7778c8f87468e1fb18"},{url:"posts/datascience/entorno.html",revision:"58117f4d0bfd49477c16ff81f2b5fffb"},{url:"posts/linux/utils-commands.html",revision:"845fd5cee34773245c9ebf15839f8464"},{url:"posts/mysql/utils-commands.html",revision:"08e8ec5af32d621b3a73ddc3056b7e3c"},{url:"slides/index.html",revision:"bac8742442d10fa2b04a5df2e70b30c7"},{url:"star/index.html",revision:"9d9fc486ed6408e002b391becca5aa2a"},{url:"tag/index.html",revision:"74d1ccf30171ab20b7c28536a64e9728"},{url:"timeline/index.html",revision:"e7888c931c424606ebbf3419aca172fd"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/android-chrome-192x192.png",revision:"722fadcdb1fc6f11fc020a136c41fcc0"},{url:"assets/icon/android-chrome-512x512.png",revision:"136c1046d8227be9a6e98b5a4ac1093a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/apple-touch-icon.png",revision:"4925be5be1bdfd990cc6a5a04b17905d"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/favicon-16x16.png",revision:"9f64628e96d334ff70eb8f9a0420c53f"},{url:"assets/icon/favicon-32x32.png",revision:"32ca946cefe92a9ba0e6e28c3fca250d"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"background-hero.jpg",revision:"c9c1bc31fb474ca4f42e769fe9222d1f"},{url:"datascience/anaconda-boltons-channel.png",revision:"4aeaa5f3cf1656f90aecbf7f8871b5ae"},{url:"datascience/anaconda-boltons.png",revision:"8b083f736d41854ae1ab9d3faf08ea45"},{url:"datascience/anaconda.png",revision:"23c5b688dd22587134e44e59d20c7f01"},{url:"datascience/anaconda1.png",revision:"61e5dff086ac1ff0a86710e473860293"},{url:"datascience/anaconda2.png",revision:"f8805f0f9c45002920dbde95202b464b"},{url:"datascience/jupiter_notebook1.png",revision:"3a5ecea4648aa90e43af5bec9eb706ec"},{url:"datascience/jupyter-anaconda.png",revision:"2ca016f999cbcebc853181a8b4d87c5f"},{url:"pablo.jpg",revision:"e1e285eceb0985534f3f245597e18de3"},{url:"pablo.png",revision:"d784be4789c9e081ab9be432fc2fcddf"},{url:"photo-personal.png",revision:"d42947bd9ec52035818b1bf602298adc"},{url:"platzi/diploma-asincronismo-js.png",revision:"002f8b4a80a5be1954030987234326bc"},{url:"platzi/diploma-basico-javascript.png",revision:"61d9c03f9adb273976c574cad36b9880"},{url:"platzi/diploma-ecmascript-6.png",revision:"c9d4cae556c346fb8839add6301780de"},{url:"platzi/diploma-estrategias-ingles.png",revision:"54ea6d566aa5102d71d348da7ebdb448"},{url:"platzi/diploma-html-css.png",revision:"a597c9f8e7443e68153426cb5fed7961"},{url:"platzi/diploma-html-practico.png",revision:"0c9fcfb310bbdc3c573d613e9c44738c"},{url:"platzi/diploma-intro-laravel.png",revision:"fcf9de4dc746d34abd1db294d8955e5e"},{url:"platzi/diploma-java-basico.png",revision:"b9510db5840b7d5cfe5d998cc194762d"},{url:"platzi/diploma-java-oop.png",revision:"0989f7c890b2c2e90f26acad3a6b8aed"},{url:"platzi/diploma-java-persistencia.png",revision:"b157bd2d584d31db1c330666886dab15"},{url:"platzi/diploma-jee-2017.png",revision:"d9741b2b9423a3302ed85b807dd58d5d"},{url:"platzi/diploma-jupyter-notebook.png",revision:"c8c7fcd6c6e0d04dccd348f68fc240f3"},{url:"platzi/diploma-marca-personal.png",revision:"95bc2d98adb035580d4623a85867b355"},{url:"platzi/diploma-oop.png",revision:"5cbe8c0783e06f1ac4e1f86d66683463"},{url:"platzi/diploma-prework.png",revision:"c48023aa6653cdf1690d4789785b49e6"},{url:"platzi/diploma-python.png",revision:"f4a4b082045ae3bc0bc258b11daf01f9"},{url:"platzi/diploma-terminal.png",revision:"2a9598158d5b0aa9a38db1a2dc2664b7"},{url:"platzi/diploma-vuejs2.png",revision:"cb81bd829769316b8b55e13abd761daa"},{url:"platzi/diploma-woocommerce.png",revision:"264cf0eb57e2c2345e656de4271f2a1f"},{url:"portfolio.png",revision:"e9215e73dd86781b9d95a27f819ba897"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
