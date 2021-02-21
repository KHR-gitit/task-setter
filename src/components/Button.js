const Button = ({classN, action, children}) => {
    return <button className={classN} onClick={action}> {children}</button>
}

export default Button;
