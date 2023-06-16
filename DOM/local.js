function login() {
    username = uname.value
    localStorage.setItem('username',username)
    window.location = 'dash.html'
}