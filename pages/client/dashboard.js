import React from 'react'
import LoginHeader from '~/components/LoginHeader'
import { Api } from '~/api/Api'

const ClientDashboardPage = () => {
    const [services, setServices] = React.useState([])
    React.useEffect(() => {
        Api.get('services').then((response) => {
            if(response.status === 200){
                setServices(response.json.services)
            }
        })
    }, [])
    return(
        <>
            <style jsx>{`
                .content{
                    padding: 88px 20px 20px 20px;

                }
                .page-title{
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .services-container__title{
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .service-item{
                    padding: 10px;
                    border: 1px solid #d3d3d3;
                    cursor: pointer;
                    margin-top: 10px;
                }
                .service-item__title{
                    font-size: 15px;
                    font-weight: bold;
                }
                .service-item__price{
                    font-size: 20px;
                    font-weight: bold;
                    color: #2196f3;
                }
            `}</style>
            <div className="page">
                <LoginHeader/>
                <div className="content">
                    <div className="page-title">Dashboard</div>
                    <div className="services-container">
                        <div className="services-container__title">Servicios</div>
                        <div className="services-table">
                            { services.map((e, i) => {
                                return (
                                    <div className="service-item" key={i}>
                                        <div className="service-item__title">{e.name}</div>
                                        <div className="service-item__description">{e.description}</div>
                                        <div className="service-item__price">${e.price}</div>
                                    </div>
                                )
                            })}               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientDashboardPage