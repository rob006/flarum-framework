module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,,function(e,t,n){"use strict";n.r(t);var o=n(1),s=n(0),r=n.n(s),i=n(2),u=n.n(i),a=n(4),c=n.n(a),d=n(3),p=n.n(d),f=n(5),l=n.n(f);r.a.initializers.add("flarum-pusher",(function(){var e=m.deferred();$.getScript("//js.pusher.com/3.0/pusher.min.js",(function(){var t=new Pusher(r.a.forum.attribute("pusherKey"),{authEndpoint:r.a.forum.attribute("apiUrl")+"/pusher/auth",cluster:r.a.forum.attribute("pusherCluster"),auth:{headers:{"X-CSRF-Token":r.a.session.csrfToken}}});e.resolve({main:t.subscribe("public"),user:r.a.session.user?t.subscribe("private-user"+r.a.session.user.id()):null})})),r.a.pusher=e.promise,r.a.pushedUpdates=[],Object(o.extend)(u.a.prototype,"config",(function(e,t,n){var s=this;t||r.a.pusher.then((function(e){e.main.bind("newPost",(function(e){var t=s.props.params;if(!t.q&&!t.sort&&!t.filter){if(t.tags){var n=r.a.store.getBy("tags","slug",t.tags);if(-1===e.tagIds.indexOf(n.id()))return}var o=String(e.discussionId);r.a.current.discussion&&o===r.a.current.discussion.id()||-1!==r.a.pushedUpdates.indexOf(o)||(r.a.pushedUpdates.push(o),r.a.current instanceof p.a&&r.a.setTitleCount(r.a.pushedUpdates.length),m.redraw())}})),Object(o.extend)(n,"onunload",(function(){return e.main.unbind("newPost")}))}))})),Object(o.extend)(u.a.prototype,"view",(function(e){var t=this;if(r.a.pushedUpdates){var n=r.a.pushedUpdates.length;n&&e.children.unshift(l.a.component({className:"Button Button--block DiscussionList-update",onclick:function(){t.refresh(!1).then((function(){t.loadingUpdated=!1,r.a.pushedUpdates=[],r.a.setTitleCount(0),m.redraw()})),t.loadingUpdated=!0},loading:this.loadingUpdated,children:r.a.translator.transChoice("flarum-pusher.forum.discussion_list.show_updates_text",n,{count:n})}))}})),Object(o.extend)(u.a.prototype,"addDiscussion",(function(e,t){var n=r.a.pushedUpdates.indexOf(t.id());-1!==n&&r.a.pushedUpdates.splice(n,1),r.a.current instanceof p.a&&r.a.setTitleCount(r.a.pushedUpdates.length),m.redraw()})),Object(o.extend)(c.a.prototype,"config",(function(e,t,n){var s=this;t||r.a.pusher.then((function(e){e.main.bind("newPost",(function(e){var t=String(e.discussionId);if(s.discussion&&s.discussion.id()===t&&s.stream){var n=s.discussion.commentCount();r.a.store.find("discussions",s.discussion.id()).then((function(){s.stream.update(),document.hasFocus()||(r.a.setTitleCount(Math.max(0,s.discussion.commentCount()-n)),$(window).one("focus",(function(){return r.a.setTitleCount(0)})))}))}})),Object(o.extend)(n,"onunload",(function(){return e.main.unbind("newPost")}))}))})),Object(o.extend)(p.a.prototype,"actionItems",(function(e){e.remove("refresh")})),r.a.pusher.then((function(e){e.user&&e.user.bind("notification",(function(){r.a.session.user.pushAttributes({unreadNotificationCount:r.a.session.user.unreadNotificationCount()+1,newNotificationCount:r.a.session.user.newNotificationCount()+1}),delete r.a.cache.notifications,m.redraw()}))}))}))}]);
//# sourceMappingURL=forum.js.map