let todos = [];
let complete = [];
let now_type = "All";

function clean_button() {
    let footer = document.getElementById("todo-footer");
    let check_count = 0;
    for (check of complete){
        if (check) check_count += 1
    }
    if (todos.length - check_count === todos.length){
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
                let del_index = [];
                for (i in complete) {
                    if (complete[i]){
                        del_index.push(i);
                    }
                }
                del_index = del_index.reverse();
                for (index of del_index){
                    todos.splice(index, 1);
                    complete.splice(index, 1);
                }

                // complete = [];
                // for (i in todos) {
                //     complete.push(false);
                // }
                reload_ul();
                clean_button();
                if (todos.length === 0) {
                    let footer = document.getElementById("todo-footer");
                    footer.remove();
                }
            });
        }
    }
}

function get_li_element(todo, num_todos) {

    let index = todos.findIndex((element) => element === todo);
    // add <li> in <ul>
    let li = document.createElement('li');
    li.setAttribute("class", "todo-app__item");

    // add <div> in <li>
    let li_div = document.createElement("div");
    li_div.setAttribute("class", "todo-app__checkbox");
    li.appendChild(li_div);

    // add input in div
    let div_input = document.createElement("input");
    div_input.setAttribute("id", num_todos.toString());
    div_input.setAttribute("type", "checkbox");
    if (complete[index]) {
        div_input.checked = true;
    }
    li_div.appendChild(div_input);

    // add label in div
    let div_label = document.createElement("label");
    div_label.setAttribute("for", num_todos.toString());
    li_div.appendChild(div_label);

    // add <h1> in <li>
    let li_h1 = document.createElement("h1");
    li_h1.setAttribute("class", "todo-app__item-detail");
    li_h1.innerHTML = todo;
    if (complete[index]){
        li_h1.style = "text-decoration: line-through; opacity: 0.5;";
    }
    else {
        li_h1.style = "";
    }
    li.appendChild(li_h1);

    // add <img> in <li>
    let li_img = document.createElement("img");
    li_img.setAttribute("src", "./img/x.png");
    li_img.setAttribute("class", "todo-app__item-x");
    li.appendChild(li_img);

    div_input.addEventListener("click", () => {
        let footer_div = document.getElementById("todo-footer").firstChild;
        let h1 = div_input.parentElement.nextElementSibling;
        let index = todos.findIndex((element) => element === h1.innerHTML);
        let left_count = 0;
        if (div_input.checked) {
            h1.style = "text-decoration: line-through; opacity: 0.5;";
            complete[index] = true;
            clean_button();
            for (check of complete) {
                if (!check) left_count += 1
            }
            footer_div.innerHTML = left_count + " left";
        }
        else {
            h1.style = "";
            complete[index] = false;
            clean_button();
            for (check of complete) {
                if (!check) left_count += 1
            }
            footer_div.innerHTML = left_count + " left";
        }
    });

    // item-x
    li_img.addEventListener("click", () => {
        let li = li_img.parentElement;
        let h1 = li_img.previousElementSibling;
        let footer_div = document.getElementById("todo-footer").firstChild;
        let index = todos.findIndex((element) => element == h1.innerHTML);
        
        li.remove()
        todos.splice(index, 1);
        complete.splice(index, 1);

        let left_count = 0;
        for (check of complete) {
            if (!check) left_count += 1;
        }
        if (left_count === 0) {
            footer_div.parentElement.remove();
        }
        else {
            footer_div.innerHTML = left_count +" left";
        }
        clean_button();
    });

    return li;
}

function reload_ul() {
    let ul = document.getElementById("todo-list");
    let num_todos = 0;
    while (ul.firstChild) {
        ul.firstChild.remove();
    }

    if (now_type === "All") {
        for (i in todos) {
            let li = get_li_element(todos[i], num_todos);
            ul.appendChild(li);
            num_todos += 1;
        }
    }
    else if (now_type === "Active") {
        for (i in todos) {
            if (!complete[i]){
                let li = get_li_element(todos[i], num_todos);
                ul.appendChild(li);
                num_todos += 1;
            }
        }
    }
    else if (now_type === "Completed") {
        for (i in todos) {
            if (complete[i]) {
                let li = get_li_element(todos[i], num_todos);
                ul.appendChild(li);
                num_todos += 1;
            }
        }
    }
}

function footer(){
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
        let left_count = 0;
        for (check of complete){
            if (!check) left_count += 1;
        }
        footer_div.innerHTML = left_count + " left";
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
            footer_button1.addEventListener("click", () => {
                now_type = footer_button1.innerHTML;
                reload_ul();
            });
        }

        // add div of clear completed
        let footer_div2 = document.createElement("div");
        footer_div2.setAttribute("class", "todo-app__clean");
        footer.appendChild(footer_div2);
        
    }
    else {
        let footer_div = document.getElementById("todo-footer").firstChild;
        let left_count = 0;
        for (check of complete){
            if (!check) left_count += 1;
        }
        footer_div.innerHTML = left_count + " left";
    }
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
        if (todos.includes(input.value)){
            alert("The todo-list has been added.");
        }
        else if (input.value === ""){
            alert("Your input is empty.");
        }
        else {
            todos.push(input.value);
            complete.push(false);
            input.value = "";
            footer();
            reload_ul();
        }
    }
});