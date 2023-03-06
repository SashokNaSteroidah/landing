$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.delay(1500).fadeOut("slow");
    $preloader.delay(1500).fadeOut('slow');
});