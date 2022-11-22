using Microsoft.AspNetCore.Components.WebView.Maui;

namespace MauiBlazorApp.BlazorControls.Xaml;

public partial class MapLayersControl : BlazorWebView
{
	public MapLayersControl()
	{
		InitializeComponent();
	}

    private void OnBlazorWebViewInitialized(object sender, Microsoft.AspNetCore.Components.WebView.BlazorWebViewInitializedEventArgs e)
    {
#if WINDOWS
        e.WebView.CoreWebView2.Settings.IsZoomControlEnabled = false;
#endif
    }
}