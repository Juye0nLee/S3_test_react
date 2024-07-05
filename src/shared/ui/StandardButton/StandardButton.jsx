import './StandardButton.css'

function StandardButton({onClick ,title, backgroundColor, color, fontSize}) {

    let arrTitle = title.split('')

    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor, color: color, fontSize: fontSize}}>
            <span class="span-mother">
                {arrTitle.map((e)=>(
                    <span>{e}</span>
                ))}
            </span>
            <span class="span-mother2">
                {arrTitle.map((e)=>(
                    <span>{e}</span>
                ))}
            </span>
        </button>

    )
}

export default StandardButton;