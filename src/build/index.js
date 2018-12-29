module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({4:function(e,t){e.exports=require("react")},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERTICAL=t.HORIZONTAL=void 0;var i,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(4),a=(i=s)&&i.__esModule?i:{default:i};var l="previous",u="next",p=t.HORIZONTAL="horizontal",c=(t.VERTICAL="vertical",{previousButton:"previousButton",nextButton:"nextButton",buttonDisabled:"disabled",track:"track",slide:"slide",hidden:"hidden",previous:"previous",current:"current",next:"next",animateIn:"animateIn",animateOut:"animateOut"}),d=2e3,m={up:"rotate(90 10 15)",down:"rotate(270 10 15)",left:"rotate(180 10 15)",right:"rotate(0 10 15)"};function f(e){var t=e.direction,n=void 0===t?"right":t;return a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",viewBox:"0 0 20 30"},a.default.createElement("polygon",{fill:"#000",points:"20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30",transform:m[n]}))}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setupAutoplay=function(){n.props.autoplay&&!n.isMouseOver&&(n.stopAutoplay(),n.autoplayTimerId=setInterval(n.next,parseInt(n.props.autoplay,10)))},n.stopAutoplay=function(){n.autoplayTimerId&&clearInterval(n.autoplayTimerId)},n.onAnimationEnd=function(){n.setState({currentSlideIndex:n.nextSlideIndex,animating:!1,animation:void 0}),n.setupAutoplay(),"function"==typeof n.props.onSlideChange&&n.props.onSlideChange({slideIndex:n.nextSlideIndex})},n.isDisabled=function(){return n.slideCount<2||n.state.animating||n.props.disabled},n.isInfinite=function(){return n.slideCount>2&&!1!==n.props.infinite},n.canGoPrevious=function(){return n.isInfinite()||n.state.currentSlideIndex>0},n.canGoNext=function(){return n.isInfinite()||n.state.currentSlideIndex<n.slideCount-1},n.goTo=function(e,t){n.isDisabled()||(n.nextSlideIndex=e,n.setState({animating:!0,animation:t}),setTimeout(n.onAnimationEnd,n.props.duration||d))},n.previous=function(){if(n.canGoPrevious()){var e=n.state.currentSlideIndex-1,t=e>=0?e:n.slideCount-1;n.goTo(t,l)}},n.next=function(){if(n.canGoNext()){var e=(n.state.currentSlideIndex+1)%n.slideCount;n.goTo(e,u)}},n.getSlideClass=function(e){var t=n.state,i=t.currentSlideIndex,o=t.animation,r=n.getClassNames(),s=n.slideCount-1;return e===i?o?r.animateOut+" "+r[o]:r.current:2===n.slideCount?o?r.animateIn+" "+r[o]:e<i?r.previous:r.next:e===i-1||0===i&&e===s?o===l?r.animateIn+" "+r.previous:o===u?r.hidden:r.previous:e===i+1||0===e&&i===s?o===u?r.animateIn+" "+r.next:o===l?r.hidden:r.next:r.hidden},n.isSwiping=!1,n.handleTouchStart=function(e){if(!n.isDisabled()){n.stopAutoplay();var t=n.getClassNames(),i=t.current,o=t.previous,r=t.next,s=e.touches[0];n.isSwiping=!0,n.pageStartPosition=s[n.swipeEventProperty],n.currentElement=n.sliderRef.getElementsByClassName(i)[0],n.previousElement=n.sliderRef.getElementsByClassName(o)[0],n.nextElement=n.sliderRef.getElementsByClassName(r)[0];var a=n.currentElement.getBoundingClientRect()[n.swipeProperty];n.currentElementStartPosition=0,n.currentElementPosition=0,n.currentElement.style.transition="none",n.previousElement&&(n.previousElement.style.transition="none",n.previousElement.style.visibility="visible",n.previousElementStartPosition=n.previousElement.getBoundingClientRect()[n.swipeProperty]-a),n.nextElement&&(n.nextElement.style.visibility="visible",n.nextElement.style.transition="none",n.nextElementStartPosition=n.nextElement.getBoundingClientRect()[n.swipeProperty]-a)}},n.animating=!1,n.handleTouchMove=function(e){e.preventDefault(),n.animating=n.animating||requestAnimationFrame(function(){if(n.isSwiping){var t=e.touches[0][n.swipeEventProperty]-n.pageStartPosition;n.currentElementPosition=n.currentElementStartPosition+t,n.currentElement.style[n.swipeProperty]=n.currentElementPosition+"px",n.previousElement&&(n.previousElementPosition=n.previousElementStartPosition+t,n.previousElement.style[n.swipeProperty]=n.previousElementPosition+"px"),n.nextElement&&(n.nextElementPosition=n.nextElementStartPosition+t,n.nextElement.style[n.swipeProperty]=n.nextElementPosition+"px"),n.animating=!1}else n.animating=!1})},n.handleTouchEnd=function(){n.animating=!1,n.isSwiping=!1,n.currentElement.style.removeProperty(n.swipeProperty),n.currentElement.style.removeProperty("transition"),n.previousElement&&(n.previousElement.style.removeProperty("visibility"),n.previousElement.style.removeProperty("transition"),n.previousElement.style.removeProperty(n.swipeProperty)),n.nextElement&&(n.nextElement.style.removeProperty("visibility"),n.nextElement.style.removeProperty("transition"),n.nextElement.style.removeProperty(n.swipeProperty));var e=n.currentElementStartPosition-n.currentElementPosition,t=n.props.minSwipeOffset||15;Math.abs(e)>t?e<0?n.previous():n.next():n.setupAutoplay()},n.getClassNames=function(){return o({},c,n.props.classNames)},n.initTouchEvents=function(e){!n.isDisabled()&&e&&(n.sliderRef=e,n.sliderRef.addEventListener("touchstart",n.handleTouchStart),n.sliderRef.addEventListener("touchmove",n.handleTouchMove,{passive:!1}),n.sliderRef.addEventListener("touchend",n.handleTouchEnd))},n.handleMouseOver=function(){n.isMouseOver=!0,n.stopAutoplay()},n.handleMouseOut=function(){n.isMouseOver=!1,n.setupAutoplay()};var i=n.props,r=i.slideIndex,s=void 0===r?0:r,m=i.direction,f=void 0===m?p:m;return n.state={currentSlideIndex:s,animating:!1},n.slideCount=a.default.Children.count(n.props.children),n.direction=f,n.swipeProperty=f===p?"left":"top",n.swipeEventProperty=f===p?"clientX":"clientY",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.setupAutoplay()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,i=t.className,r=void 0===i?"slider":i,s=t.previousButton,l=void 0===s?a.default.createElement(f,{direction:this.direction===p?"left":"down"}):s,u=t.nextButton,c=void 0===u?a.default.createElement(f,{direction:this.direction===p?"right":"up"}):u,d=t.touchDisabled,m=t.autoplay,v=this.getClassNames(),y=this.isDisabled();return a.default.createElement("div",o({className:v.slider||r},!d&&{ref:this.initTouchEvents},m&&{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),a.default.createElement("a",{onClick:this.previous,className:v.previousButton+(y||!this.canGoPrevious()?" "+v.buttonDisabled:"")},l),a.default.createElement("a",{onClick:this.next,className:v.nextButton+(y||!this.canGoNext()?" "+v.buttonDisabled:"")},c),a.default.createElement("div",{className:v.track},a.default.Children.map(n,function(t,n){return a.default.cloneElement(t,{key:n,className:[v.slide,e.getSlideClass(n),t.props.className].filter(function(e){return e}).join(" ")})})))}}]),t}();t.default=v}});