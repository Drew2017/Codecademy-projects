/* Don't think I need these???
const msgType='customer reachout'; //get user input for which type of msg they would like (cust follow-up, DTM, Step 1 follow-up, etc.)
const name='John';
const long; //get user input if intending long or short msg
*/



function buildMessage(name='',msgType,long=true){
//msgType=getMsgType(msgType);
let introMsg=[`Hi${name}! Hope you are doing well today!`,`How is it going${name}?`,`How have you been lately${name}?`];
let sampleMsg=[`I would love to offer you a sample of our products if you would be willing to try!`,`We offer over 350 products in the premium health, home, and beauty market! I would love to get you a sample if you would be willing to try!`,`Can I offer you a free sample of some high-quality products?`];
let garunteeTag='We offer a 180-day money-back garuntee on everything, even if you\'ve tried the product already!';
let DTMmsg=['When would you have time for a quick 5-10 min phone call?','','Would love to chat soon!  Do you have time for a quick call in the next day or two?'];
let introIndex = Math.floor(Math.random()*introMsg.length);
let sampleIndex = Math.floor(Math.random()*sampleMsg.length);
let DTMindex = Math.floor(Math.random()*DTMmsg.length);
if(msgType==='customer reachout'){
console.log(introMsg[introIndex]+'\n'+sampleMsg[sampleIndex]);
}
else if(msgType==='DTM'){
    console.log(introMsg[introIndex]+'\n'+DTMmsg[DTMindex]);
}
else if (msgType==='initial customer reachout'){
    console.log(introMsg[introIndex]+'\n\n'+sampleMsg[sampleIndex]+' '+garunteeTag);
}
}


/*function builds a customer profile for a more personalized and specific message */
function buildCustomer(firstName,lastName=null,nickname=null,favoriteProduct=null,otherProducts=null,kids=false,useFullName=false,useNickname=false){
const name = firstName+'_'+lastName;
return {firstName:firstName,
lastName:lastName,
nickname:nickname,
favoriteProduct:favoritProduct,
otherProducts:otherProducts,
kids:kids,
useFullName:useFullName,
useNickname:useNickname}
}

/*returns an indexing number based on what type of msg user is trying to create */
function getMsgType(msgType){
    const type=['customer reachout','initial customer reachout','DTM','customer follow-up','board plan'];
    if (type.indexOf(msgType)!==-1){return type.indexOf(msgType)}
    else{console.log('message type non-existent')}
}

/* test code below */
buildMessage(' John Smith','customer reachout');
console.log('\n\n')
buildMessage(' John Cena','initial customer reachout');
