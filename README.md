# Step by Step Guide for adding Pushe to Cordova/Ionic applications
This sample is created with Cordova CLI, but the guildeline and plugin is for both Cordova and Ionic.

1. Create your app with cordova or ionic and add Android platform to it.
2. Download Pushe plugin for ordova/Ionic from this [link](http://static.pushe.co/1-0-0/cordova-plugin-1.0.0.zip).
3. Unzip Pushe Cordova/Ionic that you have downloaded. Open `cordova-plugin-1.0.0/plugin.xml` file and replace PUSHE_TOKEN with your token. You can obtain your token from your panel on http://panel.pushe.co, under the application you have created for your Cordova/Ionic app.
4. Run below command to add plugin to your app. If you use Cordova:

    `cordova plugin add [path-to-downloaded-plugin]`

    And if you are using ionic:

    `ionic plugin add [path-to-downloaded-plugin]`

5. Open index.html file of your app and add below script to it:

        <script type="text/javascript">
            document.addEventListener("deviceready", deviceReady, true);
                function deviceReady() {
                    window.pushe.initialize(); //This call is mandatory if you want to use Pushe
                }
        </script>


### Change AndroidManifest.xml

Pushe requires google-gcm library. Our current cordova plugin is set to use `gms:play-services-gcm:9.4.0`. If you have newer or older version of gcm, please edit `cordova-plugin-1.0.0/plugin.xml` and change version number in `<framework src="com.google.android.gms:play-services-gcm:9.4.0"/>` line to your version number (like 9.6.0). Please note taht you can NOT use gcm version lower than `7.5.0`.

### Run
Now you can `Run` your project on your device and test it.


## Caution
- Pushe supports minimum android sdk=9. But Ionic (in its recent versions) uses minimum sdk=14 for android applications. So becareful about it.

## Support 
#### Email:
support [at] pushe.co
#### Phone:
+98-21-44668276 (8:00 to 17:00 Sat-Thu)
