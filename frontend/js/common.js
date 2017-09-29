$(function () {
    $(document).prop('title', 'SEDO V2');
    // Ladda.bind( 'input[type=submit]' );
    loadPartials()




})

function callAjax(url, data) {
    base_url = 'http://api/';
    var $btn = $(':focus');//Ladda.bind('.btn');
    Ladda.bind($btn);

    return $.ajax({
        beforeSend: function(){
            l.start()
            },
        async: true,
        crossDomain: true,
        method: 'POST',
        headers: {
            // AuthToken: getToken(),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        cache: false,
        url: base_url + url,
        dataType: 'json',
        data: data,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $l.stop();

        },
        statusCode: {
            404: function() {
                // window.location.href = 'errors/404.html'
            },
            500: function() {
                // window.location.href = 'errors/500.html'
            }
        },
        success: function (response) {
            // Ladda.stop();

        }

    });
}




function getUrlParameter(sParam) {
    var sPageURL = String(decodeURIComponent(window.location.search.substring(1))).replace(/#/, ""),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function loadPartials() {
    var url = 'html/templates/'
    var templates = [
            {url: 'header', selector: '#headerContainer'},
            {url: 'footer', selector:'#footerContainer'},
            {url: 'navigation', selector:'#navigationContainer'},
        ];

    $.each(templates, function (index, item) {
        $(item.selector).load(url+item.url+'.html')
    })




}


function loadLibraries(dependencies) {
    $.getJSON('js/libraries.json', function (response) {
        var data = response;
        var res = $.grep(data, function(v) {
            return dependencies.indexOf(v.name) > -1;
        });
    renderLibraries(res)
    })
}

function renderLibraries(res){
    $.each(res, function (index, item) {
        var $script = $("<script>", {src: item.path});
        $('#libContainer').append($script);
    })

}

function blockElements(selector, blockIt) {
    if (blockIt) {
        $(selector).block({
            message: '<h3>Please enable changes</h3>'
            , css: {
                border: '1px solid #fff'
            }
        })
    }else $(selector).unblock();
}