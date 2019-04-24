const fs   = require("fs");
const http = require("http");

var winp   = "https://minecraft.azureedge.net/bin-win/"
var linuxp = "https://minecraft.azureedge.net/bin-linux/"

var page = fs.readFileSync("bedrock_server.html");
//console.log(page.toString())

var version = page.toString().match(/bedrock-server-.+?zip/);

if(version==null){
    console.log("page down");
}else{
    console.log("page loaded");
    version=version[0];
    console.log("filename:"+version);
    var winl   = winp+version;
    var linuxl = linuxp+version;

    
    fs.writeFileSync("getWinBin.sh","wget "+winl+" --output-document=./MCBEServerVersions/win-"+version);
    fs.writeFileSync("getLinuxBin.sh","wget "+linuxl+" --output-document=./MCBEServerVersions/linux-"+version);

}

