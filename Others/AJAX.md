======================================================
<!-- Steps to create AJAX -->
======================================================

    <title>AJAX with JavaScript</title>
    <script>
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
        document.getElementById('ajax').innerHTML = xhr.responseText;
        };
    </script>
    </head>
    <body>
    <div class="grid-container centered">
        <div class="grid-100">
        <div class="contained">
            <div class="grid-100">
            <div class="heading">
                <h1>Bring on the AJAX</h1>
            </div>
            <div id="ajax">

          </div>

- 1 Create an XMLHTTP Request objecet.

var xhr = new XMLHttpRequest();

- 2 Create a callback function.
Where you tell your web browser what to do once the requested info gets sent back from server. Ex ' twitter end page allows more content to be loaded so you can keep on scrolling down'

    xhr.onreadystatechange = function () {
    document.getElementById('ajax').innerHTML = xhr.responseText;
    };

- 3 Open a request.

xhr.open('GET', 'sidebar.html');

open prepares the browser for sending the request, has 2 parameters.

HTTP method you're going to use and the URL to the request is going

- 4 Send the request.

xh4.send();
Since we're just requesting a chunk of HTML from the server we don't have to write anything more, but if we had to send the input.value from a user to the sv we cna add that to the send.
======================================================
<!-- GET vs POST -->
======================================================

Rule of thumb is to use get when you need information and use POST when you're sending information or it's sensitive information

======================================================
<!-- AJAX Callbacks -->
======================================================

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 ) {
        if( xhr.status === 200 ) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        } else if ( xhr.status === 404 ) {
            //file not found
        }else if ( xhr.status === 500 ) {
            //server had problem
        }
    }
};
xhr.open('GET', 'sidebar.html');
xh4.send();
======================================================
<!-- Parsing JSON Data -->
======================================================
we cannot get into js the xhr.responseText as it's a string(JSON) (thats how the sv replies). SO instead we create a variable and use JSON.parse to convert that string into a js object.

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

======================================================
<!-- Exercise  -->
======================================================

    var xhs = new XMLHttpRequest();
    xhs.onreadystatechange = function () {
    if(xhs.readyState === 4 && xhs.status === 200) {
        var employees = JSON.parse(xhs.responseText);
        var statusHTML = '<ul class="rooms">';
        for (let i=0; i<employees.length; i += 1) {
        if (employees[i].available === true) {
            statusHTML += '<li class="empty">';
        } else {
            statusHTML += '<li class="full">';
        }
        statusHTML += employees[i].room;
        statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
    };
    xhs.open('GET', '../data/rooms.json');
    xhs.send();

    Output (inside div on getelementbyid)

    <ul class="rooms">
    <li class="full">101</li>
    <li class="empty">102</li>
    <li class="full">103</li>
    <li class="full">104</li>
    <li class="empty">105</li>
    <li class="empty">106</li>
    </ul>

