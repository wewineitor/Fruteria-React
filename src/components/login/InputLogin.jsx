export const InputLogin = ({placeholder, type, name, value, handleChange}) => {
    return (
        <div className="col-md-12">
            <input 
            type={type} 
            className="form-control" 
            placeholder = {placeholder} 
            name = {name}
            value = {value}
            onChange = {handleChange}
            />
        </div>
    )
}
