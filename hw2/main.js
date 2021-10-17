let food_album = ["https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                    "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",];
let shiba_inu_album = ["https://images.pexels.com/photos/5731805/pexels-photo-5731805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                        "https://images.pexels.com/photos/5749135/pexels-photo-5749135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                        "https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/4046305/pexels-photo-4046305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/6589074/pexels-photo-6589074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/5731864/pexels-photo-5731864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/4056472/pexels-photo-4056472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/6589077/pexels-photo-6589077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/4588051/pexels-photo-4588051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "https://images.pexels.com/photos/4588012/pexels-photo-4588012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];
let cat_album = ["https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
                    "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/2113368/pexels-photo-2113368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/6258162/pexels-photo-6258162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/5004611/pexels-photo-5004611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

let albums = [food_album, shiba_inu_album, cat_album, []];
let album_names = ["food", "shiba inu", "cat", "empty"];

function reload_pictures(album){

    if (album.length !== 0){

        // remove and reload pictures
        let pictures_container = document.getElementById("pictures-container");
        while (pictures_container.firstChild){
            pictures_container.removeChild(pictures_container.firstChild);
        }
        for (let i = 0; i < album.length; i++){
            let div = document.createElement("div");
            div.setAttribute("class", "picture-container");
            let img = document.createElement("img");
            img.setAttribute("id", i.toString());
            img.setAttribute("class", "picture")
            img.setAttribute("src", album[i]);
            div.appendChild(img);
            pictures_container.appendChild(div);
        }

        // remove big picture
        const big_picture_container = document.getElementById("big-picture-container");
        while (big_picture_container.firstChild){
            big_picture_container.removeChild(big_picture_container.firstChild);
        }

        let pic_mouseover;
        let pic_array = [];
        for (let i = 0; i < album.length; i++)
            pic_array.push(i.toString());

        // add images
        let img = document.createElement("img");
        img.setAttribute("id", "big-picture");
        img.setAttribute("class", "big-picture");
        img.setAttribute("src", album[0]);
        big_picture_container.appendChild(img);
        
        // count number of picture (default)
        let num_of_picture = document.getElementById("num-of-picture");
        num_of_picture.innerHTML = "1 of " + pic_array.length.toString();
        
        // add style
        const big_pic = document.getElementById("big-picture");
        let def_big_pic_style = document.getElementById("0").style;
        def_big_pic_style.border = "8px solid";
        def_big_pic_style.borderImage = "linear-gradient(to bottom, rgba(107, 0, 128, 0.521), rgba(255, 17, 0, 0.616)) 1";

        pic_array.forEach(i => {
            document.getElementById(i).addEventListener("click", () => {
                pic_array.forEach(i =>{
                    pic_style = document.getElementById(i).style;
                    pic_style.border = "";
                    pic_style.borderImage = "";
                })
                let pic_click = document.getElementById(i);
                big_pic_id = i;
                big_pic.src = album[parseInt(i, 10)];
                pic_click.style.border = "8px solid";
                pic_click.style.borderImage = "linear-gradient(to bottom, rgba(107, 0, 128, 0.521), rgba(255, 17, 0, 0.616)) 1";

                let num_of_picture = document.getElementById("num-of-picture");
                num_of_picture.innerHTML = (parseInt(i) + 1).toString() + " of " + pic_array.length.toString();
            });
            
            document.getElementById(i).addEventListener("mouseover", () => {
                pic_array.forEach(i =>{
                    pic_style = document.getElementById(i).style;
                    pic_style.transition = "";
                    pic_style.transform = "";
                })
                let pic_hover = document.getElementById(i);
                pic_hover.style.transition = "transform 0.5s 0.2s";
                pic_hover.style.transform = "scale(1.2)";
                pic_mouseover = i;
            });
        
            document.getElementById(i).addEventListener("mouseout", () => {
                if (pic_mouseover === i){
                    let pic_hover = document.getElementById(i);
                    pic_hover.style.transition = "transform 0.5s 0.2s";
                    pic_hover.style.transform = "scale(1.0)";
                }
            });
        });
    }
    else {
        // remove pictures
        let pictures_container = document.getElementById("pictures-container");
        while (pictures_container.firstChild){
            pictures_container.removeChild(pictures_container.firstChild);
        }
        pictures_container.style.overflow = "visible";

        // remove big picture
        const big_picture_container = document.getElementById("big-picture-container");
        while (big_picture_container.firstChild){
            big_picture_container.removeChild(big_picture_container.firstChild);
        }

        // remove count of image
        let num_of_picture = document.getElementById("num-of-picture");
        num_of_picture.innerHTML = "";

        // add text
        let h2 = document.createElement("h2");
        h2.innerHTML = "This is an empty album.";
        pictures_container.appendChild(h2);
    }
    
}

let album_choose = album_names[0];

function reload_albums(album_names, albums, last_album_choose="food"){

    // remove albums
    let albums_element = document.getElementById("albums");
    while (albums_element.firstChild){
        albums_element.removeChild(albums_element.firstChild);
    }

    // count number of images
    let sum_images = 0;

    // show albums
    for (let i = 0; i < album_names.length; i++){
        sum_images += albums[i].length;
        let a_1 = document.createElement("div");
        a_1.setAttribute("id", album_names[i]);
        a_1.setAttribute("class", "select");

        let a_2 = document.createElement("div");
        a_2.setAttribute("class", "album-picture-container");

        let a_3 = document.createElement("h2");
        let node = document.createTextNode(album_names[i]);
        a_3.setAttribute("class", "album-name");
        a_3.appendChild(node);

        let a_4 = document.createElement("img");
        a_4.setAttribute("class", "album-picture");
        if (albums[i].length !== 0)
            a_4.setAttribute("src", albums[i][0]);
        
        let a_5 = document.createElement("p");
        a_5.setAttribute("class", "album-num");
        a_5.innerHTML = albums[i].length;

        a_2.appendChild(a_4);
        a_1.appendChild(a_2);
        a_1.appendChild(a_3);
        a_1.appendChild(a_5);
        albums_element.appendChild(a_1);
    }

    // show number of images
    let p = document.createElement("p");
    p.innerHTML = "共" + sum_images + "張";
    albums_element.appendChild(p);

    // add style to show which album is chosed
    album_choose = last_album_choose;
    let def_album = document.getElementById(album_choose);
    def_album.style.backgroundColor = "cornsilk";
    def_album.style.borderBlockStyle = "ridge";
    album_names.forEach(name => {
        document.getElementById(name).addEventListener("click", () => {
            let index  = album_names.findIndex((value) => name === value);
            album_names.forEach(name => {
                
                // if (albums[index].length !== 0)
                // {
                    album_style = document.getElementById(name).style;
                    album_style.backgroundColor = "";
                    album_style.borderBlockStyle = "";
                // }
            });

            if (albums[index].length !== 0){
                album_choose = name;
                let album_click = document.getElementById(name);
                album_click.style.backgroundColor = "cornsilk";
                album_click.style.borderBlockStyle = "ridge";
                // reload pictures
                reload_pictures(albums[index])
            }
            else {
                album_choose = name;
                let album_click = document.getElementById(name);
                album_click.style.backgroundColor = "cornsilk";
                album_click.style.borderBlockStyle = "ridge";
                // reload pictures
                reload_pictures(albums[index])
            }
        }); 
    });
}

// show albums
reload_albums(album_names, albums);

// render pictures
let album_index = album_names.findIndex((value) => album_choose === value);
reload_pictures(albums[album_index]);

let check_1 = document.getElementById("check-1");
let check_2 = document.getElementById("check-2");
let album_name = document.getElementById("album-name");
let image_url = document.getElementById("image-url");

// add image
let add_image = document.getElementById("add-image-icon");
let overlay_1 = document.getElementById("overlay-1");
let overlay_input_1 = document.getElementById("overlay-input-1");
let click_input_1 = false;
add_image.addEventListener("click", () => {
    overlay_1.style.display = "block";
    overlay_input_1.style.transition = "height width 1.0s 0.2s";
    overlay_input_1.style.height = "30%";
    overlay_input_1.style.width = "40%";
});
overlay_input_1.addEventListener("click", () => {
    click_input_1 = true;
});
overlay_input_1.addEventListener("mouseout", () => {
    click_input_1 = false;
});
overlay_1.addEventListener("click", () => {
    if (click_input_1){
        overlay_1.style.display = "block";
        overlay_input_1.style.transition = "height width 1.0s 0.2s";
        overlay_input_1.style.height = "30%";
        overlay_input_1.style.width = "40%";
    }
    else {
        overlay_1.style.display = "none";
        overlay_input_1.style.height = "0%";
        overlay_input_1.style.width = "0%";
    }
})
check_1.addEventListener("click", () => {
    if (album_names.includes(album_name.value)){
        let index = album_names.findIndex((value) => album_name.value === value);
        albums[index].push(image_url.value);
        album_name.value = "";
        image_url.value = "";
        reload_albums(album_names, albums, album_choose);
        reload_pictures(albums[index]);
    }
    else {
        alert("This album name does not exist.");
    }
});

// add album
let add_album = document.getElementById("add-album-icon");
let overlay_2 = document.getElementById("overlay-2");
let overlay_input_2 = document.getElementById("overlay-input-2");
let new_album_name = document.getElementById("new-album-name");
let click_input_2 = false;
add_album.addEventListener("click", () => {
    overlay_2.style.display = "block";
});
overlay_input_2.addEventListener("click", () => {
    click_input_2 = true;
});
overlay_input_2.addEventListener("mouseout", () => {
    click_input_2 = false;
});
overlay_2.addEventListener("click", () => {
    if (click_input_2)
        overlay_2.style.display = "block";
    else {
        overlay_2.style.display = "none";
    }
})
check_2.addEventListener("click", () => {
    if (album_names.includes(new_album_name.value)){
        alert("This album has already been created.");
    }
    else {
        album_names.push(new_album_name.value);
        new_album_name.value = "";
        albums.push([]);
        reload_albums(album_names, albums, album_choose);
        console.log(album_names);
    }
});


// delete
let trash_can = document.getElementById("trash-can-icon");
let overlay_3 = document.getElementById("overlay-3");
let overlay_input_3 = document.getElementById("overlay-input-3");
let out_click_input_3 = false;
trash_can.addEventListener("click", () => {
    overlay_3.style.display = "block";
});
overlay_input_3.addEventListener("mouseover", () => {
    out_click_input_3 = false;
});
overlay_input_3.addEventListener("mouseout", () => {
    out_click_input_3 = true;
});
overlay_3.addEventListener("click", () => {
    if (out_click_input_3){
        overlay_3.style.display = "none";
    }
});

// delete picture
let button_3 = document.getElementById("button-3");
button_3.addEventListener("click", () => {
    let big_pic = document.getElementById("big-picture");
    let index = album_names.findIndex((value) => album_choose == value);
    let pic_index = albums[index].findIndex((value) => big_pic.src == value);
    albums[index].splice(pic_index, 1);
    reload_albums(album_names, albums, album_choose);
    reload_pictures(albums[index]);
});

// delete album
let button_4 = document.getElementById("button-4");
button_4.addEventListener("click", () => {
    let index = album_names.findIndex((value) => album_choose == value);
    albums[index].splice(0, albums[index].length);
    albums.splice(index, 1);
    album_names.splice(index, 1);
    if (albums[index - 1]){
        reload_albums(album_names, albums, album_names[index - 1]);
        reload_pictures(albums[index - 1]);
    }
    else if (albums[index]){
        reload_albums(album_names, albums, album_names[index]);
        reload_pictures(albums[index]);
    }
    else {
        alert("再刪就沒相簿了!!!");
    }
});