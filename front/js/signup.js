function togglePw(){
  const password = document.getElementById("password");
  password.type = password.type === 'password' ? 'text' : 'password';
}