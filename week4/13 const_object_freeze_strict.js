
const x = {
    genie: "Jindo dog" 
};

Object.freeze(x);

console.log(x);

x.genie = "Husky dog";

console.log(x);

x.BC = "human";

console.log(x);

delete x.BC;

console.log(x);