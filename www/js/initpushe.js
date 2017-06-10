document.addEventListener("deviceready", deviceReady, true);
function deviceReady() {
    window.pushe.initialize(); //This call is mandatory if you want to use Pushe
    window.pushe.isPusheInitialized(function pusheInited(result){
                                    if(result) {
                                    window.pushe.sendAdvancedNotifToUser("Pid_ac70-e04e-3a", "{ \"title\":\"test\", \"content\":\"sent from client\" }");
                                    }
                                    });
    
}
