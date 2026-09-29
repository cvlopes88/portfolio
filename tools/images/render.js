const {Resvg}=require('@resvg/resvg-js'),fs=require('fs'),path=require('path');
const fontFiles=fs.readdirSync('./fonts').map(f=>path.resolve('./fonts',f));
const r=(src,out,w)=>{const png=new Resvg(fs.readFileSync(src,'utf8'),{fitTo:{mode:'width',value:w},font:{fontFiles,loadSystemFonts:false,defaultFontFamily:'Inter'}}).render().asPng();fs.writeFileSync(out,png);console.log(out,png.length)};
r('./og-image.svg','../../site/og-image.png',1200);
r('./apple-icon.svg','../../site/apple-touch-icon.png',180);
r('./favicon.svg','../../site/favicon-32.png',32);
