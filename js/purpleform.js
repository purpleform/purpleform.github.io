function initPurpleFormT() {
    outputTableT();
    GetAmount();
}

function initPurpleFormS() {
    outputTableS();
    GetAmount();
}

function GetAmount() {
    var publicTotal = parseInt(document.getElementById("publicTotalR").innerHTML);
    var privateTotal = parseInt(document.getElementById("privateTotalR").innerHTML);
    document.getElementById("TotalR").innerHTML = publicTotal + privateTotal;
    var divsPu = document.querySelectorAll('.checkPointpublicTotal');
    var divsPr = document.querySelectorAll('.checkPointprivateTotal');
    for (var i = 0; i < divsPu.length; ++i) {
        divsPu[i].addEventListener("change", function() {
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
            ChangeBadge();
        })
    };
    for (var i = 0; i < divsPr.length; ++i) {
        divsPr[i].addEventListener("change", function() {
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
            ChangeBadge();
        })
    };
}

function ChangeBadge() {
    var TotalL = parseInt(document.getElementById("TotalL").innerHTML);
    if (TotalL < 150) {
        $('#img1DIV').animate({
            opacity: 1
        }, 1500);
        $('#img2DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img3DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img4DIV').animate({
            opacity: 0.2
        }, 1500);
    } else if (TotalL < 350) {
        $('#img1DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img2DIV').animate({
            opacity: 1
        }, 1500);
        $('#img3DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img4DIV').animate({
            opacity: 0.2
        }, 1500);
    } else if (TotalL < 550) {
        $('#img1DIV ').animate({
            opacity: 0.2
        }, 1500);
        $('#img2DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img3DIV').animate({
            opacity: 1
        }, 1500);
        $('#img4DIV').animate({
            opacity: 0.2
        }, 1500);
    } else {
        $('#img1DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img2DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img3DIV').animate({
            opacity: 0.2
        }, 1500);
        $('#img4DIV').animate({
            opacity: 1
        }, 1500);
    }
}

function outputTableT() {
    var temp = "";
    temp += '<table class="tableN table-textcolor" id="purple">';
    temp += outputTheadT();
    temp += outputTbodyT();
    temp += outputTfootT();
    temp += '</table>';
    document.getElementById("purpleform").innerHTML = temp
}

function outputTheadT() {
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

function outputTfootT() {
    var temp = "";
    temp += '<tfoot>';
    temp += '<tr>';
    temp += '<th width="5%" style="text-align:center;background-color:#4A3AF5;"></th>';
    temp += '<th width="70%" style="text-align:right;" class="tfoot-total">總指數：</th>';
    temp += '<th width="20%" style="text-align:right;" class="tfoot-total"><label id="TotalL">0</label> / <label id="TotalR">0</label></th>';
    temp += '</tr>';
    temp += '</tfoot>';
    return temp;
}

function outputTbodyT() {
    var temp = "";
    temp += '<tbody>';
    temp += tempTableT(publicQT, "publicTotal");
    temp += tempTableT(privateQT, "privateTotal");
    temp += '</tbody>';
    return temp;
}

function tempTableT(question, type) {
    var temp = "";
    var colorIndex = 0;
    var total = 0;
    for (var i = 0; i < question.length; i++) {
        if (question[i].type != "LQ")
            colorIndex++;
        temp += '<tr>';
        if (question[i].type != "T") {
            if (i == 0)
                if (type == "publicTotal")
                    temp += '<td rowspan="' + question.length + '" style="font-size:3em;background-color:#4A3AF5;color:black;font-weight:bolder;border-bottom: 5px solid #000000;">平日</td>';
                else
                    temp += '<td rowspan="' + question.length + '" style="font-size:3em;background-color:#4A3AF5;color:black;font-weight:bolder;border-bottom: 5px solid #4A3AF5;">私下</td>';

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
                temp += '<td class="td-light td-total" style="text-align:right;">' + question[i].text + '：</td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right";>' + question[i].text + '：</td>';

            if (colorIndex % 2 == 0)
                temp += '<td class="td-light td-total" style="text-align:right;border-bottom: 5px solid #4A3AF5;"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right;border-bottom: 5px solid #4A3AF5;"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
        }
        temp += '</tr>';
    }
    return temp;
}

function outputTableS() {
    var temp = "";
    temp += '<table class="tableN table-textcolor" id="purple">';
    temp += outputTheadS();
    temp += outputTbodyS();
    temp += outputTfootS();
    temp += '</table>';
    document.getElementById("purpleform").innerHTML = temp
}

function outputTheadS() {
    var temp = "";
    temp += '<thead>';
    temp += '<tr>';
    temp += '<th width="5%" style="text-align:center">状态</th>';
    temp += '<th width="70%" style="text-align:left">内容</th>';
    temp += '<th width="20%" style="text-align:right">分数</th>';
    temp += '</tr>';
    temp += '</thead>';
    return temp;
}

function outputTfootS() {
    var temp = "";
    temp += '<tfoot>';
    temp += '<tr>';
    temp += '<th width="5%" style="text-align:center;background-color:#4A3AF5;"></th>';
    temp += '<th width="70%" style="text-align:right;" class="tfoot-total">总指数：</th>';
    temp += '<th width="20%" style="text-align:right;" class="tfoot-total"><label id="TotalL">0</label> / <label id="TotalR">0</label></th>';
    temp += '</tr>';
    temp += '</tfoot>';
    return temp;
}

function outputTbodyS() {
    var temp = "";
    temp += '<tbody>';
    temp += tempTableS(publicQS, "publicTotal");
    temp += tempTableS(privateQS, "privateTotal");
    temp += '</tbody>';
    return temp;
}

function tempTableS(question, type) {
    var temp = "";
    var colorIndex = 0;
    var total = 0;
    for (var i = 0; i < question.length; i++) {
        if (question[i].type != "LQ")
            colorIndex++;
        temp += '<tr>';
        if (question[i].type != "T") {
            if (i == 0)
                if (type == "publicTotal")
                    temp += '<td rowspan="' + question.length + '" style="font-size:3em;background-color:#4A3AF5;color:black;font-weight:bolder;border-bottom: 5px solid #000000;">平日</td>';
                else
                    temp += '<td rowspan="' + question.length + '" style="font-size:3em;background-color:#4A3AF5;color:black;font-weight:bolder;border-bottom: 5px solid #4A3AF5;">私下</td>';

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
                temp += '<td class="td-light td-total" style="text-align:right;">' + question[i].text + '：</td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right";>' + question[i].text + '：</td>';

            if (colorIndex % 2 == 0)
                temp += '<td class="td-light td-total" style="text-align:right;border-bottom: 5px solid #4A3AF5;"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
            else
                temp += '<td class="td-dark td-total" style="text-align:right;border-bottom: 5px solid #4A3AF5;"><label id="' + type + '">0</label> / <label id="' + type + 'R">' + total + '</label></td>';
        }
        temp += '</tr>';
    }
    return temp;
}
