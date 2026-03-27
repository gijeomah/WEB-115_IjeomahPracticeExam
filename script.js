let btn = document.getElementById("calculateBudget");
btn.addEventListener('click', budget_calc);
let div=document.getElementById("budgetResults");
//monthly savgs
let mnthly_savings=income_inpt-expense_inpt;
let prgect_savings=mnthly_savings*nmb_mnths;
div.appendChild(prgect_savings.toFixed(2))
//ask for the info
//Gaining usrs monthly interst
let income_inpt=window.prompt("What is your monthly income");
//seting the inpt to be a number
income_inpt=Number(income_inpt);
div.appendChild(p_incm.toFixed(2));
//Repeating for the rest
let expense_inpt=window.prompt("What is monthly expenses");
expense_inpt=Number(expense_inpt);
div.appendChild(p_exps.toFixed(2));
let nmb_mnths=window.prompt("what is the number of months your budgeting for");
nmb_mnths=Number(nmb_mnths);
div.appendChild(nmb_mnths.toFixed(2));

//defing budget_calc
function budget_calc(){
    console.log("testing");
    let p = document.createElement('p');
    if (isNaN(income_inpt)||isNaN(expense_inpt)||isNaN(nmb_mnths)){
        alert("Please enter a number for all questions");
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

