using Microsoft.AspNetCore.Components.WebView.Maui;

namespace MauiBlazorApp.Handlers
{
    public partial class CustomBlazorWebviewHandler
    {
        static partial void CustomHandler()
        {
            BlazorWebViewHandler.BlazorWebViewMapper.AppendToMapping("EnableGeoLocation", (handler, webview) =>
            {
                handler.PlatformView.Settings.SetGeolocationEnabled(true);
                handler.PlatformView.Settings.JavaScriptEnabled = true;
                handler.PlatformView.Settings.AllowFileAccess = true;
                handler.PlatformView.Settings.SetGeolocationDatabasePath(handler.PlatformView.Context.FilesDir.Path);
            });
        }
    }
}