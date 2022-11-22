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

    private void ZoomChange(object sender, ToggledEventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_CHANGE_ZOOM, e.Value);
    }

    private void RotationChange(object sender, ToggledEventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_CHANGE_ROTATION, e.Value);
    }

    private void InactiveChange(object sender, ToggledEventArgs e)
    {
        if (zoom != null && zoomLayout != null)
            zoom.IsToggled = zoom.IsEnabled = !e.Value;
        if (rotation != null && rotationLayout != null)
            rotation.IsToggled = rotation.IsEnabled = !e.Value;

        MessagingCenter.Send(this, MessagingConstants.MAP_CHANGE_INACTIVE, !e.Value);
    }

    private void SetCenter(object sender, EventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_SET_CENTER, new string[] { latEntry.Text, longEntry.Text });
    }

    private void SetZoom(object sender, EventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_SET_ZOOM, zoomEntry.Text);
    }

    private void RotationChange(object sender, ValueChangedEventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_SET_ROTATION, e.NewValue);
    }

    private void AddCompass(object sender, EventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_LAYER_COMPASS);
    }

    private void GetLayers(object sender, EventArgs e)
    {
        MessagingCenter.Send(this, MessagingConstants.MAP_GET_LAYERS);
    }
}