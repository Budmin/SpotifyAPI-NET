"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9098],{3776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return r},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return c}});var i=n(1527),s=n(6274);const a={id:"iplayableitem",title:"IPlayableItem"},l=void 0,o={id:"iplayableitem",title:"IPlayableItem",description:"When working with playlists or the current playing context, you will encounter the IPlayableItem type, which only contains a Type property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced IPlayableItem.",source:"@site/docs/iplayableitem.md",sourceDirName:".",slug:"/iplayableitem",permalink:"/SpotifyAPI-NET/docs/iplayableitem",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/iplayableitem.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705312900,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"iplayableitem",title:"IPlayableItem"},sidebar:"docs",previous:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/retry_handling"},next:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/unit_testing"}},r={},c=[{value:"Fields",id:"fields",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When working with playlists or the current playing context, you will encounter the ",(0,i.jsx)(t.code,{children:"IPlayableItem"})," type, which only contains a ",(0,i.jsx)(t.code,{children:"Type"})," property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced ",(0,i.jsx)(t.code,{children:"IPlayableItem"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'var spotify = new SpotifyClient("YourAccessToken");\n\nvar playlist = await spotify.Playlists.Get("37i9dQZEVXbMDoHDwVN2tF");\nforeach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  // When was it added\n  Console.WriteLine(item.AddedAt);\n  // The only propety on item is item.Type, it\'s a IPlayableItem\n  Console.WriteLine(item.Track.Type);\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now, this type per se is probably useless to you. You're interested in the name, uri or artist of the episode/track. To get that info, you have to type cast the ",(0,i.jsx)(t.code,{children:"IPlayableItem"})," to the respective type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"foreach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  if (item.Track is FullTrack track)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(track.Name);\n  }\n  if (item.Track is FullEpisode episode)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(episode.Name);\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To this day, ",(0,i.jsx)(t.code,{children:"IPlayableItem"})," can only be ",(0,i.jsx)(t.code,{children:"FullTrack"})," or ",(0,i.jsx)(t.code,{children:"FullEpisode"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["When requesting just a subset of fields using the ",(0,i.jsx)(t.code,{children:"fields"})," query parameter, the call might fail with an exception similar to ",(0,i.jsx)(t.code,{children:"Received unknown playlist element type"}),". For example, the following call fails:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'var playlistGetItemsRequest = new PlaylistGetItemsRequest();\nplaylistGetItemsRequest.Fields.Add("items(track(name))");\nvar playlistItems = await spotify.Playlists.GetItems("YourPlaylistId", playlistGetItemsRequest);\n'})}),"\n",(0,i.jsx)(t.p,{children:"By requesting just the track name from the items, we don't have any kind of type information of the item itself. Thus, we're unable to cast it to the correct model. To fix this, include the type in the fields as well:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'playlistGetItemsRequest.Fields.Add("items(track(name,type))");\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6274:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(959);const s={},a=i.createContext(s);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);