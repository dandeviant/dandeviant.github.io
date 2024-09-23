function vlanSplit() {

    vlanInputText = document.getElementById('vlanInput').value;
    console.log("vlanInputText = " + vlanInputText);

    if (vlanInputText == "") {
        $('#modalCopyAlert').modal('show'); //display modal alert
        document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">No VLAN detected</div>';
        return;
    }
    const vlanArrayText = vlanInputText.split(/\s+/);
    const vlanArrayNum = new Array();
    console.log(vlanArrayText[0]);
    totalVlan = vlanArrayText.length;

    for (x = 0; x < totalVlan; x++){
        vlanArrayNum[x] = Number(vlanArrayText[x]);
        check = vlanArrayNum[x];
        if (Number.isNaN(vlanArrayNum[x]) == true) {
            $('#modalCopyAlert').modal('hide'); //hide modal alert
            document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">String detected in VLAN list. Generation aborted</div>';
            $('#modalCopyAlert').modal('show'); //display modal alert
            // console.log("String Found. Aborted");
            // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
            // inputAlert();
            return;
        }
    }
    
    $('#modalCopyAlert').modal('hide');
    copyText = "";
    console.log("vlanArrayNum = " + vlanArrayNum);
    for (x = 0; x < totalVlan; x++){
        console.log("Vlan " + (x+1) + ": " + vlanArrayNum[x]);
        copyText += "Vlan " + (x+1) + ": " + vlanArrayNum[x] + "\n";
    }
    copyText = intCommand(copyText, vlanArrayNum, totalVlan);
    copyText += '!############### END OF SCRIPT ###############';
    document.getElementById('scriptGenerated').value = copyText;
}

function inputAlert() {
    $('#modalCopyAlert').modal('hide'); //hide modal alert
    document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">String detected in VLAN list. Generation aborted</div>';
    $('#modalCopyAlert').modal('show'); //display modal alert
    // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
}


function intCommand(copyText, vlanArrayNum, totalVlan) {
    copyText = "";
    // for (x = 0; x < totalVlan; x++){
    //     console.log("Vlan intCommand " + (x+1) + ": " + vlanArrayNum[x]);
    //     copyText += "Vlan intCommand " + (x+1) + ": " + vlanArrayNum[x] + "\n";
    // }
    for (x = 0; x < totalVlan; x++){
        copyText += 'interface GigabitEthernet0/' + (x+1);
        copyText += '\n  switchport access vlan ' + vlanArrayNum[x] + '\n';
        copyText += '!\n';
    }
    return copyText;
}
