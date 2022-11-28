/*Detect overspeed to save lives!
Speed is enumearated as follows:
Speed < 70 ; print OK!
Speed > 70,deduct 1 point for every 5km.
Suspend licence on more than 12 points.
*/
function speedDetector(speed){
    if (speed<70){
        console.log("OK")
    }
    else {
        let demeritPoint = ((speed-70)/5)
        console.log("demerit points:"+ demeritPoint)
        if (demeritPoint > 12){
            console.log("Licence suspended")
        }
    }
}
console.log (speedDetector(180))