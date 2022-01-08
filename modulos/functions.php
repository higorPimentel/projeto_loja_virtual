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
            'path_img',
            '$data_atual')";


      $process_query =  mysqli_query($_SESSION['conn'],$sql_insert);

    return $process_query;



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