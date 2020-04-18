let application={
    name:"CTC App",
    creator:"Jyothi",
    link:" ",
    set webname(webname){
        this.link=webname;
    }

};
application.webname="wwww.ctc.com";
console.log(application.link);

const a = [1, 2, 4, 6, 7, 7, 8, 8, 8, 8];
const ex_set = Array.from(new Set(a));
console.log(ex_set);