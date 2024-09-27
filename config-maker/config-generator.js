function vlanSplit() {

    vlanInputText = document.getElementById('vlanInput').value;
    console.log("vlanInputText = " + vlanInputText);

    if (vlanInputText == "") {
        $('#modalCopyAlert').modal('show'); //display modal alert
        document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">No VLAN detected</div>';
        resetScript();
        return;
    }
    
    const vlanArrayText = vlanInputText.split(/\s+/);
    const vlanArrayNum = new Array();
    console.log(vlanArrayText[0]);
    totalVlan = vlanArrayText.length;

    for (x = 0; x < totalVlan; x++){
        if (vlanArrayText[x] != ""){ 
            if (vlanArrayText[x] == "trunk") {
                continue;
            }
            else {
                // vlanArrayNum = Number(vlanArrayText[x]);
                if (Number.isNaN(vlanArrayNum) == true) {
                    $('#modalCopyAlert').modal('hide'); //hide modal alert
                    document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">String detected in VLAN list. Generation aborted</div>';
                    $('#modalCopyAlert').modal('show'); //display modal alert
                    // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
                    // inputAlert();
                    return;
                }
            }
            
        }
        
    }
    
    $('#modalCopyAlert').modal('hide');
    copyText = "";
    console.log("vlanArrayText = " + vlanArrayText);
    for (x = 0; x < totalVlan; x++){
        console.log("Vlan " + (x+1) + ": " + vlanArrayText[x]);
        copyText += "Vlan " + (x+1) + ": " + vlanArrayText[x] + "\n";
    }
    copyText = generateScript(copyText, vlanArrayText, totalVlan);
    copyText += '!############### END OF SCRIPT ###############';
    document.getElementById('scriptGenerated').value = copyText;
}

function inputAlert() {
    $('#modalCopyAlert').modal('hide'); //hide modal alert
    document.getElementById('modalAlert').innerHTML = '<div class="alert alert-danger" role="alert">String detected in VLAN list. Generation aborted</div>';
    $('#modalCopyAlert').modal('show'); //display modal alert
    // document.getElementById('modalAlert').innerHTML = '<div class="alert alert-success" role="alert">Copied to clipboard</div>';
}


function generateScript(copyText, vlanArrayText, totalVlan) {
    vlanCCTV = document.getElementById('vlanCCTVInput').value;
    vlanISC = document.getElementById('vlanISCInput').value;
    vlanQUA = document.getElementById('vlanQUAInput').value;
    vlanNative = document.getElementById('vlanNativeInput').value;

    error = "";
    document.getElementById('scriptGenerated').value = "";
    document.getElementById('scriptGenerated').placeholder = "";

    copyText = "";
 
    for (x = 0; x < totalVlan; x++){
        if (vlanArrayText[x] != undefined || vlanArrayText[x] == ""){
            
            if (vlanArrayText[x] != "trunk"){
                copyText += 'interface GigabitEthernet0/' + (x+1);
            }

            if (vlanArrayText[x] == vlanCCTV){
                copyText += '\ndescription #CCTV';
            }
            else if (vlanArrayText[x] == vlanISC){
                copyText += '\ndescription #ISC';
            }
            else if (vlanArrayText[x] == vlanQUA){
                copyText += '\n  switchport access vlan ' + vlanNative + '\n';
                copyText += '!\n';
                continue;
            }
            else if (vlanArrayText[x] == "trunk"){
                copyText += 'exit\n';
                copyText += 'default interface GigabitEthernet0/' + (x+1) + '\n';
                copyText += 'interface GigabitEthernet0/' + (x+1);
                copyText += '\n  switchport mode trunk\n';
                copyText += '  switchport trunk native vlan ' + vlanNative + '\n';
                copyText += '!\n';
                continue;
            }
            else if (vlanArrayText[x] == "x" || vlanArrayText[x] == "X"){
                copyText += '\n  switchport access vlan ' + vlanNative + '\n';
                copyText += '!\n';
                continue;
            }
            copyText += '\n  switchport access vlan ' + vlanArrayText[x] + '\n';
            copyText += '!\n';
        }
        
        
    }
    return copyText;
}  