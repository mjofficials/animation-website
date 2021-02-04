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

    $("#success-stories-carousel").on("slid.bs.carousel", function () {
        var activeScreen = $("#success-stories-carousel .item.active").attr("data-activescreen");
        $(".success-screens-item").removeClass("active");
        $("." + activeScreen).addClass("active");
    });
}
/*
     FILE ARCHIVED ON 11:32:40 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:17:01 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 214.249 (3)
  exclusion.robots.policy: 0.281
  RedisCDXSource: 2.464
  load_resource: 139.099
  CDXLines.iter: 21.388 (3)
  PetaboxLoader3.resolve: 49.497
  captures_list: 242.891
  exclusion.robots: 0.294
  PetaboxLoader3.datanode: 255.399 (4)
  esindex: 0.033
*/
