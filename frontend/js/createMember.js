$(function () {
    $modeObj = function () {
        var mode = getUrlParameter('mode')
        var obj =
        {
            formSelector:'',
                template:''
        }

        switch (mode){
            case 'student':
                obj.formSelector='#createStudent'
                obj.template = 'student'
                break;
            case 'professor':
                obj.formSelector = '#createProfessor'
                obj.template = 'professor'
                break;
            case 'coordinator':
                obj.formSelector = '#createCoordinator'
                obj.template = 'coordinator'
                break
            case 'undefined':
                alert('error!')
            }
            return obj;
    };



    renderForm()

 /*   $('#create').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            // everything looks good!
        }
    })*/

})

function renderForm(){
    // var a = $modeObj();
    console.log($modeObj())
    $('#modeString').text('Add new ' + $modeObj().template);
    $('#formContainer').load('html/templates/'+$modeObj().template+'.html', formFunctions);
}

function formFunctions() {
    $('#createStudent').validator();
    $("div.dropzone").dropzone({
        url: "/file/post",
        paramName:'studentFile',
        acceptedFiles:'.xls, .xlsx',
        addRemoveLinks: true,
        dictRemoveFileConfirmation: null,
    });

    $('.datepicker').datepicker();
}
