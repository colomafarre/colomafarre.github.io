!function e(t,i,a){function n(r,u){if(!i[r]){if(!t[r]){var l="function"==typeof require&&require;if(!u&&l)return l(r,!0);if(o)return o(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var d=i[r]={exports:{}};t[r][0].call(d.exports,function(e){var i=t[r][1][e];return n(i?i:e)},d,d.exports,e,t,i,a)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<a.length;r++)n(a[r]);return n}({1:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){},identify:function(e,t){var i=o["default"].merge([t.all,t.aboardly||{}]),a="signed_up";t.aboardly&&t.aboardly.event&&(a=o["default"].slugify(t.aboardly.event)),aboardly.identify(e,i),aboardly.event(a)},page:function(e,t){}}},{"./utils.js":16}],2:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.amplitude||{}]);amplitude.logEvent(e,i)},identify:function(e,t){amplitude.setUserId(e)},page:function(e,t){}}},{"./utils.js":16}],3:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){},identify:function(e,t){var i=o["default"].merge([t.all,t.castle||{}]);_castle("identify",e,i)},page:function(e,t){}}},{"./utils.js":16}],4:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.customerio||{}]);_cio.track(e,i)},identify:function(e,t){var i=o["default"].merge([t.all,{id:e},t.customerio||{}]);i.id&&i.email&&i.created_at&&_cio.identify(i)},page:function(e,t){}}},{"./utils.js":16}],5:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){_gs("event",e,{extra:"event",details:!0})},identify:function(e,t){var i=o["default"].merge([t.all,t.gosquared||{}]);i.id=e,_gs("identify",i)},page:function(e,t){}}},{"./utils.js":16}],6:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.googleanalytics||{}]),a=i.category,n=i.action,r=i.label,u=i.value;if(!a||!n){var l=e.split(" ");n=l[0],a=e.replace(n,"").trim()}r&&u?ga("send","event",a,n,r,u):ga("send","event",a,n)},identify:function(e,t){ga("set","userId",e)},page:function(e,t){}}},{"./utils.js":16}],7:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.heap||{}]);heap.track(e,i)},identify:function(e,t){var i=o["default"].merge([t.all,t.heap||{}]);heap.identify(i)},page:function(e,t){}}},{"./utils.js":16}],8:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.intercom||{}]);Intercom("trackEvent",e,i)},identify:function(e,t){},page:function(e,t){}}},{"./utils.js":16}],9:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.kissmetrics||{}]);_kmq.push(["record",e,i])},identify:function(e,t){var i=o["default"].merge([t.all,t.kissmetrics||{}]);_kmq.push(["identify",e]),_kmq.push(["set",i])},page:function(e,t){}}},{"./utils.js":16}],10:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e){return e.email&&(e.$email=e.email),e.created&&(e.$created=e.created),e.name&&(e.$name=e.name),e}Object.defineProperty(i,"__esModule",{value:!0});var o=e("./utils.js"),r=a(o);i["default"]={track:function(e,t){var i=n(r["default"].merge([t.all,t.mixpanel||{}]));mixpanel.track(e,i)},identify:function(e,t){var i=n(r["default"].merge([t.all,t.mixpanel||{}]));mixpanel.identify(e),mixpanel.people.set(i)},page:function(e,t){}}},{"./utils.js":16}],11:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.optimizely||{}]);window.optimizely=window.optimizely||[],window.optimizely.push({type:"event",eventName:e,tags:{properties:i}})},identify:function(e,t){var i=o["default"].merge([t.all,t.optimizely||{}]);window.optimizely=window.optimizely||[],window.optimizely.push({type:"user",userId:e,attributes:{properties:i}}),console.log(e,t)},page:function(e,t){var i=o["default"].merge([t.all,t.optimizely||{}]);window.optimizely=window.optimizely||[],window.optimizely.push({type:"page",pageName:e,tags:{properties:i}})}}},{"./utils.js":16}],12:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e){var t={};return e.email&&(t.email=e.email),e.givenName&&(t.givenName=e.givenName),e.surname&&(t.surname=e.surname),e.userId&&(t.userId=e.userId),t.appToken=Smooch.appToken,t.properties=e,t}Object.defineProperty(i,"__esModule",{value:!0});var o=e("./utils.js"),r=a(o);i["default"]={track:function(e,t){Smooch.track(e)},identify:function(e,t){var i=n(r["default"].merge([t.all,t.smooch||{}]));Smooch.init(i)},page:function(e,t){}}},{"./utils.js":16}],13:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.webengage||{}]);webengage.track(e,i)},identify:function(e,t){var i=o["default"].merge([t.all,t.webengage||{}]);webengage.user.identify(e),webengage.user.setAttribute(i)},page:function(e,t){}}},{"./utils.js":16}],14:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){var i=o["default"].merge([t.all,t.woopra||{}]);woopra.track(e,i)},identify:function(e,t){var i=o["default"].merge([t.all,t.woopra||{}]);i.email||(i.email=e),woopra.identify(i),woopra.track()},page:function(e,t){}}},{"./utils.js":16}],15:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(i,"__esModule",{value:!0});var n=e("./utils.js"),o=a(n);i["default"]={track:function(e,t){},identify:function(e,t){var i=o["default"].merge([t.all,t.wootric||{}]);if(i.email||(i.email=e),window.wootricSettings.email=i.email,i.created_at&&(window.wootricSettings.created_at=i.created_at),window.wootricSettings){var a=new Image;a.src="//d8myem934l1zi.cloudfront.net/pixel.gif?account_token="+window.wootricSettings.account_token+"&email="+encodeURIComponent(window.wootricSettings.email)+"&created_at="+window.wootricSettings.created_at+"&url="+encodeURIComponent(window.location)+"&random="+Math.random()}window.lightningjs||function(e){function t(t,a){return a&&(a+=(/\?/.test(a)?"&":"?")+"lv=1"),e[t]||function(){var n=window,o=document,r=t,u=o.location.protocol,l="load",s=0;!function(){function t(){d.P(l),d.w=1,e[r]("_load")}e[r]=function(){function t(){return t.id=a,e[r].apply(t,arguments)}var i,a=++s;return i=this&&this!=n?this.id||0:0,(d.s=d.s||[]).push([a,i,arguments]),t.then=function(e,i,n){var o=d.fh[a]=d.fh[a]||[],r=d.eh[a]=d.eh[a]||[],u=d.ph[a]=d.ph[a]||[];return e&&o.push(e),i&&r.push(i),n&&u.push(n),t},t};var d=e[r]._={};d.fh={},d.eh={},d.ph={},d.l=a?a.replace(/^\/\//,("https:"==u?u:"http:")+"//"):a,d.p={0:+new Date},d.P=function(e){d.p[e]=new Date-d.p[0]},d.w&&t(),n.addEventListener?n.addEventListener(l,t,!1):n.attachEvent("on"+l,t);var c=function f(){function e(){return["<head></head><",t,' onload="var d=',g,";d.getElementsByTagName('head')[0].",u,"(d.",l,"('script')).",s,"='",d.l,"'\"></",t,">"].join("")}var t="body",a=o[t];if(!a)return setTimeout(f,100);d.P(1);var n,u="appendChild",l="createElement",s="src",c=o[l]("div"),p=c[u](o[l]("div")),m=o[l]("iframe"),g="document";c.style.display="none",a.insertBefore(c,a.firstChild).id=i+"-"+r,m.frameBorder="0",m.id=i+"-frame-"+r,/MSIE[ ]+6/.test(navigator.userAgent)&&(m[s]="javascript:false"),m.allowTransparency="true",p[u](m);try{m.contentWindow[g].open()}catch(v){d.domain=o.domain,n="javascript:var d="+g+".open();d.domain='"+o.domain+"';",m[s]=n+"void(0);"}try{var j=m.contentWindow[g];j.write(e()),j.close()}catch(_){m[s]=n+'d.write("'+e().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}d.P(2)};d.l&&c()}()}(),e[t].lv="1",e[t]}var i="lightningjs",a=window[i]=t(i);a.require=t,a.modules=e}({}),window.wootric=lightningjs.require("wootric","//d27j601g4x0gd5.cloudfront.net/beacon.js"),window.wootric("run")},page:function(e,t){}}},{"./utils.js":16}],16:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={merge:function(e){var t={};return e.forEach(function(e,i){Object.keys(e).forEach(function(i){t[i]=e[i]})}),t},slugify:function(e){return e.toLowerCase().replace(/ /g,"_")}}},{}],17:[function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=e("./api/Aboardly.js"),o=a(n),r=e("./api/Amplitude.js"),u=a(r),l=e("./api/Castle.js"),s=a(l),d=e("./api/Customerio.js"),c=a(d),f=e("./api/GoSquared.js"),p=a(f),m=e("./api/GoogleAnalytics.js"),g=a(m),v=e("./api/Heap.js"),j=a(v),_=e("./api/Intercom.js"),y=a(_),w=e("./api/Kissmetrics.js"),b=a(w),h=e("./api/Mixpanel.js"),k=a(h),M=e("./api/Optimizely.js"),N=a(M),O=e("./api/Smooch.js"),P=a(O),S=e("./api/WebEngage.js"),z=a(S),x=e("./api/Woopra.js"),E=a(x),I=e("./api/Wootric.js"),q=a(I),C=[{api:o["default"],objName:"aboardly"},{api:u["default"],objName:"amplitude"},{api:s["default"],objName:"_castle"},{api:c["default"],objName:"_cio"},{api:p["default"],objName:"_gs"},{api:g["default"],objName:"ga"},{api:j["default"],objName:"heap"},{api:y["default"],objName:"Intercom"},{api:b["default"],objName:"_kmq"},{api:k["default"],objName:"mixpanel"},{api:N["default"],objName:"optimizely"},{api:P["default"],objName:"Smooch"},{api:z["default"],objName:"webengage"},{api:E["default"],objName:"woopra"},{api:q["default"],objName:"wootricSettings"}];window.stackpile=function(){var e={track:function(e,t,i,a){t=t||{},t.all=t.all||{};for(var n=C.length-1;n>=0;n--)window[C[n].objName]&&C[n].api.track(e,t);a&&setTimeout(function(){a()},i&&i.timeout?i.timeout:100)},identify:function(e,t,i,a){t=t||{},t.all=t.all||{};for(var n=C.length-1;n>=0;n--)window[C[n].objName]&&C[n].api.identify(e,t);a&&setTimeout(function(){a()},i&&i.timeout?i.timeout:100)},page:function(e,t,i,a){t=t||{},t.all=t.all||{};for(var n=C.length-1;n>=0;n--)window[C[n].objName]&&C[n].api.identify(id,t);a&&setTimeout(function(){a()},i&&i.timeout?i.timeout:100)}};return{analytics:e}}()},{"./api/Aboardly.js":1,"./api/Amplitude.js":2,"./api/Castle.js":3,"./api/Customerio.js":4,"./api/GoSquared.js":5,"./api/GoogleAnalytics.js":6,"./api/Heap.js":7,"./api/Intercom.js":8,"./api/Kissmetrics.js":9,"./api/Mixpanel.js":10,"./api/Optimizely.js":11,"./api/Smooch.js":12,"./api/WebEngage.js":13,"./api/Woopra.js":14,"./api/Wootric.js":15}]},{},[17]);