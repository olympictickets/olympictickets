// ==UserScript==
// @name       Portal pacemaker
// @namespace  http://www.tecnotrends.com.br
// @version    0.12
// @description  Impede interrupções desnecessárias no uso do Portal, renovando a sessão e fazendo login automaticamente (se a senha estiver salva).
// @match      http://www.tecnotrends.com.br/*
// @author     Ygor Mutti
// @grant none
// ==/UserScript==

if (document.location.pathname.toLowerCase().endsWith('sessaoexpirou.aspx'))
  document.location = './Acesso.aspx';
else if (document.location.pathname.toLowerCase().endsWith('acesso.aspx'))
  window.addEventListener('load', function () {
    setTimeout(function () {
      var inputs = document.getElementsByTagName('input');
      var filled = true;
      var button;
      
      for (var i = 0; i < inputs.length; i++) {
        var e = inputs[i];
        
        if (e.type === 'submit')
          button = e;
        if ((e.type === 'text' || e.type === 'password') && e.value === '')
          filled = false;
      }
      
      if (filled) {
        button.focus();
        button.style.outline = '2px solid green'
        button.click();
      }
    }, 2 * 1000);
  });
else {
  setInterval(function () {
    $('.aRenewSession').click();
  }, 25 * 60 * 1000);
}
