const dot_chat = [];
const dot_chat_group = [];
let i
for (i = 0; i < 400; i++) {
    dot_chat.push(document.createElement("div"));
    dot_chat_group.push(document.createElement("div"));

    dot_chat[i].style.cssText = "border-radius: 50%; background: #E0E0E0; width: 7px; height: 7px; margin: 0 5px 0 0;";
    dot_chat[i].innerHTML = "";

    dot_chat_group[i].style.cssText = "border-radius: 50%; background: #E0E0E0; width: 7px; height: 7px; margin: 0 5px 0 0;";
    dot_chat_group[i].innerHTML = "";

    document.getElementById("dots").appendChild(dot_chat[i]);
    document.getElementById("dots_group_chat").appendChild(dot_chat_group[i]);
}
