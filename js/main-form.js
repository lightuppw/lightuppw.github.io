$(function(){function i(){var i=s.napravleniya,n="";i.forEach(function(i,e,a){var t="";0==e&&(t="current"),n+='<div data-id="'+i.id+'" class="selector__item '+t+'">'+i.title+"</div>"}),$("#main-form__napravlenie .selector__body").html(n)}function n(i,n){var e=$(i).attr("id");if("main-form__napravlenie"==e){var a=$(i).find(".selector__item").eq(n).data("id"),t=s.napravleniya[a-1];if(t.id==a){var o="";t.specialnosti.forEach(function(i,n,e){var a="";0==n&&(a="current"),o+='<div data-id="'+(n+1)+'" class="selector__item '+a+'">'+i+"</div>"}),$("#main-form__specialnost").data("current","0"),setTimeout(function(){$("#main-form__specialnost .selector__body").html(o)},100)}}}function e(){if($(".main-form__first-form").css("display","block"),$(".main-form__second-form").css("display","none"),$(".main-form__complete").css("display","none"),$(".main-form__name-h1").removeClass("error"),$(".main-form__phone-h1").removeClass("error"),m=!0,$(".main-form").fadeIn(150),window.innerWidth<992){var i=$(window).scrollTop();$(window).scrollTop()<155&&(i=155),window.innerWidth>=768&&(i+=50),$(".main-form").css("top",i+20+"px")}setTimeout(function(){r=!0},150)}function a(){$(".main-form").fadeOut(150),setTimeout(function(){r=!1,$(".main-form__first-form").css("display","block"),$(".main-form__second-form").css("display","none"),$(".main-form__complete").css("display","none"),$(".main-form__name-h1").removeClass("error"),$(".main-form__phone-h1").removeClass("error")},150)}function t(){var i={name:$(".main-form__input-name").val(),phone:$(".main-form__input-phone").val(),email:$(".main-form__input-email").val()},n=!1;0==i.name.length&&($(".main-form__name-h1").addClass("error"),n=!0),0==i.phone.length&&($(".main-form__phone-h1").addClass("error"),n=!0),n||($.ajax({url:"/php/form.php",type:"post",data:{data:i}}),window.innerWidth<=1024&&$(window).scrollTop(parseInt($(".main-form").css("top"))-20),$(".main-form__first-form").css("display","none"),$(".main-form__second-form").fadeIn(150))}function o(){var i={name:$(".main-form__input-name").val(),phone:$(".main-form__input-phone").val(),email:$(".main-form__input-email").val(),city:$(".main-form__input-city").val(),activity:$(".main-form__input-activity").val()};window.innerWidth<=1024&&$(window).scrollTop(parseInt($(".main-form").css("top"))-20),$.ajax({url:"/php/form.php",type:"post",data:{data:i}}),$(".main-form__second-form").css("display","none"),$(".main-form__complete").fadeIn(150),m=!1,setTimeout(function(){m||a()},5e3)}var r=!1,m=!1;$(".selector").each(function(i,n){$(this).attr("waiting","0")}),$(".main-form__input").focus(function(){$(this).data("placeholder")&&$("#"+$(this).data("placeholder")).addClass("placeholder-hide")}),$(".main-form__input").focusout(function(){$(this).data("placeholder")&&($(this).val()||$("#"+$(this).data("placeholder")).removeClass("placeholder-hide"))});var s={napravleniya:[{id:1,title:"Курс BROW MASTER",specialnosti:["BROW TOP MASTER . Все 3 уровня.","Архитектура, Коррекция, Триддинг, Макияж.","Окрашивание стойкими красителями.","Наращивание и маникюр бровей."]},{id:2,title:"Татуаж",specialnosti:["Полный курс ручного татуажа бровей.","Ручные техники татуажа.","Микроблейдинг бровей.","Шотирование бровей. Техника градиент.","Волосок + тень. Техника пушистые брови."]},{id:3,title:"Колористика",specialnosti:["Колористика обширный курс.","Архитектурная колористика. Эстетика.","Колористика пигментов в татуаже бровей."]},{id:4,title:"Повышение квалификации",specialnosti:["???"]},{id:5,title:"Губы",specialnosti:["Микроблейдинг губ"]}]};i(),n($("#main-form__napravlenie"),0),$(".selector__btn-right, .selector__btn-left").click(function(){var i=$(this).parent();if("0"==$(i).attr("waiting")){var e=$(i).data("current"),a=$(i).find(".selector__item").length,t=$(this).data("type");"next"==t&&e+1<a&&(e=parseInt(e)+1,$(i).data("current",e),$(i).find(".selector__item").removeClass("current"),$(i).find(".selector__item").removeClass("slide-left"),$(i).find(".selector__item").removeClass("slide-right"),$(i).find(".selector__item").eq(e).addClass("current"),n(i,e),console.log(e)),"prev"==t&&e>0&&(e=parseInt(e)-1,$(i).data("current",e),$(i).find(".selector__item").removeClass("current"),$(i).find(".selector__item").removeClass("slide-left"),$(i).find(".selector__item").removeClass("slide-right"),$(i).find(".selector__item").eq(e).addClass("current"),n(i,e)),$(i).attr("waiting","1"),setTimeout(function(){$(i).attr("waiting","0")},300)}}),$(document).click(function(i){$(i.target).hasClass("main-form__toogle")&&e()}),$(".main-form__close-btn").click(function(){a()}),$(document).click(function(i){if(r){if($(i.target).closest(".main-form, .main-form__toogle").length)return;a()}}),$(".main-form__input-name").on("input",function(){$(this).val().length>0&&$(".main-form__name-h1").removeClass("error")}),$(".main-form__input-phone").on("input",function(){$(this).val().length>0&&$(".main-form__phone-h1").removeClass("error")}),$(".main-form__first-form .main-form__submit").click(function(){t()}),$(".main-form__second-form .main-form__submit").click(function(){o()})});