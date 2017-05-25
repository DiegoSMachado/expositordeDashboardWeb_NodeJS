
Partial Class Painel

    Inherits System.Web.UI.Page

    Dim modulo As String

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not IsPostBack Then

           ' If (Session("UsuarioLogado")) Is Nothing Then
           '     Response.Redirect("../Login.aspx")
           ' End If

            Dim user As New ClassCadastro
            Dim nomeEmp As String = String.Empty
            Dim src As String = String.Empty

            user = Session("UsuarioLogado")
            nomeEmp = user.ClsEmpresa.NmEmpresa.ToString()
            lblEmpresa.Text = user.ClsEmpresa.NmEmpresa.ToString()
            lblUsuario.Text = user.NmColaborador.ToString()
            logoEmpresa.ImageUrl = "../Img2/" & nomeEmp & ".png"

            'Monta o iframe do qlikview usando a queryString contino no href do link do painel
            src = Request.QueryString("dirqv")
            painel.Src = src

        End If
    End Sub


    Protected Sub btnHome_Click(sender As Object, e As EventArgs) Handles btnHome.Click
        Response.Redirect("ModuloDefault.aspx")
    End Sub

    Protected Sub btnlogout_Click(sender As Object, e As EventArgs) Handles btnlogout.Click
        Session("UsuarioLogado") = Nothing
        Response.Redirect("../Login.aspx")
    End Sub

    Protected Sub btnVoltar_Click(sender As Object, e As EventArgs) Handles btnVoltar.Click
        modulo = Request.QueryString("mod")
        Response.Redirect("../modulo/" & modulo & ".aspx")
    End Sub
End Class