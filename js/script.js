let ident = 1;

function burgerbut(){
    if (ident == 1) {
        $('.menu-item').addClass('active-item');  
        ident = 0;
    } else  if (ident == 0){
          $('.menu-item').removeClass('active-item');
        ident = 1;
    }
}