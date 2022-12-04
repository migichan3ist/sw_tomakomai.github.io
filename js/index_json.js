console.log("aaaaaaaaaaaaaaaaaa");

const url = 'https://hooks.slack.com/services/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';
const data = {
    text: "ユーザーがアクセスしました"
};
const xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
xml.send(`payload=${JSON.stringify(data)}`);
