// FOR ALL POOR SOULS TRYING TO DEBUG MY CODE
// Good luck and happy debugging!


// TODO https://stackoverflow.com/questions/14949210/dynamically-update-a-table-using-javascript 



$(document).ready(function () {
    // ***************************************************************
    // Dynamically load table data
    // ***************************************************************    
    // 
    if (document.location.href.indexOf("/isp") > -1) {
        console.log("** Loaded main-script.js");

        // Load JS of ISP pages
        $.getScript("/javascripts/isp-pages.js");
    }

}); // end jQuery document 



// *************************************************************************
// *************************************************************************
// *************************************************************************
// FUNCTIONS
// ************************************************************************* 
// *************************************************************************
// *************************************************************************


// ***************************************************************
// Show message
// ***************************************************************  
function showMessage(msg) {
    var msgBox = '<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + msg + '</div>';
    $('#pageContent').prepend(msgBox);
    console.log("** Showing mesasge box: " + msg);

}
