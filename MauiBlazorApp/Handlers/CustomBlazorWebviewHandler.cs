namespace MauiBlazorApp.Handlers
{
    public partial class CustomBlazorWebviewHandler
    {
        public static void Handle()
        {
            CustomHandler();
        }

        static partial void CustomHandler();
    }
}