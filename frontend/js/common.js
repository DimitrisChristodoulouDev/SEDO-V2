$(function () {

    loadPartials()
     loadLibraries(['myLibrary', 'myLibrary6'])
})

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

function blockElements(selector, blockIt){
    if(blockIt){
        $(selector).block({
            message: '<h3>Please enable changes</h3>'
            , css: {
                border: '1px solid #fff'
            }
        })
    }else {
        $(selector).unblock();
    }
}