function sendData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var _class = document.getElementById("class").value;
    var section = document.getElementById("section").value;

    var greeting = 'Hello, ' + name + ' <' + email + '> from ' + _class + '-' + section;
    alert(greeting);
}