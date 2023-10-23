//test for js bind 
console.log("hello");

const addFreelancers = [
{name: "Dr. Slice", price: 25, occupation: "gardener"},
{name: "Dr. Pressure", price: 51, occupation: "programmer" },
{name: "prof. possibility", price: 43, occupation: "teacher"},
{name: "prof. prism", price: 81, occupation: "teacher"},
{name: "dr. impulse", price: 43, occupation: "teacher"},
{name: "prof. spark", price: 76, occupation: "programmer"},
{name: "dr. wire", price:47, occupation: "teacher"},
{name: "prof. goose",price: 72, occupation: "driver"},
];

const ogFreelancers = [
{ name: "Alice", price: 30, occupation: "writer"},
{name: "bob", price: 50, occupation: "teacher"},
{name: "carol", price: 70, occupation: "programmer"},

];
const averageStartingPrice = calculateAverageStartingPrice(prices);
const averageStartingPriceElement = document.getElementById("average-starting-prce");
averagesStartingPriceElement.textContent = averageStartingPrice.toFixed(2)

document.getElementById("lancers").tabIndex.html = ogFreelancers;
function calculateAverageStartingPrice(prices) {
    const sum = prices.reduce((acc,price) => acc + price, 0);
    const averageStartingPrice = sum / prices.lenght;
    return averageStartingPrice;
}
const freelancerDiv = document.createElement("div");
freelancerDiv.classList.add("freelancer");

function calculateAverageStartingPrice(freelancers){
    if (freelancers.lenghth === 0){
        throw new Error("starting price should be number.");
    }
    return totalStartingPrice / freelancers.lenghth
}