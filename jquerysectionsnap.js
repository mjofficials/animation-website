var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    };
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function ($) {
        $.fn.sectionsnap = function (options) {
            var settings = $.extend({ delay: 100, selector: ".section", reference: 0.9, animationTime: 400, offsetTop: 0, offsetBottom: 0 }, options);
            var $wrapper = this,
                direction = "down",
                currentScrollTop = $(window).scrollTop(),
                scrollTimer,
                animating = false;
            var updateDirection = function () {
                if ($(window).scrollTop() >= currentScrollTop) direction = "down";
                else direction = "up";
                currentScrollTop = $(window).scrollTop();
            };
            var getClosestElement = function () {
                var $list = $wrapper.find(settings.selector),
                    wt = $(window).scrollTop(),
                    wh = $(window).height(),
                    refY = wh * settings.reference,
                    wtd = wt + refY - 1,
                    $target;
                if (direction == "down") {
                    $list.each(function () {
                        var st = $(this).position().top;
                        if (st > wt && st <= wtd) {
                            $target = $(this);
                            return false;
                        }
                    });
                } else {
                    wtd = wt - refY + 1;
                    $list.each(function () {
                        var st = $(this).position().top;
                        if (st < wt && st >= wtd) {
                            $target = $(this);
                            return false;
                        }
                    });
                }
                return $target;
            };
            var snap = function () {
                var $target = getClosestElement();
                if ($target) {
                    $(".success-story-item").removeClass("active");
                    $($target).addClass("active");
                    var activeIndicat = $(".success-story-item.active").attr("data-indicate");
                    $(".success-screens-item").removeClass("active");
                    $(".success-stories-indicator ul li").removeClass("active");
                    $("." + activeIndicat).addClass("active");
                    animating = true;
                    $("html, body").animate({ scrollTop: $target.offset().top }, settings.animationTime, function () {
                        window.clearTimeout(scrollTimer);
                        animating = false;
                    });
                }
            };
            var windowScroll = function () {
                if (animating) return;
                var st = $(window).scrollTop();
                if (st < settings.offsetTop) return;
                if (st > $("html").height() - $(window).height() - settings.offsetBottom) return;
                updateDirection();
                window.clearTimeout(scrollTimer);
                scrollTimer = window.setTimeout(snap, settings.delay);
            };
            $(window).scroll(windowScroll);
            return this;
        };
    })(jQuery);
}
/*
     FILE ARCHIVED ON 11:32:51 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:03:55 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 132.856
  RedisCDXSource: 9.694
  CDXLines.iter: 21.599 (3)
  exclusion.robots.policy: 0.268
  esindex: 0.019
  PetaboxLoader3.datanode: 106.035 (4)
  LoadShardBlock: 98.289 (3)
  PetaboxLoader3.resolve: 138.858
  exclusion.robots: 0.28
  load_resource: 189.518
*/
