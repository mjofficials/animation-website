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
        function restartanim() {
            circleIOS.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleios.animate({ transform: "s0 0" }, 0, mina.easein),
                circleANDROID.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleAndroid.animate({ transform: "s0 0" }, 0, mina.easein),
                circleIONIC.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleIonic.animate({ transform: "s0 0" }, 0, mina.easein),
                circleANGULAR.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleAngular.animate({ transform: "s0 0" }, 0, mina.easein),
                circleNODE.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleNode.animate({ transform: "s0 0" }, 0, mina.easein),
                circlePHONEGAP.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisiblePhonegap.animate({ transform: "s0 0" }, 0, mina.easein),
                circleHTML.animate({ transform: "s0 0" }, 0, mina.easein),
                circleMaskVisibleHTML.animate({ transform: "s0 0" }, 0, mina.easein),
                setTimeout(function () {
                    anim1();
                }, 100);
        }
        var s = Snap("#services-mi");
        s.attr({ opacity: 1 }),
            (circleIOS = s.select(".hide-ios-circle")),
            circleIOS.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circleANDROID = s.select(".hide-android-circle")),
            circleANDROID.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circleIONIC = s.select(".hide-ionic-circle")),
            circleIONIC.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circleANGULAR = s.select(".hide-angular-circle")),
            circleANGULAR.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circleNODE = s.select(".hide-node-circle")),
            circleNODE.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circlePHONEGAP = s.select(".hide-phonegap-circle")),
            circlePHONEGAP.attr({ transform: "s0 0", fill: "#ffffff" }),
            (circleHTML = s.select(".hide-html-circle")),
            circleHTML.attr({ transform: "s0 0", fill: "#ffffff" });
        var circleMaskforVisible = s.circle(312, 312, 312).attr({ fill: "rgba(255, 255, 255, 1)", transform: "s0 0" });
        (circleMaskVisibleios = circleMaskforVisible.clone()),
            (circleMaskVisibleAndroid = circleMaskforVisible.clone()),
            (circleMaskVisibleIonic = circleMaskforVisible.clone()),
            (circleMaskVisibleAngular = circleMaskforVisible.clone()),
            (circleMaskVisibleNode = circleMaskforVisible.clone()),
            (circleMaskVisiblePhonegap = circleMaskforVisible.clone()),
            (circleMaskVisibleHTML = circleMaskforVisible.clone()),
            (ios = s.select("#iOS")),
            ios.attr({ mask: circleMaskVisibleios }),
            (Android = s.select("#Android")),
            Android.attr({ mask: circleMaskVisibleAndroid }),
            (Ionic = s.select("#Ionic")),
            Ionic.attr({ mask: circleMaskVisibleIonic }),
            (Ionic = s.select("#Angular")),
            Ionic.attr({ mask: circleMaskVisibleAngular }),
            (Node = s.select("#Node")),
            Node.attr({ mask: circleMaskVisibleNode }),
            (Phonegap = s.select("#Phonegap")),
            Phonegap.attr({ mask: circleMaskVisiblePhonegap }),
            (HTML = s.select("#HTML5")),
            HTML.attr({ mask: circleMaskVisibleHTML });
        var anim1 = function () {
            circleMaskVisibleios.animate({ transform: "s1 1" }, 1e3, mina.easein, anim2);
        },
            anim2 = function () {
                circleIOS.animate({ transform: "s1 1" }, 300, mina.easein, anim3);
            },
            anim3 = function () {
                circleMaskVisibleAndroid.animate({ transform: "s1 1" }, 1e3, mina.easein, anim4);
            },
            anim4 = function () {
                circleANDROID.animate({ transform: "s1 1" }, 300, mina.easein, anim5);
            },
            anim5 = function () {
                circleMaskVisibleIonic.animate({ transform: "s1 1" }, 1e3, mina.easein, anim6);
            },
            anim6 = function () {
                circleIONIC.animate({ transform: "s1 1" }, 300, mina.easein, anim7);
            },
            anim7 = function () {
                circleMaskVisibleAngular.animate({ transform: "s1 1" }, 1e3, mina.easein, anim8);
            },
            anim8 = function () {
                circleANGULAR.animate({ transform: "s1 1" }, 300, mina.easein, anim9);
            },
            anim9 = function () {
                circleMaskVisibleNode.animate({ transform: "s1 1" }, 1e3, mina.easein, anim10);
            },
            anim10 = function () {
                circleNODE.animate({ transform: "s1 1" }, 300, mina.easein, anim11);
            },
            anim11 = function () {
                circleMaskVisiblePhonegap.animate({ transform: "s1 1" }, 1e3, mina.easein, anim12);
            },
            anim12 = function () {
                circlePHONEGAP.animate({ transform: "s1 1" }, 300, mina.easein, anim13);
            },
            anim13 = function () {
                circleMaskVisibleHTML.animate({ transform: "s1 1" }, 1e3, mina.easein, anim14);
            },
            anim14 = function () {
                circleHTML.animate({ transform: "s1 1" }, 300, mina.easein, restartanim);
            };
        anim1();
    });
    $(document).ready(function () {
        $.jCanvas.defaults.fromCenter = false;
        $("#industriesbanner")
            .addLayer({ name: "grid", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/grid.png", x: 0, y: 0 })
            .addLayer({ name: "fade-effect", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/fade-effect.png", x: 0, y: 0 })
            .addLayer({ name: "cafe", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/cafe.png", x: 100, y: 72, opacity: 0 })
            .addLayer({ name: "factory", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/factory.png", x: 100, y: 62, opacity: 0 })
            .addLayer({ name: "restaurent", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/restaurent.png", x: 100, y: 93, opacity: 0 })
            .addLayer({ name: "school", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/school.png", x: 100, y: 84, opacity: 0 })
            .addLayer({ name: "hospital", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/hospital.png", x: 100, y: 62, opacity: 0 })
            .addLayer({ name: "cinema", type: "image", source: "template/home-page-assets/intro-carousel/img/industries-banner/cinema.png", x: 100, y: 64, opacity: 0 })
            .drawLayers();
        function industriesBannerAnim() {
            $("#industriesbanner").animateLayer("cinema", { opacity: 0, x: -100 }, 400, function (layer) {
                $(this).animateLayer("cafe", { opacity: 1, x: 15 }, 400, function (layer) {
                    $(this).animateLayer("cafe", { opacity: 1, x: 15 }, 1500, function (layer) {
                        $(this).animateLayer("cafe", { opacity: 0, x: -100 }, 400, function (layer) {
                            $(this).animateLayer("cafe", { x: 100 }, 10);
                            $(this).animateLayer("factory", { opacity: 1, x: 0 }, 400, function (layer) {
                                $(this).animateLayer("factory", { opacity: 1, x: 0 }, 1500, function (layer) {
                                    $(this).animateLayer("factory", { opacity: 0, x: -100 }, 400, function (layer) {
                                        $(this).animateLayer("factory", { x: 100 }, 10);
                                        $(this).animateLayer("restaurent", { opacity: 1, x: 0 }, 400, function (layer) {
                                            $(this).animateLayer("restaurent", { opacity: 1, x: 0 }, 1500, function (layer) {
                                                $(this).animateLayer("restaurent", { opacity: 0, x: -100 }, 400, function (layer) {
                                                    $(this).animateLayer("restaurent", { x: 100 }, 10);
                                                    $(this).animateLayer("school", { opacity: 1, x: 0 }, 400, function (layer) {
                                                        $(this).animateLayer("school", { opacity: 1, x: 0 }, 1500, function (layer) {
                                                            $(this).animateLayer("school", { opacity: 0, x: -100 }, 400, function (layer) {
                                                                $(this).animateLayer("school", { x: 100 }, 10);
                                                                $(this).animateLayer("hospital", { opacity: 1, x: 31 }, 400, function (layer) {
                                                                    $(this).animateLayer("hospital", { opacity: 1, x: 31 }, 1500, function (layer) {
                                                                        $(this).animateLayer("hospital", { opacity: 0, x: -100 }, 400, function (layer) {
                                                                            $(this).animateLayer("hospital", { x: 100 }, 10);
                                                                            $(this).animateLayer("cinema", { opacity: 1, x: 18 }, 400, function (layer) {
                                                                                $(this).animateLayer("cinema", { opacity: 1, x: 18 }, 1500, function (layer) {
                                                                                    $(this).animateLayer("cinema", { opacity: 0, x: 100 }, 400, industriesBannerAnim());
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
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
        industriesBannerAnim();
    });
}
/*
     FILE ARCHIVED ON 11:30:35 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:09:05 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 72.126
  LoadShardBlock: 157.191 (3)
  exclusion.robots: 0.252
  captures_list: 178.701
  load_resource: 82.06
  esindex: 0.009
  exclusion.robots.policy: 0.242
  CDXLines.iter: 17.926 (3)
  RedisCDXSource: 0.627
  PetaboxLoader3.datanode: 161.712 (4)
*/
