import React from 'react'
import LogoutHeader from '~/components/LogoutHeader'
import { Api } from '~/api/Api'
import { useRouter } from 'next/router'

const ProviderLoginPage = () => {
    const [ showAlertToast, setShowAlertToast ] = React.useState(false)
    const [ alertToastMessage, setAlertToastMessage ] = React.useState("")
    const [ emailInput, setEmailInput ] = React.useState("")
    const [ passwordInput, setPasswordInput ] = React.useState("")
    const router = useRouter()


    const handleEmailInputChange = (event) => {
        setEmailInput(event.target.value)
    }

    const handlePasswordInputChange = (event) => {
        setPasswordInput(event.target.value)
    }
    const handleLogin = () => {
        setShowAlertToast(false)
        if(emailInput && passwordInput){
            const body = { user: emailInput, password: passwordInput }
            Api.post('provider/login', body).then((response) => {
                if(response.status === 200){
                    router.push('/provider/dashboard')
                }else{
                    setAlertToastMessage(response.json.message)
                    setShowAlertToast(true)
                }
            })
        }else{
            setAlertToastMessage("Introduce un correo y contraseña")
            setShowAlertToast(true)
        }
    }
    return(
        <>
            <style jsx>{`
                .content{
                    padding-top: 68px;
                    display: flex;
                    height: calc(100vh - 68px);
                    align-items: center;
                    justify-content: center;
                }
                .login-container{
                    width: 90%;
                    max-width: 400px;
                    box-sizing: border-box;
                }
                .login-form{
                    background-color: #fff;
                    border: 1px solid #d3d3d3;
                    box-shadow: rgb(149 157 165 / 20%) 0px 10px 20px;

                    display: flex;
                    flex-direction: column;
                    padding: 40px;
                }
                .input{
                    border: 2px solid #bbb;
                    padding: 15px;
                    font-size: 20px;
                    margin-bottom: 10px;
                    width: -webkit-fill-available;
                }
                .input-title{
                    font-size: 15px;
                    margin-bottom: 10px;
                    font-weight: bold;
                }
                .button{
                    padding: 20px;
                    background-color: #2196f3;
                    color: #fff;
                    font-size: 20px;
                    text-transform: uppercase;
                    margin: auto;
                    width: fit-content;
                    margin-top: 20px;
                    cursor: pointer;
                }
                .button:hover{
                    background-color: #000;
                }
                .login-alert{
                    text-align: center;
                    color: #f44336;
                    font-size: 20px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .form-title{
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
            `}</style>
            <div className="page">
                <LogoutHeader/>
                <div className="content">
                    <div className="login-container">
                        {showAlertToast && <div className="login-alert">{alertToastMessage}</div>}
                        <div className="login-form">
                            <div className="form-title">Provider Login</div>
                            <div className="input-container">
                                <div className="input-title">Email</div>
                                <input className="input" type="email" onChange={handleEmailInputChange} value={emailInput}/>
                            </div>
                            <div className="input-container">
                                <div className="input-title">Password</div>
                                <input className="input" type="password" onChange={handlePasswordInputChange} value={passwordInput}/>
                            </div>
                            <div className="button" onClick={handleLogin}>Ingresar</div>
                        </div>
                    </div>    
                </div> 
            </div>
        </>
    )
}

export default ProviderLoginPage