"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[8494],{7644:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var r=t(1527),s=t(6274);const i={id:"retry_handling",title:"Retry Handling"},o=void 0,a={id:"retry_handling",title:"Retry Handling",description:"In Error Handling, we already found out that requests can fail. We provide a way to automatically retry requests via retry handlers. Note that, by default, no retries are performed.",source:"@site/docs/retry_handling.md",sourceDirName:".",slug:"/retry_handling",permalink:"/SpotifyAPI-NET/docs/retry_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/retry_handling.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705312900,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"retry_handling",title:"Retry Handling"},sidebar:"docs",previous:{title:"Pagination",permalink:"/SpotifyAPI-NET/docs/pagination"},next:{title:"IPlayableItem",permalink:"/SpotifyAPI-NET/docs/iplayableitem"}},l={},d=[{value:"SimpleRetryHandler",id:"simpleretryhandler",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"/SpotifyAPI-NET/docs/error_handling",children:"Error Handling"}),", we already found out that requests can fail. We provide a way to automatically retry requests via retry handlers. Note that, by default, no retries are performed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithRetryHandler(new YourCustomRetryHandler())\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Http/Interfaces/IRetryHandler.cs",children:(0,r.jsx)(n.code,{children:"IRetryHandler"})})," only needs one function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public class YourCustomRetryHandler : IRetryHandler\n{\n  public Task<IResponse> HandleRetry(IRequest request, IResponse response, IRetryHandler.RetryFunc retry)\n  {\n    // request is the sent request and response is the received response, obviously\n\n    // don't retry:\n    return response;\n\n    // retry once:\n    var newResponse = retry(request);\n    return newResponse;\n\n    // use retry as often as you want, make sure to return a response\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"simpleretryhandler",children:"SimpleRetryHandler"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"SimpleRetryHandler"})," is included, which contains the following retry logic:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Retries the (configurable) status codes: 500, 502, 503 and 429."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RetryAfter"})," - Specifies the delay between retried calls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RetryTimes"})," - Specifies the maxiumum amount of performed retries per call."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TooManyRequestsConsumesARetry"}),' - Whether a failure of type "Too Many Requests" should use up one of the retry attempts.']}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithRetryHandler(new SimpleRetryHandler() { RetryAfter = TimeSpan.FromSeconds(1) });\n\nvar spotify = new SpotifyClient(config);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6274:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(959);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);