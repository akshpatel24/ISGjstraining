const tshape = {};

function triangle() {
    tshape.angle1 = Number(document.getElementById('a1').value);
    tshape.angle2 = Number(document.getElementById('a2').value);
    tshape.angle3 = Number(document.getElementById('a3').value);
    let check = document.getElementById("txtfollow");
    let sum = tshape.angle1 + tshape.angle2 + tshape.angle3;

    if (sum == 180) {
        check.value = "Triangle it is";
    } else {
        check.value = "Not a triangle";
    }
}
