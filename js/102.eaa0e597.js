"use strict";(globalThis["webpackChunktwitter_stats_display"]=globalThis["webpackChunktwitter_stats_display"]||[]).push([[102],{6102:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ce});var s=a(9835),r=a(6970);const o={class:"col-xs-12 col-sm-12 col-md-12"},l={class:"row q-mt-md text-h5"},d={class:"row q-mt-md q-gutter-sm"},n={class:"row q-mt-md q-gutter-sm"},i={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},u={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},c={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},g={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},p={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},m={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},w={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},v={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},y={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},f={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},h=(0,s._)("div",{class:"text-h6"},"Percentage of Tweets Using Term...",-1);function T(e,t,a,T,S,q){const W=(0,s.up)("NewReportPeriodSelector"),_=(0,s.up)("q-btn"),b=(0,s.up)("TagSelector"),x=(0,s.up)("TopWords"),B=(0,s.up)("VocabularyComparisonBetweenTags"),Z=(0,s.up)("SingleTagsVocabulary"),V=(0,s.up)("SingleTagsVocabularyDiff"),Q=(0,s.up)("q-input"),C=(0,s.up)("DailySingleWordUsageByTag"),P=(0,s.up)("q-card-section"),R=(0,s.up)("q-card"),D=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(D,{class:"row q-pl-md q-pr-md q-pb-lg"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",l," Topics for "+(0,r.zw)(T.dateRangeFromString)+" to "+(0,r.zw)(T.dateRangeToString),1),(0,s._)("div",d,[(0,s.Wm)(W,{onReportRequested:T.handleReportRequested},null,8,["onReportRequested"]),(0,s.Wm)(_,{type:"a",href:"./#/",label:"Main Report",push:""}),(0,s.Wm)(_,{type:"a",href:"./#/tags",label:"Tags",push:""}),(0,s.Wm)(_,{type:"a",href:"./#/compare-periods",label:"Compare Over Time",push:""})]),(0,s._)("div",n,[(0,s.Wm)(b,{tags:T.tags,onSelectedTagsChanged:T.handleSelectedTagsChanged},null,8,["tags","onSelectedTagsChanged"])]),(0,s._)("div",i,[(0,s._)("div",u,[(0,s.Wm)(x,{"raw-series":T.topWords},null,8,["raw-series"])])]),(0,s._)("div",c,[(0,s._)("div",g,[(0,s.Wm)(B,{tags:T.selectedTags,wordStatsByTag:T.wordStatsByTag},null,8,["tags","wordStatsByTag"])])]),(0,s._)("div",p,[(0,s._)("div",m,[(0,s.Wm)(Z,{tags:T.selectedTags,wordStatsByTag:T.wordStatsByTag},null,8,["tags","wordStatsByTag"])])]),(0,s._)("div",w,[(0,s._)("div",v,[(0,s.Wm)(V,{tags:T.selectedTags,wordStatsByTag:T.wordStatsByTag,previousPeriodWordStatsByTag:T.previousPeriodWordStatsByTag},null,8,["tags","wordStatsByTag","previousPeriodWordStatsByTag"])])]),(0,s._)("div",y,[(0,s._)("div",f,[(0,s.Wm)(R,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[h,(0,s.Wm)(Q,{rounded:"",outlined:"",modelValue:T.dailyWordUsageQueryTerm,"onUpdate:modelValue":t[0]||(t[0]=e=>T.dailyWordUsageQueryTerm=e)},null,8,["modelValue"]),(0,s.Wm)(C,{series:T.dailyWordMatchByTag,tags:T.tags,word:T.dailyWordUsageQueryTerm,"chart-title":""},null,8,["series","tags","word"])])),_:1})])),_:1})])])])])),_:1})}a(6727);var S=a(499);const q=(0,s._)("div",{class:"text-h6"},"Top Words",-1);function W(e,t,a,r,o,l){const d=(0,s.up)("apexchart"),n=(0,s.up)("q-card-section"),i=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[q,(0,s.Wm)(d,{type:"bar",height:"500",series:r.series,options:r.options},null,8,["series","options"])])),_:1})])),_:1})}a(9665);var _=a(8339),b=a(7092),x=a.n(b);const B={components:{apexchart:x()},props:{rawSeries:{required:!0,type:Object}},setup(e){(0,_.tv)();const t=(0,s.Fl)((()=>{const t=[];return e.rawSeries.forEach((e=>{t.push({x:e[0],y:e[1]})})),[{data:t}]})),a={chart:{},dataLabels:{enabled:!1},xaxis:{title:{text:"Words"},type:"numeric"},yaxis:{title:{text:"Views for Word"}}};return{options:a,series:t}}};var Z=a(1639),V=a(4458),Q=a(3190),C=a(9984),P=a.n(C);const R=(0,Z.Z)(B,[["render",W]]),D=R;P()(B,"components",{QCard:V.Z,QCardSection:Q.Z});const H=(0,s._)("div",{class:"text-h6"},"Compare Vocabulary",-1),U={class:"row col-12 q-gutter-sm justify-between"},j={class:"col"},A={class:"col"},k={class:"row col-12 q-gutter-sm justify-between"},F={class:"col"};function O(e,t,a,r,o,l){const d=(0,s.up)("q-select"),n=(0,s.up)("apexchart"),i=(0,s.up)("q-card-section"),u=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[H,(0,s._)("div",U,[(0,s._)("div",j,[(0,s.Wm)(d,{modelValue:r.tagA,"onUpdate:modelValue":t[0]||(t[0]=e=>r.tagA=e),options:r.tagsInA,label:"Select a Tag"},null,8,["modelValue","options"])]),(0,s._)("div",A,[(0,s.Wm)(d,{modelValue:r.tagB,"onUpdate:modelValue":t[1]||(t[1]=e=>r.tagB=e),options:r.tagsInB,label:"Select a Tag"},null,8,["modelValue","options"])])]),(0,s._)("div",k,[(0,s._)("div",F,[(0,s.Wm)(n,{type:"bar",height:"600",series:r.wordData,options:r.options},null,8,["series","options"])])])])),_:1})])),_:1})}const Y={components:{apexchart:x()},props:{tags:{required:!0},wordStatsByTag:{required:!0}},setup(e){const t=(0,S.iH)(""),a=(0,S.iH)(""),r=(0,s.Fl)((()=>{const t=e.tags.slice();let s=e.tags.indexOf(a.value);return s>-1&&t.splice(s,1),t})),o=(0,s.Fl)((()=>{const a=e.tags.slice();let s=e.tags.indexOf(t.value);return s>-1&&a.splice(s,1),a})),l=(0,s.Fl)((()=>{if(!t.value||!a.value)return[];const s=e.wordStatsByTag[t.value],r=e.wordStatsByTag[a.value];if(!s||!r)return[];const o={};s.forEach((e=>{o[e[0]]=e[1]}));const l={};r.forEach((e=>{l[e[0]]=e[1]}));const d=new Set,n=s.slice(0,20);n.forEach((e=>{d.add(e[0])}));const i=r.slice(0,20);i.forEach((e=>{d.add(e[0])}));const u=[];d.forEach((e=>{var t=0,a=0;o.hasOwnProperty(e)&&(t=o[e]),l.hasOwnProperty(e)&&(a=l[e]),u.push([e,t+a])})),u.sort((function(e,t){return t[1]-e[1]}));const c={name:t.value,data:[]},g={name:a.value,data:[]};return u.forEach((e=>{const t=e[0];o.hasOwnProperty(t)?c.data.push({x:t,y:o[t]}):c.data.push({x:t,y:0}),l.hasOwnProperty(t)?g.data.push({x:t,y:-1*l[t]}):g.data.push({x:t,y:0})})),[c,g]})),d={chart:{stacked:!0},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},xaxis:{title:{text:"Views for Words"},type:"numeric",labels:{formatter:function(e){return Math.abs(Math.round(e))+" views"}}},yaxis:{title:{text:"Words"}},tooltip:{shared:!1,x:{formatter:function(e){return e}},y:{formatter:function(e){return Math.abs(e)+" views"}}}};return(0,s.YP)(r,(a=>{e.tags.includes(t.value)||(t.value="")})),(0,s.YP)(o,(t=>{e.tags.includes(a.value)||(a.value="")})),{tagsInA:r,tagsInB:o,tagA:t,tagB:a,wordData:l,options:d}}};var E=a(7887);const I=(0,Z.Z)(Y,[["render",O]]),z=I;P()(Y,"components",{QCard:V.Z,QCardSection:Q.Z,QSelect:E.Z});var M=a(289),L=a(6226),K=a(7056);const N=(0,s._)("div",{class:"text-h6"},"View a Single Tag's Vocabulary",-1),G={class:"row col-12 q-gutter-sm justify-between"},J={class:"col"},X={class:"row col-12 q-gutter-sm justify-between"},$={class:"col"};function ee(e,t,a,r,o,l){const d=(0,s.up)("q-select"),n=(0,s.up)("apexchart"),i=(0,s.up)("q-card-section"),u=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[N,(0,s._)("div",G,[(0,s._)("div",J,[(0,s.Wm)(d,{modelValue:r.tag,"onUpdate:modelValue":t[0]||(t[0]=e=>r.tag=e),options:a.tags,label:"Select a Tag"},null,8,["modelValue","options"])])]),(0,s._)("div",X,[(0,s._)("div",$,[(0,s.Wm)(n,{type:"bar",height:"600",series:r.wordData,options:r.options},null,8,["series","options"])])])])),_:1})])),_:1})}var te=a(796);const ae={components:{apexchart:x()},props:{tags:{required:!0},wordStatsByTag:{required:!0}},setup(e){const t=(0,te.Z)(),a=(0,S.iH)(""),r=(0,s.Fl)((()=>{if(!a.value)return[];const t=e.wordStatsByTag[a.value];if(!t)return[];const s=[];return t.slice(0,30).forEach((e=>{s.push({x:e[0],y:e[1]})})),[{data:s}]}));(0,s.YP)((()=>e.tags),(t=>{e.tags.includes(a.value)||(a.value="")})),(0,s.YP)(a,((e,s)=>{ApexCharts.exec(t,"updateOptions",{xaxis:{title:{text:"Views for words tweeted by tag: "+a.value}}})}));const o={chart:{id:t,stacked:!0},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},xaxis:{title:{text:"Select a tag."},type:"numeric",labels:{formatter:function(e){return e+" views"}}},yaxis:{title:{text:"Words"}},tooltip:{shared:!1,y:{formatter:function(e){return e+" views"}}}};return{tag:a,wordData:r,options:o}}},se=(0,Z.Z)(ae,[["render",ee]]),re=se;P()(ae,"components",{QCard:V.Z,QCardSection:Q.Z,QSelect:E.Z});const oe=(0,s._)("div",{class:"text-h6"},"View a Single Tag's Vocabulary Changes",-1),le={class:"row col-12 q-gutter-sm justify-between"},de={class:"col"},ne={class:"row col-12 q-gutter-sm justify-between q-pt-lg"},ie={class:"col"},ue=(0,s._)("div",{class:"text-h6"},"Added",-1),ce={class:"col"},ge=(0,s._)("div",{class:"text-h6"},"Retained",-1),pe={class:"col"},me=(0,s._)("div",{class:"text-h6"},"Dropped",-1);function we(e,t,a,o,l,d){const n=(0,s.up)("q-select"),i=(0,s.up)("q-item-label"),u=(0,s.up)("q-item-section"),c=(0,s.up)("q-item"),g=(0,s.up)("q-list"),p=(0,s.up)("q-card-section"),m=(0,s.up)("q-card"),w=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[oe,(0,s._)("div",le,[(0,s._)("div",de,[(0,s.Wm)(n,{modelValue:o.tag,"onUpdate:modelValue":t[0]||(t[0]=e=>o.tag=e),options:a.tags,label:"Select a Tag"},null,8,["modelValue","options"])])]),(0,s._)("div",ne,[(0,s._)("div",ie,[ue,(0,s.Wm)(g,{bordered:"",separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.wordData.added,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)),[[w]]))),128))])),_:1})]),(0,s._)("div",ce,[ge,(0,s.Wm)(g,{bordered:"",separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.wordData.retained,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)),[[w]]))),128))])),_:1})]),(0,s._)("div",pe,[me,(0,s.Wm)(g,{bordered:"",separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.wordData.dropped,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(c,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)),[[w]]))),128))])),_:1})])])])),_:1})])),_:1})}const ve={components:{},props:{tags:{required:!0},wordStatsByTag:{required:!0},previousPeriodWordStatsByTag:{required:!0}},setup(e){const t=(0,S.iH)(""),a=(0,s.Fl)((()=>{if(!t.value)return{added:[],retained:[],dropped:[]};const a=e.wordStatsByTag[t.value];if(!a)return{added:[],retained:[],dropped:[]};const s=e.previousPeriodWordStatsByTag[t.value];if(!s)return{added:[],retained:[],dropped:[]};const o=a.map((e=>e[0])).slice(0,50),l=s.map((e=>e[0])).slice(0,50);return r(l,o)}));(0,s.YP)((()=>e.tags),(a=>{e.tags.includes(t.value)||(t.value="")}));const r=(e,t)=>{const a=new Set(e),s=new Set(t),r=new Set([...a].filter((e=>!s.has(e)))),o=new Set([...s].filter((e=>!a.has(e)))),l=new Set([...s].filter((e=>a.has(e))));return{added:Array.from(o),retained:Array.from(l),dropped:Array.from(r)}};return{tag:t,wordData:a}}};var ye=a(3246),fe=a(490),he=a(1233),Te=a(3115),Se=a(1136);const qe=(0,Z.Z)(ve,[["render",we]]),We=qe;P()(ve,"components",{QCard:V.Z,QCardSection:Q.Z,QSelect:E.Z,QList:ye.Z,QItem:fe.Z,QItemSection:he.Z,QItemLabel:Te.Z}),P()(ve,"directives",{Ripple:Se.Z});var _e=a(3261),be=a(3622);const xe={components:{NewReportPeriodSelector:K.Z,TagSelector:L.Z,TopWords:D,VocabularyComparisonBetweenTags:z,SingleTagsVocabulary:re,SingleTagsVocabularyDiff:We,DailySingleWordUsageByTag:_e.Z},setup(){const e=new M.Z,t=(0,S.iH)([]),a=(0,S.iH)([]),r=(0,S.iH)([]),o=(0,S.iH)({}),l=(0,S.iH)({}),d=(0,S.iH)([]),n=(0,S.iH)("Armenia");var i=(0,S.iH)([]);const u=(t,s)=>{var u=[];u=a.value.filter((e=>!i.value.includes(e)));const c=s-t,g=t-c,p=t-1;e.prepareDataForPeriod(u,g,s);const v=e.getTags();a.value=v,r.value=e.getTopWordsForPeriod(t,s,25),o.value=e.getWeightedWordStatsByTag(t,s,500),l.value=e.getWeightedWordStatsByTag(g,p),d.value=e.getWordUsageByTagAndTime(n.value,m.value,w.value)},c=e=>{i.value=e.selectedTags,u(m.value,w.value)};(0,s.YP)(n,((t,a)=>{d.value=e.getWordUsageByTagAndTime(t,m.value,w.value)}));const{dateRangeFromString:g,dateRangeToString:p,fromTimestamp:m,endTimestamp:w,handleReportRequested:v}=(0,be.Z)(u,e);return{periodStatsByTag:t,tags:a,selectedTags:i,wordStatsByTag:o,previousPeriodWordStatsByTag:l,topWords:r,dateRangeFromString:g,dateRangeToString:p,dailyWordUsageQueryTerm:n,dailyWordMatchByTag:d,handleReportRequested:v,handleSelectedTagsChanged:c}}};var Be=a(9885),Ze=a(4455),Ve=a(6611);const Qe=(0,Z.Z)(xe,[["render",T]]),Ce=Qe;P()(xe,"components",{QPage:Be.Z,QBtn:Ze.Z,QCard:V.Z,QCardSection:Q.Z,QInput:Ve.Z})}}]);