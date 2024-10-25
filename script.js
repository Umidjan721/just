function sum(){
    let inputX = document.getElementsByName("x")[0]
    let a = inputX.value
    let inputY = document.getElementsByName("y")[0]
    let b = inputY.value

    let c = Number(a) + Number(b)

    let span = document.getElementById("Calculator")
    span.innerHTML = "Answer: " + c

    return c;
}


function subtract(){
    let inputX = document.getElementsByName("x")[0]
    let a = inputX.value
    let inputY = document.getElementsByName("y")[0]
    let b = inputY.value

    let c = Number(a) - Number(b)

    let span = document.getElementById("Calculator")
    span.innerHTML = "Answer: " + c

    return c;
}


function multiple(){
    let inputX = document.getElementsByName("x")[0]
    let a = inputX.value
    let inputY = document.getElementsByName("y")[0]
    let b = inputY.value

    let c = Number(a) * Number(b)

    let span = document.getElementById("Calculator")
    span.innerHTML = "Answer: " + c
    
    return c;
}


function devide(){
    let inputX = document.getElementsByName("x")[0]
    let a = inputX.value
    let inputY = document.getElementsByName("y")[0]
    let b = inputY.value
    let span = document.getElementById("Calculator")
    if(b==0){
        span.innerHTML = "ERROR";
    } else{
        let c = Number(a) / Number(b)
        span.innerHTML = "Answer: " + c
    
    }
    return c;
}

function saleStep(){
    let step = document.getElementById("step").value;
    let sale = document.getElementById("sale");
    sale.innerHTML = step + "%";
}


function coursePrice(){
    let courseName = document.getElementById("courseName").value;
    let coursePrice = document.getElementsByClassName("price")[0];
    let step = document.getElementById("step").value;
    console.log(step);
    const PYTHON_PRICE = 12000000;
    const FRONT_PRICE = 14000000;
    const UX_PRICE = 16000000;
    let bestPrice ;

    if(courseName=="Python"){
        bestPrice = PYTHON_PRICE;
    }
    else if(courseName=="Front"){
       bestPrice = FRONT_PRICE;
    }else if (courseName=="UX"){
        bestPrice = UX_PRICE;
    }else{
        coursePriceElement.value = "";
        return
    }
    let finalPrice = bestPrice * (100 - step)/100;
    coursePrice.value = finalPrice;
    saleStep()
}

function soon(){
    let soon = document.getElementById("soon").value;
    let soul = document.getElementsByClassName("number")[0];
    let price = document.getElementById("price").value;
    console.log(soon);
    const UZB_PRICE = +998;
    const RUS_PRICE = +7;
    const USA_PRICE = +1;
    let bestPrice ;

    if(courseName=="Python"){
        bestPrice = PYTHON_PRICE;
    }
    else if(courseName=="Front"){
       bestPrice = FRONT_PRICE;
    }else if (courseName=="UX"){
        bestPrice = UX_PRICE;
    }else{
        coursePriceElement.value = "";
        return
    }
    let finalPrice = bestPrice * (100 - step)/100;
    coursePrice.value = finalPrice;
    saleStep()
}