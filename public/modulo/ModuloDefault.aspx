<%@ Page Title="" Language="VB" MasterPageFile="~/modulo/Modulo.master" AutoEventWireup="false" CodeFile="ModuloDefault.aspx.vb" Inherits="modulo_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <script src="../plugins/mbox.js"></script>                                                   <!-- mbox               -->
    <script src="../plugins/OwlDefinicoes.js"></script>                                          <!-- Mudanças Carousel  -->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="container">
        <div id="owl-demo" class="owl-carousel">
            <asp:Literal ID="painelModulos" runat="server"></asp:Literal>
        </div>
    </div>
</asp:Content>

