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
    console.log('str');
    for( var l=1 ; l<=3 ; l++){
        str+='*';
        // str = str + '*' ;
        console.log('str');
    }
    // str=+'\n';
    str = str + '\n' ;
    
}
// .........................

var str1 = '';
for(var m=1 ; m<=5 ; m++){
    console.log('str1');

    for( var n=1 ; n<=m ; n++){
        // str+='*';
        str1 = str1 + '*' ;
        console.log('str1');

    }
    // str=+'\n';
    str1 = str1 + '\n' ;
}
