import "./assets/styles/style.css";
import burgerImg from "./assets/images/burger.jpg";
import friesImg from "./assets/images/fries.jpg";
import spaghettiImg from "./assets/images/spaghetti.jpg";

function home() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Delicious food right at your doorstep!";
    const h2 = document.createElement("h2");
    h2.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum euismod quam. Ut felis enim, vehicula pulvinar volutpat at, pellentesque eu lacus.";
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        const main = document.querySelector("main");
        main.textContent = "";
        main.appendChild(menu());
    });
    button.textContent = "Order now";
    button.type = "button";
    div.append(h1, h2, button);
    return div;
}

function menu() {
    const main = document.querySelector("main");
    main.style.backgroundColor = "rgba(0, 0, 0, 0.9)";

    const menuList = [
        {
            img: burgerImg,
            name: "Burger",
            description:
                "A patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.",
        },
        {
            img: friesImg,
            name: "Fries",
            description: "Deep fried potato strips with sauce of your choice",
        },
        {
            img: spaghettiImg,
            name: "Spaghetti",
            description:
                "A white, starchy pasta of Italian origin that is made in the form of long strings, boiled, and served with any of a variety of meat, tomato, or other sauces.",
        },
    ];

    const div = document.createElement("div");

    for (const item of menuList) {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item";

        const img = document.createElement("img");
        img.alt = item.name;
        img.src = item.img;

        const textContainer = document.createElement("div");

        const name = document.createElement("div");
        name.className = "name";
        name.textContent = item.name;

        const description = document.createElement("div");
        description.textContent = item.description;

        textContainer.append(name, description);

        itemContainer.append(img, textContainer);

        div.appendChild(itemContainer);
    }

    return div;
}

function contact() {
    const div = document.createElement("div");

    const h2_1 = document.createElement("h2");
    h2_1.textContent = "Phone";

    const p1 = document.createElement("p");
    p1.textContent = "+123 456 789";

    const h2_2 = document.createElement("h2");
    h2_2.textContent = "Address";

    const p2 = document.createElement("p");
    p2.textContent = "1907 Joy Lane, Los Angeles, CA";

    div.append(h2_1, p1, h2_2, p2);

    return div;
}

function component() {
    const funcMap = {
        Home: home,
        Menu: menu,
        Contact: contact,
    };

    const element = document.createElement("div");
    element.id = "content";

    const header = document.createElement("header");

    const div1 = document.createElement("div");
    div1.textContent = "Sample Restaurant";
    div1.className = "brand";

    const main = document.createElement("main");

    const div2 = document.createElement("div");
    for (const txt of ["Home", "Menu", "Contact"]) {
        const div = document.createElement("div");
        div.addEventListener("click", () => {
            main.textContent = "";
            main.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            main.appendChild(funcMap[txt]());
        });
        div.className = "nav";
        div.textContent = txt;
        div2.appendChild(div);
    }
    header.append(div1, div2);

    main.appendChild(home());

    const footer = document.createElement("footer");
    footer.textContent = "Made by ";
    const a = document.createElement("a");
    a.href = "https://github.com/dcv21";
    a.textContent = "dcv21";
    footer.appendChild(a);

    element.append(header, main, footer);

    return element;
}

document.body.appendChild(component());
