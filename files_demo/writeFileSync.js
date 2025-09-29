const fs = require("fs");
const productsFile = "products.json";
const backupFile = "backup_products.json";

function readProducts() {
    const data = fs.readFileSync(productsFile, { encoding: "utf8" });
    return JSON.parse(data);
}

function writeProducts(result) {
    fs.writeFileSync(backupFile, JSON.stringify(result, null, 2), {
        flag: "w",
    });
}

module.exports = {
    readProducts,
    writeProducts,
};
