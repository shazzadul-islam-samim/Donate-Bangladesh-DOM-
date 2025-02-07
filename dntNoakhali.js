// Event Listener for Noakhali Button
document.getElementById('btn-noakhali').addEventListener('click', function(event) {
    // Get the input donation amount
    const inputnoakhali = inputValueId('input-noakhali');

    let now_bangladesh = new Date();
    
    //console.log(now_bangladesh);

    if (inputnoakhali > 0) {
        // Update the donation display
        const addnoakhali = document.getElementById('add-noakhali');
        addnoakhali.innerText = inputnoakhali;

        // Get and update the main balance
        const newBalance = calculateNewBalance('main-balance', inputnoakhali);
        document.getElementById('main-balance').innerText = newBalance;

        //history
       const div=document.createElement('div');
       div.classList.add('border-0','bg-white','rounded-lg','w-[600px]','shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]','lg:w-3/4','mx-auto','my-8','p-10');
       div.innerHTML=`
       <h2 class="font-mono font-bold my-2">Donate for Noakhali,Bangladesh</h2>
       <p class="font bold my-2">${inputnoakhali} Tk is Donated for Flood in Noakhali, Bangladesh</p>
       <p class="text-xs my-2">Date: ${now_bangladesh}</p>
       `
       document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Please take a number');
    }
    
});
