
Partial Class modulo_Default
    Inherits System.Web.UI.Page

#Region "Métodos"
#End Region

#Region "Eventos"

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

        If Not IsPostBack Then
            Dim usuario As New ClassCadastro
            usuario = Session("UsuarioLogado")

            Dim modulo As New ClassModulo
            painelModulos.Text = modulo.BuildModulos(usuario.ClsEmpresa.CdEmpresa)
        End If

        Dim modal As String = String.Empty
        modal = Request.QueryString("arq")

        If modal = "vazio" Then
            System.Web.UI.ScriptManager.RegisterClientScriptBlock(Me, Me.GetType(), "Script", "mbox('Não há arquivos a serem exibidos ', 'information');", True)
        End If

    End Sub

#End Region
End Class
