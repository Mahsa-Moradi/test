// *************************   Nesting
for( i=1 ; i<=2 ; i++){
    
    console.log('inner : ' + i);
    for( j=1 ; j<=3 ; j++){
    
        console.log('outer : ' + j);
    }
}
// .........................

var str = '';
for(var k=1 ; k<=2 ; k++){
    for( var l=1 ; l<=3 ; l++){
        // str+='*';
        str = str + '*' ;
    }
    // str=+'\n';
    str = str + '\n' ;
}
