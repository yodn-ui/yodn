import{_ as s,c as n,o as a,a as o}from"./app.40f7370f.js";const C=JSON.parse('{"title":"全局组件引入","description":"","frontmatter":{},"headers":[],"relativePath":"develop/global.md"}'),l={name:"develop/global.md"},p=o(`<h1 id="全局组件引入" tabindex="-1">全局组件引入 <a class="header-anchor" href="#全局组件引入" aria-hidden="true">#</a></h1><br><br><blockquote><p>如果你的组件库要支持全局组件的提示,可以在文件 src/components.d.ts 中写入我们开发的组件</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> components </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    EaButton</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    EaIcon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Icon</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>同时在使用我们组件库的时候需要用户在<code>tsconfig.json</code>中配置<code>types:[&quot;yodn-ui/lib/src/components&quot;]</code>当然这里根据你的组件库命名决定</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yodn-ui/lib/src/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{C as __pageData,u as default};
