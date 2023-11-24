// let x = 10;

// let alertMessage = "This is an error alert message";

// try {
//     if (x < 0) {
//         console.log("Negative!");
//     } else {
//         throw alertMessage;
//     }
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("Does this log finally?");
// }

// x = -10;

// try {
// 	if (x > 0) {
// 		let isEven = (x % 2 == 0) ? true : false;
//         console.log(isEven);
// 	} else if (x <= 0) {
// 		throw "Error - Value of 0 or below.";
// 	}	
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x);
// }

let x = 10;
        let isEven;

        try {
            if (x > 0) {
                isEven = (x % 2 == 0) ? false : true;
            } else if (x <= 0) {
                throw "Error - Value of 0 or below.";
            }

            console.log(isEven);
        } catch (err) {
            console.log(err);
        } finally {
            console.log(x);
        }

