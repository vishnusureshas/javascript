var database = {
    "user1":{username:'user1',password:'user1',desg:'developer'},
    "user2":{username:'user2',password:'user2',desg:'developer'} ,
    "user3":{username:'user3',password:'user3',desg:'Tester'}  
}

function login () {
    var username = uname.value
    var password = pswd.value

if(username in database) {
    if(password == database[username]['password']) {
        alert('Login Successfull')
        window.location = 'dashboard.html'
    }else {
        alert('Incorrect password')
    }
    }
    else {
        alert('User do not exists')
    }
}