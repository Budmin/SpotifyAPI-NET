"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5343],{7237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var s=r(1527),n=r(6274);const i={id:"search",title:"Search",sidebar_label:"Search"},c=void 0,a={id:"web/search",title:"Search",description:"SearchItems",source:"@site/versioned_docs/version-5.1.1/web/search.md",sourceDirName:"web",slug:"/web/search",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/search",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/search.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705312900,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"search",title:"Search",sidebar_label:"Search"},sidebar:"someSidebar",previous:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy"},next:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/tracks"}},o={},d=[{value:"SearchItems",id:"searchitems",level:2},{value:"SearchItemsEscaped",id:"searchitemsescaped",level:2}];function l(e){const t={blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"searchitems",children:"SearchItems"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["::: warning\nYou may want to use ",(0,s.jsx)(t.code,{children:"SearchItemsEscaped"})," if you're processing user-input without validation\n:::"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"q"}),(0,s.jsx)(t.td,{children:"The search query's keywords (and optional field filters and operators), for example q=roadhouse+blues."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"roadhouse+blues"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type"}),(0,s.jsx)(t.td,{children:"A list of item types to search across."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SearchType.Album"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[limit]"}),(0,s.jsx)(t.td,{children:"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"20"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[offset]"}),(0,s.jsx)(t.td,{children:"The index of the first result to return. Default: 0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[market]"}),(0,s.jsx)(t.td,{children:"An ISO 3166-1 alpha-2 country code or the string from_token."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"de"'})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Returns a ",(0,s.jsx)(t.code,{children:"SearchItem"})," which contains the properties ",(0,s.jsx)(t.code,{children:"Paging<FullArtist> Artists"}),",",(0,s.jsx)(t.code,{children:"Paging<FullTrack> Tracks"}),", ",(0,s.jsx)(t.code,{children:"Paging<SimpleAlbum> Albums"}),", ",(0,s.jsx)(t.code,{children:"Paging<SimplePlaylist> Playlists"}),". They are filled based on your search-type."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'SearchItem item = _spotify.SearchItems("roadhouse+blues", SearchType.Album | SearchType.Playlist);\nConsole.WriteLine(item.Albums.Total); //How many results are there in total? NOTE: item.Tracks = item.Artists = null\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"searchitemsescaped",children:"SearchItemsEscaped"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Works like ",(0,s.jsx)(t.code,{children:"SearchItems"}),", but URL escapes all characters"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6274:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return c}});var s=r(959);const n={},i=s.createContext(n);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);