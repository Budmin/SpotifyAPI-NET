"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9400],{9963:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var o=t(1527),i=t(6274);const r={id:"5_to_6",title:"5.x.x to 6.x.x"},s=void 0,a={id:"5_to_6",title:"5.x.x to 6.x.x",description:"SpotifyAPI.Web",source:"@site/docs/5_to_6.md",sourceDirName:".",slug:"/5_to_6",permalink:"/SpotifyAPI-NET/docs/5_to_6",draft:!1,unlisted:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/5_to_6.md",tags:[],version:"current",lastUpdatedBy:"Lewis-Fam",lastUpdatedAt:1707559402,formattedLastUpdatedAt:"Feb 10, 2024",sidebarPosition:5,frontMatter:{id:"5_to_6",title:"5.x.x to 6.x.x"},sidebar:"docs",previous:{title:"UWP",permalink:"/SpotifyAPI-NET/docs/example_uwp"}},c={},l=[{value:"SpotifyAPI.Web",id:"spotifyapiweb",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Calling API Endpoints",id:"calling-api-endpoints",level:3},{value:"Error/Header Handling",id:"errorheader-handling",level:3},{value:"SpotifyAPI.Web.Auth",id:"spotifyapiwebauth",level:2},{value:"Authorization Code Auth",id:"authorization-code-auth",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"spotifyapiweb",children:"SpotifyAPI.Web"}),"\n",(0,o.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"5.x"}),", a new ",(0,o.jsx)(n.code,{children:"SpotifyWebAPI"})," instance could be created without supplying necessary values, since they were implemented as properties. With ",(0,o.jsx)(n.code,{children:"6.x"}),", necessary values have to be given in the constructor and ",(0,o.jsx)(n.code,{children:"SpotifyWebAPI"})," has been renamed to ",(0,o.jsx)(n.code,{children:"SpotifyClient"}),". Also, ",(0,o.jsx)(n.code,{children:"SpotifyClientConfig"})," has been introduced to give a better configuration experience, including retry handlers, automatic authenticators and proxy configurations."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// OLD\nvar spotify = new SpotifyWebAPI { AccessToken = "YourAccessToken" };\nvar spotify = new SpotifyWebAPI(ProxyConfig); // No access token - invalid\n\n// NEW\nvar spotify = new SpotifyClient("YourAccessToken");\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithToken("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithAuthenticator(new ClientCredentialsAuthenticator(CLIENT_ID, CLIENT_SECRET)); // takes care of access tokens\nvar spotify = new SpotifyClient(config);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For some performance guides, have a look at the ",(0,o.jsx)(n.a,{href:"/SpotifyAPI-NET/docs/configuration",children:"Configuration Guide"})]}),"\n",(0,o.jsx)(n.h3,{id:"proxy",children:"Proxy"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"5.x"}),", the proxy configuration could be passed to the ",(0,o.jsx)(n.code,{children:"SpotifyWebAPI"})," constructor. In ",(0,o.jsx)(n.code,{children:"6.x"}),", they're part of the HTTP Client. The built-in http client supports proxies out of the box:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"calling-api-endpoints",children:"Calling API Endpoints"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"5.x"}),", there was one big instance to support all API endpoints. Parameters to these endpoints were passed directly as method parameters. Optional parameters were nullable and could be excluded. In ",(0,o.jsx)(n.code,{children:"6.x"}),", every endpoint group (",(0,o.jsx)(n.code,{children:"albums"}),", ",(0,o.jsx)(n.code,{children:"tracks"}),", ",(0,o.jsx)(n.code,{children:"userprofile"}),") has their own API-Client, which is available as a property in a ",(0,o.jsx)(n.code,{children:"SpotifyClient"})," instance. While URI path parameters are still passed as method parameter, query and body parameters are now passed as a grouped class instance, where required parameters are needed in the constructor and optional parameters can be supplied as properties. All endpoints are also only implemented as async methods."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nvar playlists = await spotify.GetUserPlaylists(profile.Id, 100, 0);\n\n// NEW:\nPrivateUser user = await spotify.UserProfile.Current();\nvar playlists = await spotify.Playlists.GetUsers(user.Id, new PlaylistGetUsersRequest\n{\n  Limit = 100,\n  Offset = 0\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["All required arguments are checked for non-null values. If it's null, the methods will throw a ",(0,o.jsx)(n.code,{children:"ArgumentNullException"})]}),"\n",(0,o.jsx)(n.h3,{id:"errorheader-handling",children:"Error/Header Handling"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"5.x"}),", all response models included a base error model, with properties like ",(0,o.jsx)(n.code,{children:"Headers"}),", ",(0,o.jsx)(n.code,{children:"Error"})," and ",(0,o.jsx)(n.code,{children:"HasError"}),". This was not a good decision since response models should be clean and only contain API response data. In ",(0,o.jsx)(n.code,{children:"6.x"}),", error handling is ",(0,o.jsx)(n.code,{children:"Exception"})," based. For example, if the access token is invalid, calling API endpoints will throw a ",(0,o.jsx)(n.code,{children:"APIUnauthorizedException"}),". If you hit the API too many times, the method will throw a ",(0,o.jsx)(n.code,{children:"APITooManyRequestsException"}),". They all derive from a base exception ",(0,o.jsx)(n.code,{children:"APIException"}),", which is also thrown in more general cases, e.g bad request input parameters. If you're interested in the headers of the last response, you can use ",(0,o.jsx)(n.code,{children:"spotify.LastResponse"}),", ",(0,o.jsx)(n.strong,{children:"make sure there is only one thread using this instance!"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nif(profile.HasError())\n{\n  // handle error\n}\nvar headers = profile.Headers(); // access to headers\n\n// NEW:\ntry\n{\n    PrivateProfile profile = await spotify.GetPrivateProfileAsync();\n    var response = spotify.LastResponse; // response.Headers\n}\ncatch (APIUnauthorizedException e)\n{\n  // handle unauthorized error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\ncatch (APIException e)\n{\n  // handle common error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["More Info: ",(0,o.jsx)(n.a,{href:"./error_handling",children:"Error Handling"})]}),"\n",(0,o.jsx)(n.h2,{id:"spotifyapiwebauth",children:"SpotifyAPI.Web.Auth"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"5.x"}),", ",(0,o.jsx)(n.code,{children:"SpotifyAPI.Web.Auth"})," contained every logic related to the OAuth flows. In ",(0,o.jsx)(n.code,{children:"6.x"}),", ",(0,o.jsx)(n.code,{children:"SpotifyAPI.Web.Auth"})," is only required if you need a HTTP Server for handling OAuth responses. For example, if you're in a ASP.NET environment or just use the ",(0,o.jsx)(n.a,{href:"client_credentials",children:"Client Credentials"})," flow, there is no need to install ",(0,o.jsx)(n.code,{children:"SpotifyAPI.Web.Auth"})," anymore."]}),"\n",(0,o.jsx)(n.h3,{id:"authorization-code-auth",children:"Authorization Code Auth"}),"\n",(0,o.jsxs)(n.p,{children:["As an example, this shows how to convert a ",(0,o.jsx)(n.code,{children:"5.x"})," authorization code flow to ",(0,o.jsx)(n.code,{children:"6.x"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// OLD\nvar auth =\n  new AuthorizationCodeAuth(_clientId, _secretId, "http://localhost:4002", "http://localhost:4002",\n    Scope.PlaylistReadPrivate | Scope.PlaylistReadCollaborative);\nauth.AuthReceived += AuthOnAuthReceived;\nauth.Start();\nauth.OpenBrowser();\n\nprivate static async void AuthOnAuthReceived(object sender, AuthorizationCode payload)\n{\n  var auth = (AuthorizationCodeAuth) sender;\n  auth.Stop();\n\n  Token token = await auth.ExchangeCode(payload.Code);\n  var spotify = new SpotifyWebAPI { AccessToken = token.AccessToken };\n  await PrintUsefulData(spotify);\n}\n\n// NEW\nvar config = SpotifyClientConfig.CreateDefault();\nvar server = new EmbedIOAuthServer(new Uri("http://localhost:5543/callback"), 5543);\nserver.AuthorizationCodeReceived += async (sender, response) =>\n{\n  await server.Stop();\n  var tokenResponse = await new OAuthClient(config).RequestToken(new AuthorizationCodeTokenRequest(\n    _clientId, _secretId, response.Code, server.BaseUri\n  ));\n\n  var spotify = new SpotifyClient(config.WithToken(tokenResponse.AccessToken));\n}\nawait server.Start();\n\nvar loginRequest = new LoginRequest(server.BaseUri, _clientId, LoginRequest.ResponseType.Code)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nBrowserUtil.Open(loginRequest.ToUri());\n'})}),"\n",(0,o.jsxs)(n.p,{children:["While it is more code to write, there is a better seperation of concerns. For example, it is able to construct a ",(0,o.jsx)(n.code,{children:"LoginRequest"})," without starting a server. This ",(0,o.jsx)(n.code,{children:"LoginRequest"})," can also be used to forward the user to in a web-based context. The same auth server ",(0,o.jsx)(n.code,{children:"EmbedIOAuthServer"})," can be used to receive ",(0,o.jsx)(n.code,{children:"AuthorizationCodes"})," and ",(0,o.jsx)(n.code,{children:"ImplictGrants"})," responses."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6274:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var o=t(959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);