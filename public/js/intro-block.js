function introCenterer(){function o(){$(".intro__center").css({bottom:windowChecker.matches?($(window).height()-$(".intro__bottom-container").height()-$(".main-header").height()-$(".intro__center").height())/2+$(".intro__bottom-container").height():$(".intro__bottom-container").height()+.1162*$(window).height()})}$(window).on("resize",(function(){o()})),o()}$(window).on("scroll",(function(){let o,t;windowChecker.matches?(o=65e-5*$(window).height(),t=131e-7*$(".intro__center").height()):(o=.0015*$(window).height(),t=35e-6*$(".intro__center").height()),$("#intro__bg").css({opacity:1-$(window).scrollTop()*t}),$(".intro__center").css({opacity:1-$(window).scrollTop()*t}),$(".intro__bottom-container").css({paddingBottom:$(window).scrollTop()*o})}));