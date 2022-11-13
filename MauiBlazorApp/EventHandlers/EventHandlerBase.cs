namespace MauiBlazorApp.EventHandlers;

public delegate void BlazorEventHandler<TControl, TBlazor>(TControl sender, BlazorEventArgs<TBlazor> args);

public class BlazorEventArgs<T> : EventArgs
{
    public T BlazorSender { get; set; }
    public string Param { get; set; }
}
