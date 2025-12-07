const base = require('@playwright/test');

// this test data is injected via fixtures in the main test file which is better way rather than manually looping through json and repeat logic
exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "sheba@gmail.com",
    password : "Password@1",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)

