'use strict';//use with string datatype

var love = prompt('Do you love coding ?');

love = love.toLowerCase();

switch (love) {
    case 'yes':
        alert('of course you do');

        break;
        case 'y' :
        alert('of course you do because it`s fantastic...!');
        break;
        case 'YES':
            alert('of course you do because it`s fantastic...!');
            break;
       case 'no' :
            alert('so try coding you will love it ');
            break;
            


    default:
            alert('How add ');
        break;
}

//if (love == 'yes') {// YES , yEs , YEs 
   // alert('of course you do');
//}
//else if (love == 'y') {
   // alert('of course you do because it`s fantastic...!');
///}//
else if (love == 'YES') {
    alert('of course you do because it`s fantastic...!');
}
else if (love == 'no') {
    alert('so try coding you will love it ');
}
else {
    alert('How add ');
}
