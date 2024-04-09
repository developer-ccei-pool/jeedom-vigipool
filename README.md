[![en](https://img.shields.io/badge/lang-en-white.svg)](https://github.com/developer-ccei-pool/jeedom-vigipool/blob/master/README.md)
[![fr](https://img.shields.io/badge/lang-fr-white.svg)](https://github.com/developer-ccei-pool/jeedom-vigipool/blob/master/README.fr.md)

<p align="center">
  <a href="https://market.jeedom.com/index.php?v=d&p=market_display&id=4437/">
    <img src="https://market.jeedom.com/filestore/market/plugin/images/vigipool_icon.png" alt="Vigipool Jeedom Logo" width="150">
  </a>
</p>

<h3 align="center">Plugin Jeedom - Vigipool</h3>

<p align="center">
  Vigipool, the innovative app to control and manage your swimming pool remotely.
</p>

# Tutorial to use the Vigipool plugin for Jeedom

Link to plugin : https://market.jeedom.com/index.php?v=d&p=market_display&id=4437

![Capture d’écran du 2024-04-09 10-40-44](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/4c7c2138-d1ce-4c43-a430-23591a7f6879)

## Add equipment

After installing the Jeedom Vigipool Plugin
You will receive a message saying "Do you want to go to the configuration page of your new plugin?"
Click OK

![Capture d’écran du 2024-04-09 10-40-59](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/6a457c3d-5d6e-44aa-a309-71f1a56a0ef5)

Then, in the “Status” window, next to the “Action” label, click the “Activate” button.

![Capture d’écran du 2024-04-09 10-41-05](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/e1247bd8-2ff9-4480-8b7a-f48323f7ec6f)

Normally, the banner of the "Status" window has turned green and its "Status" is "Active"

![Capture d’écran du 2024-04-09 10-41-14](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/62bbe62e-1211-411d-8a54-32ef3348e99e)

Go to the “Plugins” menu then “Connected Objects” then “Vigipool”

![Capture d’écran du 2024-04-09 10-41-27](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/f9ccea3c-95fe-4da4-a4b6-7e9b86823823)

Click on “Add”

![Capture d’écran du 2024-04-09 10-41-35](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/d6a7afbd-a4f3-4782-b55a-60d152d5cbcd)

Enter the name of the equipment you want.
If you don't know the device name, this won't stop the plugin from working.
In our example, it will be a Tild
Click OK.

![Capture d’écran du 2024-04-09 10-41-44](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/44a40d91-bc5f-4f59-a43a-0a1854b9193c)

Once in the “General Settings” menu
Remember to choose a Parent Object if you want
Remember to activate the “Activate” and “Visible” boxes

For the Plugin to connect to your Vigipool device, you must complete the following two parameters
- “IP address of this equipment”
- “ID of this equipment”

There are several ways to do this

- Automatically

You have a “Search Vigipool products” button which will scan all the IP addresses on your network and display its results in the “Vigipool devices detected” list.

The "Fast" button is less comprehensive than the "Slow" button.

You can then click on the result to automatically complete "IP address of this equipment" and "ID of this equipment".

- Manually

You can find the IP by yourself and find the ID on the Mobile Vigipool app

If you have the IP address of your device, but not the ID, you can use "Get ID from IP" after filling in the IP address of this device parameter

At the end, don't forget to click "Save".

![Capture d’écran du 2024-04-09 10-44-06](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/69b46876-fb3f-48d2-b9cb-c1532624bb40)

## Resize the Plugin

Once the plugin is configured, you will be able to find it in your dashboard

There is a good chance that the default window size is too small. If this is the case, a message will be displayed to warn you.

To solve this problem use the pencil at the top right of the window to enlarge it

## Use the plugin

You can see
- Top right: the version of your equipment
- On the left: you can click on the gear to access certain options
- Bottom left: The connection icon is green, yellow, red or gray depending on the quality of the connection with the Vigipool device

Below, functionalities similar to the Vigipool mobile application will appear depending on the devices connected.

![Capture d’écran du 2024-04-09 11-16-20](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/897aea95-5448-4b7e-ab9c-5c151fffd7af)
