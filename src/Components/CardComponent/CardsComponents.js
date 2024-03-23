

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './CardsComponents.css';




const CardsComponents = ({randomWord, onChangeSide, id, isFlipped}) => {
  const { word, translate, text, wort, partizipII} = randomWord;

  return (

    <div className={`swiper-slide-content ${isFlipped ? 'flipped' : ''}`} id={id}>

        <div className='slide-front'>

            <div className='slide-header'></div>

            <div className='slide-body'>
              <div className='word'>{`${word} - ${translate}`}</div>
              <div className='text'>
                <ol>
                  <li>{text[0]}</li>
                  <li>{text[1]}</li>
                </ol>
              </div>
            </div>

            <div className='slide-footer'>
              <button className='footer-btn'
                      onClick={() => onChangeSide(id)}>Details</button>
            </div>

        </div>

        <div className="slide-back">

            <div className='slide-header'></div>

              <div className='slide-body'>
                <div className='backword'>{`${word} - ${translate}`}</div>
                <div className='text'>
                  <ul>
                  {wort.map((element, index) => (
                    <li key={index}>{`${Object.keys(element)[0]}  -  ${Object.values(element)[0]}`}</li>))}
                  </ul>
                </div>
                <div className='pastword'>{`Partizip II : ${partizipII}`}</div>
              </div>

              <div className='slide-footer'>
                <button className='footer-btn'
                        onClick={() => onChangeSide(id)}>Back</button>
              </div>

          </div>

      </div>
  )
}

export default CardsComponents;


