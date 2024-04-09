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

![Capture d’écran du 2024-04-09 12-55-38](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/f5080427-8bc7-4977-8265-b49efdf33f81)

## Add equipment

After installing the Jeedom Vigipool Plugin
You will receive a message saying "Do you want to go to the configuration page of your new plugin?"
Click OK

![Capture d’écran du 2024-04-09 12-55-55](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/de464c4b-ff5d-4eae-bd32-cf44ecb042f8)

Then, in the “Status” window, next to the “Action” label, click the “Activate” button.

![Capture d’écran du 2024-04-09 12-56-05](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/7a701953-2daf-4597-88cf-b3a4c7cc2230)

Normally, the banner of the "Status" window has turned green and its "Status" is "Active"

![Capture d’écran du 2024-04-09 12-56-13](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/0c51c4eb-fbe2-44a7-998a-a380fb6f9a9b)

Go to the “Plugins” menu then “Connected Objects” then “Vigipool”

![Capture d’écran du 2024-04-09 12-56-20](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/93d5d041-c803-4c35-ba6c-bc3cddffe1d1)

Click on “Add” ("ajouter")

![Capture d’écran du 2024-04-09 12-56-50](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/dca96fec-19b2-4bac-b61d-1cf00dd5af31)

Enter the name of the equipment you want.
If you don't know the device name, this won't stop the plugin from working.
In our example, it will be a Tild
Click OK.

![Capture d’écran du 2024-04-09 12-57-00](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/4de86c0c-1472-48be-8bc9-2b34f713406b)

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

![Capture d’écran du 2024-04-09 12-57-13](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/b4d521ff-d44c-432c-be80-5c4250ae5a1d)

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

![Capture d’écran du 2024-04-09 12-57-33](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/7447815d-7951-4601-b6f5-8fd1ad37cb01)
