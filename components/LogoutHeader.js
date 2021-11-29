import Link from 'next/link';

const LogoutHeader =  () => {
    return (
        <>
            <style jsx>{`
                .header{
                position: fixed;
                width: 100%;
                padding: 10px;
                display: flex;
                border-bottom: 1px solid #ddd;
                box-shadow: rgb(149 157 165 / 20%) 0px 2px 15px;
                justify-content: space-between;
                box-sizing: border-box;
                background-color: #fff;
                }
                .logo{
                font-size: 40px;
                font-weight: bold;
                color: #2196f3;
                }
                .menu{
                display: flex;
                align-items: center;
                }
                .menu-option{
                margin: 0 5px;
                font-size: 15px;
                font-weight: bold;
                color: #4c4c4c;
                cursor: pointer;
                }

                .menu-option:hover{
                color: #2196f3;
                }
            `}</style>
            <div className="header">
            <Link href='/'>
                <div className="logo">WP</div>
            </Link>
            <div className="menu">
                <Link href='/client/login'>
                    <div className="menu-option">Client Login</div>
                </Link>
                <Link href='/provider/login'>
                    <div className="menu-option">Provider Login</div>
                </Link>
            </div>
            </div>
        </>
    )
}

export default LogoutHeader