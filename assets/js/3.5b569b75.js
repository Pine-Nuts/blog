(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{267:function(e,i,t){},289:function(e,i,t){"use strict";t(267)},295:function(e,i,t){"use strict";t.r(i);var c={name:"BlogHome",data:()=>({pcImageSrc:"/home/home-background-pc.jpg",mobileImageSrc:"/home/home-background-mobile.jpg",deviceType:null}),computed:{imageSrc(){return"pc"===this.deviceType?this.$withBase(this.pcImageSrc):this.$withBase(this.mobileImageSrc)}},mounted(){this.detectDeviceType(),window.addEventListener("resize",()=>{this.detectDeviceType()})},methods:{detectDeviceType(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.deviceType="mobile":this.deviceType="pc"}},beforeDestroy(){window.removeEventListener("resize",()=>{this.detectDeviceType()})}},s=(t(289),t(0)),o=Object(s.a)(c,(function(){var e=this._self._c;return e("div",{staticClass:"home-container"},[e("img",{attrs:{src:this.imageSrc,alt:"",srcset:""}})])}),[],!1,null,"95351d4c",null);i.default=o.exports}}]);