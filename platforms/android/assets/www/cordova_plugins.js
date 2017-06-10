cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "pushe-cordova-plugin.pushe",
        "file": "plugins/pushe-cordova-plugin/www/pushe4cordova.js",
        "pluginId": "pushe-cordova-plugin",
        "clobbers": [
            "pushe"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "pushe-cordova-plugin": "1.3.0"
};
// BOTTOM OF METADATA
});