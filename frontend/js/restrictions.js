$(function () {

    blockElements('#restrictionsPanel', true)

    var enableChanges = false;
    // enableChangesCall(enableChanges);
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

    $('#toggleRestriction').on('change', function () {
        if (this.checked === false) blockElements('#restrictionsPanel', true)
        else blockElements('#restrictionsPanel', false)
    });


    $('.js-switch').each(function () {
        new Switchery($(this)[0], $(this).data());
    });

})


function enableChangesCall(enableChanges) {
    console.log('Enable', enableChanges);
    if (this.checked === false && enableChanges === false) {
        // enableChanges = !enableChanges;
        $('#restrictionsPanel').block({
            message: '<h3>Please enable changes</h3>'
            , css: {
                border: '1px solid #fff'
            }
        })
    }
}