import './Card.css'

function Card ({content}){
    return(
        <div class="card">

            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                    </div>

                    <div class="circle">
                    <span class="yellow box"></span>
                    </div>

                    <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>

            <div class="card__content" />

            <div style={{width:'100%', height: '100%'}}>
                {content}
            </div>
            

        </div>
    )
}

export default Card;