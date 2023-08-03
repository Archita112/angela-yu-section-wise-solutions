//This challenge was to use while loops and print 
//the song 99 bottles of beer
//including the last line without any no. if bottles 
//printed in the output

function bottlesOfbeer(){
    let i = 100;
while(i > (0)){
    // if(i = 0){
    //     console.log('No more bottles of beer on the wall, no more bottles of beer.');
    //     console.log('Go to the store and buy some more, 99 bottles of beer on the wall');
    // }
    //else{
        i--;
        if(i>0){
        console.log(i + ' bottles of beer on the wall, ' +i+ ' bottles of beer.');
        console.log('Take one down and pass it around,'+i+ ' bottles of beer on the wall');
        }
        else{
            console.log('No more bottles of beer on the wall, no more bottles of beer.');
            console.log('Go to the store and buy some more, 99 bottles of beer on the wall');
        }

        // if(i = 0){
        //     console.log('No more bottles of beer on the wall, no more bottles of beer.');
        //     console.log('Go to the store and buy some more, 99 bottles of beer on the wall');
        //     break;
        // }
        // //}

}

}
bottlesOfbeer();