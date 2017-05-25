
Partial Class modulo_modulo
    Inherits System.Web.UI.MasterPage

#Region "Métodos"
#End Region

#Region "Eventos"

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

        If Not IsPostBack Then
            If (Session("UsuarioLogado")) Is Nothing Then
                Response.Redirect("../Login.aspx")
            End If

            Dim user As New ClassCadastro
            Dim nomeEmp As String

            user = Session("UsuarioLogado")
            nomeEmp = user.ClsEmpresa.NmEmpresa.ToString()
            lblUsuario.Text = user.NmColaborador
            lblUsuarioMobile.Text = user.NmColaborador
            lblEmpresaMobile.Text = nomeEmp.ToUpper()
            lblEmpresa.Text = nomeEmp.ToUpper()

            logoEmpresa.ImageUrl = "../Img2/" & nomeEmp & ".png"
            hfLogout.Value = 1

        End If
    End Sub

    Protected Sub btnParametros_Click(sender As Object, e As EventArgs) Handles btnParametros.Click
        Response.Redirect("config/ConfigDefault.aspx")
    End Sub

    Protected Sub btnlogout_Click(sender As Object, e As EventArgs) Handles btnlogout.Click
        Session("UsuarioLogado") = Nothing
        Response.Redirect("../Login.aspx")
    End Sub


    Protected Sub btnVoltar_Click(sender As Object, e As EventArgs) Handles btnVoltar.Click
        Response.Redirect("ModuloDefault.aspx")
    End Sub

    Protected Sub btnMenu_Click(sender As Object, e As EventArgs) Handles btnMenu.Click
        Response.Redirect("cadastro/CadastroDefault.aspx")
    End Sub
#End Region

End Class

