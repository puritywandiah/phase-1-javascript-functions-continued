// code your solution here

function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function work(office = "go to the office"){

    return `This Monday, I will ${office}.`;
}
function wrapAdjective(wrap = "*"){
    const innerFunction = function inFunc (param = "special"){
        return `You are ${wrap}${param}${wrap}!`;
 };
 return innerFunction;
}