function goSearch(item) {
    let searchValue = document.getElementById("searchField").value.toLowerCase();
    let mainContent = document.getElementById("mainContent");
    let mainContentPara = mainContent.getElementsByTagName("div");
    let mainContentArray = [];
    for (let count of mainContentPara) {
        mainContentArray.push(
            count.innerText
            .toLowerCase()
            .split(" ")
            .map((item) => checkFor(item, 0, [",", ".", " ", "!"]))
        );
    }
    // let foundArray = mainContentArray.map((element) => {
    //     let buffer;
    //     buffer.push(element.findIndex((element) => element.includes(searchValue)));
    //     return buffer;
    // });
    let arrayIndex = getIndex(mainContentArray, searchValue);
    let output;
    for (let i = 0; i++; i < mainContentArray.length) {
        for (let e = 0; e < mainContentArray[i].length; e++) {
            //remember to add Value comparison to see where the font should be bold
            if (arrayIndex[0].includes(i) && arrayIndex[0].includes(e)) {
                output += "<strong>";
                output += mainContentArray[i][e];
                output += "</strong>";
            } else {
                output += mainContentArray[i][e];
            }
        }
    }
    document.getElementById("mainContent").innerHTML = output;
    // let cought = false;
    // for (let i = 0; i < mainContentPara.length; i++) {
    //     if (mainContentPara[i].innerHTML.toLowerCase().includes(searchValue)) {
    //         console.log('searchValue found');
    //         cought = true;
    //     }
    // }
    // if (!cought) {
    //     console.log("No matches found");
    // }
}

function getIndex(array, search) {
    let indexArray = ['', ''];
    for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < array[i].length; e++) {
            if (array[i][e] === search) {
                indexArray.push([i, e]);
            }
        }
    }
    return indexArray;
}
const checkFor = (item, i, syntax) => {
    if (i < 10) {
        for (let count of syntax) {
            if (item.endsWith(count)) {
                return checkFor(item.slice(0, item.length - 1), i + 1, syntax);
            }
            if (item.startsWith(count)) {
                return checkFor(item.slice(1, item.length), i + 1, syntax);
            }
        }
    } else {
        console.log(
            item + ":  There has bee an error, too many special characters!"
        );
    }
    return item;
};