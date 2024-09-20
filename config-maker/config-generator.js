function vlanSplit() {
    vlanInputText = document.getElementById('vlanInput').value;

    const vlanArrayText = vlanInputText.split(" ");
    const vlanArrayNum = new Array();

    console.log(vlanArrayText[0]);

    totalVlan = vlanArrayText.length;

    for (x = 0; x < totalVlan; x++){
        vlanArrayNum[x] = Number(vlanArrayText[x]);
        if (Number.isNaN(vlanArrayNum[x]) == false) {
            console.log("String Found. Aborted");
            document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
            inputAlert();
            return;
        }
    }

    for (x = 0; x < totalVlan; x++){
        console.log("Vlan " + (x+1) + ": " + vlanArrayNum[x]);
    }
}

function inputAlert() {
    document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">String detected in VLAN list. Generation aborted</div>';
    // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
}
