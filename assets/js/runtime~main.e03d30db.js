(()=>{"use strict";var e,a,f,t,d,r={},b={};function c(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={exports:{}};return r[e].call(f.exports,f,f.exports,c),f.exports}c.m=r,e=[],c.O=(a,f,t,d)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],d=e[i][2];for(var b=!0,o=0;o<f.length;o++)(!1&d||r>=d)&&Object.keys(c.O).every((e=>c.O[e](f[o])))?f.splice(o--,1):(b=!1,d<r&&(r=d));if(b){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,t,d]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);c.r(d);var r={};a=a||[null,f({}),f([]),f(f)];for(var b=2&t&&e;"object"==typeof b&&!~a.indexOf(b);b=f(b))Object.getOwnPropertyNames(b).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,c.d(d,r),d},c.d=(e,a)=>{for(var f in a)c.o(a,f)&&!c.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,f)=>(c.f[f](e,a),a)),[])),c.u=e=>"assets/js/"+({68:"10f76bbd",72:"52804278",1244:"d85a39be",1256:"902b04f6",1420:"6373637a",1496:"fbd836ef",1510:"031dc046",1650:"25bfd71f",1652:"9ed00105",1728:"755cfc2e",1956:"18116e9d",2032:"e02badcb",2256:"92bb876c",2632:"c4f5d8e4",2640:"3c5916b7",2696:"a09c2993",2804:"1f220079",2820:"dd053733",3456:"0951e901",3744:"27d9d47d",4232:"516486bd",4304:"5e95c892",4364:"9008bace",4412:"e8057f2a",4416:"b38eaed3",4666:"a94703ab",4904:"700347c0",5068:"3abe8fb9",5104:"e3c15a47",5288:"22a09cbf",5604:"e06aacec",5696:"935f2afb",5756:"f380f515",5792:"a1189d06",5828:"8581bb41",5848:"bbb8f1f8",6064:"15560a88",6132:"1aaf601c",6368:"293befc8",6385:"73139ff1",6500:"a7bd4aaa",6752:"17896441",6824:"16b2da92",7012:"39268648",7536:"35214713",7940:"266dfd57",7944:"d0e245df",8192:"8ddd655f",8224:"e6afeee9",8296:"e27d08ab",8740:"67d5074e",8804:"2851a227",9448:"b5ab5f4e",9700:"cd5a7ece"}[e]||e)+"."+{68:"8fde4cec",72:"717f2506",1244:"050541d3",1256:"26abcd41",1420:"f306d7b7",1496:"c281951e",1510:"42eccc42",1650:"8aa383b3",1652:"fba64a48",1728:"2eb50d80",1956:"12890f0a",2032:"134e42ff",2256:"02ec849e",2632:"59945ab7",2640:"0ff335e4",2696:"a9e8a783",2804:"82ec2d9e",2820:"e5ab7065",3456:"b8b26621",3744:"d3334346",4232:"87ece17a",4304:"29d10178",4364:"31fec4d1",4412:"a136c36f",4416:"64ffcb8f",4666:"d9369941",4904:"39f1fb00",5068:"93ed6933",5104:"1572e14b",5288:"09c924fe",5604:"790a636c",5648:"5b93880e",5696:"d6dd8b33",5756:"8fe939f9",5792:"db9b1a39",5828:"13f2b76c",5848:"da1b25f2",6032:"b263d1e6",6064:"3b47e554",6132:"7de09c6a",6368:"aa1d12c6",6385:"2bc36f4d",6500:"6102363b",6752:"4776e2bb",6824:"bd879480",7012:"80fa4377",7536:"4703efc9",7940:"7d4267f5",7944:"a64f50c0",8192:"72cb52f4",8224:"a21d9270",8296:"90891e59",8740:"44fa58f1",8804:"c55eb8ba",9448:"38929860",9700:"5deef9e3"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},d="spotify-api-docs:",c.l=(e,a,f,r)=>{if(t[e])t[e].push(a);else{var b,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",d+f),b.src=e),t[e]=[a];var l=(a,f)=>{b.onerror=b.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],b.parentNode&&b.parentNode.removeChild(b),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/SpotifyAPI-NET/",c.gca=function(e){return e={17896441:"6752",35214713:"7536",39268648:"7012",52804278:"72","10f76bbd":"68",d85a39be:"1244","902b04f6":"1256","6373637a":"1420",fbd836ef:"1496","031dc046":"1510","25bfd71f":"1650","9ed00105":"1652","755cfc2e":"1728","18116e9d":"1956",e02badcb:"2032","92bb876c":"2256",c4f5d8e4:"2632","3c5916b7":"2640",a09c2993:"2696","1f220079":"2804",dd053733:"2820","0951e901":"3456","27d9d47d":"3744","516486bd":"4232","5e95c892":"4304","9008bace":"4364",e8057f2a:"4412",b38eaed3:"4416",a94703ab:"4666","700347c0":"4904","3abe8fb9":"5068",e3c15a47:"5104","22a09cbf":"5288",e06aacec:"5604","935f2afb":"5696",f380f515:"5756",a1189d06:"5792","8581bb41":"5828",bbb8f1f8:"5848","15560a88":"6064","1aaf601c":"6132","293befc8":"6368","73139ff1":"6385",a7bd4aaa:"6500","16b2da92":"6824","266dfd57":"7940",d0e245df:"7944","8ddd655f":"8192",e6afeee9:"8224",e27d08ab:"8296","67d5074e":"8740","2851a227":"8804",b5ab5f4e:"9448",cd5a7ece:"9700"}[e]||e,c.p+c.u(e)},(()=>{var e={296:0,2176:0};c.f.j=(a,f)=>{var t=c.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^2(17|9)6$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>t=e[a]=[f,d]));f.push(t[2]=d);var r=c.p+c.u(a),b=new Error;c.l(r,(f=>{if(c.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;b.message="Loading chunk "+a+" failed.\n("+d+": "+r+")",b.name="ChunkLoadError",b.type=d,b.request=r,t[1](b)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,f)=>{var t,d,r=f[0],b=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(t in b)c.o(b,t)&&(c.m[t]=b[t]);if(o)var i=o(c)}for(a&&a(f);n<r.length;n++)d=r[n],c.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return c.O(i)},f=self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();