using MauiBlazorApp.Constants;

namespace MauiBlazorApp.Pages;

public partial class LayersPage : ContentPage
{
	public LayersPage()
	{
		InitializeComponent();
	}

    private void AddRoadLayer(object sender, EventArgs e)
    {
		MessagingCenter.Send(this, MessagingConstants.MAP_LAYER_ROAD);
    }

    private void AddPoints(object sender, EventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_LAYER_POINTS);
    }
}