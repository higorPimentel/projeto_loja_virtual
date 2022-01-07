
//let btn_consulta_pedido = document.querySelector('#btn_consulta_pedido');
//btn_consulta_pedido.addEventListener('click', consulta_pedido)


window.addEventListener('load',inicia_app)
window.addEventListener('scroll',exec_tst)
window.addEventListener('resize',resize_home)


let txt_focus = document.querySelector(".frm_registro")

txt_focus.addEventListener('focus', insere_foco_txt,true)
txt_focus.addEventListener('blur', remove_foco_txt,true)





function resize_home(event) {

        wdth_window =  event.target.screen.width


                if(wdth_window < 1305 && wdth_window > 1014) {
                    console.log('Mantém 3 itens')
                }   else if(wdth_window < 1014 && wdth_window > 764) {
                    console.log('Mantém 2 itens')
                }   else if(wdth_window < 764) {
                    console.log('Mantém 1 itens')
                } else {
                    console.log('Mantém 4 itens')
                }

        
}

function exec_tst(event){
	
    /*
    if (window.scrollY > 50 ) {
		$('#container_header').css('backgroundColor','rgba(250, 250, 250, 0.9)')
		$('#container_header').css('boxShadow','1px 1px 10px 5px  gray')
		$('#container_header').css('transition','0.5s')
		$('.opc_menu_incio').css('color','#4682B4')

		$('#img_logo').attr('src','img/logo_transp.png')

	} else {
		$('#container_header').css('backgroundColor','rgba(46, 46, 54, 1)')
		$('#container_header').css('boxShadow','none')
		$('#Menu_inicial').css('color','#B0C4DE')
		$('.opc_menu_incio').css('color','#B0C4DE')

		$('#img_logo').attr('src','img/logo4.png')
	}
    */

}





function inicia_app() {

    opc_select = 1
}


function select_opcs(event) {

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,3) 
    
    
    if(type_element =='opc') {

        $('.opcs').css('border','none')
        $('.opcs').css('backgroundColor','white')



         $(`#${elemnt}`).css('border-right','1px solid #0078d4')
         $(`#${elemnt}`).css('border-left','1px solid #0078d4')
         $(`#${elemnt}`).css('border-top','3px solid #0078d4')
         $(`#${elemnt}`).css('background-color','rgb(240, 240, 240)')


                    if(elemnt == 'opc_novo') {
                        opc_select = 1
                        $('.tit_frm').text('Cadastro de Produtos')
                    } else if(elemnt == 'opc_edit')  {
                        opc_select = 2
                        $('.tit_frm').text('Editar Produtos')
                    }



        }
}

function insere_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','0px 0px 10px 0px #B5B5B5')

        }
 
 }

 function remove_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','none')

        }
 
 }

/*
function exibe_erro() {

    $('.msg_erro').css('display','block')
    setTimeout(() => {
        inibie_erro()
    }, 4000);
}

function inibie_erro() {
    $('.msg_erro').css('display','none')
}



function exibe_sucess() {

    $('.msg_sucesso').css('display','block')
    setTimeout(() => {
        inibie_sucess()
    }, 4000);
}

function inibie_sucess() {
    $('.msg_sucesso').css('display','none')
}

*/