cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pushe-cordova-plugin/www/pushe4cordova.js",
        "id": "pushe-cordova-plugin.pushe",
        "clobbers": [
            "pushe"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "pushe-cordova-plugin": "0.1.0"
};
// BOTTOM OF METADATA
});