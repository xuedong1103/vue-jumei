const path=require("path");

module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.jumei.com",
                changeOrigin:true,
                pathRewrite:{
                     "^/api/":""
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
            }
        }
    }
}

//http://m.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=2&platform=wap&type=formal&page_key=1573602360