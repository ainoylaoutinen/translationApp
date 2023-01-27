import LoginForm from "../components/login/LoginForm";


const Login = () => {
    const headingStyle = {
        color: "white",
        backgroundColor: "goldenrod",
        fontFamily:'Ink Free',
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: 4,
        marginLeft: 400,
        marginRight: 400,
        padding: 20,
        borderRadius: 20,
        };
    return (
        <>
        <div style={{ 
            backgroundImage: "url(/img/backgreound3.png)", height: 900, 
         }}>
        <section style={headingStyle}>
        <h1>Lost in Translation</h1>
        <h4>Get Strated!</h4>
        </section>
        <LoginForm/>
        </div>
        </>
    )
}

export default Login;
