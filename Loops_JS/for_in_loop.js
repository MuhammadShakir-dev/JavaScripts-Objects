// for in loops using with objects

const langugaesShortCuts = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++",
    swift: "Swift by Apple",
    dart: "Flutter",
    rust: "Rust",
    html: "HTML"
}

for (let keys in langugaesShortCuts) { 
    console.log(`${keys} is for : ${langugaesShortCuts[keys]}`);
}

// using it with arrays
let myAry = ["JS", "PY", "GO", "DART", "HTML"];
for (let index in myAry) { 
    console.log(`Some important langs are : ${myAry[index]}`);
}


