export class SignupModel{   
    email: string;
    password: string;
    user_name : string;
   
    constructor(email:string,password:string,user_name:string){
        this.email=email;
        this.password=password;
        this.user_name=user_name;
    }
   }