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

    $(document).ready(function () {
        if (window.innerWidth > 991) {
            $(window).scroll(function () {
                var prtfloSctnTop = $(".portfolio-section").offset().top,
                    prtfloSctnHeight = $(".portfolio-section").height(),
                    prtfloTtlHeight = $(".portfolio-section .table").height(),
                    prtfloTtlBtm = prtfloSctnTop + prtfloSctnHeight - prtfloTtlHeight;
                if ($(window).scrollTop() > prtfloSctnTop && $(window).scrollTop() < prtfloTtlBtm) {
                    $(".portfolioTitle").css({ position: "fixed", top: "", bottom: "" });
                } else if ($(window).scrollTop() > prtfloTtlBtm) {
                    $(".portfolioTitle").css({ position: "", top: "auto", bottom: "0" });
                } else {
                    $(".portfolioTitle").css({ position: "", top: "", bottom: "" });
                }
                if ($(window).scrollTop() < prtfloSctnTop) {
                    $(".portfolio-section ul.number-info li").css({ transform: "translateY(0px)" });
                }
                if ($(window).scrollTop() > prtfloSctnTop + (prtfloSctnHeight / 4) * 0) {
                    $(".portfolio-section ul.number-info li").css({ transform: "translateY(-200px)" });
                }
                if ($(window).scrollTop() > prtfloSctnTop + (prtfloSctnHeight / 4) * 1) {
                    $(".portfolio-section ul.number-info li").css({ transform: "translateY(-400px)" });
                }
                if ($(window).scrollTop() > prtfloSctnTop + (prtfloSctnHeight / 4) * 2) {
                    $(".portfolio-section ul.number-info li").css({ transform: "translateY(-600px)" });
                }
                if ($(window).scrollTop() > prtfloSctnTop + (prtfloSctnHeight / 4) * 3) {
                    $(".portfolio-section ul.number-info li").css({ transform: "translateY(-800px)" });
                }
            });
        }
    });
}
/*
     FILE ARCHIVED ON 11:32:35 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:55:40 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.716
  RedisCDXSource: 40.894
  CDXLines.iter: 18.046 (3)
  exclusion.robots.policy: 0.218
  esindex: 0.03
  PetaboxLoader3.datanode: 63.358 (4)
  LoadShardBlock: 59.969 (3)
  PetaboxLoader3.resolve: 73.304
  exclusion.robots: 0.24
  load_resource: 106.94
*/
