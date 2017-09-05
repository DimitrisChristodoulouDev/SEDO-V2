$(function () {

    // Daterange picker
    $('.input-daterange-datepicker').daterangepicker({
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-danger',
        cancelClass: 'btn-inverse',
        linkedCalendars: true,


    });
    $('.date-range').datepicker({
        toggleActive: true,
        orientation: 'auto',
        todayBtn: 'linked',

    });
})