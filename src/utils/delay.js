export const throttle = (function(){
    var firstTime=0;
    return function(callBack,time){
        var lastTime=new Date().getTime();
        if(lastTime-firstTime>time){
            callBack();
            firstTime=lastTime;
        }
    }
})()