
var request = new XMLHttpRequest()

// Open a new connection
request.open('GET', 'https://api.github.com/users/AnkurDas-krypto/repos', true)

request.onload = function () {
  //json data
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td><a target="_blank" href="' + status.html_url + '">' + status.html_url + '</a></td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

// Send request
request.send();

//statusHTML += '<td>' + status.html_url + '</td>'; ) into this ( statusHTML += '<td><a target="_blank" href="' + status.html_url + '">' + status.html_url + '</a></td>'; )