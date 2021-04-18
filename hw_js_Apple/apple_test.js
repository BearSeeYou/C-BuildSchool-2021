let product = {


    iPhone11: {

        color: [
            { en_color: 'white', ch_color: '白色', img_url: "./apple_img/iphone-white.png" },
            { en_color: 'black', ch_color: '黑色', img_url: "./apple_img/iphone-black.png" },
            { en_color: 'green', ch_color: '綠色', img_url: "./apple_img/iphone-green.png" },
            { en_color: 'yellow', ch_color: '黃色', img_url: "./apple_img/iphone-yellow.png" },
            { en_color: 'purple', ch_color: '紫色', img_url: "./apple_img/iphone-purple.png" },
            { en_color: 'red', ch_color: '紅色', img_url: "./apple_img/iphone-red.png" },
        ]
        ,

        capacity: [
            { gb: 64, cost: 19900 },
            { gb: 128, cost: 21500 },
            { gb: 256, cost: 25000 },
        ]

    }
    ,



    iPad: {
        color: [
            { en_color: 'space', ch_color: '太空灰色', img_url: "./apple_img/ipad-space.png" },
            { en_color: 'silver', ch_color: '銀色', img_url: "./apple_img/ipad-silver.png" },
            { en_color: 'gold', ch_color: '金色', img_url: "./apple_img/ipad-gold.png" },
        ],
        capacity: [
            { gb: 32, cost: 10500 },
            { gb: 128, cost: 13500 },
        ],
        connect: [
            { internet: 'Wi-Fi', cost: 10500 },
            { internet: 'Wi-Fi + 行動網路', cost: 14800 },
        ],
        person_style: [
            { style: '加上刻', cost: 10500 },
            { style: '不加刻 + 行動網路', cost: 14800 },
        ]
    },


    Mac: {
        color: [
            { en_color: 'space', ch_color: '太空灰色', img_url: "./apple_img/mbp13touch-space.png" },
            { en_color: 'silver', ch_color: '銀色', img_url: "./apple_img/mbp13touch-silver.png" },
        ],
        capacity: [
            { gb: 256, cost: 39900 },
            { gb: 512, cost: 45900 },
        ],
    }


}
product.iPhone11.color.forEach((a, b) => {
    let list = Object.values(a);

    console.log(`${b}:${a.en_color},${a.ch_color},${a.img_url},`);
    for (let x of list) {
        console.log(`${x}`);
    }
})

let keys = Object.keys(product.iPhone11);
keys.forEach((key, index) => {
    console.log(key);
    // let color_radio = document.createElement('input').setAttribute('type','radio');
    // color_radio.setAttribute('name','color');

    values.forEach((item, index) => {
        console.log(item);
        // color_radio.setAttribute('id',`${en-color}-iPhone11`);

        // let color_label =document.createElement('label');
        // color_label.setAttribute('for',`${en-color}-iPhone11`);
        // color_label.classList.add('choose-color','btn','btn-outline-primary','col-5','py-4','me-3','mb-3');

        // let circle_span = document.createElement('span');
        // circle_span.classList.add(`i${en-color}`,'rounded-circle','bg-gradient','mx-auto','mb-1');

        // let color_span = document.createElement('span');
        // color_span.classList.add('desc');
        // color_span.innerText=ch_color;
    })
    // <input type="radio" name="color" id="red-iPhone11"></input>
    // <label class="choose-color btn btn-outline-primary col-5 py-4 me-3 mb-3" for="red-iPhone11">
    //                     <span class="ired rounded-circle  bg-gradient mx-auto mb-1"></span>
    //                     <span class="desc">(PRODUCT)RED</span>
    //                 </label>
})



// let list1 = Object.keys(product.iPhone11);
// list1.forEach((item, index) => {
//     console.log(item);
//     list2 = Object.values(item);
//     list2.forEach((item2, index) => {
//         console.log(item2);
//         console.log(index);
//     })
// })


// product.iPhone11.forEach((item, index) => {
//     console.log(item);
//     console.log(index);
//     keys = Object.keys(item);
//     values = Object.values(item);
//     values.forEach((color_items, index) => {
//         color_items.forEach((att, index) => {
//             console.log(att);
//             console.log(index);
//             let inside = Object.values(att);
//             inside.forEach((key) => {
//                 console.log(`${key}`);
//             })
//         })

//     })
// })