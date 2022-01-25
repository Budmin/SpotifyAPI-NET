"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5249],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,l=o.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5455:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=n(4996),s={id:"implicit_grant",title:"Implicit Grant"},l=void 0,p={unversionedId:"implicit_grant",id:"implicit_grant",isDocsHomePage:!1,title:"Implicit Grant",description:"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in RFC-6749.",source:"@site/docs/implicit_grant.md",sourceDirName:".",slug:"/implicit_grant",permalink:"/SpotifyAPI-NET/docs/implicit_grant",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/implicit_grant.md",version:"current",lastUpdatedBy:"Vitaliy",lastUpdatedAt:1643139132,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"implicit_grant",title:"Implicit Grant"},sidebar:"docs",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/client_credentials"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/authorization_code"}},c=[{value:"Existing Web-Server",id:"existing-web-server",children:[]},{value:"Using custom Protocols",id:"using-custom-protocols",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in ",(0,o.kt)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6749#section-4.2"},"RFC-6749"),".")),(0,o.kt)("p",null,"This flow is useful for getting a user access token for a short timespan."),(0,o.kt)("h2",{id:"existing-web-server"},"Existing Web-Server"),(0,o.kt)("p",null,"If you are already in control of a Web-Server (like ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET"),"), you can start the flow by generating a login uri:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "http://localhost:5000" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n')),(0,o.kt)("p",null,"When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000")," and the fragment identifier (",(0,o.kt)("inlineCode",{parentName:"p"},"#")," part of URI) will contain an access token."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note, this parameter is not sent to the server! You need JavaScript to access it."))),(0,o.kt)("h2",{id:"using-custom-protocols"},"Using custom Protocols"),(0,o.kt)("p",null,"This flow can also be used with custom protocols instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"http"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"https"),". This is especially interesting for ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," apps, since your able to register custom protocol handlers quite easily."),(0,o.kt)("img",{alt:"protocol handlers",src:(0,a.Z)("img/auth_protocol_handlers.png")}),(0,o.kt)("p",null,"The process is very similar, you generate a uri and open it for the user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "spotifyapi.web.oauth://token" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("spotifyapi.web.oauth://token"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n\n// This call requires Spotify.Web.Auth\nBrowserUtil.Open(uri);\n')),(0,o.kt)("p",null,"After the user has logged in and consented your app, your ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," app will receive a callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"protected override void OnActivated(IActivatedEventArgs args)\n{\n  if (args.Kind == ActivationKind.Protocol)\n  {\n    ProtocolActivatedEventArgs eventArgs = args as ProtocolActivatedEventArgs;\n    var publisher = Mvx.IoCProvider.Resolve<ITokenPublisherService>();\n\n    // This Uri contains your access token in the Fragment part\n    Console.WriteLine(eventArgs.Uri);\n  }\n}\n")),(0,o.kt)("p",null,"For a real example, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.UWP"},"Example.UWP"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP"},"Example.ASP")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASPBlazor"},"Example.ASPBlazor")),(0,o.kt)("h1",{id:"using-spotifywebauth"},"Using Spotify.Web.Auth"),(0,o.kt)("p",null,"For cross-platform CLI and desktop apps (non ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," apps), custom protocol handlers are sometimes not an option. The fallback here is a small cross-platform embedded web server running on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000")," serving JavaScript. The JavaScript will parse the fragment part of the URI and sends a request to the web server in the background. The web server then notifies your appliciation via an event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5000/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\n  await _server.Start();\n\n  _server.ImplictGrantReceived += OnImplicitGrantReceived;\n  _server.ErrorReceived += OnErrorReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Token)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(request.ToUri());\n}\n\nprivate static async Task OnImplicitGrantReceived(object sender, ImplictGrantResponse response)\n{\n  await _server.Stop();\n  var spotify = new SpotifyClient(response.AccessToken);\n  // do calls with Spotify\n}\n\nprivate static async Task OnErrorReceived(object sender, string error, string state)\n{\n  Console.WriteLine($"Aborting authorization, error received: {error}");\n  await _server.Stop();\n}\n')),(0,o.kt)("p",null,"For real examples, have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig"},"Example.CLI.PersistentConfig")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML"},"Example.CLI.CustomHTML")))}d.isMDXComponent=!0}}]);