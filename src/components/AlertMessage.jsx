export default function AlertMessage({ className, buttonText, text, variant }) {
    return (
        <div className={`alert alert-success text-center ${className}`} role="alert">

            {text}{buttonText && <button className={`btn btn-sm ${variant} ml-3`}>{buttonText}</button>}
        </div>
    )
}
