<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Painel.aspx.vb" Inherits="Painel" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
    <meta http-equiv="content-language" content="pt-br" />
    <meta http-equiv="X-UA-Compatible" content="IE=8;IE=9;IE=10;IE=11" />
    <meta name="viewport" content="user-scalable=yes,width=device-width,initial-scale=1" />
    <title>Solução Empresarial de Informação</title>
    <!-- Folha de Estilo Plugins --------------------------------------------------------------------------------------- -->
    <link href="../plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />                  <!-- Bootstrap Plugin   -->
    <link href="../plugins/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" />            <!-- Bootstrap Tema     -->
    <link href="../plugins/OwlCarousel-master/owl-carousel/owl.carousel.css" rel="stylesheet" /> <!-- Carousel Plugin    -->
    <link href="../plugins/OwlCarousel-master/owl-carousel/owl.theme.css" rel="stylesheet" />    <!-- Carousel Tema      -->
    <link href="../CSS/themeNoty.css" rel="stylesheet" />                                        <!-- Bootstrap tema     -->
    <!-- Folha de Estilo Customizada ----------------------------------------------------------------------------------  -->
    <link href="../CSS/StyleFontes.css" rel="stylesheet" type="text/css" />                      <!-- Estilo das Fontes  -->
    <link href="../CSS/Style.css" rel="stylesheet" type="text/css" />                            <!-- Estilo do Site     -->
    <!-- Java Script --------------------------------------------------------------------------------------------------- -->
    <script src="../plugins/jquery-1.11.1.min.js"></script>
    <script src="../plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="../plugins/noty/jquery.noty.packaged.min.js"></script>
    <script src="../plugins/OwlCarousel-master/owl-carousel/owl.carousel.min.js"></script>
    <script>
        $(function () {
            $(".toolTip").tooltip();
        });        
    </script>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
</head>
<body onload="history.forward()" style="padding-top: 54px">
    <form runat="server">
        <div class="container-fluid">
            <!-- cabeçalho -->
            <nav class="navbar navbar-white navbar-fixed-top">
                <div class="container">
                    <!-- mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="glyphicon glyphicon-tasks"></span>
                        </button>
                        <img alt="LogoSei" src="../Img/seiB.png" class="logoSei"/>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="nav navbar-nav navbar-right navbar-text">
                            <li class="hidden-xs">
                                <div id="saudacao">
                                    <p>
                                        Bem vindo,
                                        <asp:Label ID="lblUsuario" runat="server" Text="Nome do Usuário" Font-Bold="True" ForeColor="#1C5A6D"></asp:Label><br />
                                        <asp:Label ID="lblEmpresa" runat="server" Text="Nome da Empresa" Font-Bold="True" ForeColor="#1C5A6D"></asp:Label>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div id="menuBts">
                                    <asp:LinkButton ID="btnHome" runat="server" CssClass="btn btn-default btn-circle toolTip" data-placement="bottom" title="Home">
                                        <i class="glyphicon glyphicon-home"></i>
                                    </asp:LinkButton>
                                    <asp:LinkButton ID="btnVoltar" runat="server" CssClass="btn btn-info btn-circle toolTip" data-placement="bottom" title="Voltar">
                                        <i class="glyphicon glyphicon-arrow-left"></i>
                                    </asp:LinkButton>
                                    <asp:LinkButton ID="btnAlerta" runat="server" CssClass="btn btn-warning btn-circle toolTip" data-placement="bottom" title="Alerta">
                                        <i class="glyphicon glyphicon-exclamation-sign"></i>
                                    </asp:LinkButton>
                                    <asp:LinkButton ID="btnSair" runat="server" CssClass="btn btn-danger btn-circle toolTip" data-toggle="modal" data-target=".bs-example-modal-sm" data-placement="bottom" title="Sair">
                                        <i class="glyphicon glyphicon-off"></i>
                                    </asp:LinkButton>
                                </div>
                            </li>
                            <li>
                                <asp:Image ID="logoEmpresa" ClientIDMode="Static" runat="server" alt="Empresa" CssClass="hidden-xs" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- fim cabeçalho -->
            <!-- conteudo -->
                    <iframe id="painel" class="embed-responsive-item" runat="server" src="" target="_self"></iframe>
            <!-- fim conteudo -->
        </div>
        <!-- modal -->
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <h4>Você deseja realmente sair?</h4>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-md-6">
                                <asp:LinkButton ID="btnlogout" runat="server" CssClass="btn btn-success btn-block">Sim</asp:LinkButton>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
