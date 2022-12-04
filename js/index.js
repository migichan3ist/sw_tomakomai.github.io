document.getElementById("sisan_click").onclick = function() {
    console.log("aiueo");
    var before_write_element = document.getElementById("before_write");
    before_write_element.remove();

    var kouho_emelent = document.getElementById("kouho");
    var newElement = document.createElement("p"); // p要素作成
    var newContent = document.createTextNode("候補者数：ああああ"); // テキストノードを作成
    newElement.appendChild(newContent); // p要素にテキストノードを追加
    kouho_emelent.appendChild(newElement);

    var form_emelent = document.getElementById("form");
    var newElement = document.createElement("p"); // p要素作成
    var newContent = document.createTextNode("フォーム：ああああ"); // テキストノードを作成
    newElement.appendChild(newContent); // p要素にテキストノードを追加
    form_emelent.appendChild(newElement);

    var hito_emelent = document.getElementById("hito");
    var newElement = document.createElement("p"); // p要素作成
    var newContent = document.createTextNode("マッチングした人：ああああ"); // テキストノードを作成
    newElement.appendChild(newContent); // p要素にテキストノードを追加
    hito_emelent.appendChild(newElement);
};

function pagenation() {
    // 人数カウントする処理

    // ページ遷移
    location.href = "./sorry.html";
}

document.getElementById("kozin_click").onclick = function() {
    pagenation();
};

document.getElementById("hozin_click").onclick = function() {
    pagenation();
};

