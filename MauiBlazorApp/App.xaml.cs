﻿namespace MauiBlazorApp;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();

		MainPage = new NavigationPage(new MauiPage())
		{
			BarTextColor = Colors.Black
		};
	}
}
