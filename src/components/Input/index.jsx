import './input.css'

function Input({ title, placeholder, type, value, onChange }) {
    return (
        <div className='input'>
            <p>{title}</p>
            {type === 'text' && <input type='text' placeholder={placeholder} value={value || ''} onChange={onChange}/>}
            {type === 'area' && <textarea placeholder={placeholder} value={value || ''} onChange={onChange}/>}
        </div>
    )
}

export default Input