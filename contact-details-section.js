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
        $(".contactus-section .form-group input, .form-group textarea").focus(function () {
            $(this).parent(".form-group").addClass("active");
        });
        $(".contactus-section .form-group input, .form-group textarea").blur(function () {
            if ($(this).val().length === 0) {
                $(this).parent(".form-group").removeClass("active");
            }
        });
    });
}
/*
     FILE ARCHIVED ON 11:33:26 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:49:32 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 156.397
  exclusion.robots: 0.222
  exclusion.robots.policy: 0.21
  RedisCDXSource: 1.747
  esindex: 0.011
  LoadShardBlock: 130.051 (3)
  PetaboxLoader3.datanode: 133.729 (4)
  CDXLines.iter: 21.344 (3)
  load_resource: 77.337
  PetaboxLoader3.resolve: 28.254
*/
