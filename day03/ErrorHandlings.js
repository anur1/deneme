console.log("Test Started")

try { console.log(result) }
catch (error) { console.log("An error has occured") }


console.log("Test Completed")

console.log("-----------------")

let browser = "xyz"
browser =  browser.toLowerCase();

if (browser === "chrome" || browser === "safari" || browser === "  firefox") {
    console.log("valid browser")

} else {
    throw new Error("Invalid browser: " + browser)
}
