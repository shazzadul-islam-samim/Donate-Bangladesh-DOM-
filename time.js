let now_bangladesh = new Date();
// Outputs: Date Thu Jun 08 2023 09:43:04 GMT+0530 (India Standard Time) 
console.log(now_bangladesh);
// Outputs: 1686197601087 
//console.log(now_india.getTime());
let now = new Date('2024-12-31T00:00:00+00:30');
const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
// Outputs: 31/12/2024 
console.log(now.toLocaleDateString('en-IN'));
// Outputs: Tue, 31 December, 2024 
console.log(now.toLocaleDateString('en-IN', options));
// Outputs: 12/31/2024 
console.log(now.toLocaleDateString('en-US'));
// Outputs: Tue, December 31, 2024 
console.log(now.toLocaleDateString('en-US', options));
// Outputs: Tue, 31 December 2024 
console.log(now.toLocaleDateString('en-GB', options)); 
