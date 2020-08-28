var gradeArr = ["-", "A", "B+", "B", "C+", "C", "D+", "D", "F"]
var gradesCompare = {
  "A":"4.0",
  "B+":"3.5",
  "B":"3.0",
  "C+":"2.5",
  "C":"2.0",
  "D+":"1.5",
  "D":"1.0",
  "F":"0.0",
}


function addCourse(){
  var target = document.getElementsByClassName("add")[0];
  var tr = document.createElement("tr");
  var rows= $('.add tr').length;
  console.log(rows);
  for (var i = 0; i < 4; i++){
    var td = document.createElement("td");
    var input = document.createElement("input");
    // First cell
    if (i == 0){
      td.innerText = rows + 1;
    }
    // second cell
    else if (i == 1){
      input.setAttribute("type", "text");
      td.appendChild(input);
    }

    // 3rd cell
    else if (i == 2) {
      var select = document.createElement("select");
      for(var j = 0; j < 9; j++) {
        var gradeStr = gradeArr[j];
        var option = document.createElement("option");
        option.setAttribute("value", gradeStr)
        option.innerText = gradeStr;
        select.appendChild(option);
      }
      td.appendChild(select);
    }
    // 4th cell
    else {
      input.setAttribute("type", "number");
      td.appendChild(input);
    }
    tr.appendChild(td);
  }
  target.appendChild(tr);
}


function removeCourse() {
  if ($('.add tr').length > 1) {
    var a = $("tr:last");
    a.remove();
  }
}


function addSem(){
  var caption = document.createElement("caption");


}


function removeSem(){

}


function cal(){

}
