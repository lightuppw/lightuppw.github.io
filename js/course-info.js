function esunCalendarConfig(e){var a=[{course:1,level:1,year:2016,month:11,day:9,title:"Курс Brow Master \n Уровень сложности 1"},{course:1,level:2,year:2016,month:11,day:10,title:"Курс Brow Master \n Уровень сложности 2"},{course:1,level:3,year:2016,month:11,day:11,title:"Курс Brow Master \n Уровень сложности 3"},{course:1,level:1,year:2016,month:11,day:27,title:"Курс Brow Master \n Уровень сложности 1"},{course:1,level:2,year:2016,month:11,day:28,title:"Курс Brow Master \n Уровень сложности 2"},{course:1,level:3,year:2016,month:11,day:29,title:"Курс Brow Master \n Уровень сложности 3"},{course:1,level:1,year:2017,month:0,day:5,title:"Курс Brow Master \n Уровень сложности 1"},{course:1,level:2,year:2017,month:0,day:6,title:"Курс Brow Master \n Уровень сложности 2"},{course:1,level:3,year:2017,month:0,day:7,title:"Курс Brow Master \n Уровень сложности 3"},{course:1,level:1,year:2017,month:0,day:30,title:"Курс Brow Master \n Уровень сложности 1"},{course:1,level:2,year:2017,month:0,day:31,title:"Курс Brow Master \n Уровень сложности 2"},{course:1,level:3,year:2017,month:1,day:1,title:"Курс Brow Master \n Уровень сложности 3"}],t=[];return a.forEach(function(a){a.course===e&&t.push(a)}),{year:2016,month:11,day:(new Date).getDate(),db:t}}function esunCalendarInit(e,a){function t(e,a){return 33-new Date(e,a,33).getDate()}function r(e){return 0===e?6:e-1}document.getElementById(e).innerHTML="";var n=esunCalendarConfig(a),d=new Date(n.year,n.month),s=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],l={number:d.getMonth(),days:t(d.getFullYear(),d.getMonth()),title:"",year:n.year,start_day:0};l.title=s[l.number],l.start_day=r(new Date(l.year,l.number,1).getDay());var c={number:11===l.number?0:l.number+1,days:0,title:"",year:n.year,start_day:0};c.year=0===c.number?n.year+1:n.year,c.days=t(c.year,c.number),c.title=s[c.number],c.start_day=r(new Date(c.year,c.number,1).getDay());var o={number:0===n.month?11:n.month-1,days:0,year:0===n.month?n.year-1:n.year,title:""};o.days=t(o.year,o.number),o.title=s[o.number];var i=document.createElement("div"),u=document.createElement("div");u.className="calendar__header",u.innerHTML='<div class="calendar__header"><div class="calendar__header-h1"><span class="extrabold">'+s[l.number]+"</span>"+l.year+'</div><div class="calendar__header-day">ПН</div><div class="calendar__header-day">ВТ</div><div class="calendar__header-day">СР</div><div class="calendar__header-day">ЧТ</div><div class="calendar__header-day">ПТ</div><div class="calendar__header-day calendar__weekend">СБ</div><div class="calendar__header-day calendar__weekend">ВС</div><div class="clear"></div></div>',i.appendChild(u),i.className="calendar__container calendar__month-1";for(var _=1,y=1;_<=42;){var v=document.createElement("div"),m="calendar__day";_<=l.start_day?(v.innerText=o.days-(l.start_day-_),m+=" calendar__prev-day"):_<=l.days+l.start_day?(v.innerText=_-l.start_day,l.number===(new Date).getMonth()&&l.year===(new Date).getFullYear()&&(_-l.start_day<(new Date).getDate()&&(m+=" calendar__passed-day"),_-l.start_day==n.day&&(m+=" calendar__current-day")),_%7!==0&&(_+1)%7!==0||(m+=" calendar__weekend")):(v.innerText=y,y+=1,m+=" calendar__next-day"),n.db.forEach(function(e){if(l.number==e.month){if(_-l.start_day==e.day){m+=" calendar__course",v.setAttribute("data-calendar",e.title),v.setAttribute("data-course",e.course),v.setAttribute("data-level",e.level);var a=document.createElement("div");a.className="calendar__course-text",a.innerText=e.title,v.appendChild(a)}}else if(_<=l.start_day){var t=o.year,r=o.number,n=o.days-(l.start_day-_);if(e.day==n&&e.month==r&&e.year==t){m+=" calendar__course",v.setAttribute("data-calendar",e.title),v.setAttribute("data-course",e.course),v.setAttribute("data-level",e.level);var a=document.createElement("div");a.className="calendar__course-text",a.innerText=e.title,v.appendChild(a)}}}),v.className=m,i.appendChild(v),_+=1}i.className=i.className+" wow flipInY",document.getElementById(e).appendChild(i);var h=document.createElement("div"),f=document.createElement("div");f.className="calendar__header",f.innerHTML='<div class="calendar__header"><div class="calendar__header-h1"><span class="extrabold">'+s[c.number]+"</span>"+c.year+'</div><div class="calendar__header-day">ПН</div><div class="calendar__header-day">ВТ</div><div class="calendar__header-day">СР</div><div class="calendar__header-day">ЧТ</div><div class="calendar__header-day">ПТ</div><div class="calendar__header-day calendar__weekend">СБ</div><div class="calendar__header-day calendar__weekend">ВС</div><div class="clear"></div></div>',h.appendChild(f),h.className="calendar__container calendar__month-2";for(var _=1,y=1;_<=42;){var v=document.createElement("div"),m="calendar__day";_<=c.start_day?(v.innerText=l.days-(c.start_day-_),m+=" calendar__prev-day"):_<=c.days+c.start_day?(_%7!==0&&(_+1)%7!==0||(m+=" calendar__weekend"),v.innerText=_-c.start_day,_-c.start_day==(new Date).getDate()&&c.number===(new Date).getMonth()&&c.year===(new Date).getFullYear()&&(m+=" calendar__current-day")):(v.innerText=y,y+=1,m+=" calendar__next-day"),n.db.forEach(function(e){if(c.number==e.month){if(_-c.start_day==e.day){m+=" calendar__course",v.setAttribute("data-calendar",e.title),v.setAttribute("data-course",e.course),v.setAttribute("data-level",e.level);var a=document.createElement("div");a.className="calendar__course-text",a.innerText=e.title,v.appendChild(a)}}else if(_<=c.start_day,_>c.days+c.start_day){var t=11===c.number?c.year+1:c.year,r=11===c.number?0:c.number+1,n=y-1;if(e.day==n&&e.month==r&&e.year==t){m+=" calendar__course",v.setAttribute("data-calendar",e.title),v.setAttribute("data-course",e.course),v.setAttribute("data-level",e.level);var a=document.createElement("div");a.className="calendar__course-text",a.innerText=e.title,v.appendChild(a)}}}),v.className=m,h.appendChild(v),_+=1}h.className=h.className+" wow flipInY",h.setAttribute("data-wow-delay",".2s"),document.getElementById(e).appendChild(h),$(".calendar__course").click(function(e){var a=$(e.target).attr("data-course"),t=$(e.target).attr("data-level");$(".calendar__course").removeClass("calendar__day-picked"),$(this).addClass("calendar__day-picked"),courseDayPlanRender(a,t)})}function courseDayPlanRender(e,a){document.getElementById("course-info__plan-list").innerHTML="";var t={course:[]};if($(courses_db).each(function(a,r){r.id===parseInt(e)&&(t.course=r)}),void 0!==t.course&&void 0!==t.course.levels[a-1]){var r="";$(t.course.levels[a-1].day_plan).each(function(e,a){r+='<div class="course-info__plan-item"><div class="course-info__plan-item-time">',r+=a.time,r+='</div><div class="course-info__plan-item-title">',r+=a.title,r+="</div></div>"}),""===r&&(r="<div>Расписание отсутствует</div>"),document.getElementById("course-info__plan-list").innerHTML=r}}function courseDayPlanClear(){document.getElementById("course-info__plan-list").innerHTML="Выберите курс на календаре"}function courseInfoNav(e){esunCalendarInit("calendar",parseInt(e)),esunCourseInfoRender(parseInt(e)),$(".course-info__nav-item").each(function(a,t){$(t).removeClass("course-info__nav-item-active"),parseInt($(t).attr("data-course"))===parseInt(e)&&$(t).addClass("course-info__nav-item-active")})}function courseInfoShow(e){$(".course-info__wrapper").css("top",$(window).scrollTop()+20+"px");var a=$("#course-info__wrapper");$(a).fadeIn(150),courseInfoNav(e),courseDayPlanClear()}function courseInfoClose(){var e=$("#course-info__wrapper");$(e).fadeOut(150)}function esunCourseInfoRender(e){var a={levels:[]};$(courses_db).each(function(t,r){e===r.id&&(a=r)}),$(".course-info__table-heading-0").html(a.title_html);for(var t=0;t<4;)void 0!==a.levels[t]?($(".course-info__table-heading-"+(t+1)).html('<span class="esun-color">'+a.levels[t].title+"</span><br>"+a.levels[t].subtitle_html),$(".course-info__internally-"+(t+1)).html(a.levels[t].internally),$(".course-info__countStudents-"+(t+1)).html(a.levels[t].countStudents),$(".course-info__days-"+(t+1)).html(a.levels[t].days),$(".course-info__hours-"+(t+1)).html(a.levels[t].hours),$(".course-info__models-"+(t+1)).html(a.levels[t].models),$(".course-info__price-"+(t+1)).html(a.levels[t].price)):($(".course-info__table-heading-"+(t+1)).html(" "),$(".course-info__internally-"+(t+1)).html(" "),$(".course-info__countStudents-"+(t+1)).html(" "),$(".course-info__days-"+(t+1)).html(" "),$(".course-info__hours-"+(t+1)).html(" "),$(".course-info__models-"+(t+1)).html(" "),$(".course-info__price-"+(t+1)).html(" ")),t+=1}var courses_db;$(function(){$("#course-info__wrapper");$.ajax({url:"/js/json/coursesConfig.json",dataType:"json",success:function(e){courses_db=e}}),$(".course-info__nav-item").click(function(){courseInfoNav($(this).data("course"))}),$(".course-info__caller").click(function(){var e;e=$(this).attr("data-course")?$(this).attr("data-course"):1,courseInfoShow(e)}),$(document).click(function(e){$(e.target).closest(".course-info__wrapper, .course-info__caller").length||courseInfoClose()})});