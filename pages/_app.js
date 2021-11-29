import React from "react"
const App = ({Component, pageProps}) => {
    return(
         <>
            <style global jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;900&display=swap');
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Roboto', sans-serif;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `}</style>
            <Component {...pageProps}></Component>
        </>
    )
}

export default App
