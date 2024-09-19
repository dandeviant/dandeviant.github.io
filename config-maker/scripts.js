function switchModel() {
    selectModel = document.getElementById('selectSwitchModel').value;
    console.log("Value = " + selectModel);
}

function generateScript() {
    vlanCCTV = document.getElementById('vlanCCTVInput').value;
    vlanISC = document.getElementById('vlanISCInput').value;
    vlanQUA = document.getElementById('vlanQUAInput').value;

    error = "";

    if (vlanCCTV == "" || vlanISC == "" || vlanQUA == "") {
        if (vlanCCTV == ""){
            if (error != ""){
                error += ", "
            }
            error += "CCTV VLAN"
        }
        if (vlanISC == ""){
            if (error != ""){
                error += ", "
            }
            error += "ISC VLAN"
        }
        if (vlanQUA == ""){
            if (error != ""){
                error += ", "
            }
            error += "QUA VLAN"
        }
        console.log(error + " is missing");
    }
    else {
        console.log("VLAN CCTV = " + vlanCCTV);
        console.log("VLAN ISC  = " + vlanISC);
        console.log("VLAN QUA  = " + vlanQUA);
    }

    selectModel = document.getElementById('selectSwitchModel').value;
    if (selectModel == "")  {
        console.log("NO SWITCH SELECTED");
    }
    else {
        console.log("Value = " + selectModel);
    }
}   