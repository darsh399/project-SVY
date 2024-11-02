
import { Link } from 'react-router-dom';
const Button = (props) => {
    const buttonClass = `${props.className} button button--${props.size || 'default'}  button--${props.inverse ? 'button--inverse' : ''} ${props.unstyled ? 'button--unstyled' : ''}`;
    const customStyledButton = `${props.className} ${props.customStyled ? 'button--customStyled' : ''}`;

    function getCustomStyledButton(props, customStyledButton) {
        if (props.href) {
            return (
                <div className={customStyledButton} props={props}>
                    <a href={props.href} target={props.target || 'new_page'} className={customStyledButton} style={props.style}>
                        {props.children}
                    </a>
                </div>
            )
        }

        return (
            <div className={customStyledButton} props={props}>
                <Link to={props.to} className={props.customStyledButton} style={props.style}>
                    {props.children}
                </Link>
            </div>
        )
    }

    function getHrefButton(props, buttonClass) {
        return (
            <div className={buttonClass}>
                <a href={props.href} target={props.target || 'new_page'} className={buttonClass} style={props.style}>{props.children}</a>
            </div>
        )
    }

    function getLinkButton(props, buttonClass) {
        return (
            <div className={buttonClass}>
                <Link to={props.to} className={buttonClass} style={props.style}>{props.children}</Link>
            </div>
        )
    }


    function getDefaultButtonJsx(props, buttonClass) {
        return (
            <div className={buttonClass}>
                <button onClick={props.onClick} style={props.style} className={buttonClass}>{props.children}</button>
            </div>
        )
    }

    if (props.customStyled) {
        return (
            getCustomStyledButton(props, customStyledButton)
        );
    }

    if (props.href) {
        return (
            getHrefButton(props, buttonClass)
        );
    }

    if (props.to) {
        return (
            getLinkButton(props, buttonClass)
        )
    }

    return (
        getDefaultButtonJsx(props, buttonClass)
    );
}

export default Button;