function initPurpleForm() {
    outputTable();

    var publicTotal = parseInt(document.getElementById("publicTotalR").innerHTML);
    var privateTotal = parseInt(document.getElementById("privateTotalR").innerHTML);
    document.getElementById("TotalR").innerHTML = publicTotal + privateTotal;
    var divsPu = document.querySelectorAll('.checkPointpublicTotal');
    var divsPr = document.querySelectorAll('.checkPointprivateTotal');
    for (var i = 0; i < divsPu.length; ++i) {
        divsPu[i].addEventListener("change", function () {
            var PuTotal = parseInt(document.getElementById("publicTotal").innerHTML);
            var TotalL = parseInt(document.getElementById("TotalL").innerHTML);
            TotalR
            var Point = parseInt(this.value);
            if (this.checked) {
                PuTotal += Point;
                TotalL += Point;
            } else {
                PuTotal -= Point;
                TotalL -= Point;
            }
            document.getElementById("publicTotal").innerHTML = PuTotal;
            document.getElementById("TotalL").innerHTML = TotalL;
        })
    };
    for (var i = 0; i < divsPr.length; ++i) {
        divsPr[i].addEventListener("change", function () {
            var PrTotal = parseInt(document.getElementById("privateTotal").innerHTML);
            var TotalL = parseInt(document.getElementById("TotalL").innerHTML);
            TotalR
            var Point = parseInt(this.value);
            if (this.checked) {
                PrTotal += Point;
                TotalL += Point;
            } else {
                PrTotal -= Point;
                TotalL -= Point;
            }
            document.getElementById("privateTotal").innerHTML = PrTotal;
            document.getElementById("TotalL").innerHTML = TotalL;
        })
    };
}
function outputTable() {
    var temp = "";
    temp += '<table class="tableN table-textcolor" id="purple">';
    temp += outputThead();
    temp += outputTbody();
    temp += outputTfoot();
    temp += '</table>';
    document.getElementById("purpleform").innerHTML = temp
}

function outputThead() {
    var temp = "";
    temp += '<thead>';
    temp += '<tr>';
    temp += '<th width="5%" style="text-align:center">狀態</th>';
    temp += '<th width="70%" style="text-align:left">內容</th>';
    temp += '<th width="20%" style="text-align:right">分數</th>';
    temp += '</tr>';
    temp += '</thead>';
    return temp;
}
function outputTfoot() {
    var temp = "";
    temp += '<tfoot>';
    temp += '<tr>';
    temp += '<th width="5%" style="text-align:center"></th>';
    temp += '<th width="70%" style="text-align:right" class="tfoot-total">總指數：</th>';
    temp += '<th width="20%" style="text-align:right" class="tfoot-total"><label id="TotalL">0</label> / <label id="TotalR">0</label></th>';
    temp += '</tr>';
    temp += '</tfoot>';
    return temp;
}

function outputTbody() {
    var temp = "";
    temp += '<tbody>';
    temp += tempTable(publicQ, "publicTotal");
    temp += tempTable(privateQ, "privateTotal");
    temp += '</tbody>';
    return temp;
}

function tempTable(question,type) {
    var temp = "";
    var colorIndex = 0;
    var total = 0;
    for (var i = 0; i < question.length; i++) {
        if (question[i].type != "LQ")
            colorIndex++;
        temp += '<tr>';
        if (question[i].type != "T") {
            if (i == 0)
                temp += '<td rowspan="' + question.length + '" style="font-size:3em;background-color:#4A3AF5;color:black;font-weight:bolder;border-bottom: 5px solid #000000;">平日</td>';

            if (colorIndex % 2 == 0)
                temp += '<td class="td-light">' + question[i].text + '</td>';
            else
                temp += '<td class="td-dark">' + question[i].text + '</td>';

            if (question[i].point == "")
                if (colorIndex % 2 == 0)
                    temp += '<td class="td-light"></td>';
                else
                    temp += '<td class="td-dark"></td>';
            else {
                total += parseInt(question[i].point);
                if (colorIndex % 2 == 0)
                    temp += '<td class="td-light" style="text-align:right"><label class="checkbox-inline"><input class="checkPoint' + type + '" type="checkbox" value="' + question[i].point + '">' + question[i].point + '</label></td>';
                else
                    temp += '<td class="td-dark" style="text-align:right"><label class="checkbox-inline"><input class="checkPoint' + type + '" type="checkbox" value="' + question[i].point + '">' + question[i].point + '</label></td>';
            }
        } else {
            if (colorIndex % 2 == 0)
                temp += '<td class="td-light td-total" style="text-align:right">' + question[i].text + '：</td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right">' + question[i].text + '：</td>';

            if (colorIndex % 2 == 0)
                temp += '<td class="td-light td-total" style="text-align:right"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
        }
        temp += '</tr>';
    }
    return temp;
}
