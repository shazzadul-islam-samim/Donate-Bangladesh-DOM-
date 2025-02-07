document.getElementById('btn-history').addEventListener('click', function (event){
    event.preventDefault();
    
    showSection('donation-history');
})

document.getElementById('btn-donate').addEventListener('click', function (event){
    
    showSection('donation-container');
})