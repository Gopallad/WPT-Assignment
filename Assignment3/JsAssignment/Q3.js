function printPattern() {
    for (let i = 3; i >= 1; i--) {      // rows
        let row = "";
        for (let j = 1; j <= i; j++) {  // stars in each row
            row += "* ";
        }
        console.log(row);
    }
}

printPattern();