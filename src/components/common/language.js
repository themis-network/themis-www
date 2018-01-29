function getQueryString(name) {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}

export function getLocalValue(key) {
    let lang = getQueryString("lang") || "EN";
    if (lang === "EN") {
        document.title='Themis: The Decentralized "Alipay" in the Digital Currency World.';
        return window.EN[key];
    }
    else {
        document.title='Themis：数字货币世界去中心化的"支付宝"'
    }
    return window.CN[key];
}