if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return n[e]||(c=new Promise(async c=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=c}else importScripts(e),c()})),c.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},c=(c,n)=>{Promise.all(c.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(c)};self.define=(c,i,r)=>{n[c]||(n[c]=Promise.resolve().then(()=>{let n={};const s={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return n;case"module":return s;default:return e(c)}})).then(e=>{const c=r(...e);return n.default||(n.default=c),n})}))}}define("./service-worker.js",["./workbox-1d8c23ff"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eq_79"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.fe1bb6f0.css",revision:"3d54141029f58373b47d1fb4229f34dc"},{url:"favicon.ico",revision:"1596d40d9fbff3c217c0d0210373321d"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8c7a828f.woff",revision:"d560f924f97c39f3c71be0a30f89b2a8"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4ecd8e78.woff2",revision:"ad0c1bf1395151a1112d4fc419a6c852"},{url:"icons/apple-icon-120x120.png",revision:"92475c985ee15da2448f9d4e7a84743c"},{url:"icons/apple-icon-152x152.png",revision:"4a3cc2bcb3f8c0c36e5f50b987f58e4c"},{url:"icons/apple-icon-167x167.png",revision:"2217c78c06ddcedc107f8d546eb5ac70"},{url:"icons/apple-icon-180x180.png",revision:"6882fd47a4f250e968d1efa9af771908"},{url:"icons/apple-launch-1125x2436.png",revision:"fd1c535399d764a5de68edd1c7c64a12"},{url:"icons/apple-launch-1242x2208.png",revision:"4772a3641a3c7b3df94c95d84aed0cd7"},{url:"icons/apple-launch-1242x2688.png",revision:"e5942459c653ccf8885c70d889229478"},{url:"icons/apple-launch-1536x2048.png",revision:"3fa9c2bf1f1393827fa4cd5f38e62463"},{url:"icons/apple-launch-1668x2224.png",revision:"936adddb5113ba0cc73fb4fe4b6a29db"},{url:"icons/apple-launch-1668x2388.png",revision:"8e99e275d2f40522f539751da3a15aad"},{url:"icons/apple-launch-2048x2732.png",revision:"cfad89bee3636c06e469139ecb3182aa"},{url:"icons/apple-launch-640x1136.png",revision:"7f18870bfdefdca7973759d65f0d84e4"},{url:"icons/apple-launch-750x1334.png",revision:"2f23b5d8cb4f18503ecb28ea2b25d425"},{url:"icons/apple-launch-828x1792.png",revision:"a47093eab34633b32097a2b9cdfe3c23"},{url:"icons/favicon-128x128.png",revision:"b4cb0f54d7383b1949884d11f54eb350"},{url:"icons/favicon-16x16.png",revision:"1f54096b2c968c1dcec0c56fde692860"},{url:"icons/favicon-32x32.png",revision:"bfb425afebf3e1da57aa3c59a506dfa6"},{url:"icons/favicon-96x96.png",revision:"9e435c04e39d1439550e3f8101ff4872"},{url:"icons/icon-128x128.png",revision:"b4cb0f54d7383b1949884d11f54eb350"},{url:"icons/icon-192x192.png",revision:"b94c48166e423229d90541cbc9b771ca"},{url:"icons/icon-256x256.png",revision:"4286be942d00a1b725225dcac9c248f5"},{url:"icons/icon-384x384.png",revision:"aa2fc584ad768d5ae1dde5399ce969ee"},{url:"icons/icon-512x512.png",revision:"9b4294183817b51c3aaf31ca4073e36a"},{url:"icons/ms-icon-144x144.png",revision:"641dace0710787fb36b2873a3604c0c8"},{url:"icons/safari-pinned-tab.svg",revision:"ae9b0f33041f9d8ea0e46ad801d5f99e"},{url:"index.html",revision:"8d964fa3d0709e92ef3636f7791dd3df"},{url:"js/2.3a6122f4.js",revision:"78cb8efbf7d223bfe7369b02eb74f0a6"},{url:"js/3.59a471c5.js",revision:"3231070ab74ab9b38d37450392e0b422"},{url:"js/4.3c560b88.js",revision:"3821c47a9aa84755a41b66187b431359"},{url:"js/5.df0375bd.js",revision:"cdb7a94bb0c7902458207877e612cb79"},{url:"js/app.fe7f10ab.js",revision:"f8275995ef97eae1521c59b83cd7358c"},{url:"js/vendor.c252c995.js",revision:"9742688fb74492fddfc431956b8ea839"},{url:"manifest.json",revision:"6c8c67caf9581f93537c32e2f3e8cf71"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/api\.chucknorris\.io\/jokes\/categories.*$/,new e.NetworkFirst({cacheName:"category-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/api\.chucknorris\.io\/jokes\/random.*$/,new e.NetworkFirst({cacheName:"joke-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,maxEntries:20,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
