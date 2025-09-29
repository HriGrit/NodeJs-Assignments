const fs = require("fs");
const productsFile = "products.json";
const backupFile = "backup_products.json";

function readProducts() {
    const data = fs.readFileSync(productsFile, { encoding: "utf8" });
    // const backupData = fs.readFileSync(backupFile, { encoding: "utf8" });
    return JSON.parse(data);
}

function writeProducts(result) {
    var readLine = require("readline");
    var r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    r1.question("Enter product name: ", function (name) {
        r1.question("Enter product price: ", function (price) {
            // Add new product to result array
            result.push({ name, price });
            try {
                fs.writeFileSync(
                    productsFile,
                    JSON.stringify(result, null, 2),
                    {
                        flag: "w",
                    }
                );
                console.log("New product added and backup file updated.");
                console.log("Current backup file contents:");
                // const data = fs.readFileSync(backupFile, { encoding: "utf8" });
                // console.log(JSON.parse(data));
                fs.writeFileSync(backupFile, JSON.stringify(result, null, 2), {
                    flag: "w",
                });
            } catch (err) {
                console.error("Error writing backup file:", err);
            }
            r1.close();
            deleteBackup();
        });
    });
}

function user1() {
    const data = fs.readFileSync(backupFile, { encoding: "utf8" });
    console.log("User1 (Sync):", JSON.parse(data));
}

function user2() {
    fs.readFile(backupFile, { encoding: "utf8" }, (err, data) => {
        if (err) throw err;
        console.log("User2 (Async):", JSON.parse(data));
    });
}

function user3() {
    const data = fs.readFileSync(backupFile, { encoding: "utf8" });
    console.log("User3 (Sync):", JSON.parse(data));
}

function deleteBackup() {
    fs.unlinkSync(backupFile);
    console.log("Backup file deleted:", backupFile);
}

const result = readProducts();
writeProducts(result);
// user1();
// user2();
// user3();
// deleteBackup();

// var obj = require('./writeFileSync')   //loading the user defined module / local module

// var readLine = require('readline');  // this interface is used to read the data from the console

// var r1 = readLine.createInterface({
//     input : process.stdin,
//     output: process.stdout
// });

// r1.question('Enter name', function(name){
//     r1.question('Enter city', function(city){
//         obj.writeCustomer(name,city)
//     });
// })
