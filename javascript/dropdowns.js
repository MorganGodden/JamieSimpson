function checkDropdowns() {
    var dropdowns = [document.getElementById('projects'), document.getElementById('events')]
    if(screen.width >= 1001) { for (i = 0; i < dropdowns.length; i++) { dropdowns[i].disabled = true; } }
}

function disableDropdown(id) { document.getElementById(id).checked = false; }