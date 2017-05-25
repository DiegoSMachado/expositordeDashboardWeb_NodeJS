
Partial Class modulo_Educacao
    Inherits System.Web.UI.Page

    'Identificador do módulo
    Dim cdModulo As String = 10
    Dim nmModulo As String = "educacao"

#Region "Métodos"
#End Region

#Region "Eventos"

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

        If Not IsPostBack Then
            Master.FindControl("btnVoltar").Visible = True

            Dim usuario As New ClassCadastro
            usuario = Session("UsuarioLogado")

            Dim parametro As New ClassParametro
            acessosParametro.Text = parametro.BuildAcessoParametros(cdModulo, nmModulo, usuario.ClsPerfil.CdPerfil)
        End If

    End Sub

#End Region

End Class
