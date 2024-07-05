import './StandardButton.css'

function StandardButton({onClick ,title, titleConfirmed, backgroundColor, color, fontSize}) {

    let arrTitle = title.split('')
    let arrTitleConfirmed = titleConfirmed.split('')

    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor, color: color, fontSize: fontSize}}>
            <span class="span-mother">
                {arrTitle.map((e)=>(
                    <span>{e}</span>
                ))}
            </span>
            <span class="span-mother2">
                
            {arrTitleConfirmed.map((e)=>(
                    <span>{e}</span>
                ))}

            </span>
        </button>

    )
}

export default StandardButton;