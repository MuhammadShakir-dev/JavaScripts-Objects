// let's print 1 - 10 numbers
for (let i = 1; i <= 10; i++) { 
    // console.log(i);
}


// Print tables from 1 - 10 using for loop
for (let i = 1; i <= 10; i++) { 
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) { 
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// Print all element of an array using for loop
let ary = [1, 2, 3, 4, 5];
for (let i = 0; i < ary.length; i++) { 
    // console.log(ary[i]);
}


// using break
for (let i = 0; i < ary.length; i++) { 
    if (ary[i] === 4) { 
        console.log("4 is detected");    
        break
    }
    console.log(ary[i]);
}


// using continue
for (let i = 0; i < ary.length; i++) { 
    if (ary[i] === 4) { 
        console.log("4 is detected");    
        continue
    }
    console.log(ary[i]);
}



