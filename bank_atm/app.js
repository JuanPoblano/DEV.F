 //Base de datos de la cuentas registradas
        var cuentas = [
            { id: 1, nombre: "Rene", saldo: 200, password: 1234, numcuenta: 1029384756 },
            { id: 2, nombre: "Kristina", saldo: 290, password: 2345, numcuenta: 0987654321 },
            { id: 3, nombre: "Rony", saldo: 67, password: 3456, numcuenta: 1234567890 }
        ];

        var pagePortada = document.getElementById("portada");
            var pageSesion = document.getElementById("page-sesion");
            var pageCuenta = document.getElementById("page-cuenta");
            var pageFunctions = document.getElementById("pageFunctions"); 
            var pageSaldo = document.getElementById("pageSaldo");
            var userAccount={};

                var text = document.createElement("h3");
                var displayBalance = document.createElement("p");
            //funcion para poner usuarios en el form

            function setUsersDatatoForm() {
                for (let i = 0; i < cuentas.length; i++) {
                    let nombreCuenta = cuentas[i].nombre;
                    select = document.getElementById('usuario');
                    let opt = document.createElement('option');
                    opt.value = cuentas[i].id;
                    opt.innerHTML = nombreCuenta;
                    select.appendChild(opt);
                }
            }
            setUsersDatatoForm();


            function interfaceUserAccount() {

            }

            //Funcion para obtener data del form
            function getUserOption() {

                var userOptionSaved = document.getElementById("usuario").value;
                var passwordSaved = document.getElementById("password").value;
                var contador = 0;
                for (let i = 0; i < cuentas.length; i++) {

                    if (userOptionSaved == cuentas[i].id && passwordSaved == cuentas[i].password) {
                        console.log("acceso correcto")
                        var idUserSelected = cuentas[i].id;
                        var nameUserSelected = cuentas[i].nombre;
                    }
                    else {
                        contador++;
                    }
                }


                if (idUserSelected == 1) {
                    console.log("Ingresaste como " + nameUserSelected)
                    userAccount=cuentas[idUserSelected-1];
                    showCuenta(userAccount);
                }

                else if (idUserSelected == 2) {
                    console.log("Ingresaste como " + nameUserSelected)
                    userAccount = cuentas[idUserSelected - 1];
                    showCuenta(userAccount);
                }

                else if (idUserSelected == 3) {
                    console.log("Ingresaste como " + nameUserSelected)
                    userAccount = cuentas[idUserSelected - 1];
                    showCuenta(userAccount);
                }

                else if (contador == 3) {
                    
                    console.log("Usuario o contraseña incorrectos")
                    errorConection()
                }

                else {
                    console.log("porfa rellena los campos solicitados")
                    errorConection()
                }


            }
            

            function signInPortada() {
                pageCuenta.style.display = "none";
                pagePortada.style.display = "none";
                pageSesion.style.display = "grid";
            }

            //Dentro de la cuenta de un usuario
            function showCuenta(cuenta) {
                let dataUser = cuenta
               
                    pageSesion.style.display = "none";
                    pagePortada.style.display = "none";
                    pageCuenta.style.display = "grid";
                    pageSaldo.style.display = "none";
                    

                let welcomeNameUser = document.createElement("h1");
                welcomeNameUser.className = "titulos";
                welcomeNameUser.innerHTML = `Welcome ${dataUser.nombre}`;
                let numCuentaUser = document.createElement("h2");
                numCuentaUser.className = "titulos"
                numCuentaUser.innerHTML = `Account:${dataUser.numcuenta}`

                let inPageCuenta = document.getElementById("page-cuenta")
                inPageCuenta.prepend(welcomeNameUser)
                welcomeNameUser.after(numCuentaUser); 
            }

            function errorConection() {
                Qual.errord("Access denied !"," Please enter a valid username and password");
              /*  let showError = document.getElementById("message-error")
                showError.style.visibility = "visible"
                showError.className = "animation"  */

            }


//OPCIONES DEL USUARIO
            const userOptions = document.querySelector(".secciones");

                userOptions.addEventListener("click", (event) => {
                    const { target } = event;
                    if (!target.matches("button")) {
                        return;
                    }
                    if (target.value==="deposit") {
                        console.log(`depositar a ${userAccount.nombre}`);
                        var btnEnter = document.getElementById("btn-enter");
                        btnEnter.value = "enterDeposit"
                        var inPageFunctions = document.getElementById("pageFunctions");
                        inPageFunctions.prepend(text);
                        text.innerHTML = "Enter the amount you wish to deposit to your account.";
                        showKeyPad();
                        console.log(userAccount)
                        console.log(btnEnter)
                        return;
                    }
                    if (target.value=="withdraw") {
                        console.log(`retirar a ${userAccount.nombre}`);
                        var btnEnter = document.getElementById("btn-enter");
                        btnEnter.value = "enterDeposit"
                        var inPageFunctions = document.getElementById("pageFunctions");
                        inPageFunctions.prepend(text);
                        btnEnter.value = "enterWithdraw"
                        text.innerHTML = "Enter the amount you wish to withdraw from your account";
                        showKeyPad();
                        console.log(userAccount)
                        console.log(btnEnter)
                        return;
                    }
                    if (target.value=="balance") {
                        console.log(`Ver saldo de ${userAccount.nombre}`)
                        seeBalance();
                        return;
                    }

                });
        

                function depositMoney() {
                        console.log("Saldo Antes de depositar: " + userAccount.saldo)
                        const { id, nombre, saldo, password, numcuenta } = userAccount;
                        const { displayValue } = dataKeyPad;
                        let money = parseInt(displayValue);
                        let preDeposit;
                        console.log(`Depositar $ ${money} a ${nombre} en la cuenta ${numcuenta}`)
                        if(!money==0){
                                preDeposit = money + saldo;
                            if (preDeposit <= 990 ) {
                                userAccount.saldo = preDeposit;
                                console.log("Deposito exitoso");
                                Qual.successd("Success","Deposit Made Successfully");
                            }
                            else {
                                console.log("fallo el deposito");
                                Qual.warningd("Warning: failed deposit","You cannot have more than $990 in your account, check your balance and try again.");
                                
                            }             
                        } 
                        else{
                            console.log("no se puede deporsitar 0")
                            Qual.errord("Error!","Please enter an amount other than zero.");
                            
                        }

                        console.log("Saldo despues de depositar: "+userAccount.saldo)
                    
                    }

                    function withdrawMoney() {
                        console.log("Saldo Antes de Retirar: " + userAccount.saldo)
                        const { id, nombre, saldo, password, numcuenta } = userAccount;
                        const { displayValue } = dataKeyPad;
                        let money = parseInt(displayValue);
                        console.log(`Retirar $ ${money} a ${nombre} en la cuenta ${numcuenta}`);
                        let preDeposit;
                        
                        if (!money == 0) {
                            preDeposit = saldo-money;
                            if (preDeposit >= 10) {
                                userAccount.saldo = preDeposit;
                                console.log("Retiro exitoso");
                                Qual.successd("Success","Successful withdrawal");
                            }
                            else {
                                console.log("fallo el Retiro");
                                Qual.warningd("Warning: unsuccessful withdrawal","You cannot have less than $10 in your account, check your balance and try again.");
                            }
                        }
                        else {
                            console.log("no se puede retirar 0")
                            Qual.errord("Error!","Please enter an amount other than zero.");
                        }                      
                        console.log("Saldo despues de retirar: " + userAccount.saldo)

                        }
                function seeBalance(){
                    var inPageBalance = document.getElementById("pageSaldo")
                    text.innerHTML = `Dear ${userAccount.nombre} your current account balance is: `;
                    inPageBalance.prepend(text);

                    displayBalance.className="display-balance";
                    displayBalance.innerHTML=`$ ${userAccount.saldo}`;
                    text.after(displayBalance);
                   
                    pageSesion.style.display = "none";
                    pagePortada.style.display = "none";
                    pageCuenta.style.display = "none";
                     pageSaldo.style.display = "grid";
                }

            //EL TECLADO DE NUMEROS 
            function showKeyPad(){
                pageFunctions.style.display = "grid";
                pageCuenta.style.display = "none";
                pagePortada.style.display = "none";
                pageSesion.style.display = "none";
                pageSaldo.style.display = "none";   
                resetScreen();
                updateDisplay();
            }
            function backToMenu(){
                pagePortada.style.display = "none";
                pageSesion.style.display = "none";
                pageFunctions.style.display = "none"; 
                pageSaldo.style.display = "none";
                pageCuenta.style.display = "grid";
                resetScreen();
                updateDisplay();            
            }



        const dataKeyPad = {
        displayValue: "0",
    };
        function updateDisplay() {
            const display = document.querySelector(".screen");
            display.value = dataKeyPad.displayValue;
        }

        updateDisplay();

        const keys = document.querySelector(".keys");

            keys.addEventListener("click", (event) => {
                    const { target } = event;
                    if (!target.matches("button")) {
                        return;
                    }
                    if (target.classList.contains("clear-screen")) {
                        resetScreen();
                        updateDisplay();
                        return;
                    }
                    if (target.value=="enterDeposit") { 
                        console.log("estoy presionando enter")  
                        depositMoney()
                        resetScreen(); 
                        updateDisplay();                                      
                        return;
                    }
                    if (target.value == "enterWithdraw") {
                    console.log("estoy presionando enter")
                    withdrawMoney();
                    resetScreen();
                    updateDisplay();
                    return;
                }
                

                    inputDigit(target.value);
                    updateDisplay();
                });


    function inputDigit(digit) {
        const { displayValue } = dataKeyPad;

            dataKeyPad.displayValue = displayValue === "0" ? digit : displayValue + digit;      
    }

    function resetScreen() {
            dataKeyPad.displayValue = "0";
        }
function closeSesion(){
    Qual.confirmd("Are you sure you want to continue ? ", "Click Ok button to continue or Close this window to cancel","picture.png","OK", "", "location.reload()","");
}