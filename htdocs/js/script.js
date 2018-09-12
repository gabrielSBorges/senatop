 function validaForm(frm) {
    //VALIDA EMAIL
     if (frm.inputEmail.value.indexOf("@") == -1 ||
         frm.inputEmail.valueOf.indexOf(".") == -1 ||
         frm.inputEmail.value == "" ||
         frm.inputEmail.value.lenght < 5 ||
         frm.inputEmail.value.lenght > 80 ||
         frm.inputEmail.value == null) {
         alert("Por favor, indique um e-mail válido.");
         frm.inputEmail.focus();
         return false;
     }

    //VALIDA NOME
     if (frm.inputNome.value == "" || frm.inputNome.value == null || frm.inputNome.value.lenght < 3 || frm.inputNome.value.lenght > 40) {
         alert("Por favor, indique um nome válido.");
         frm.inputNome.focus();
         return false;
     }

     //VALIDA USUARIO
     if (frm.inputUsuario.value == "" || frm.inputUsuario.value == null || frm.inputUsuario.value.lenght < 3 || frm.inputUsuario.value.lenght > 12) {
         alert("Por favor, indique um usuário válido.");
         frm.inputUsuario.focus();
         return false;
     }

     //VALIDA SENHA
     if (frm.inputSenha.value == "" || frm.inputSenha.value == null || frm.inputSenha.value.lenght < 3 || frm.inputSenha.value.lenght > 32) {
         alert("Por favor, preencha o campo de senha corretamente.");
         frm.inputSenha.focus();
         return false;
     }


 }