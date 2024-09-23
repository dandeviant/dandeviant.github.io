function resetScript() { 
    document.getElementById('scriptGenerated').value = '';
    document.getElementById('scriptAlert').innerHTML = "";
    document.getElementById('scriptGenerated').placeholder = "Generated Script Here";
}

function switchModel() {selectModel = document.getElementById('selectSwitchModel').value;}
 

function vlanInput (scriptresult) {
    vlanInputText = document.getElementById('vlanInput').value;

    if (vlanInputText == "") {
        inputAlert();
    }
    else {
        scriptresult += vlanInputText;
    }

    return scriptresult;
}

function selectSwitchModel (scriptresult) {
    selectModel = document.getElementById('selectSwitchModel').value;
    if (selectModel == "")  {
        console.log("NO SWITCH SELECTED");
    }
    else {
        console.log("Switch Selected = " + selectModel);
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

    }
    else {
        console.log("VLAN CCTV = " + vlanCCTV);
        console.log("VLAN ISC  = " + vlanISC);
        console.log("VLAN QUA  = " + vlanQUA);

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
    }    
}

function clearAlert() {
    document.getElementById('scriptAlert').innerHTML = "";
}