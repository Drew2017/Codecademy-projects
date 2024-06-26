/* Don't think I need these???
const msgType='customer reachout'; //get user input for which type of msg they would like (cust follow-up, DTM, Step 1 follow-up, etc.)
const name='John';
const long; //get user input if intending long or short msg
*/



function buildMessage(name='',msgType,long=true){
msgType=getMsgType(msgType);
let introMsg=[`Hi${name}! Hope you are doing well today!`,`How is it going${name}?`,`How have you been lately${name}?`];
let sampleMsg=[`I would love to offer you a sample of our products if you would be willing to try!`]
console.log(introMsg+'/n'+sampleMsg)

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
    const type=['customer reachout','initial customer reachout','DTM phone call','customer follow-up','board plan'];
    if (type.indexOf(msgType)!==-1){return type.indexOf(msgType)}
    else{console.log('message type non-existent')}
}

/* test code below */
buildMessage(' John Smith','customer reachout');