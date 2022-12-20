let language={
    "EN": {
        "Title":"Open Snapdrop on other devices to send files",
        "displayName": "The easiest way to transfer data across devices",
        "BottomSecondTitle": "You can be discovered by everyone on this network",
        "Aboutext": "The easiest way to transfer files across devices",
        "toast": "File Transfer Completed",
        "Ignore":"Ignore",
        "download": "Save",
        "Send":"Send",
        "Cancel":"Cancel",
        "copy":"Copy",
        "Close":"Close",
        "MessRec":"Message Received",
        "PersonID":"Translate By:Yeely",
        "AbotContent":"Share files only through the LAN and do not use them for illegal purposes"
    },
    "ZH": {
        "Title":"在其他设备上打开Snapdrop以发送文件",
        "displayName": "能跨设备传输数据",
        "BottomSecondTitle": "在这个网络上的每个人都可以发现您!",
        "Aboutext": "是跨设备传输文件的最简单方法",
        "toast": "文件传输完毕!",
        "Ignore":"忽略",
        "download": "保存",
        "Send":"发送",
        "Cancel":"取消",
        "copy":"拷贝",
        "Close":"关闭",
        "MessRec":"收到消息",
        "PersonID":"Yeely翻译",
        "AbotContent":"仅通过局域网共享文件，切勿用作非法用途"
    }
};


var flag = 0;
document.getElementById("trans").onclick=function () {
    var TransDic;
    if (flag==1){
        TransDic=language.EN;
        flag=0
    }else {
        TransDic=language.ZH;
        flag=1
    }
    for (key in TransDic) {
        document.getElementById(key).innerText=TransDic[key];
        console.log(key, TransDic[key]);
        console.log(typeof (key),typeof (TransDic[key]))

    }

}