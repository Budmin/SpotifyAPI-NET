"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5643],{265:function(e,s,r){r.r(s),r.d(s,{assets:function(){return d},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return c}});var n=r(1527),l=r(6274);const o={id:"follow",title:"Follow",sidebar_label:"Follow"},i=void 0,t={id:"web/follow",title:"Follow",description:"Follow",source:"@site/versioned_docs/version-5.1.1/web/follow.md",sourceDirName:"web",slug:"/web/follow",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/follow",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/follow.md",tags:[],version:"5.1.1",lastUpdatedBy:"Lewis-Fam",lastUpdatedAt:1707559402,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"follow",title:"Follow",sidebar_label:"Follow"},sidebar:"someSidebar",previous:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse"},next:{title:"Library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library"}},d={},c=[{value:"Follow",id:"follow",level:2},{value:"Unfollow",id:"unfollow",level:2},{value:"IsFollowing",id:"isfollowing",level:2},{value:"FollowPlaylist",id:"followplaylist",level:2},{value:"UnfollowPlaylist",id:"unfollowplaylist",level:2},{value:"IsFollowingPlaylist",id:"isfollowingplaylist",level:2}];function h(e){const s={blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"follow",children:"Follow"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Add the current user as a follower of one or more artists or other Spotify users."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"followType"}),(0,n.jsx)(s.td,{children:"The ID type: either artist or user."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"FollowType.Artist"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ids or id"}),(0,n.jsx)(s.td,{children:"A list of the artist or the user Spotify IDs or just a Spotify ID"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }'})," or ",(0,n.jsx)(s.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,n.jsx)(s.code,{children:"response.HasError()"})," and ",(0,n.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.Follow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Follow(FollowType.User, "1122095781");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"unfollow",children:"Unfollow"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Remove the current user as a follower of one or more artists or other Spotify users."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"followType"}),(0,n.jsx)(s.td,{children:"The ID type: either artist or user."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"FollowType.Artist"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ids or id"}),(0,n.jsx)(s.td,{children:"A list of the artist or the user Spotify IDs or just a Spotify ID"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }'})," or ",(0,n.jsx)(s.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,n.jsx)(s.code,{children:"response.HasError()"})," and ",(0,n.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.Unfollow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Unfollow(FollowType.User, "1122095781");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"isfollowing",children:"IsFollowing"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Check to see if the current user is following one or more artists or other Spotify users."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"followType"}),(0,n.jsx)(s.td,{children:"The ID type: either artist or user."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"FollowType.Artist"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ids or id"}),(0,n.jsx)(s.td,{children:"A list of the artist or the user Spotify IDs or just a Spotify ID"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }'})," or ",(0,n.jsx)(s.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ListResponse<Boolean>"})," which contains the property ",(0,n.jsx)(s.code,{children:"List<Boolean> List"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'//Are you one of my Followers? :P\nListResponse<Boolean> response = _spotify.IsFollowing(FollowType.User, "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"followplaylist",children:"FollowPlaylist"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Add the current user as a follower of a playlist."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ownerId"}),(0,n.jsx)(s.td,{children:"The Spotify user ID of the person who owns the playlist."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"maxloermans"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"playlistId"}),(0,n.jsx)(s.td,{children:"The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"3SIp2VAsKI03mReF0dFBmI"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[showPublic]"}),(0,n.jsx)(s.td,{children:"If true the playlist will be included in user's public playlists, if false it will remain  private."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,n.jsx)(s.code,{children:"response.HasError()"})," and ",(0,n.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.FollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"unfollowplaylist",children:"UnfollowPlaylist"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Remove the current user as a follower of a playlist."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ownerId"}),(0,n.jsx)(s.td,{children:"The Spotify user ID of the person who owns the playlist."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"maxloermans"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"playlistId"}),(0,n.jsx)(s.td,{children:"The Spotify ID of the playlist that is to be no longer followed."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"3SIp2VAsKI03mReF0dFBmI"'})})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ErrorResponse"})," which just contains a possible error. (",(0,n.jsx)(s.code,{children:"response.HasError()"})," and ",(0,n.jsx)(s.code,{children:"response.Error"}),")"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'ErrorResponse response = _spotify.UnfollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"isfollowingplaylist",children:"IsFollowingPlaylist"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Check to see if one or more Spotify users are following a specified playlist."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ownerId"}),(0,n.jsx)(s.td,{children:"The Spotify user ID of the person who owns the playlist."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"maxloermans"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"playlistId"}),(0,n.jsx)(s.td,{children:"The Spotify ID of the playlist."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"3SIp2VAsKI03mReF0dFBmI"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ids or id"}),(0,n.jsx)(s.td,{children:"A list of the artist or the user Spotify IDs or just a Spotify ID"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }'})," or ",(0,n.jsx)(s.code,{children:'"1KpCi9BOfviCVhmpI4G2sY"'})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Returns a ",(0,n.jsx)(s.code,{children:"ListResponse<Boolean>"})," which contains the property ",(0,n.jsx)(s.code,{children:"List<Boolean> List"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'//Am I following the playlist?\nListResponse<Boolean> response = _spotify.IsFollowing("maxloermans", "3SIp2VAsKI03mReF0dFBmI", "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n'})}),"\n",(0,n.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6274:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return i}});var n=r(959);const l={},o=n.createContext(l);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);