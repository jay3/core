/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-image-wysiwyg",["jquery-nos","wijmo.wijtabs"],function(a){a.fn.extend({nosImageWysiwyg:function(b){b=b||{newImg:true,appdeskView:"",base_url:"",texts:{imageFirst:"Please choose an image first"}};return this.each(function(){var s=a(this).find("> form").submit(function(A){s.find("button[data-id=save]").triggerHandler("click");A.stopPropagation();A.preventDefault()}).end().find("a[data-id=close]").click(function(A){A.preventDefault();s.nosDialog("close")}).end().find("button[data-id=save]").click(function(B){var A=a("<img />");if(!h||!h.id){a.nosNotify(b.texts.imageFirst,"error");return}A.attr("height",u.val());A.attr("width",g.val());A.attr("title",q.val());A.attr("alt",j.val());A.attr("style",m.val());A.attr("data-media",JSON.stringify(h));A.attr("src",h.path);y.trigger("insert.media",A);B.stopPropagation();B.preventDefault()}).end().find("> ul").css({width:"18%"}).end(),y=s.closest(".ui-dialog-content").bind("select_media",function(B,A){x(A)}),d=s.find("div:eq(0)").css({width:"100%",padding:0,margin:0}),n=s.find("img").hide().parent().css("vertical-align","top").end(),u=s.find("input[data-id=height]"),g=s.find("input[data-id=width]").bind("change keyup",function(){if(o.is(":checked")&&h&&h.width&&h.height){var e=g.val();u.val(e==""?"":Math.round(e*h.height/h.width))}}),q=s.find("input[data-id=title]").bind("change keyup",function(){if(z.is(":checked")){j.val(q.val())}}),j=s.find("input[data-id=alt]"),k=s.find("select[data-id=align]").change(function(){r()}),w=s.find("input[data-id=border]").change(function(){r()}),p=s.find("input[data-id=vspace]").change(function(){r()}),t=s.find("input[data-id=hspace]").change(function(){r()}),m=s.find("input[data-id=style]").change(function(){var e=a('<img style="'+m.val()+'" />');k.val(i(e,"align"));w.val(i(e,"border"));p.val(i(e,"vspace"));t.val(i(e,"hspace"))}),o=s.find("input[data-id=proportional]").change(function(){if(o.is(":checked")){u.attr("readonly",true).addClass("ui-state-disabled");g.triggerHandler("change")}else{u.removeAttr("readonly").removeClass("ui-state-disabled")}}),z=s.find("input[data-id=same_title_alt]").change(function(){if(z.is(":checked")){j.attr("readonly",true).addClass("ui-state-disabled")}else{j.removeAttr("readonly").removeClass("ui-state-disabled")}q.triggerHandler("change")}),h=null,r=function(){var e,A=a('<img style="'+m.val()+'" />');e=k.val();if(e){if(e=="left"||e=="right"){A.css("float",e);A.css("vertical-align","")}else{A.css("vertical-align",e);A.css("float","")}}else{A.css("float","");A.css("vertical-align","")}e=w.val();if(e&&e!=="0"){A.css("border-width",e+"px");if(!A.css("border")&&!A.css("border-color")&&!A.css("border-style")){A.css("border",e+"px solid black")}}else{A.css("border","")}A.css("margin","");e=t.val();if(e&&e!=="0"){A.css("margin-left",e+"px");A.css("margin-right",e+"px")}e=p.val();if(e&&e!=="0"){A.css("margin-top",e+"px");A.css("margin-bottom",e+"px")}m.val(A.attr("style"))},i=function(B,e){var A,C;switch(e){case"align":A=a(B).css("float");if(A&&A!="none"){return A}if(A=a(B).css("vertical-align")){return A}break;case"hspace":A=a(B).css("margin-left");C=a(B).css("margin-right");if(A&&A==C){A=parseInt(A.replace(/[^0-9]/g,""));return A||""}break;case"vspace":A=a(B).css("margin-top");C=a(B).css("margin-bottom");if(A&&A==C){A=parseInt(A.replace(/[^0-9]/g,""));return A||""}break;case"border":A=0;a.each(["top","right","bottom","left"],function(D,E){E=a(B).css("border-"+E+"-width");if(!E||(E!=A&&A!==0)){A=0;return false}if(E){A=E}});if(A){A=parseInt(A.replace(/[^0-9]/g,""));return A||""}break}return""},x=function(A,e){h=A;if(h&&h.thumbnail){n.attr("src",h.thumbnail.replace(/64/g,"128")).show()}if(e==null){u.val(A.height);g.val(A.width);q.val(A.title);j.val(A.title);k.val("");w.val("");p.val("");t.val("");m.val("");s.wijtabs("enableTab",1).wijtabs("select",1);return}u.val(e.attr("height"));g.val(e.attr("width"));q.val(e.attr("title"));j.val(e.attr("alt"));k.val(i(e,"align"));w.val(i(e,"border"));p.val(i(e,"vspace"));t.val(i(e,"hspace"));m.val(e.attr("style"));r();if(h&&(Math.round(g.val()*h.height/h.width)!=u.val())){o.prop("checked",false).change()}if(q.val()!=j.val()){z.prop("checked",false).change()}},f=y.data("tinymce"),v=f.selection.getNode();if(v.nodeName=="IMG"){var l=a(v),c=l.data("media-id");if(c){a.ajax({method:"GET",url:b.base_url+"admin/noviusos_media/appdesk/info/"+c,dataType:"json",success:function(e){x(e,l)}})}else{x(l.data("media"),l)}}s.wijtabs({alignment:"left",load:function(C,B){var A=a(B.panel).outerHeight(true)-a(B.panel).innerHeight();a(B.panel).height(y.height()-A)},disabledIndexes:b.newImg?[1]:[],show:function(B,A){a(A.panel).nosOnShow()}}).find(".wijmo-wijtabs-content").css({width:"81%",position:"relative"}).addClass("box-sizing-border").end().nosFormUI();o.triggerHandler("change");z.triggerHandler("change");if(!b.newImg){s.wijtabs("select",1).bind("wijtabsshow",function(){d.html(b.appdeskView)})}else{d.html(b.appdeskView)}})}});return a});