#!/usr/bin/env node

const https = require("https");
const parser = require("node-html-parser");

let url =
" https://www.skku.edu/skku/campus/support/welfare_11_1.do?mode=info&conspaceCd=20201251&srResId=12&srShowTime=W&srCategory=L ";

https.get(url, 
    {
        headers:{
            "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        },
    },
    
    (res) => { 
    let data = "";
    res.on("data", (d) => { 
        data += d;
    });
    res.on("end", () => {
        let root = parser.parse(data);
        root.querySelectorAll("pre").forEach((menu) => {

            if(!menu.innerText.trim().includes("공대 26동")){
            console.log(menu.innerText.trim());
            }
            });
        });
});


