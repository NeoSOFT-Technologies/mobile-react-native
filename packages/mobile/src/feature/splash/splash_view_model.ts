import { YourFirstUseCase, YourFirstUseCaseParams } from './../../../../domain/src/usecases/first/your_first_usecase';
import { BaseViewModel } from "../base/base_view_model";

export class SplashViewModel extends BaseViewModel{

    readonly myText:string = "User"

    constructor(){
        super()
        console.log("Splash Constructor")
    }

    functionn1(){
        new YourFirstUseCase().execute(new YourFirstUseCaseParams({
emailOrPhone : "",
password:""
        }))
    }

}