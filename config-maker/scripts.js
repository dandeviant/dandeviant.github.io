function switchModel() {
    var selectModel = document.getElementById('switchModel').value;
    console.log("Value = " + selectModel);
    document.getElementById('switchModelOutput').value = selectModel;
}


$("#switchModel li a").click(function () {
    var selectModel = document.getElementById('switchModel').value;
    console.log("Value = " + selectModel);
    document.getElementById('switchModelOutput').value = selectModel;
});