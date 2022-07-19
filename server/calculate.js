var totalCarbon = 0;

//flight data
const shortHaulFlight = 0.00034;
const mediumHaulFlight = 0.000286;
const longHaulFlight = 0.000239;
const plane = (shortHaulFlight + mediumHaulFlight + longHaulFlight) / 3;

//Transportation Unit: kgCO2eq/m
totalCarbon += inputData.bus * 0.000103;
totalCarbon += inputData.hybridCar * 0.00018;
totalCarbon += inputData.fossilFueledCar * 0.000257;
totalCarbon += inputData.electricVehicle * 0.000081;
totalCarbon += inputData.motorbike * 0.000108;
totalCarbon += inputData.flights * plane;

//Eating Habits Unit: kgCO2eq per meal
totalCarbon += inputData.omnivore * (5.63 * 600) / 2000; //medium meat from values
totalCarbon += inputData.pescatarian * (3.91 * 600) / 2000; //if not pescatarian, will equal 0, same for others
totalCarbon += inputData.vegetarian * (3.81 * 600) / 2000;
totalCarbon += inputData.vegan * (2.89 * 600) / 2000;

//Purchases
//  electronics kgCO2eq per product
totalCarbon += inputData.phone * 80;
totalCarbon += inputData.tablet * 87;
totalCarbon += inputData.desktop * 588;

//  clothing Unit: kgCO2eq per product 
totalCarbon += inputData.shoes 
totalCarbon += inputData.shirts * (13 + 12) / 2;
totalCarbon += inputData.jeans * 25;
totalCarbon += inputData.sweater * (28 + 26 + 31 + 56 + 12) / 5;
totalCarbon += inputData.coat * (89 + 39 + 25) / 3;
totalCarbon += inputData.dress * (56 + 56 + 51) / 3;

//Internet Use


module.exports = totalCarbon;