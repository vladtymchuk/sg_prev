
document.getElementById("close").onclick = function(e) {
    clearFieldsModal();
};

$(document).click( function(e){
    if ( !$(e.target).closest('.feedback-inputs').length ) {
        clearFields();
    }
});

$(document).mouseup(function (e){
    const modal =  $("#modal");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
        clearFieldsModal();
    }
});


function clearFields() {
    document.getElementById("fio").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function clearFieldsModal() {
    document.getElementById("fio-modal").value = "";
    document.getElementById("email-modal").value = "";
    document.getElementById("message-modal").value = "";
}
