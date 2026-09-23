
function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({ value: "Fried rice" })
        } else {
            reject("Couldn't do it.")
        }
    })
}

ricePromise()
    .then(myFriedRice => {
        console.log("lets eat", myFriedRice.value)
    })
    .catch(error => {
        console.error(error)
    })