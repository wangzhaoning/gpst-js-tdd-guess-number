const main = require('../main/main');

describe('main()', function ()
 {
    it("全猜对A的情况", function () {
        let input="1234";
        let random="1234";
        var result = main(input,random);
        expect(result).toEqual("4A0B");
    })
     it("", function () {
         let input="1234";
         let random="1243";
         var result = main(input,random);
         expect(result).toEqual("2A2B");
     })
     it("B全猜对的情况", function () {
         let input="1234";
         let random="4321";
         var result = main(input,random);
         expect(result).toEqual("0A4B");
     })
     it("为空", function () {
         let input="";
         let random="1234";
         var result = main(input,random);
         expect(result).toEqual("0A0B");
     })
});
