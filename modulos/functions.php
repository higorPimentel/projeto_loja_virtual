<?php 

date_default_timezone_set('America/Sao_Paulo');
$tipo_requisicao = $_POST['tipo_requisicao'];



    require_once('cn.php');
    session_start();    
    $_SESSION['conn'] = $conn;    




        if($tipo_requisicao ==1) {
            echo(cadastrar_produto());
        } elseif ($tipo_requisicao ==2) { 
            echo(carregar_produtos());
        } elseif ($tipo_requisicao ==3) { 
            echo(move_img_definit());
        } elseif ($tipo_requisicao ==4) { 
            echo(efetiv_compra());
        } elseif ($tipo_requisicao ==5) { 
            echo(carregar_produtos_filtro());
        }  elseif ($tipo_requisicao ==6) { 
            echo(pesquisar_produto());
        } elseif ($tipo_requisicao ==7) { 
            echo(updat_prod());
        }



function updat_prod() {

$cx_nome = $_POST['objt_frm_cad']['cx_nome'];
$cx_preco = $_POST['objt_frm_cad']['cx_preco'];
$cx_desconto = $_POST['objt_frm_cad']['cx_desconto'];
$cx_vlr_liquido = $_POST['objt_frm_cad']['cx_vlr_liquido'];
$cx_qtd_estoque = $_POST['objt_frm_cad']['cx_qtd_estoque'];
$cx_descricao = $_POST['objt_frm_cad']['cx_descricao'];
$txt_produto_destaque = $_POST['objt_frm_cad']['txt_produto_destaque'];
$txt_produto_ofertas = $_POST['objt_frm_cad']['txt_produto_ofertas'];
$txt_formas_pgto = $_POST['objt_frm_cad']['txt_formas_pgto'];    

$id_produto = $_POST['id_produto_pesq'];

    
$sql_updt = "UPDATE tb_produtos SET
        nome = '$cx_nome',
        preco = '$cx_preco',
        vlr_desconto = '$cx_desconto',
        vlr_liquido_produto = '$cx_vlr_liquido',
        qtd_estoque = '$cx_qtd_estoque',
        def_produto_destaque = '$txt_produto_destaque',
        def_produto_ofertas = '$txt_produto_ofertas',
        formas_pgto = '$txt_formas_pgto',
        descricao = '$cx_descricao'
        WHERE id_produto = '$id_produto'";

        $process_query_updt =  mysqli_query($_SESSION['conn'],$sql_updt);

        return $process_query_updt;


}

function pesquisar_produto() {

$id_produto = $_POST['id_produto'];

$sql_select = "SELECT * FROM  tb_produtos WHERE id_produto =  '$id_produto'";      

$process_query =  mysqli_query($_SESSION['conn'],$sql_select);


if($process_query->num_rows > 0 ) {

    foreach ($process_query as $return) {
        $data_return[] =  $return;
    } 
   
} else {

    $data_return = 0;
}

   


return json_encode($data_return);

}


function carregar_produtos_filtro() {


$pesquisa = $_POST['pesquisa'];

$sql_select = "SELECT * FROM  tb_produtos WHERE nome like '%$pesquisa%'";      

$process_query =  mysqli_query($_SESSION['conn'],$sql_select);


if($process_query->num_rows > 0 ) {

    foreach ($process_query as $return) {
        $data_return[] =  $return;
    } 
   
} else {

    $data_return = 0;
}

   


return json_encode($data_return);



}
        
function efetiv_compra() {

$qtd_produtos_comp = $_POST['qtd_produtos_comp'];
$estoque_atual = $_POST['estoque_atual'];
$id_produto = $_POST['id_produto'];


        if($qtd_produtos_comp == 0 && $estoque_atual > 0) {

           $sucess_return = 0;
           $msg_return = 'Selecione a quantidade desejada, para prosseguir !!!';     
           
         
        } else if($qtd_produtos_comp == 0 && $estoque_atual == 0) {
            
            $sucess_return = 0;
            $msg_return = 'O produto não está disponível para venda !!!';     

        } else {


        $saldo_atual =   $estoque_atual - $qtd_produtos_comp;
        $sql_updt = "UPDATE tb_produtos SET qtd_estoque = ' $saldo_atual' WHERE id_produto = '$id_produto'";
        $process_query_updt =  mysqli_query($_SESSION['conn'],$sql_updt);   
        $sucess_return = $process_query_updt;
        $msg_return = 'Compra Finalizada com exito !!!';     

        }


        $array_retn = [$sucess_return,$msg_return]; 
        return json_encode($array_retn);

}   


function move_img_definit() {

//$dir_temp = $_POST['dir_temp'];
$id_cad_itm = $_POST['id_cad_itm'];
$dir_origem = "../img_temp";
$dir_destino = "img_definitv";
$name_arquivo = $_POST['name_arquivo'];
$nme_destino_completo = "$dir_destino/".$id_cad_itm . "_" . $name_arquivo;

copy("$dir_origem/".$name_arquivo,"../".$nme_destino_completo);

unlink("$dir_origem/".$name_arquivo);

    $sql_updt = "UPDATE tb_produtos SET path_imagem = '$nme_destino_completo' WHERE id_produto = '$id_cad_itm'";
    $process_query_updt =  mysqli_query($_SESSION['conn'],$sql_updt);


}


function cadastrar_produto() {


$data_atual = date('d/m/Y');

$cx_nome = $_POST['objt_frm_cad']['cx_nome'];
$cx_preco = $_POST['objt_frm_cad']['cx_preco'];
$cx_desconto = $_POST['objt_frm_cad']['cx_desconto'];
$cx_vlr_liquido = $_POST['objt_frm_cad']['cx_vlr_liquido'];
$cx_qtd_estoque = $_POST['objt_frm_cad']['cx_qtd_estoque'];
$cx_descricao = $_POST['objt_frm_cad']['cx_descricao'];
$txt_produto_destaque = $_POST['objt_frm_cad']['txt_produto_destaque'];
$txt_produto_ofertas = $_POST['objt_frm_cad']['txt_produto_ofertas'];
$txt_formas_pgto = $_POST['objt_frm_cad']['txt_formas_pgto'];



    $sql_insert = "
    INSERT INTO 
    tb_produtos( 
        nome,
        preco,
        vlr_desconto,
        vlr_liquido_produto,
        qtd_estoque,
        def_produto_destaque,
        def_produto_ofertas,
        formas_pgto,
        descricao,
        path_imagem,
        data_cadastro
        )
            values
        (
            '$cx_nome',
            '$cx_preco',
            '$cx_desconto',
            '$cx_vlr_liquido',
            '$cx_qtd_estoque',
            '$txt_produto_destaque',
            '$txt_produto_ofertas',
            '$txt_formas_pgto',
            '$cx_descricao',
            'img/img_prod_default.png',
            '$data_atual')";


      $process_query =  mysqli_query($_SESSION['conn'],$sql_insert);

      
       $sql_max_id = "SELECT MAX(id_produto) as id FROM tb_produtos";
       $process_query_id =  mysqli_query($_SESSION['conn'],$sql_max_id);
       $fetch_id = mysqli_fetch_assoc($process_query_id);
       $id_ittm  = $fetch_id['id'];

     

       $dt_return_array =  array('process' => $process_query,
                                  'id_ittm' =>   $id_ittm);  

                        
    return json_encode($dt_return_array);



}       

function carregar_produtos() {

    $sql_select = "SELECT * FROM  tb_produtos";      

    $process_query =  mysqli_query($_SESSION['conn'],$sql_select);


    if($process_query->num_rows > 0 ) {

        foreach ($process_query as $return) {
            $data_return[] =  $return;
        } 
       
    } else {

        $data_return = 0;
    }

       


    return json_encode($data_return);

}



?>