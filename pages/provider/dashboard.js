import React from 'react'
import LoginHeader from '~/components/LoginHeader'
import { Api } from '~/api/Api'

const ClientDashboardPage = () => {
    return(
        <>
            <style jsx>{`
                .content{
                    padding: 88px 20px 20px 20px;

                }
                .page-title{
                    font-size: 30px;
                    font-weight: bold;
                }
                .error-message{
                    margin-top: 40px;
                    text-align: center;
                    font-size: 18px;
                }
                .error-icon{
                    font-size: 40px;
                    text-align: center;
                    margin-top: 20px;
                }
            `}</style>
            <div className="page">
                <LoginHeader/>
                <div className="content">
                    <div className="page-title">Dashboard</div>
                    <div className="error-message">Ocurrion un error, inténtelo más tarde</div>
                    <div className="error-icon">:(</div>
                </div>
            </div>
        </>
    )
}

export default ClientDashboardPage