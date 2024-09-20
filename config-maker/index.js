function resetScript() { 
    document.getElementById('scriptGenerated').value = '';
    document.getElementById('scriptAlert').innerHTML = "";
}

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
        inputAlert();
    }
    else {
        scriptresult += vlanInputText;
        // scriptresult += "\n\n";
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
        scriptAlert();
    }
    else {
        navigator.clipboard.writeText(copyText);
        scriptAlert();
    }
}


function scriptAlert() {
    if (document.getElementById('scriptGenerated').value == '') {
        // document.getElementById('modalAlert').innerHTML = "Nothing to Copy";
        document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">Nothing to Copy</div>';
    }
    else {
        document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
        // document.getElementById('modalAlert').innerHTML = "Copied to Clipboard";
        // document.getElementById('scriptAlert').innerHTML = '\
        // <div class="row">\
        //     <div class="col">\
        //         <div class="alert alert-success" role="alert">\
        //             Script Copied\
        //         </div>\
        //     </div>\
        // </div>'
    }    
}

function clearAlert() {
    document.getElementById('scriptAlert').innerHTML = "";
}


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
    // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard </div>';
}
