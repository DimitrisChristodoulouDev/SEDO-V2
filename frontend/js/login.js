$(function () {
    $('.js-switch').each(function() {
        new Switchery($(this)[0], $(this).data());
    });
    $('.selectpicker').selectpicker();

    $("#to-recover").click(function () {
        $("#loginform").slideUp(), $("#recoverform").fadeIn()
    })

    $("#to-register").click(function () {
        $("#loginform").slideUp(), $("#registerform").fadeIn()
    })

    $('.back').click(function () {
        $('#loginform').slideDown()
        var $form = $(this).closest($('form'));
        $form.fadeOut();
        $form[0].reset();
    })

    $('#loginBtn').on('click', function () {
        callAjax('asd').done(function () {
            console.log('asdasasd');
        })
    })

})