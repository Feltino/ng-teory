export class CarsService {
    cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: true
        },
        {
            name: 'Mercedes',
            isSold: false
        }
    ];
    addCars() {
        this.cars.push({isSold: false, name: name});
    }
}