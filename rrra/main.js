let input = document.querySelector('#input')
let p =  document.querySelector('#P')
let blur = document.querySelector('.blur')
input.addEventListener('blur' , () => {
    let x = event.target.value
    if (x.length <= 0) {
        P.innerHTML = 'паполните страку'
        P.style=`
        color: red;
        `
        blur.style=`
        box-shadow: 0 0 20px red;
        `
        window.setTimeout(function () {
            P.innerHTML = '' 
            blur.style=`
            box-shadow: 0 0 20px rgb(223, 223, 223);
            `   
        } ,3500)
    }
    else if (x.length > 0 && x.length < 8) {
        P.innerHTML = 'нужно от 8 да 18'
        P.style=`
        color: red;
        `
        blur.style=`
        box-shadow: 0 0 20px red;
        `
        window.setTimeout(function () {
            P.innerHTML = '' 
            blur.style=`
            box-shadow: 0 0 20px rgb(223, 223, 223);
            `    
        } ,3500)
    }
    else if (x.length >= 8 && x.length <= 18) {
        P.style=`
        color: rgb(69,255,32);
        `
        blur.style=`
        box-shadow: 0 0 20px rgb(34, 226, 8);
        `
        P.innerHTML = 'успешно'
        window.setTimeout(function () {
        P.innerHTML = ''  
        blur.style=`
            box-shadow: 0 0 20px rgb(223, 223, 223);
        `     
        } ,1500)
    }
    else{
        P.innerHTML = 'слишком много'
        P.style=`
        color: red;
        `
        blur.style=`
        box-shadow: 0 0 20px red;
        `
        window.setTimeout(function () {
            P.innerHTML = ''  
            blur.style=`
            box-shadow: 0 0 20px rgb(223, 223, 223);
            `   
        } ,3500)
    }
    console.log(x.length);
})