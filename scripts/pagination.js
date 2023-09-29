window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Caminhos dos botões de cadastro

function secondPartOfRegistration(){
    window.location = "./cadastroClienteTwo.html";
}

function thirdPartOfRegistration(){
    window.location = "./cadastroClienteThree.html";
}

function backPageOne(){
    window.location = "./cadastroCliente.html";
}

function backPageTwo(){
    window.location = "./cadastroClienteTwo.html";
}

// Funções de enviar e volta do cadastro de comerciante

function secondPartOfRegistrationMerchant(){
    window.location = "./cadastroComercianteTwo.html";
}

// 

function thirsPartOfRegistrationMerchant(){
    window.location = "./cadastroComercianteThree.html";
}

function backFirstPartOfRegistrationMerchant(){
    window.location = "./cadastroComerciante.html";
}

function backSecondPartOfRegistrationMerchant(){
    window.location = "./cadastroComercianteTwo.html";
}

function login(){
    window.location = "./login.html";
}

function goToCLient(){
    window.location = "./Cliente.html";
}

function goToCommerce(){
    window.location = "./Comerciante.html";
}

function backLandingPage(){
    window.location = "./index.html";
}

function goToRegisterClient(){
    window.location = "./cadastroCliente.html";
}

function goToRegisterCommerce(){
    window.location = "./cadastroComerciante.html";
}

function backPageClient(){
    window.location = "./index.html";
}

// Fim

