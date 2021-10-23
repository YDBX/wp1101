
let num_todos = 0;
let todos = [];
let complete = [];

function clean_button() {
    let footer = document.getElementById("todo-footer");
    if (todos.length - num_todos === 0){
        if (footer.lastChild.firstChild){
            footer.lastChild.firstChild.remove();
        }
    }
    else {
        if (!footer.lastChild.firstChild){
            let button = document.createElement("button");
            let footer_div2 = document.getElementById("todo-footer").lastChild;
            button.innerHTML = "Clear completed";
            footer_div2.appendChild(button)

            // addeventlistener button
            button.addEventListener("click", () => {
                let ul = document.getElementById("todo-list");
                let first_li = ul.firstChild;
                while (first_li){
                    let tmp = first_li.nextElementSibling;
                    if (first_li.firstChild.firstChild.checked) {
                        let index = todos.findIndex((element) => element === first_li.firstChild.nextElementSibling.innerHTML);
                        todos.splice(index, 1);
                        complete.splice(index, 1);
                        first_li.remove()
                    }
                    first_li = tmp;
                }
                clean_button();
            });
        }
    }
    
}


function reload(todo){

    let ul = document.getElementById("todo-list");
    
    // add <li> in <ul>
    let li = document.createElement('li');
    li.setAttribute("class", "todo-app__item");
    ul.appendChild(li);

    // add <div> in <li>
    let li_div = document.createElement("div");
    li_div.setAttribute("class", "todo-app__checkbox");
    li.appendChild(li_div);

    // add input in div
    let div_input = document.createElement("input");
    div_input.setAttribute("id", num_todos.toString());
    div_input.setAttribute("type", "checkbox");
    li_div.appendChild(div_input);

    // add label in div
    let div_label = document.createElement("label");
    div_label.setAttribute("for", num_todos.toString());
    li_div.appendChild(div_label);

    // add <h1> in <li>
    let li_h1 = document.createElement("h1");
    li_h1.setAttribute("class", "todo-app__item-detail");
    li_h1.innerHTML = todo;
    li.appendChild(li_h1);

    // add <img> in <li>
    let li_img = document.createElement("img");
    li_img.setAttribute("src", "./img/x.png");
    li_img.setAttribute("class", "todo-app__item-x");
    li.appendChild(li_img);
    
    // footer
    let footer = document.getElementById("todo-footer");
    if (!(footer)){
        
        // add <footer>
        footer = document.createElement("footer");
        footer.setAttribute("class", "todo-app__footer");
        footer.setAttribute("id", "todo-footer");
        root.appendChild(footer);

        // add <div> in <footer>
        let footer_div = document.createElement("div");
        footer_div.setAttribute("class", "todo-app__total");
        footer_div.innerHTML = num_todos + " left";
        footer.appendChild(footer_div);

        // add <ul> in <footer>
        let footer_ul = document.createElement("ul");
        footer_ul.setAttribute("class", "todo-app__view-buttons");
        footer.appendChild(footer_ul);

        // add button in <ul>
        let buttons_names = ["All", "Active", "Completed"];
        for (let button_name of buttons_names){
            let footer_button1 = document.createElement("button");
            footer_button1.innerHTML = button_name;
            footer_ul.appendChild(footer_button1);

            if (button_name === "All") {

                footer_button1.addEventListener("click", () => {
                    let ul = document.getElementById("todo-list");
                    while (ul.firstChild){
                        ul.firstChild.remove();
                    }
                    for (i in todos){
                        // add <li> in <ul>
                        let li = document.createElement('li');
                        li.setAttribute("class", "todo-app__item");
                        ul.appendChild(li);

                        // add <div> in <li>
                        let li_div = document.createElement("div");
                        li_div.setAttribute("class", "todo-app__checkbox");
                        li.appendChild(li_div);

                        // add input in div
                        if (complete[i]){

                            let div_input = document.createElement("input");
                            div_input.setAttribute("id", i.toString());
                            div_input.setAttribute("type", "checkbox");
                            div_input.checked = true;
                            li_div.appendChild(div_input);
                            
                            let li_h1 = document.createElement("h1");
                            li_h1.setAttribute("class", "todo-app__item-detail");
                            li_h1.setAttribute("style", "text-decoration: line-through; opacity: 0.5;")
                            li_h1.innerHTML = todos[i];
                            li.appendChild(li_h1);

                            div_input.addEventListener("click", () => {
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let h1 = div_input.parentElement.nextElementSibling;
                                let index = todos.findIndex((element) => element === h1.innerHTML);
                                if (div_input.checked) {
                                    h1.style = "text-decoration: line-through; opacity: 0.5;";
                                    num_todos -= 1;
                                    footer_div.innerHTML = num_todos + " left";
                                    complete[index] = true;
                                    clean_button();
                                }
                                else {
                                    h1.style = "";
                                    num_todos += 1;
                                    complete[index] = false;
                                    footer_div.innerHTML = num_todos + " left";
                                    clean_button();
                                }
                            });
                        }
                        else {

                            let div_input = document.createElement("input");
                            div_input.setAttribute("id", i.toString());
                            div_input.setAttribute("type", "checkbox");
                            li_div.appendChild(div_input);
                            
                            let li_h1 = document.createElement("h1");
                            li_h1.setAttribute("class", "todo-app__item-detail");
                            li_h1.innerHTML = todos[i];
                            li.appendChild(li_h1);

                            div_input.addEventListener("click", () => {
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let h1 = div_input.parentElement.nextElementSibling;
                                let index = todos.findIndex((element) => element === h1.innerHTML);
                                if (div_input.checked) {
                                    h1.style = "text-decoration: line-through; opacity: 0.5;";
                                    num_todos -= 1;
                                    footer_div.innerHTML = num_todos + " left";
                                    complete[index] = true;
                                    clean_button();
                                }
                                else {
                                    h1.style = "";
                                    num_todos += 1;
                                    complete[index] = false;
                                    footer_div.innerHTML = num_todos + " left";
                                    clean_button();
                                }
                            });
                        }
                        
                        // add label in div
                        let div_label = document.createElement("label");
                        div_label.setAttribute("for", i.toString());
                        li_div.appendChild(div_label);
                        

                        // add <img> in <li>
                        let li_img = document.createElement("img");
                        li_img.setAttribute("src", "./img/x.png");
                        li_img.setAttribute("class", "todo-app__item-x");
                        li.appendChild(li_img);

                        li_img.addEventListener("click", () => {
                            let li = li_img.parentElement;
                            let h1 = li_img.previousElementSibling;
                            let footer_div = document.getElementById("todo-footer").firstChild;
                            let index = todos.findIndex((element) => element == h1.innerHTML);
                            if (!li.firstChild.firstChild.checked) num_todos -= 1;
                            footer_div.innerHTML = num_todos + " left";
                            if (num_todos === 0) footer_div.parentElement.remove();
                            li.remove()
                            todos.splice(index, 1);
                            complete.splice(index, 1);
                            clean_button();
                        });
                    }
                });
            }
            else if (button_name === "Active") {
                footer_button1.addEventListener("click", () => {
                    let ul = document.getElementById("todo-list");
                    while (ul.firstChild){
                        ul.firstChild.remove();
                    }
                    for (i in todos){
                        if (!complete[i]) {
                            // add <li> in <ul>
                            let li = document.createElement('li');
                            li.setAttribute("class", "todo-app__item");
                            ul.appendChild(li);

                            // add <div> in <li>
                            let li_div = document.createElement("div");
                            li_div.setAttribute("class", "todo-app__checkbox");
                            li.appendChild(li_div);

                            let div_input = document.createElement("input");
                            div_input.setAttribute("id", i.toString());
                            div_input.setAttribute("type", "checkbox");
                            li_div.appendChild(div_input);
                            
                            let li_h1 = document.createElement("h1");
                            li_h1.setAttribute("class", "todo-app__item-detail");
                            li_h1.innerHTML = todos[i];
                            li.appendChild(li_h1);

                            div_input.addEventListener("click", () => {
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let h1 = div_input.parentElement.nextElementSibling;
                                let index = todos.findIndex((element) => element === h1.innerHTML);
                                if (div_input.checked) {
                                    h1.style = "text-decoration: line-through; opacity: 0.5;";
                                    num_todos -= 1;
                                    footer_div.innerHTML = num_todos + " left";
                                    complete[index] = true;
                                    clean_button();
                                }
                                else {
                                    h1.style = "";
                                    num_todos += 1;
                                    complete[index] = false;
                                    footer_div.innerHTML = num_todos + " left";
                                    clean_button();
                                }
                            });

                            let div_label = document.createElement("label");
                            div_label.setAttribute("for", i.toString());
                            li_div.appendChild(div_label);
                            

                            // add <img> in <li>
                            let li_img = document.createElement("img");
                            li_img.setAttribute("src", "./img/x.png");
                            li_img.setAttribute("class", "todo-app__item-x");
                            li.appendChild(li_img);

                            li_img.addEventListener("click", () => {
                                let li = li_img.parentElement;
                                let h1 = li_img.previousElementSibling;
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let index = todos.findIndex((element) => element == h1.innerHTML);
                                if (!li.firstChild.firstChild.checked) num_todos -= 1;
                                footer_div.innerHTML = num_todos + " left";
                                if (num_todos === 0) footer_div.parentElement.remove();
                                li.remove()
                                todos.splice(index, 1);
                                complete.splice(index, 1);
                                clean_button();
                            });
                        }
                    }
                });
            }
            else if (button_name === "Completed") {
                footer_button1.addEventListener("click", () => {
                    let ul = document.getElementById("todo-list");
                    while (ul.firstChild){
                        ul.firstChild.remove();
                    }
                    for (i in todos){
                        if (complete[i]) {
                            // add <li> in <ul>
                            let li = document.createElement('li');
                            li.setAttribute("class", "todo-app__item");
                            ul.appendChild(li);

                            // add <div> in <li>
                            let li_div = document.createElement("div");
                            li_div.setAttribute("class", "todo-app__checkbox");
                            li.appendChild(li_div);

                            let div_input = document.createElement("input");
                            div_input.setAttribute("id", i.toString());
                            div_input.setAttribute("type", "checkbox");
                            div_input.checked = true;
                            li_div.appendChild(div_input);
                            
                            let li_h1 = document.createElement("h1");
                            li_h1.setAttribute("class", "todo-app__item-detail");
                            li_h1.setAttribute("style", "text-decoration: line-through; opacity: 0.5;")
                            li_h1.innerHTML = todos[i];
                            li.appendChild(li_h1);

                            div_input.addEventListener("click", () => {
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let h1 = div_input.parentElement.nextElementSibling;
                                let index = todos.findIndex((element) => element === h1.innerHTML);
                                if (div_input.checked) {
                                    h1.style = "text-decoration: line-through; opacity: 0.5;";
                                    num_todos -= 1;
                                    footer_div.innerHTML = num_todos + " left";
                                    complete[index] = true;
                                    clean_button();
                                }
                                else {
                                    h1.style = "";
                                    num_todos += 1;
                                    complete[index] = false;
                                    footer_div.innerHTML = num_todos + " left";
                                    clean_button();
                                }
                            });

                            let div_label = document.createElement("label");
                            div_label.setAttribute("for", i.toString());
                            li_div.appendChild(div_label);
                            

                            // add <img> in <li>
                            let li_img = document.createElement("img");
                            li_img.setAttribute("src", "./img/x.png");
                            li_img.setAttribute("class", "todo-app__item-x");
                            li.appendChild(li_img);

                            li_img.addEventListener("click", () => {
                                let li = li_img.parentElement;
                                let h1 = li_img.previousElementSibling;
                                let footer_div = document.getElementById("todo-footer").firstChild;
                                let index = todos.findIndex((element) => element == h1.innerHTML);
                                if (!li.firstChild.firstChild.checked) num_todos -= 1;
                                footer_div.innerHTML = num_todos + " left";
                                if (num_todos === 0) footer_div.parentElement.remove();
                                li.remove()
                                todos.splice(index, 1);
                                complete.splice(index, 1);
                                clean_button();
                            });
                        }
                    }
                });
            }
        }

        // add div of clear completed
        let footer_div2 = document.createElement("div");
        footer_div2.setAttribute("class", "todo-app__clean");
        footer.appendChild(footer_div2);

        // // add button of clear completed
        // if (todos.length - num_todos === 0){
        //     let button = document.createElement("button");
        //     button.innerHTML = "Clear completed";
        //     footer_div2.appendChild(button)

        //     // addeventlistener button
        //     button.addEventListener("click", () => {
        //         let ul = document.getElementById("todo-list");
        //         let first_li = ul.firstChild;
        //         while (first_li){
        //             let tmp = first_li.nextElementSibling;
        //             if (first_li.firstChild.firstChild.checked) {
        //                 let index = todos.findIndex((element) => element === first_li.firstChild.nextElementSibling.innerHTML);
        //                 todos.splice(index, 1);
        //                 complete.splice(index, 1);
        //                 first_li.remove()
        //             }
        //             first_li = tmp;
        //         }
        //     });
        // }
    }
    else {
        let footer_div = document.getElementById("todo-footer").firstChild;
        footer_div.innerHTML = num_todos + " left";
    }

    // addeventlistener
    // checkbox
    div_input.addEventListener("click", () => {
        console.log(div_input.checked);
        let footer_div = document.getElementById("todo-footer").firstChild;
        let h1 = div_input.parentElement.nextElementSibling;
        let index = todos.findIndex((element) => element === h1.innerHTML);
        if (div_input.checked) {
            h1.style = "text-decoration: line-through; opacity: 0.5;";
            num_todos -= 1;
            footer_div.innerHTML = num_todos + " left";
            complete[index] = true;
            clean_button();
        }
        else {
            h1.style = "";
            num_todos = num_todos + 1;
            complete[index] = false;
            footer_div.innerHTML = num_todos + " left";
            clean_button();
        }
    });

    // item-x
    li_img.addEventListener("click", () => {
        let li = li_img.parentElement;
        let h1 = li_img.previousElementSibling;
        let footer_div = document.getElementById("todo-footer").firstChild;
        let index = todos.findIndex((element) => element == h1.innerHTML);
        if (!li.firstChild.firstChild.checked) num_todos -= 1;
        footer_div.innerHTML = num_todos + " left";
        if (num_todos === 0) footer_div.parentElement.remove();
        li.remove()
        todos.splice(index, 1);
        complete.splice(index, 1);
        clean_button();
    });
}

// get root
let root = document.getElementById('root');

// add <section>
let section = document.createElement('section');
section.setAttribute("class", 'todo-app__main');
root.appendChild(section)

// add <input>
let input = document.createElement('input');
input.setAttribute("class", "todo-app__input");
input.setAttribute("placeholder", "What needs to be done?");
section.appendChild(input);

// add <ul>
let ul = document.createElement('ul');
ul.setAttribute("class", "todo-app__list");
ul.setAttribute("id", "todo-list");
section.appendChild(ul);

input.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter"){
        num_todos += 1;
        if (todos.includes(input.value)){
            alert("The todo-list has been added.");
        }
        else if (input.value === ""){
            alert("Your input is empty.");
        }
        else {
            todos.push(input.value);
            complete.push(false);
            reload(input.value);
            input.value = "";
        }
    }
});