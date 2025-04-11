import { validate } from "../ult/validate";
import { SignupType } from "../type/signup";
import { CreateUserRepository } from "../respository/user";
import { sendMailToAcceptRegister } from "../ult/mail";
export const signUpService = async (body: SignupType) => {

    const valueError = await validate(body)

    if (valueError) {
        return ({
            success: false,
            msg: valueError
        })
    } else {
        await CreateUserRepository(body)
        await sendMailToAcceptRegister(body.email)
        return ({
            success: true,
            msg: "please check your email to active your account"
        })
    }
}