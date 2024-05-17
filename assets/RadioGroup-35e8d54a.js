import{j as e}from"./jsx-runtime-9c4ae004.js";import{R as p}from"./RequiredLabel-f92501ea.js";import{F as f}from"./Flex-ffc67c66.js";import{c}from"./clsx-1229b3e0.js";import{r as R}from"./index-1b03fe98.js";const _="_block_11sw4_1",w="_radio_11sw4_5",y="_label_11sw4_10",b="_checked_11sw4_29",s={block:_,radio:w,label:y,checked:b},m=R.forwardRef(({name:t,value:o,checked:n,children:a,className:l,block:r=!1,...d},i)=>e.jsxs("label",{className:c(s.label,r&&s.block,n&&s.checked),children:[e.jsx("input",{type:"radio",name:t,value:o,checked:n,className:c(l,s.radio),ref:i,...d}),a]}));m.displayName="RadioCard";m.__docgenInfo={description:`アクセシビリティに配慮したラジオボタン。
選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用`,methods:[],displayName:"RadioCard",props:{name:{required:!0,tsType:{name:"string"},description:"グループ化（排他制御）したい要素には同じ名前をつける"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"選択時のコールバックで渡される値"},children:{required:!0,tsType:{name:"ReactInputHTMLAttributes['children']",raw:"React.InputHTMLAttributes<HTMLInputElement>['children']"},description:"ラベルに表示されるテキストまたは要素"},block:{required:!1,tsType:{name:"boolean"},description:`横幅を100%占有するかどうか
@default false`,defaultValue:{value:"false",computed:!1}}}};const g="_wrapper_a1vmf_1",h="_legend_a1vmf_7",u={wrapper:g,legend:h},x=({children:t,label:o,showRequiredLabel:n=!1,direction:a="column",...l})=>{const r=t.some(i=>i.type===m),d=a==="row"||r&&a==="column";return e.jsxs("fieldset",{className:u.wrapper,...l,children:[e.jsxs("legend",{className:u.legend,children:[o,n&&e.jsx(p,{})]}),e.jsx(f,{spacing:r?"sm":"md",alignItems:d?"normal":void 0,direction:a,children:t})]})};x.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ReactElement<typeof RadioButton> | ReactElement<typeof RadioCard>",elements:[{name:"ReactElement",elements:[{name:"RadioButton"}],raw:"ReactElement<typeof RadioButton>"},{name:"ReactElement",elements:[{name:"RadioCard"}],raw:"ReactElement<typeof RadioCard>"}]}],raw:"RadioComponent[]"},description:""},label:{required:!0,tsType:{name:"string"},description:"ラジオグループの見出し（legend要素）"},showRequiredLabel:{required:!1,tsType:{name:"boolean"},description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`,defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'column' | 'row'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'row'"}]},description:`ラジオボタンの配置方向
@default column`,defaultValue:{value:"'column'",computed:!1}}}};export{x as R,m as a};