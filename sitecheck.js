const blacklist_sites = [
    "bezprogramm.net",
    "telegram.org.ru",
    "www.comss.ru"
];

console.log("[INFO] Current site: "+window.location.href);
for (let i = 0; i < blacklist_sites.length; i++) {

    //Checking site in blacklist (:// is requred for searching from beginning)
    if (window.location.href.includes("://"+blacklist_sites[i]) == true){
        console.log("[FOUND] '"+window.location.href+"' is a scam! Found as "+blacklist_sites[i]);
        break;
    }

    //When reached end of list and nothing is found
    if(i == blacklist_sites.length-1){
        console.log("[ OK ] This site is not a scam")
    }

}

