!function(t){function n(n){for(var o,r,c=n[0],u=n[1],d=n[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(s&&s(n);p.length;)p.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e,r=i[n],c=!0,u=1;u<r.length;u++)e=r[u],0!==a[e]&&(c=!1);c&&(i.splice(n--,1),t=o(o.s=r[0]))}return t}function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var r={},a={0:0},i=[];o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/chord-app";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var s=u;i.push([14,2]),e()}([,,,,function(t,n,e){"use strict";(function(t){n.a={component:{navigate(){t.go({name:"products.index"})}}}}).call(this,e(0))},function(t){t.exports='<div class="home">\r\n    <h1>Welcome to Chord Store</h1>\r\n    <button onclick="navigate()" class="btn btn-dark btn-lg">Go to Products</button>\r\n</div>'},function(t){t.exports="<div>\r\n    <h1>Error: page not found</h1>\r\n</div>"},function(t,n,e){"use strict";(function(t){n.a={component:{navigate2Home(){t.go({name:"home"})},navigate2New(){t.go({name:"products.edit"})},navigate2Edit(){t.go({name:"products.edit",params:{product_id:"5341"}})},navigate2Detail(){t.go({name:"products.detail",params:{product_id:"5341"}})}}}}).call(this,e(0))},function(t){t.exports='<div class="products">\r\n    <h2>Products</h2>\r\n    <button onclick="navigate2New()" class="btn btn-dark">Add Product</button>\r\n    <button onclick="navigate2Home()" class="btn btn-dark">Home</button>\r\n    <hr>\r\n    <div class="card" style="width: 18rem;">\r\n        <div class="card-body">\r\n            <h5 class="card-title">PS5</h5>\r\n            <p class="card-text">\r\n                The PS5 (or PlayStation 5) is the next-generation PlayStation, \r\n                with a release date planned for late 2020...\r\n            </p>\r\n            \r\n        <button onclick="navigate2Edit()" class="btn btn-dark">PS5 Edit</button>\r\n        <button onclick="navigate2Detail()" class="btn btn-dark">PS5 Detail</button>\r\n        </div>\r\n    </div>\r\n</div>'},function(t,n,e){"use strict";(function(t){n.a={component:{navigate2List(){t.go({name:"products.index"})}},beforeCreate(){},afterCreate(){},beforeRemove(){},afterRemove(){}}}).call(this,e(0))},function(t){t.exports='<div class="product-edit">\r\n    <h2>PS5 Edit</h2>\r\n    <button onclick="navigate2List()" class="btn btn-dark">Cancel</button>\r\n</div>'},function(t,n,e){"use strict";(function(t){n.a={component:{navigateToEdit(){t.go({name:"products.edit",params:{product_id:"5341"}})},navigateToIndex(){t.go({name:"products.index",params:{product_id:"5341"}})}},beforeCreate(){},afterCreate(){},beforeRemove(){},afterRemove(){}}}).call(this,e(0))},function(t){t.exports='<div class="product-detail">\r\n    <h2>PS5 Detail</h2>\r\n    <button onclick="navigateToEdit()" class="btn btn-dark">PS5 Edit</button>\r\n    <button onclick="navigateToIndex()" class="btn btn-dark">Return to List</button>\r\n</div>'},function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var o=e(4),r=e(5),a=e.n(r);const i=[{module:o.a,view:a.a,path:"/",name:"home"}];var c=e(6);const u=[{module:{component:{}},view:e.n(c).a,path:"/Error",name:"pageNotFound"}];var d=e(7),s=e(8),l=e.n(s),p=e(9),f=e(10),v=e.n(f),b=e(11),h=e(12),m=e.n(h);const g=[...i,...u,...[{module:d.a,view:l.a,path:"/Products/Index",name:"products.index"},{module:p.a,view:v.a,path:"/Products/Edit/(:product_id)",name:"products.edit"},{module:b.a,view:m.a,path:"/Products/Detail/:product_id",name:"products.detail"}]]},function(t,n,e){"use strict";e.r(n),function(t,n){var o=e(13);t.init({routes:o.a,historyMode:!1}),n.init(t,"#app")}.call(this,e(0),e(3))}]);