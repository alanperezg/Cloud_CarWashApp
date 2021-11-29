import React from 'react'
import { Api } from '~/api/Api'
import LogoutHeader from '~/components/LogoutHeader'

const IndexPage =  () => {
  const [emailInput, setEmailInput] = React.useState("")
  const [showNewsFeedToast, setShowNewsFeedToast] = React.useState(false);
  const [newsFeedToastMessage, setNewsFeedToastMessage] = React.useState("");
  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }
  const handleSubscribe = () => {
    setShowNewsFeedToast(false)
    if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput)){
      const body = { email: emailInput }
      Api.post('news-feed-subscription', body).then((response) => {
        setNewsFeedToastMessage(response.json.message)
        setShowNewsFeedToast(true)
      })
    }else{
      setNewsFeedToastMessage("Introduce un correo electrónico válido")
      setShowNewsFeedToast(true)
    }
    
  }

  const handleUnsubscribe = () => {
    setShowNewsFeedToast(false)
    if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput)){
      Api.delete(`news-feed-subscription/${emailInput}`).then((response) => {
        setNewsFeedToastMessage(response.json.message)
        setShowNewsFeedToast(true)
      })
    }else{
      setNewsFeedToastMessage("Introduce un correo electrónico válido")
      setShowNewsFeedToast(true)
    }
    
  }
  return (
    <>
      <style jsx>{`
        .content{
          padding-top: 68px;
        }
        
        .hero-banner{
          display: flex;
        }
        .hero-banner__image{
          width: 100%;
        }

        .details-section{
          padding: 40px 20px;
          background-color: #000;
        }
        .detail-item{
          color: #fff;
          text-align: center;
        }
        .detail-item:nth-last-child(n+1){
          margin-bottom: 40px;
        }
        .detail-item__title{
          font-size: 20px;
          margin-top: 10px;
        }
        .detail-item__value{
          font-size: 40px;
          margin-top: 10px;
          font-weight: 200;
        }

        .news-feed-section{
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .news-feed-section__alert{
          margin-bottom: 10px;
          font-size: 20px;
          text-align: center;
        }
        .news-feed-section__title{
          text-align: center;
          font-size: 35px;
        }

        .subscribe-form__email-input{
          border: 2px solid #bbb;
          padding: 15px;
          font-size: 20px;
          margin-top: 40px;
        }

        .subscribe-form__subscribe-button{
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
        .subscribe-form__subscribe-button:hover{
          background-color: #000;
        }
        .subscribe-form__unsubscribe-button{
          text-align: center;
          width: fit-content;
          margin: 20px auto 0 auto;
          font-weight: bold;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
      <div className="page">
        <LogoutHeader/>
        <div className="content">
          <div className="hero-banner">
            <img className="hero-banner__image" src="https://emprendeconhuevos.com/wp-content/uploads/2019/06/car-wash.jpg"/>
          </div>
          <div className="details-section">
            <div className="detail-item">
              <i className="fa fa-download fa-5x" aria-hidden="true"></i>
              <div className="detail-item__title">Clientes registrados</div>
              <div className="detail-item__value">5,100</div>
            </div>
            <div className="detail-item">
              <i className="fa fa-bath fa-5x" aria-hidden="true"></i>
              <div className="detail-item__title">Servicios realizados</div>
              <div className="detail-item__value">10,122</div>
            </div>
            <div className="detail-item">
              <i className="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
              <div className="detail-item__title">Clientes satisfechos</div>
              <div className="detail-item__value">4.5/5</div>
            </div>
          </div>
          <div className="news-feed-section">
            {showNewsFeedToast && <div className="news-feed-section__alert">{newsFeedToastMessage}</div>}
            <div className="news-feed-section__title">¡Obten nuestras promociones!</div>
            <div className="subscribe-form">
                <input className="subscribe-form__email-input" type="email" value={emailInput} onChange={handleEmailInputChange}/>
                <div className="subscribe-form__subscribe-button" onClick={handleSubscribe}>Subscribir</div>
                <div className="subscribe-form__unsubscribe-button" onClick={handleUnsubscribe}>Unsubscribe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage