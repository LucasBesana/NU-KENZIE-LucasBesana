export const Input = ({id, type, placeholder, value, setValue}) => {
    return(
        <div>
            <input
                required
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}