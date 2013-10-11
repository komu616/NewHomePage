/**
 * UI.Elements
 *
 * @version      1.0
 * @author       nori (norimania@gmail.com)
 * @copyright    5509 (http://5509.me/)
 * @license      The MIT License
 * @link         https://github.com/5509/ui.elements
 *
 * 2012-04-04 22:09
 */
(function($, window, document, undefined) {

  $.fn.UIElements = function(conf) {
    var $form = this,
      runConfs = {
        select: {
          strLength          : 10,
          uiClass            : 'UI-select',
          uiShownClass       : 'UI-select-show',
          boxClass           : 'UI-select-box',
          boxListClass       : 'UI-select-option',
          optionCurrentClass : 'current'
        }
      };

    $.each(conf, function(key, val) {
      $.each(val, function(i, val) {
        switch ( key ) {
        default:
          $form
            .find('select[name="' + val.name + '"]')
            .select($.extend(runConfs.select, val.conf || {}));
        }
      });
    });
  };

}(jQuery, this, this.document));

/*!
 * jq.ui.select
 *
 * @version      0.1
 * @author       nori (norimania@gmail.com)
 * @copyright    5509 (http://5509.me/)
 * @license      The MIT License
 *
 */
(function(a,b,c){function d(a,b){this.namespace="Select";return this instanceof d?this.init(a,b):new d(a,b)}d.prototype={confBase:{strLength:10,uiClass:"UI-select",uiShownClass:"UI-select-show",boxClass:"UI-select-box",boxListClass:"UI-select-option",optionCurrentClass:"current"},init:function(b,c){var d=this;d.conf=a.extend({},d.confBase,c);d.state=!1;d.name=b.prop("name");d.$select=b.hide();d.$options=b.find("option");d.defaultVal=d.$options.filter(function(){return this.selected}).text();d._view();d._eventify()},_eventify:function(){var b=this,d=b.conf,e=b.$select,f=b.$view,g=b.$viewBox,h=b.$box,i=b.$boxOptions;f.bind({"click.select":function(a){a.preventDefault();g.is(":visible")?b._hide():b._show()}});i.bind({"click.selectOption":function(a){a.preventDefault();b._hide();b._setVal(this.getAttribute("data-select-val"),this.textContent||this.innerText);b.$boxOptions.removeClass(d.optionCurrentClass);this.className=d.optionCurrentClass}});a(c).bind({"click.selectDoc":function(a){var c=a.target,d=c.getAttribute("data-select-name"),e=c.getAttribute("data-select-type");if(e==="selectView"&&d===b.name||e==="selectBoxOption")return;b._hide()}})},_htmlSpan:function(a){var b=this;return["<span ",'data-select-type="selectView" ','data-select-name="'+b.name+'"',">",b._getTrimVal(a),"</span>"].join("")},_view:function(){var b=this,c=b.conf,d=b.$options;b.$box=b.$select.wrap("<span></span>").parent().addClass(c.boxClass);b.$view=a("<a></a>",{href:"javascript:void(0)","data-select-type":"selectView","data-select-name":b.name,"class":c.uiClass,html:b._htmlSpan(b.defaultVal)});b.$viewBox=function(){var b=[],e=d.length,f=0;b.push('<ul class="'+c.boxListClass+'">');for(;f<e;f++)b.push("<li>",'<a href="#"','   data-select-val="'+d[f].value+'"','   data-select-type="selectBoxOption"','   class="'+(d[f].selected?"current":"")+'"',">",d.eq(f).text(),"</a>","</li>");b.push("</ul>");return a(b.join("")).hide()}();b.$box.append(b.$view,b.$viewBox);b.$boxOptions=b.$viewBox.find("a")},_show:function(){var a=this;a.$viewBox.stop(!0,!0).slideDown(100);a.$box.addClass(a.conf.uiShownClass)},_hide:function(){var a=this;a.$viewBox.stop(!0,!0).slideUp(100);a.$box.removeClass(a.conf.uiShownClass)},_getTrimVal:function(a){var b=this,c=b.conf,d=function(a,b){return a.substring(0,b)+"..."};return a.length>c.strLength?d(a,c.strLength):a},_setVal:function(a,b){var c=this;c.$select.val(a);c.$view.html(c._htmlSpan(c._getTrimVal(b)))}};a.fn.select=function(a){d(this,a);return this}})(jQuery,this,this.document);