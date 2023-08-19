var elements = 0;
var inputs = [];
var temp;
var temp1;
$("#form1").on("submit", function (event) {
    event.preventDefault();
    var input_value = $(this).find("input").first().val();
    elements = input_value;
});
$("#form1").on("submit", function (event) {
    if (elements) {
        $("#form1").addClass("hide");
        $("#form2").removeClass("hide");
    }
});
function array1() {
    var arrayValues = $("#form2").find("input").first().val();
    inputs = arrayValues.split(",");
    return inputs;
}

$("#form2").on("submit", function (event) {
    event.preventDefault();
    array1();
    $(".centre").addClass("hide");
    for (var i = 0; i < elements; i++) {
        var newDiv = $("<div>").addClass("block block_text");
        var newH1 = $("<h1>").text(parseFloat(inputs[i]));
        newDiv.append(newH1);
        $(".array").append(newDiv); // Assuming you have an element with the ID "array"

    }
    bubbleSort(inputs);

});

async function bubbleSort(array) {
    for (var t = 0; t < elements; t++) {
        for (var j = 0; j < elements - t - 1; j++) {
            await $(".array").children(`div:nth-child(${j + 1})`).css("background-color", "blue").promise();
            await $(".array").children(`div:nth-child(${j + 2})`).css("background-color", "blue").promise();
            await sleep(500);
            if (inputs[j] > inputs[j + 1]) {
                await $(".array").children(`div:nth-child(${j + 1})`).css("background-color", "red").promise();
                await $(".array").children(`div:nth-child(${j + 2})`).css("background-color", "red").promise();
                await sleep(500);
                $(".array").children(`div:nth-child(${j + 2})`).animate({ "bottom": "100px" }, 1000);
                await sleep(500);
                $(".array").children(`div:nth-child(${j + 2})`).animate({ "right": "84px" }, 1000);
                await sleep(500);
                $(".array").children(`div:nth-child(${j + 1})`).animate({ "left": "81px" }, 1000);
                await sleep(500);
                $(".array").children(`div:nth-child(${j + 2})`).animate({ "top": "100px" }, 1000);
                await sleep(1000);
                $(".array").children(`div:nth-child(${j + 2})`).css("bottom", "");
                $(".array").children(`div:nth-child(${j + 2})`).css("right", "");
                $(".array").children(`div:nth-child(${j + 1})`).css("left", "");
                $(".array").children(`div:nth-child(${j + 2})`).css("top", "");
                var div1 = $(".array").children(`div:nth-child(${j + 1})`);
                var div2 = $(".array").children(`div:nth-child(${j + 2})`);

                var tdiv1 = div1.clone();
                var tdiv2 = div2.clone();


                div1.replaceWith(tdiv2);
                div2.replaceWith(tdiv1);




                var temp3 = inputs[j];
                inputs[j] = inputs[j + 1];
                inputs[j + 1] = temp3;

            }
            await $(".array").children(`div:nth-child(${j + 1})`).css("background-color", "green").promise();
            await $(".array").children(`div:nth-child(${j + 2})`).css("background-color", "green").promise();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


