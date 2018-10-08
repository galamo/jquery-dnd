
$(function () {
    let currentRectangle;
    let inTrash = 0; // the items are not on the board;
    let trashE = $("#trash");

    trashE.on("mouseenter", function () {
        inTrash = 1;
    })

    $("rect").on("mousedown", function () {
        currentRectangle = $(this);
        console.log(currentRectangle);
    });

    $(window).on("mousedown", function (e) {
        $(this).on("mousemove", function (e) {

            if (currentRectangle) {
                currentRectangle.attr("x", e.offsetX);
                currentRectangle.attr("y", e.offsetY);
            }


        })

        $(this).on("mouseup", function () {

            if (inTrash && currentRectangle) {
                console.log("in trash");
                currentRectangle.attr("x", trashE.css("x"));
                currentRectangle.attr("y", trashE.css("y"));
                inTrash = 0;
            }
            $(this).off("mousemove");
            currentRectangle = null;
        })
    })




})


