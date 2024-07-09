import './StandardInput.css'

function StandardInput({placeholder, onChange, value}){
    return (
        <div className='group'>
        {/* <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path> */}
      {/* </svg> */}
      <input class="input" type="text" placeholder={placeholder} onChange={onChange} value={value}/>
      </div>
    )
}

export default StandardInput