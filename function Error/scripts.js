var outputUser = "hiii";
//var outputUser = 2; remove comment to generate error

function testError(outputUserTypeVar, correctVariable){
    outputUserTypeVar = outputUser;
    varType = typeof(outputUserTypeVar);
    const ERROR1 = new Error("Insert only one variable of type: "+ correctVariable + "\n Current type: " + varType);

    var result = varType != correctVariable ? ERROR1 : "No error!";
    return console.log(result);
}

testError("", "string"); //1 user-dominated parameter on line 1, 2 parameter is what type of variable can be used