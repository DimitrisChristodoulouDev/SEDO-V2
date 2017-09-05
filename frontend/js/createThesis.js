$(function () {

    var HelloButton = function (context) {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
            contents: '<i class="fa fa-save"/>',
            tooltip: 'Save to DB',
            click: function () {
                // invoke insertText method with 'hello' on editor module.
                // context.invoke('editor.insertText', 'hello');
                alert('asdaasd');
            }
        });

        return button.render();   // return button as jquery object
    }


    $('.wysiwyg_editor').summernote({
            placeholder: 'Write here...',
            dialogsInBody: true,
            dialogsFade: true,  // Add fade effect on dialogs
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['style','ul', 'ol', 'paragraph','height']],
                ['insert',['picture','link','video','hr']],
                ['misc', ['fullscreen','codeview','undo','redo','help','save']],
                ['saveBtn',['']]
            ],
            popover: {
                air: [
                    ['color', ['color']],
                    ['font', ['bold', 'underline', 'clear']]
                ]
            },
            buttons:{
                'save': HelloButton
            }
            }
        ).on('summernote.change', function(customEvent, contents, $editable) {
            var markupStr = $(this).summernote('code');
            $('#view').html(markupStr)
            // $('#summernoteForm').formValidation('revalidateField', 'content');
        });






        createTypeahead()
})

function createTypeahead() {
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    var typeahead = $('#the-basics.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 2

        },
        {
            name: 'states',
            source: substringMatcher(states)
        });
    typeahead.unwrap();
}

function refreshView() {

}