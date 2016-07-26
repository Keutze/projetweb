+function(e){"use strict";function t(t){var i=e.extend({},n.DEFAULTS,"object"==typeof t&&t),s=e(i.menu||this);return s.each(function(){e(this).data("grid.menuToggle",new n(this,i))})}var n=function(t,n){var i=this;this.options=n,this.$nav=e(t),this.$menu=this.$nav.children("ul"),this.$submenu=this.$nav.children("ul").children("li").children("ul"),this.$items=this.$menu.children("li");var s=e(document.body).outerWidth();this.menuIsCreated=!1,e(window).resize(function(){i.toggleMenu(e(document.body).outerWidth())}),this.toggleMenu(s)};n.VERSION="2.0.0",n.DEFAULTS={breakPoint:GRID.breakPoints.mobile,wrapper:"#page",animation:"slide-left",closeText:!1,menuOpenerClass:"toggle-menu-button"},n.prototype._init=function(){this.body=document.body,this.wrapper=document.querySelector(this.options.wrapper),this.mask=document.querySelector("#c-mask"),this.menu=document.querySelector("#c-menu--"+this.options.animation),this.closeBtn=this.menu.querySelector(".c-menu__close"),this.menuOpeners=document.querySelectorAll(this.options.menuOpenerClass),this._initEvents()},n.prototype._initEvents=function(){e(this.closeBtn).on("click.grid.menutoggle",function(e){e.preventDefault(),this.close()}.bind(this)),e(this.mask).on("click.grid.menutoggle",function(e){e.preventDefault(),this.close()}.bind(this))},n.prototype.open=function(){this.body.classList.add("has-active-menu"),this.wrapper.classList.add("has-"+this.options.animation),this.menu.classList.add("is-active"),this.mask.classList.add("is-active"),this.disableMenuOpeners()},n.prototype.close=function(){this.body.classList.remove("has-active-menu"),this.wrapper.classList.remove("has-"+this.options.animation),this.menu.classList.remove("is-active"),this.mask.classList.remove("is-active"),this.enableMenuOpeners()},n.prototype.disableMenuOpeners=function(){e(this.menuOpeners).each(function(e){e.disabled=!0})},n.prototype.enableMenuOpeners=function(){e(this.menuOpeners).each(function(e){e.disabled=!1})},n.prototype.create_menu=function(){if(!this.menuIsCreated){var t=e('<div id="c-mask"></div>'),n=e('<div id="c-button--'+this.options.animation+'" class="'+this.options.menuOpenerClass+'"><span></span></div>'),i=e('<nav id="c-menu--'+this.options.animation+'" class="phone-menu '+this.options.animation+'"></nav>'),s=e('<ul class="alt-menu"></ul>');if(this.closeText){var o=e('<li class="menu-item c-menu__close"><a href="javascript:;">'+this.options.closeText+"</a></li>");s.prepend(o)}this.$items.each(function(){var t=e(this);t.attr("class","menu-item level-0").clone().appendTo(s).find("ul").remove();var n=t.children("ul").children("li");n.each(function(){e(this).attr("class","menu-item level-1").clone().remove("ul").appendTo(s).find("ul").remove();var t=e(this).children("ul").children("li");t.each(function(){e(this).attr("class","menu-item level-2").clone().remove("ul").appendTo(s).find("ul").remove()})})}),i.prepend(s),e(document.body).prepend(t),e(document.body).prepend(i),e(document.body).prepend(n),this.menuIsCreated=!0,this.init_menu()}},n.prototype.remove_menu=function(){this.menuIsCreated&&(e("div#c-button--"+this.options.animation).remove(),e("nav#c-menu--"+this.options.animation).remove(),e("div#c-mask").remove(),this.menuIsCreated=!1)},n.prototype.init_menu=function(){var t=this;this._init(),e("#c-button--"+this.options.animation).on("click.grid.menutoggle",function(e){e.preventDefault,t.open()})},n.prototype.toggleMenu=function(e){e<=this.options.breakPoint?(this.create_menu(),this.$nav.css("display","none")):(this.remove_menu(),this.$nav.css("display","block"))};var i=e.grid.menuToggle||e.fn.menuToggle;e.grid.menuToggle=t,e.grid.menuToggle.Constructor=n,e.fn.menuToggle=t,e.fn.menuToggle.Constructor=n,e.grid.menuToggle.noConflict=function(){return e.grid.menuToggle=i,this}}(jQuery);