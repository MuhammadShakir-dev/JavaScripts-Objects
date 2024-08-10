// basic for each
let langs = ["JS", "PY", "JAVA", "RUST"];
langs.forEach(function (items) { 
    // console.log(items);
})

// variation one
langs.forEach((items) => { 
    // console.log(items)
})

// variation two
function printLangs(items) { 
    // console.log(items);
}
langs.forEach(printLangs)

// variation three 
langs.forEach((items, index, arr) => { 
    console.log(items, index, arr);
})

// variation four
let langsDetails = [
    {
        langugaeName: "JavaScript",
        fileShortCut: ".js"
    },

    {
        langugaeName: "Python",
        fileShortCut: ".py"
    },

    {
        langugaeName: "Swift",
        fileShortCut: "swift"
    }
]

langsDetails.forEach((items) => { 
    console.log(items.langugaeName , items.fileShortCut);
})

