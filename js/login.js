const formulario = document.querySelector('form')
const login_esperado = 'admin'
const senha_esperada = '123456'


formulario.addEventListener('submit', (e) =>{
e.preventDefault()

    const login = formulario.querySelector('#login')
    const senha = formulario.querySelector('#senha')

    if(login.value === login_esperado && senha.value === senha_esperada){
        window.sessionStorage.setItem('logado', true)
        window.location = 'index.html'
    }else {
        window.sessionStorage.setItem('logado', false)
        alert("Dados incorretos, favor rever a digitação")
    }
    
})











/*
const usuario_esperado = 'admin'
const senha_esperada = '123456'
const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) =>{
e.preventDefault()
    
    verificaLogin()
})


function verificaLogin(){
    const usuario = formulario.querySelector('#login_fullture_js').value
    const senha = formulario.querySelector('#senha').value

    if(usuario === usuario_esperado && senha === senha_esperada){
        sessionStorage.setItem('logado', JSON.stringify(true))
        window.location = 'index.html'
    }else{
        sessionStorage.setItem('logado', JSON.stringify(false))
        alert('Login ou senha incorretos')
    }
}
*/