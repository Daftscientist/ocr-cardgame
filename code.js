const social_tags = [
    ["Social", true], ["Developer", false],
    ["Contact", false], ["Media", false]
]

const social_medias = [
    ["bandcamp", 3, true], ["behance", 0, false], ["bitbucket", 1, false],
    ["blogger"], ["discord", 0, true], ["discourse"],
    ["email"], ["facebook"], ["github"],
    ["gitlab", 0, true], ["instagram"], ["linkedin"],
    ["medium"], ["messenger"], ["patreon"],
    ["phone"], ["pinterest", 0, true], ["quora"],
    ["reddit"], ["snapchat"], ["stackoverflow"],
    ["telegram", 0, true], ["tiktok"], ["tumblr"],
    ["twitch"], ["twitter", 0, true], ["whatsapp"],
    ["youtube"]
]

const tab_container = document.getElementById("tab-container");
const social_container = document.getElementById("social-container");

function create_tab(tab_name) {
    let tab = document.createElement("div");
    tab.id = tab_name;
    tab.classList.add("mr-2");
    let tab_inner = document.createElement("button");
    tab_inner.onclick = () => {change_active_tab(tab_name)}
    tab_inner.classList.add("inline-block", "px-4", "py-2", "rounded-t-lg", "hover:text-navHoverTextColor", "text-navIconColor", "hover:bg-navItemHover");
    tab_inner.innerHTML = tab_name;
    tab.appendChild(tab_inner)
    return tab
}

function create_social_buttons(social_name, active) {
    let button = document.createElement("button");
    button.id = social_name;
    button.classList.add("m-1", "hover:scale-95")
    if (!active) {
        button.classList.add("bg-navItemHover", "rounded-md", "p-1", "inline-flex", "items-center", "justify-center");
    } else {
        button.classList.add("bg-navItemActive", "rounded-md", "p-1", "inline-flex", "items-center", "justify-center");
    }

    let text = document.createElement("p");
    text.classList.add("pr-1", "pl-1");
    text.innerHTML = social_name;
    button.appendChild(text);
    return button;
}

social_tags.map(tag => {
    tab_container.appendChild(create_tab(tag[0], tag[1]));
})

social_medias.map(media => {
    //const social_item_tag = media[1]
    social_container.appendChild(create_social_buttons(media[0], media[2]));
});

let active_tab = social_tags[0];

function change_active_tab(new_tab_name) {
    social_tags.map(tag => {
        console.log(tag)
        if (tag.includes(new_tab_name)) {
            let old_tab = document.getElementById(active_tab[0]);
            old_tab.classList.remove("bg-navItemActive");
            let new_tab = document.getElementById(new_tab_name)
            new_tab.classList.add("bg-navItemActive");
        }
        console.log("\n", tag)
    });
}