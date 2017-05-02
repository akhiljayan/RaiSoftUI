var Draggable = function () {
    return {
        restrict: "A",
        link: function (scope, element, attributes, ctlr) {
            element.attr("draggable", true);
            $(".dropbox").css("border-top", "none");
            element.bind("dragstart", function (eventObject) {
                eventObject.dataTransfer.setData("text", attributes.itemid);
            });
            
        }

    };
}