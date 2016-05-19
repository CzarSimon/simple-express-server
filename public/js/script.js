var printFn = function() {
  alert('I am loaded, ES6 works');
}

var listItem = function(name, value) {
  var urg = (value < 1.0) ? 'non-urgent' : 'urgent';
  return "<li><p class='name'>" + name + "</p><p class='urgency " + urg + "'>" + value + "</p></li>";
}

var makeList = function(list) {
  var htmlList = "";
  var sortedList = sort(list);
  for (item of sortedList) {
    console.log(listItem(item.name, item.urgency));
    htmlList = htmlList + listItem(item.name, item.urgency)
  }
  document.getElementById('stockList').innerHTML = htmlList;
}

var makeRequest = function() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      makeList(JSON.parse(xmlHttp.responseText));
    }
  }
  xmlHttp.open("GET", '/stockList', true);
  xmlHttp.send(null);
}

var updateList = function() {
  var http = new XMLHttpRequest();
  http.open("POST", '/stockList', true);
  http.send(null);
}

var sort = function(list) {
  return sortedList = list.sort(function(a,b) {
    var x = a.urgency;
    var y = b.urgency;
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
}

window.onload = function() {
  makeRequest();
}
