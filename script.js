let btn = document.getElementById("CalculateBudget");
btn.addEventListener('click', budget_calc);
let div=document.getElementById("budgetResults");
//monthly savgs
let mnthly_savings=income_inpt-expense_inpt;
let prgect_savings=mnthly_savings*nmb_mnths;
//ask for the info

//defing budget_calc
function budget_calc(){
    console.log("testing");
    let p = document.createElement('p');
    if (isNaN(income_inpt)||isNaN(expense_inpt)||isNaN(nmb_mnths)){
        alert("Please enter a number for all questions")
    }
    try{
        //testing all my code
        console.log("testing 2");

        if (mnthly_savings<0){
            alert("Warning:Spending exceeds income!");
        };
        for(let i =1; i<=nmb_mnths;i++){
            let mtoal= mnthly_savings*i;
            div.appendChild('p');
        };


    }catch(error){
        alert("There is an error"+error);
    };

};
