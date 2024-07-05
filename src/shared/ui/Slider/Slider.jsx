import './Slider.css'
import CardCell from '../CardCell/CardCell';

function Slider({ arrImg }) {

    function handleImgClick(){
        
    }

    return (
        <div class="slider">

            {/* <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a> */}
            <div class="slides">
                {arrImg.map((e, i) => (
                    <div id="slide-1" onClick={handleImgClick}>
                        <CardCell content={e} />
                        {/* <img src={e} /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider;