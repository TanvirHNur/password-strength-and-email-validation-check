
    const toggole = (id, property) => {
        document.getElementById(id).style.display = property;
    }

      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = pass => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;
        return re.test(String(pass))
    }

    console.log(validatePassword('abCD12@#'));

      const testingValidity = () => {
          
        const inputEmail = document.getElementById('email');
        const emailId = inputEmail.value;
        inputEmail.value = '';
  
  
  
        const inputPass = document.getElementById('password');
        const passId = inputPass.value;
        inputPass.value = ''
  
  
  
       const result = validateEmail(emailId);
       const pass = validatePassword(passId);
          
  
       const div =   document.getElementById('result');
    //    div.textContent ='';
          if(result == true  && pass == true){
              // const div =   document.getElementById('result')
              div.innerHTML = `
              <h6 style="color: #0A66C2;">Congrats, Everything is Ok</h6>
              `
              
          }
          else{
          //  const div =   document.getElementById('result')
           div.innerHTML = `  
          <h6 style="color: red;">Hey, relax and type carefully</h6>`
          
          }
     
    //     toggole('spinner', 'block')
    // toggole('result', 'none')
      }





     const emptyResult = () => {
        const div =   document.getElementById('result');
        div.textContent ='';
     }




     
    //  const testingValidity1 = () => {
    //       toggole('spinner', 'none')
    //   toggole('result', 'block')
    //  }

    document.getElementById('body-bg').innerHTML = `
    
<div class="container">
<div class="d-flex justify-content-center h-100">
    <div class="card">
        <div class="card-header">
            <h3 onclick="testingValidity()">Sign Up</h3>
            
        </div>
        <div class="card-body">
                <div class="input-group form-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user "></i></span>
                    </div>
                    <input onclick="emptyResult()" id="email" type="text" class="form-control ms-2" placeholder="username">
                    
                </div>
                <div class="input-group form-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input  onclick="emptyResult()" id="password" type="password" class="form-control ms-2" placeholder="password">
                </div>
                
                <div class="form-group">
                    <input  onclick="testingValidity()"  type="submit" value="Check" class="btn float-right sign-up-btn"> 
                </div>
        </div>
        <div id="spinner" class="spinner-border text-success mx-auto" role="status">
            <span class="visually-hidden mx-auto">Loading...</span>
          </div>
        <div id="result" >
            
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-center links">
                Already have an account?<a href="#">Sign In</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
</div>
<section class="footer">
    <div>
        <div class="icon">
            <i class="fa fa-facebook"><a href=""></a></i>
            <i class="fa fa-twitter"><a href=""></a></i>
            <i class="fa fa-github"> <a href="https://github.com/TanvirHNur"></a> </i>
            <i class="fa fa-linkedin"><a href=">https://www.linkedin.com/in/tanvir-hossain-js-dev"></a></i>
           </div>
           <p class="my-color">Developed By  <i class="fa fa-heart-o"></i> <a target="_blank" href="https://github.com/TanvirHNur" class="text-btn">Tanvir</a></p>
    </div>
    
</section>
    `