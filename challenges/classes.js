// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(attr){
//   this.length = attr.length,
//   this.width = attr.width,
//   this.height = attr.height
// }
// CuboidMaker.prototype.volume = function(){
//   let volumeFormula = this.length * this.width * this.height;
//   return volumeFormula;
// }
// CuboidMaker.prototype.surfaceArea = function(){
//   let areaFormula = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   return areaFormula;
// }

class Cuboid{
    constructor(attr){
        this.length = attr.length,
        this.width = attr.width,
        this.height = attr.height
    }
    volume (){
        let volumeFormula = this.length * this.width * this.height;
        return volumeFormula;
    }
    surfaceArea(){
        let areaFormula = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return areaFormula;
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid {
    constructor(attr){
        super(attr);
    };
    cubeVolume(){
        let cubeVolumeFormula = this.width * this.width * this.width;
        return cubeVolumeFormula;
    };
    cubeSurfaceArea(){
        let surfaceAreaFormula = 6 * (this.width * this.width);
        return surfaceAreaFormula;
    };
};

const myCube = new CubeMaker ({
    length : 5,
    width : 5,
    height : 5
})
//test 

console.log(myCube.cubeVolume());
console.log(myCube.cubeSurfaceArea());