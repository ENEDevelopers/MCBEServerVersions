const fs   = require("fs");
const http = require("http");

var winp   = "https://minecraft.azureedge.net/"
var linuxp = "https://minecraft.azureedge.net/"

var page = fs.readFileSync("bedrock_server.html");
//console.log(page.toString())
var version =[]
version[0] = page.toString().match(/bin-win\/bedrock-server-.+zip/)[0];
version[1] = page.toString().match(/bin-linux\/bedrock-server-.+?zip/)[0];
if(version==null){
    console.log("page down");
}else{
    console.log("page loaded");
    console.log("win-filename:"+version[0]);
    console.log("linux-filename:"+version[1]);
    var winl   = winp+version[0];
    var linuxl = linuxp+version[1];
    
    fs.writeFileSync("MCBEServerVersions/LATEST.txt",""+version[0]+"\n"+version[1]);
    
    fs.writeFileSync("getWinBin.sh","wget "+winl+" --output-document=./MCBEServerVersions/"+version[0]);
    fs.writeFileSync("getLinuxBin.sh","wget "+linuxl+" --output-document=./MCBEServerVersions/"+version[1]);

}

