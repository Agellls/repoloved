/* Preloader Start */
function preloader() {
    $(() => {

        setInterval(() => {

            let p = $('.preloader');
            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );

        }, 1000)

    });
}
setInterval(() => preloader(), 2000);
/* PreLoader End */