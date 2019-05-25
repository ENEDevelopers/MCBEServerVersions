const fs   = require("fs");
const http = require("http");

var winp   = "https://minecraft.azureedge.net/bin-win/"
var linuxp = "https://minecraft.azureedge.net/bin-linux/"

var page = fs.readFileSync("bedrock_server.html");
//console.log(page.toString())

var version = page.toString().match(/bedrock-server-.+zip/);
//var versionl = page.toString().match(/bedrock-server-.+?zip/).split("\u002f")[1];
if(version==null){
    console.log("page down");
}else{
    console.log("page loaded");
    console.log("win-filename:"+version[0]);
    console.log("linux-filename:"+version[1]);
    var winl   = winp+version[0];
    var linuxl = linuxp+version[1];
    
    fs.writeFileSync("MCBEServerVersions/LATEST.txt","win-"+version[0]+"\nlinux-"+version[1]);
    
    fs.writeFileSync("getWinBin.sh","wget "+winl+" --output-document=./MCBEServerVersions/win-"+version);
    fs.writeFileSync("getLinuxBin.sh","wget "+linuxl+" --output-document=./MCBEServerVersions/linux-"+version);

}

