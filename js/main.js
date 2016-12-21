$(document).ready(function(){
    var listAds = {};
     var parsedTemplate = "";
    var popupTemplate = _.template($('#popup-template').html());
    $.ajax({url: "data/test.json", dataType: "json", success: function(json) {listAds = json;}});
    parsedTemplate = popupTemplate(listAds);
    $("#poppup").html(parsedTemplate);
});