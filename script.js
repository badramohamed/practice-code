console.log('loops practice'); 
 
let index = 0 
const max = 10


// while loop
while (index < max){
    console.log('in while loops', index); 
    index++;
    // index++ needs to add the increameant
}
// for loops 
for (let i = 0; i<max; i++){
    console.log('in for loop is', i)
}


let tattoo = ['bird', 'cat', 'heart', 'horns'];

for(let i=0; i<tattoo.length; i++ ){
    console.log('for loop', tattoo[i]);
    if(tattoo[i] === 'bird'){
        console.log('matchhhhh');
    }
}

// for in 
for( i in tattoo){
    console.log('for in loop', tattoo[i]);

}

// for of 
for( random of tattoo){
    console.log('for of loops', random);
if (random === 'bird'){
     console.log('it matches', random);
}
}