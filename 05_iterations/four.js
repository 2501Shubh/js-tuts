/*
    iterate OBJECT using (for in)
*/

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    console.log(key)    //only key will be printed
}

for (const key in myObj) {
    console.log(`${key} shortcut is used for ${myObj[key]}`)
    //both key and value will be printed
}