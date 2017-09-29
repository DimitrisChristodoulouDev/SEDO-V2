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

    $('#toggleRestriction').on('click', function () {
        console.log(this.checked)
        // if (this.checked === false)
            blockElements('#restrictionsPanel', this.checked )
        // else blockElements('#restrictionsPanel', false)
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