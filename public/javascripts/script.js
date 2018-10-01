function clearContent() {
    $("textarea").val('');
}

function loadExample1() {
    $("#tainstance").val('4');
    $("#taschema").val('{"type": "number"}');
}

function loadExample2() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/general/validation/go/example2"
    }).then(function(data) {
        $("#tainstance").val(data.instance);
        $("#taschema").val(data.schema);
    });
}

$("document").ready(function(){
    $("#fileInstance").change(function(event) {
        openFile(event, 'tainstance');
    });
});

$("document").ready(function(){
    $("#fileSchema").change(function(event) {
        openFile(event, 'taschema');
    });
});

var openFile = function(event, idTextarea) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      var node = $('#' + idTextarea);
      node.val(text);
    };
    reader.readAsText(input.files[0]);
};
