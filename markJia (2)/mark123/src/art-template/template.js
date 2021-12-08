import docxtemplater from 'docxtemplater'
// import MDEditor from '@uiw/react-md-editor';
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs }from 'file-saver'
// import ImageModule from "docxtemplater-image-module-free";
/*
获取转成markdown格式的文本
*/
function divContent(){
  let markContent = document.getElementsByClassName("wmde-markdown");
  return markContent[0].innerHTML;
}
/*
 ********
 base64DataURLToArrayBuffer函数代码块--导出图片函数编写位置
 ********
*/
export default function ExportWord() {
    // 设置模板变量的值,这个就是模板里所插入的内容数据，根据需要写成动态就好了。
    let templatevalue =  divContent();
    console.log(templatevalue)
    var wordData = {
     	textcontents:"<h1>docxtemplater</h1>"
     	//images: DataUrl //图片导出功能
    };
    // 读取并获得模板文件的二进制内容，是docxtemplater提供的固定写法
    JSZipUtils.getBinaryContent("/simple.docx", function (error, content) {
      // exportTemplate.docx是模板，React写在public里。我们在导出的时候，会根据此模板来导出对应的数据
      //图片导出功能
     /*
     var opts = {}
      opts.centered = false; //Set to true to always center images
      opts.fileType = "docx"; //Or pptx
      opts.getImage = function (chartId) {
        return base64DataURLToArrayBuffer(chartId);
      }
      //Pass the function that return image size
      opts.getSize = function () {
        return [450, 450];
      }
      var imageModule = new ImageModule(opts);
     */
      // 抛出异常
      if (error) {
        throw error;
      }
      // 创建一个PizZip实例，内容为模板的内容
      let zip = new PizZip(content);
      // 创建并加载docxtemplater实例对象
      let doc = new docxtemplater()
        //.attachModule(imageModule) //图片导出功能
        .loadZip(zip)
        .compile();

      // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
      doc.resolveData(wordData).then(function () {
          console.log(wordData)
        console.log('ready');
        doc.render();
        var out = doc.getZip().generate({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        // 将目标文件对象保存为目标类型的文件，并命名（起一个自己需要的名字就好了）
        saveAs(out, "导出文件名.docx");
      })
    });
  }
  // 导出图片所要用到的函数
  // function base64DataURLToArrayBuffer(dataURL) {
  //   console.log(dataURL);
  //   const base64Regex = /^data:image\/(png|jpg|svg|jpeg|svg\+xml);base64,/;
  //   if (!base64Regex.test(dataURL)) {
  //     return false;
  //   }
  //   const stringBase64 = dataURL.replace(base64Regex, "");
  //   let binaryString;
  //   if (typeof window !== "undefined") {
  //     binaryString = window.atob(stringBase64);
  //   } else {
  //     binaryString = new Buffer(stringBase64, "base64").toString("binary");
  //   }
  //   const len = binaryString.length;
  //   const bytes = new Uint8Array(len);
  //   for (let i = 0; i < len; i++) {
  //     const ascii = binaryString.charCodeAt(i);
  //     bytes[i] = ascii;
  //   }
  //   return bytes.buffer;
  // }