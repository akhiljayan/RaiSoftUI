var DropTarget = function () {

    return {
        restrict: "A",
        link: function (scope, element, attributes, ctlr) {
            element.bind("dragover", function (eventObject) {
                $(".dropbox").css("border-top", "none");
                var indexId = attributes.secondaryid;
                var elementClass = indexId + "_dragstyle";
                $("." + elementClass).css("border-top", "solid");
                $("." + elementClass).css("border-top-color", "#428bca");
                eventObject.preventDefault();
            });

            element.bind("drop", function (eventObject) {
                var indexId = attributes.secondaryid;
                // invoke controller/scope move method
                scope.moveToBox(parseInt(eventObject.dataTransfer.getData("text")), parseInt(indexId));
                $(".dropbox").css("border-top", "none");
                // cancel actual UI element from dropping, since the angular will recreate a the UI element
                eventObject.preventDefault();
            });
        }
    };
}