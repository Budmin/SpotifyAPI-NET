"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[6112],{9427:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return d}});var r=t(1527),i=t(6274);const o={id:"error_handling",title:"Error Handling"},s=void 0,a={id:"error_handling",title:"Error Handling",description:"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:",source:"@site/docs/error_handling.md",sourceDirName:".",slug:"/error_handling",permalink:"/SpotifyAPI-NET/docs/error_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/error_handling.md",tags:[],version:"current",lastUpdatedBy:"Lewis-Fam",lastUpdatedAt:1707559402,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{id:"error_handling",title:"Error Handling"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/getting_started"},next:{title:"Configuration",permalink:"/SpotifyAPI-NET/docs/configuration"}},c={},d=[{value:"APIException",id:"apiexception",level:2},{value:"APIUnauthorizedException",id:"apiunauthorizedexception",level:2},{value:"APITooManyRequestsException",id:"apitoomanyrequestsexception",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"API calls can fail when input data is malformed or the server detects issues with the request. As an example, the following request obviously fails:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'var track = await spotify.Tracks.Get("NotExistingTrackId");\nConsole.WriteLine(track.Name);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When a request fails, an ",(0,r.jsx)(n.code,{children:"APIException"})," is thrown. Specific errors may throw a child exception of ",(0,r.jsx)(n.code,{children:"APIException"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"apiexception",children:"APIException"}),"\n",(0,r.jsx)(n.p,{children:"A very general API error. The message is parsed from the API response's JSON body and the response is available as a public property."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'try {\n  var track = await spotify.Tracks.Get("NotExistingTrackId");\n} catch(APIException e) {\n  // Prints: invalid id\n  Console.WriteLine(e.Message);\n  // Prints: BadRequest\n  Console.WriteLine(e.Response?.StatusCode);\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"apiunauthorizedexception",children:"APIUnauthorizedException"}),"\n",(0,r.jsxs)(n.p,{children:["Provides the same properties as ",(0,r.jsx)(n.code,{children:"APIException"})," and occurs when the access token is expired or not provided. Notice that an access token has to be included in ",(0,r.jsx)(n.strong,{children:"every"})," request. Spotify does not allow unauthorized API access."]}),"\n",(0,r.jsx)(n.h2,{id:"apitoomanyrequestsexception",children:"APITooManyRequestsException"}),"\n",(0,r.jsxs)(n.p,{children:["Provides the same properties as ",(0,r.jsx)(n.code,{children:"APIException"})," and occurs when too many requests has been sent by your application. It also provides the property ",(0,r.jsx)(n.code,{children:"TimeSpan RetryAfter"}),", which maps to the received ",(0,r.jsx)(n.code,{children:"Retry-After"})," header."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'try {\n  // call it very often?\n  var track = await spotify.Tracks.Get("1s6ux0lNiTziSrd7iUAADH");\n} catch(APITooManyRequestsException e) {\n  // Prints: seconds to wait, often 1 or 2\n  Console.WriteLine(e.RetryAfter);\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6274:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(959);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);