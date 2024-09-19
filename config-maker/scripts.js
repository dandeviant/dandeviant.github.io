function reset() {document.getElementById('scriptGenerated').value = "";}
function switchModel() {selectModel = document.getElementById('selectSwitchModel').value;}

function generateScript() {
    vlanCCTV = document.getElementById('vlanCCTVInput').value;
    vlanISC = document.getElementById('vlanISCInput').value;
    vlanQUA = document.getElementById('vlanQUAInput').value;

    error = "";
    document.getElementById('scriptGenerated').value = "";
    document.getElementById('scriptGenerated').placeholder = "";

    scriptresult = "";
    scriptresult = vlanInput(scriptresult);
    scriptresult += "\n\n";
    scriptresult = vlanDefault(scriptresult);
    scriptresult += "\n\n";
    scriptresult = selectSwitchModel(scriptresult);

    document.getElementById("scriptGenerated").value = scriptresult;

}   

function vlanInput (scriptresult) {
    vlanInputText = document.getElementById('vlanInput').value;

    if (vlanInputText == "") {
        scriptresult += "===================== ERROR =====================\n";
        scriptresult += "NO VLAN INPUT FOUND" + "\n";
        scriptresult += "===================== ERROR =====================\n";
    }

    return scriptresult;
}

function selectSwitchModel (scriptresult) {
    selectModel = document.getElementById('selectSwitchModel').value;
    if (selectModel == "")  {
        console.log("NO SWITCH SELECTED");
        scriptresult += "===================== ERROR =====================\n";
        scriptresult += "NO SWITCH SELECTED" + "\n";
        scriptresult += "===================== ERROR =====================\n";
    }
    else {
        console.log("Switch Selected = " + selectModel);
        scriptresult += "Switch Selected = " + selectModel + "\n";
    }

    return scriptresult;
}


function vlanDefault (scriptresult) {
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
        scriptresult += "===================== ERROR =====================\n";
        scriptresult += error + " is missing \n";
        scriptresult += "===================== ERROR =====================\n";
    }
    else {
        console.log("VLAN CCTV = " + vlanCCTV);
        console.log("VLAN ISC  = " + vlanISC);
        console.log("VLAN QUA  = " + vlanQUA);

        scriptresult += "VLAN CCTV = " + vlanCCTV + "\n";
        scriptresult += "VLAN ISC  = " + vlanISC  + "\n";
        scriptresult += "VLAN QUA  = " + vlanQUA  + "\n";
    }

    return scriptresult;
}

function copy() {
    copyText = document.getElementById('scriptGenerated').value;
    if (copyText == "") {
        alert("Nothing To Copy");
    }
    else {
        navigator.clipboard.writeText(copyText);
        alert("Script Copied");
    }
}

