function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);
    //下方這個是判斷，如果只有一個元素就回傳[0]，否則就回傳整個集合
    //這個對於使用者來說也比較方便，不然他還要接到回傳的東西以後，
    //自己再寫個[0]去抓，對他來說會比較麻煩啦
    return nodelist.length == 1 ? nodelist[0] : nodelist;

}

function generate(textArray, parent, child) {
    let domParent = document.createElement(parent);

    textArray.forEach((item, index) => {
        let domChild = document.createElement(child);
        domChild.innerText = item;
        domParent.appendChild(domChild);
    })
    return domParent;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

function $c(element, text) {
    let el = document.createElement(element);

    //如果檢測後，沒有一項符合，el就是undefined
    if (text != null && text != undefined && text.length > 0) {
        el.innerText = text;
    }

    return el;
}
export { $g, generate, getRandom, $c };