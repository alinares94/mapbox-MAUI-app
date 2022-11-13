using MauiBlazorApp.BlazorControls.Razor;
using MauiBlazorApp.EventHandlers;
using Microsoft.AspNetCore.Components.WebView.Maui;

namespace MauiBlazorApp.BlazorControls.Xaml;

public partial class MapMarkerControl : BlazorWebView
{
	public MapMarkerControl()
	{
		InitializeComponent();

        rootComponent.Parameters = new Dictionary<string, object> { { "SourceControl", this } };
    }

    public event BlazorEventHandler<MapMarkerControl, MapMarker> OnMarkerOpened;
    public void MarkerOpened(MapMarker sender, string parameter)
    {
        OnMarkerOpened?.Invoke(this, new () { BlazorSender = sender, Param = parameter });
    }
}