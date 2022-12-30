import{_ as a,c as e,o as s,a as n}from"./app.68c6bb90.js";var i="/assets/2022-04-01-17-54-42.3619337c.png",l="/assets/2022-04-01-17-27-36.3c9c1d6a.png",r="/assets/2022-04-01-17-52-29.ba423453.png",t="/assets/2022-04-01-17-53-13.165d9a70.png",p="/assets/2022-04-01-17-32-20.fb389154.png",d="/assets/2022-04-01-17-33-04.576ac597.png",o="/assets/2022-04-01-17-34-10.d8bd98e7.png",c="/assets/2022-04-01-17-38-05.1079d45e.png",h="/assets/2022-04-01-17-38-57.6aa389bf.png";const I='{"title":"\u7F16\u8F91 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"API \u4FE1\u606F","slug":"api-\u4FE1\u606F"},{"level":3,"title":"\u534F\u8BAE\u652F\u6301","slug":"\u534F\u8BAE\u652F\u6301"},{"level":3,"title":"\u8BF7\u6C42\u65B9\u5F0F\u652F\u6301","slug":"\u8BF7\u6C42\u65B9\u5F0F\u652F\u6301"},{"level":2,"title":"API \u8BF7\u6C42\u53C2\u6570","slug":"api-\u8BF7\u6C42\u53C2\u6570"},{"level":3,"title":"\u8BBE\u7F6E\u8BF7\u6C42\u5934\u90E8","slug":"\u8BBE\u7F6E\u8BF7\u6C42\u5934\u90E8"},{"level":3,"title":"\u8BBE\u7F6E\u8BF7\u6C42\u4F53","slug":"\u8BBE\u7F6E\u8BF7\u6C42\u4F53"},{"level":3,"title":"\u8BBE\u7F6E Query \u53C2\u6570","slug":"\u8BBE\u7F6E-query-\u53C2\u6570"},{"level":3,"title":"\u8BBE\u7F6E REST \u53C2\u6570","slug":"\u8BBE\u7F6E-rest-\u53C2\u6570"},{"level":2,"title":"API \u54CD\u5E94\u5185\u5BB9","slug":"api-\u54CD\u5E94\u5185\u5BB9"},{"level":3,"title":"\u8BBE\u7F6E\u54CD\u5E94\u5934\u90E8","slug":"\u8BBE\u7F6E\u54CD\u5E94\u5934\u90E8"},{"level":3,"title":"\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9","slug":"\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9"}],"relativePath":"docs/apidoc.md","lastUpdated":1649143557000}',u={},g=n('<h1 id="\u7F16\u8F91-api" tabindex="-1">\u7F16\u8F91 API <a class="header-anchor" href="#\u7F16\u8F91-api" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5728\u5F00\u59CB\u4E00\u4E2A\u65B0\u63A5\u53E3\u4E4B\u524D\uFF0C\u9700\u8981\u8FDB\u884C\u4EE5\u4E0B\u5224\u65AD\uFF1A</p><ul><li>\u8BF7\u6C42\u534F\u8BAE\u662F\u4E0D\u662F HTTP/HTTPS\uFF1F</li><li><a href="./concepts.html#json" target="_blank">\u8BF7\u6C42\u4F53\u548C\u54CD\u5E94\u4F53\u683C\u5F0F</a>\u662F\u4EC0\u4E48(XML\u3001JSON\u3001FormData\u3001Raw)\uFF1F</li><li>API \u662F\u4E0D\u662F RESTful \u98CE\u683C\uFF1F</li></ul><p>\u5982\u679C\u4E0A\u9762\u4E09\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u90FD\u6E05\u695A\u4E86\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u65B0\u589E\u4E00\u4E2A API \u63A5\u53E3\u3002</p><h2 id="api-\u4FE1\u606F" tabindex="-1">API \u4FE1\u606F <a class="header-anchor" href="#api-\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u8F91 API \u7684\u9876\u90E8\u586B\u5199 API \u7684\u8BF7\u6C42\u534F\u8BAE\u3001\u65B9\u5F0F\u3001\u5730\u5740\u3001\u540D\u79F0\uFF1B <img src="'+i+'" alt=""></p><h3 id="\u534F\u8BAE\u652F\u6301" tabindex="-1">\u534F\u8BAE\u652F\u6301 <a class="header-anchor" href="#\u534F\u8BAE\u652F\u6301" aria-hidden="true">#</a></h3><ul><li>HTTP/HTTPS</li></ul><h3 id="\u8BF7\u6C42\u65B9\u5F0F\u652F\u6301" tabindex="-1">\u8BF7\u6C42\u65B9\u5F0F\u652F\u6301 <a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u5F0F\u652F\u6301" aria-hidden="true">#</a></h3><ul><li>POST</li><li>GET</li><li>PUT</li><li>DELETE</li><li>HEAD</li><li>OPTIONS</li><li>PATCH</li></ul><h2 id="api-\u8BF7\u6C42\u53C2\u6570" tabindex="-1">API \u8BF7\u6C42\u53C2\u6570 <a class="header-anchor" href="#api-\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a></h2><h3 id="\u8BBE\u7F6E\u8BF7\u6C42\u5934\u90E8" tabindex="-1">\u8BBE\u7F6E\u8BF7\u6C42\u5934\u90E8 <a class="header-anchor" href="#\u8BBE\u7F6E\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a></h3><p>\u4F60\u53EF\u4EE5\u8F93\u5165\u6216\u5BFC\u5165\u8BF7\u6C42\u5934\u90E8\u3002</p><p><img src="'+l+`" alt=""></p><p>\u9664\u4E86\u624B\u52A8\u8F93\u5165\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6279\u91CF\u5BFC\u5165\u8BF7\u6C42\u5934\u90E8\uFF0C\u6570\u636E\u683C\u5F0F\u4E3A <strong>key : value</strong> \uFF0C\u4E00\u884C\u4E00\u6761 header \u4FE1\u606F\uFF0C\u5982\uFF1A</p><div class="language-http"><pre><code><span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Content-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 30 Dec 2019 20:49:45 GMT</span></span>
</code></pre></div><p><img src="`+r+'" alt=""></p><p><img src="'+t+'" alt=""></p><h3 id="\u8BBE\u7F6E\u8BF7\u6C42\u4F53" tabindex="-1">\u8BBE\u7F6E\u8BF7\u6C42\u4F53 <a class="header-anchor" href="#\u8BBE\u7F6E\u8BF7\u6C42\u4F53" aria-hidden="true">#</a></h3><p>\u8BF7\u6C42\u4F53\u63D0\u4F9B\u4E86\u4E94\u79CD\u7C7B\u578B\uFF1A</p><ol><li>Form-data\uFF08\u8868\u5355\uFF09</li><li>Json</li><li>XML</li><li>Raw\uFF08\u81EA\u5B9A\u4E49\u6587\u672C\u7C7B\u578B\u6570\u636E\uFF09</li></ol><p><img src="'+p+`" alt=""></p><h3 id="\u8BBE\u7F6E-query-\u53C2\u6570" tabindex="-1">\u8BBE\u7F6E Query \u53C2\u6570 <a class="header-anchor" href="#\u8BBE\u7F6E-query-\u53C2\u6570" aria-hidden="true">#</a></h3><p>Query \u53C2\u6570\u6307\u7684\u662F\u5730\u5740\u680F\u4E2D\u8DDF\u5728\u95EE\u53F7\uFF1F\u540E\u9762\u7684\u53C2\u6570\uFF0C\u5982\u4EE5\u4E0B\u5730\u5740\u4E2D\u7684 user_name \u53C2\u6570\uFF1A</p><div class="language-http"><pre><code>/user/login?user_name=jackliu
</code></pre></div><p>\u6279\u91CF\u5BFC\u5165\u7684\u6570\u636E\u683C\u5F0F\u4E3A <strong>?key=value...</strong> \uFF0C\u901A\u8FC7&amp;\u5206\u9694\u591A\u4E2A\u53C2\u6570\uFF0C\u5982\uFF1A</p><div class="language-"><pre><code>api.eolinker.com/user/login?user_name=jackliu&amp;user_password=hello
</code></pre></div><p><img src="`+d+`" alt=""></p><h3 id="\u8BBE\u7F6E-rest-\u53C2\u6570" tabindex="-1">\u8BBE\u7F6E REST \u53C2\u6570 <a class="header-anchor" href="#\u8BBE\u7F6E-rest-\u53C2\u6570" aria-hidden="true">#</a></h3><p>REST \u53C2\u6570\u6307\u7684\u662F\u5730\u5740\u680F\u88AB\u659C\u6760/\u5206\u9694\u7684\u53C2\u6570\uFF0C\u5982\u4EE5\u4E0B\u5730\u5740\u4E2D\u7684\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9\u8D77\u6765\u7684 user_name\u3001user_password \u53C2\u6570\uFF1A</p><div class="language-"><pre><code>/user/login/{user_name}/{user_password}
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6CE8\u610F\uFF0C\u4F60\u53EA\u9700\u8981\u5728 URL \u4E2D\u4F7F\u7528 {} \u5C06 REST \u53C2\u6570\u62EC\u8D77\u6765\uFF0C\u8868\u5355\u7684\u53C2\u6570\u540D\u4E0D\u9700\u8981\u586B\u5199 {}\u3002</p></div><p><img src="`+o+`" alt=""></p><h2 id="api-\u54CD\u5E94\u5185\u5BB9" tabindex="-1">API \u54CD\u5E94\u5185\u5BB9 <a class="header-anchor" href="#api-\u54CD\u5E94\u5185\u5BB9" aria-hidden="true">#</a></h2><h3 id="\u8BBE\u7F6E\u54CD\u5E94\u5934\u90E8" tabindex="-1">\u8BBE\u7F6E\u54CD\u5E94\u5934\u90E8 <a class="header-anchor" href="#\u8BBE\u7F6E\u54CD\u5E94\u5934\u90E8" aria-hidden="true">#</a></h3><p>\u4F60\u53EF\u4EE5\u8F93\u5165\u6216\u5BFC\u5165\u54CD\u5E94\u5934\u90E8\u3002\u6279\u91CF\u5BFC\u5165\u7684\u6570\u636E\u683C\u5F0F\u4E3A <strong>key : value</strong> \uFF0C\u4E00\u884C\u4E00\u6761 header \u4FE1\u606F\uFF0C\u5982\uFF1A</p><div class="language-"><pre><code>Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json
Date: Mon, 30 Dec 2019 20:49:45 GMT
</code></pre></div><p><img src="`+c+'" alt=""></p><h3 id="\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9" tabindex="-1">\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9 <a class="header-anchor" href="#\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9" aria-hidden="true">#</a></h3><p>\u54CD\u5E94\u5185\u5BB9\u7684\u7F16\u5199\u65B9\u5F0F\u548C\u8BF7\u6C42\u53C2\u6570\u7684\u7C7B\u4F3C\uFF0C\u54CD\u5E94\u5185\u5BB9\u63D0\u4F9B\u4E86\u56DB\u79CD\u7C7B\u578B\uFF1A</p><ol><li>Json</li><li>XML</li><li>Raw\uFF08\u81EA\u5B9A\u4E49\u6587\u672C\u7C7B\u578B\u6570\u636E\uFF09</li></ol><p><img src="'+h+'" alt=""></p>',42),_=[g];function v(m,k,T,f,P,b){return s(),e("div",null,_)}var x=a(u,[["render",v]]);export{I as __pageData,x as default};