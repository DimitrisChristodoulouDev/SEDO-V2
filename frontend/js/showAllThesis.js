$(function () {






    // Grab the template script
    var theTemplateScript = $("#allThesisTemplate").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object
    var context={
        thesis:[
            {
                id:1,
                title:'Microservices',
                student: {
                    name: 'Dimitris',
                    surname: 'Christodoulou'

                }
            },{
                id:2,
                title:'Resource Provisioning',
                student: {
                    name: 'Adonis',
                    surname: 'Podinas'

                }
            }


        ]


    };

    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);

    // Add the compiled html to the page
    $('#allThesisWrapper').append(theCompiledHtml);
})