$(function () {

    loadPartials()
})

function loadPartials() {
    var url = 'html/templates/'
    var templates = [
            {url:'header', selector: '#headerContainer'},
            {url: 'footer', selector:'#footerContainer'}
        ];

    $.each(templates, function (index, item) {
        $(item.selector).load(url+item.url+'.html')
    })




}