var json1 ='{"name":"Srinivasan","age":25,"is Good":true}';
var json2 ='{"name":"Padmanaban","age":26,"is Good":false}';
function compareJSON(){
    var obj1=JSON.parse(json1);
    var obj2=JSON.parse(json2);
    if(Object.keys(obj1).length!==Object.keys(obj2).length){
        return false;
    }
    for(var key in obj1){
        if(!obj2.hasOwnProperty(key) || obj1[key]!==obj2[key]){
            return false;
        }
    }
}
const result = compareJSON();
console.log(result);
