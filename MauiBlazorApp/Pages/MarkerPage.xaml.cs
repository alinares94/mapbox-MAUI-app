using MauiBlazorApp.BlazorControls.Razor;
using MauiBlazorApp.BlazorControls.Xaml;
using MauiBlazorApp.EventHandlers;

namespace MauiBlazorApp.Pages;

public partial class MarkerPage : ContentPage
{
    public MarkerPage()
	{
		InitializeComponent();
	}

    public void MapMarkerControl_OnMarkerOpened(MapMarkerControl sender, BlazorEventArgs<MapMarker> args)
    {
        MainThread.BeginInvokeOnMainThread(() =>
        {
            lbMapResult.FontAttributes = FontAttributes.Bold;
            lbMapResult.FontSize = 25;
            lbMapResult.Text = args.Param;
        });
    }

    protected override void OnDisappearing()
    {
        MainThread.BeginInvokeOnMainThread(() =>
        {
            lbMapResult.FontAttributes = FontAttributes.None;
            lbMapResult.FontSize = 15;
            lbMapResult.Text = "not received yet";
        });
        base.OnDisappearing();
    }
}