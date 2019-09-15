const Poulpe = require("../dist/index")
const text = "i'm a {{animal}}";
const data = {animal: "Ocotpus"}


let p = new Poulpe({element:text, data:data});

p.on("end", (x) => {
    console.log(x)
});

p.run()
