//Using MutationObserver(Event-Driven Approach)

const callBack=(mutationList, observer)=>{
mutationList.forEach((mutation)=>{
// selecting the skip button using multiple selectors
var skipBtnClass1 = document.querySelector(".ytp-skip-ad-button");
var skipBtnClass2 = document.querySelector(".ytp-ad-skip-button");
var skipBtnId = document.querySelector("#skip-button\\:3");
//escaping colon(:) using \\ above

// Check if any of the skip buttons are present
if (skipBtnClass1 !== null) {
    console.log("Ad Detected using class .ytp-skip-ad-button!");
    skipBtnClass1.click();
} else if (skipBtnClass2 !== null) {
    console.log("Ad Detected using class .ytp-ad-skip-button!");
    skipBtnClass2.click();
} else if (skipBtnId !== null) {
    console.log("Ad Detected using id #skip-button:3!");
    skipBtnId.click();
}
});
};

// Creating MutationObserver instance and passing the callback function
const observer= new MutationObserver(callBack);

// Configuring the observer to watch for changes in the entire document
observer.observe(document.body, { childList: true, subtree: true });

// **********************************************************************************

//Polling Approach
// setInterval(() => {
//     // Try selecting the skip button using multiple selectors
//     var skipBtnClass1 = document.querySelector(".ytp-skip-ad-button");
//     var skipBtnClass2 = document.querySelector(".ytp-ad-skip-button");
//     var skipBtnId = document.querySelector("#skip-button\\:3");

//     // Check if any of the skip buttons are present
//     if (skipBtnClass1 !== null) {
//         console.log("Ad Detected using class .ytp-skip-ad-button!");
//         skipBtnClass1.click();
//     } else if (skipBtnClass2 !== null) {
//         console.log("Ad Detected using class .ytp-ad-skip-button!");
//         skipBtnClass2.click();
//     } else if (skipBtnId !== null) {
//         console.log("Ad Detected using id #skip-button:3!");
//         skipBtnId.click();
//     } else {
//         console.log("No ad detected.");
//     }
// }, 1000);

//important info

// The presence of the button element in the DOM, regardless of its display property,
// indicates that an ad is playing, and the button can be interacted with programmatically.
// The display: none property does not prevent the button frombeing clicked by a script.

