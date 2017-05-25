<%@ Page Title="" Language="VB" MasterPageFile="~/modulo/Modulo.master" AutoEventWireup="false" CodeFile="Sac.aspx.vb" Inherits="modulo_Sac" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="container">
        <h3>
            <p class="njr f24 fbc">
                <asp:HyperLink href="ModuloDefault.aspx" Style="text-decoration: none;" class="njr f24 fbc" ID="Modulos" runat="server">Módulos</asp:HyperLink>
                / SAC
            </p>
        </h3>
        <div id="owl-demo" class="owl-carousel">
            <asp:Literal ID="acessosParametro" runat="server"></asp:Literal>
        </div>
    </div>
</asp:Content>

