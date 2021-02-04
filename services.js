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
        $.jCanvas.defaults.fromCenter = false;
        $("#mobileservices")
            .addLayer({ name: "base", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/base.png", x: 0, y: 227, opacity: 0 })
            .addLayer({ name: "dottedline", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/dotted-lines.png", x: 364, y: 0, opacity: 0 })
            .addLayer({ name: "graph", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/graph.png", x: -140, y: 285, opacity: 0 })
            .addLayer({ name: "mobiledevice", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/mobile-device.png", x: 308, y: 0, opacity: 0 })
            .addLayer({ name: "code", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/code.png", x: 480, y: -60, opacity: 0 })
            .addLayer({ name: "toggle", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/toggle-buttons.png", x: 606, y: 215, opacity: 0 })
            .addLayer({ name: "graph1", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/graph1.png", x: 245, y: 0, opacity: 0 })
            .addLayer({ name: "graph2", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/graph2.png", x: 203, y: 0, opacity: 0 })
            .addLayer({ name: "graph3", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/graph3.png", x: 160, y: 0, opacity: 0 })
            .addLayer({ name: "search", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/search.png", x: 100, y: 56, opacity: 0 })
            .addLayer({ name: "like", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/like.png", x: 511, y: 0, opacity: 0 })
            .addLayer({ name: "share", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/share.png", x: 438, y: 0, opacity: 0 })
            .addLayer({ name: "comment", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/comment.png", x: 367, y: 0, opacity: 0 })
            .addLayer({ name: "gearwheels", type: "image", source: "template/home-page-assets/services/img/mobile-canvas/gear-wheels.png", x: 437, y: 0, opacity: 0 })
            .drawLayers();
        $(window).scroll(function () {
            if ($(window).scrollTop() > $("#mobileservices").offset().top - window.innerHeight / 2) {
                $("#mobileservices").animateLayer("base", { y: 177, opacity: 1 }, 400, function (layer) {
                    $(this).animateLayer("mobiledevice", { y: 61, opacity: 1 }, 400, function (layer) {
                        $(this).animateLayer("graph", { opacity: 1, x: 0, y: 204 }, 400);
                        $(this).animateLayer("toggle", { opacity: 1, x: 478, y: 286 }, 400);
                        $(this).animateLayer("code", { y: 60, opacity: 1 }, 400, function (layer) {
                            $(this).animateLayer("dottedline", { opacity: 1 }, 400);
                            $(this).animateLayer("search", { opacity: 1, x: 221 }, 400, function (layer) {
                                $(this).animateLayer("graph1", { opacity: 1, y: 305 }, 400, function (layer) {
                                    $(this).animateLayer("graph2", { opacity: 1, y: 330 }, 400, function (layer) {
                                        $(this).animateLayer("graph3", { opacity: 1, y: 354 }, 400, function (layer) {
                                            $(this).animateLayer("like", { opacity: 1, y: 425 }, 400, function (layer) {
                                                $(this).animateLayer("share", { opacity: 1, y: 464 }, 400, function (layer) {
                                                    $(this).animateLayer("comment", { opacity: 1, y: 507 }, 400);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
        $("#webservices")
            .addLayer({ type: "image", name: "base", source: "template/home-page-assets/services/img/web-canvas/base.png", x: 0, y: 294, opacity: 0 })
            .addLayer({ name: "server", type: "image", source: "template/home-page-assets/services/img/web-canvas/server.png", x: 137, y: 340, opacity: 0 })
            .addLayer({ name: "line2", type: "image", source: "template/home-page-assets/services/img/web-canvas/line2.png", x: 138, y: 178, opacity: 0 })
            .addLayer({ name: "line3", type: "image", source: "template/home-page-assets/services/img/web-canvas/line3.png", x: 202, y: 68, opacity: 0 })
            .addLayer({ name: "api", type: "image", source: "template/home-page-assets/services/img/web-canvas/api.png", x: 97, y: 0, opacity: 0 })
            .addLayer({ name: "computer", type: "image", source: "template/home-page-assets/services/img/web-canvas/computer.png", x: 137, y: -45, opacity: 0 })
            .addLayer({ name: "mouse", type: "image", source: "template/home-page-assets/services/img/web-canvas/mouse.png", x: 752, y: 366, opacity: 0 })
            .addLayer({ name: "keyboard", type: "image", source: "template/home-page-assets/services/img/web-canvas/keyboard.png", x: 512, y: 392, opacity: 0 })
            .addLayer({ name: "documents", type: "image", source: "template/home-page-assets/services/img/web-canvas/documents.png", x: 387, y: 514, opacity: 0 })
            .addLayer({ name: "line1", type: "image", source: "template/home-page-assets/services/img/web-canvas/line1.png", x: 8, y: 514, opacity: 0 })
            .addLayer({ name: "database", type: "image", source: "template/home-page-assets/services/img/web-canvas/database.png", x: 350, y: 562, opacity: 0 })
            .addLayer({ name: "admin-view", type: "image", source: "template/home-page-assets/services/img/web-canvas/admin-view.png", x: -36, y: 471, opacity: 0 })
            .addLayer({ name: "web-view", type: "image", source: "template/home-page-assets/services/img/web-canvas/web-view.png", x: 565, y: 147, opacity: 0 })
            .addLayer({ name: "mobile-view", type: "image", source: "template/home-page-assets/services/img/web-canvas/mobile-view.png", x: 758, y: 220, opacity: 0 })
            .drawLayers();
        $(window).scroll(function () {
            if ($(window).scrollTop() > $("#webservices").offset().top - window.innerHeight / 2) {
                $("#webservices").animateLayer("base", { y: 194, opacity: 1 }, 400, function (layer) {
                    $(this).animateLayer("computer", { opacity: 1, x: 211, y: 0 }, 400, function (layer) {
                        $(this).animateLayer("server", { opacity: 1, x: 71, y: 375 }, 400);
                        $(this).animateLayer("database", { opacity: 1, x: 419, y: 598 }, 400);
                        $(this).animateLayer("documents", { opacity: 1, x: 442, y: 558 }, 400);
                        $(this).animateLayer("keyboard", { opacity: 1, x: 578, y: 429 }, 400);
                        $(this).animateLayer("mouse", { opacity: 1, x: 801, y: 402 }, 400);
                        $(this).animateLayer("api", { opacity: 1, x: 97, y: 108 }, 400, function (layer) {
                            $(this).animateLayer("admin-view", { opacity: 1, x: 96, y: 392 }, 400);
                            $(this).animateLayer("web-view", { opacity: 1, x: 436, y: 206 }, 400);
                            $(this).animateLayer("mobile-view", { opacity: 1, x: 758, y: 189 }, 400);
                            $(this).animateLayer("line1", { opacity: 1 }, 400);
                            $(this).animateLayer("line2", { opacity: 1 }, 400);
                            $(this).animateLayer("line3", { opacity: 1 }, 400);
                        });
                    });
                });
            }
        });
    });
}
/*
     FILE ARCHIVED ON 11:30:23 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:10:27 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 143.143
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.174
  RedisCDXSource: 1.928
  esindex: 0.025
  LoadShardBlock: 117.48 (3)
  PetaboxLoader3.datanode: 98.207 (4)
  CDXLines.iter: 20.695 (3)
  PetaboxLoader3.resolve: 92.369 (2)
  load_resource: 110.532
*/
