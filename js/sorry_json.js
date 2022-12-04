console.log("aaaaaaaaaaaaaaaaaa");

const url = 'https://hooks.slack.com/services/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';
const data = {
    text: "ユーザーが購入しました"
};
const xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
xml.send(`payload=${JSON.stringify(data)}`);
