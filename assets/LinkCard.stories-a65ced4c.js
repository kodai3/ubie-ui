import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as x}from"./clsx-1229b3e0.js";import{S as j}from"./Stack-4d97e226.js";import"./index-1b03fe98.js";function v(r){return e.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:[e.jsx("path",{d:"M8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8Z",fill:"currentColor"},void 0),e.jsx("path",{d:"M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12Z",fill:"currentColor"},void 0),e.jsx("path",{d:"M8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17C9 16.4477 8.55228 16 8 16Z",fill:"currentColor"},void 0),e.jsx("path",{d:"M11 13C11 12.4477 11.4477 12 12 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H12C11.4477 14 11 13.5523 11 13Z",fill:"currentColor"},void 0),e.jsx("path",{d:"M11 17C11 16.4477 11.4477 16 12 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H12C11.4477 18 11 17.5523 11 17Z",fill:"currentColor"},void 0),e.jsx("path",{d:"M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H12Z",fill:"currentColor"},void 0),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 3.5C6 2.39543 6.89543 1.5 8 1.5H16C17.1046 1.5 18 2.39543 18 3.5H19C20.1046 3.5 21 4.39543 21 5.5V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V5.5C3 4.39543 3.89543 3.5 5 3.5H6ZM6.26756 5.5H5L5 20H19V5.5H17.7324C17.3866 6.0978 16.7403 6.5 16 6.5H8C7.25972 6.5 6.61337 6.0978 6.26756 5.5ZM16 3.5H8V4.5H16V3.5Z",fill:"currentColor"},void 0)]}),void 0)}const _="_card_w8vh4_1",y="_icon_w8vh4_14",N="_text_w8vh4_20",k="_title_w8vh4_26",w="_description_w8vh4_34",t={card:_,icon:y,text:N,title:k,description:w},s=({href:r,title:C,className:g,icon:i,description:f,linkComponent:h="a"})=>e.jsxs(h,{href:r,className:x(t.card,g),children:[i&&e.jsx(i,{className:t.icon}),e.jsxs("div",{className:t.text,children:[e.jsx("p",{className:t.title,children:C}),e.jsx("p",{className:t.description,children:f})]})]});s.displayName="LinkCard";s.__docgenInfo={description:"",methods:[],displayName:"LinkCard",props:{href:{required:!0,tsType:{name:"string"},description:"遷移先URL"},title:{required:!0,tsType:{name:"string"},description:"見出しのテキスト"},description:{required:!0,tsType:{name:"string"},description:"説明のテキスト"},className:{required:!1,tsType:{name:"string"},description:"CSSのクラス"},linkComponent:{required:!1,tsType:{name:"ElementType",elements:[{name:"signature",type:"object",raw:"{ href: string | UrlObject; className?: string; children: ReactNode }",signature:{properties:[{key:"href",value:{name:"union",raw:"string | UrlObject",elements:[{name:"string"},{name:"UrlObject"}],required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}],raw:"ElementType<{ href: string | UrlObject; className?: string; children: ReactNode }>"},description:"リンクとして機能させるコンポーネント、または `<a>` 要素\n@default a",defaultValue:{value:"'a'",computed:!1}},icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>"},description:"アイコン"}}};const L={component:s},u={title:"タイトル",description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"},n={render:r=>e.jsxs(j,{spacing:"md",children:[e.jsx(s,{...r,href:"/"}),e.jsx(s,{...r,href:"/"})]}),args:u},a={render:r=>e.jsx(s,{...r,href:"/",icon:v}),args:u};var o,c,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="/" />
      <LinkCard {...args} href="/" />
    </Stack>,
  args: defaultArgs
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="/" icon={MedicalFormIcon} />,
  args: defaultArgs
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["Default","WithIcon"];export{n as Default,a as WithIcon,S as __namedExportsOrder,L as default};
