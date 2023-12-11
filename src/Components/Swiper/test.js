import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {Component} from 'react';
import CardsComponents from '../CardComponent/CardsComponents';
import RandomWord from '../WordsData/WordsData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './SwiperCardsComponent.css';



class SwiperCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      previousWord: RandomWord(),
      directWord: RandomWord(),
      nextWord: RandomWord(),
      hideWord: RandomWord()
    }

  }


  // onSlideChange = () => {
  //   const prev = this.state.directWord,
  //         drct = this.state.nextWord,
  //         nxt = RandomWord(),
  //         hd = RandomWord();
  //   this.setState({
  //     previousWord: prev,
  //     directWord: drct,
  //     nextWord: nxt,
  //     hideWord: hd,
  //   })
  // }
  onSlideChange = () => {
   
    this.setState({
      directWord: this.state.nextWord + ' direct',
      nextWord: this.state.hideWord + ' next',
      hideWord: RandomWord()  + ' hide',
      previousWord: this.state.directWord + ' previous',
    })
  }

  render() {

    return (
      <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              modules={[ EffectCoverflow, Navigation ]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={true}
              coverflowEffect={{
                          rotate: 60,
                          stretch: 10,
                          depth: 50,
                          modifier: 1,
                          slideShadows: false,
                              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={this.onSlideChange}
              // onSlideChange={() => console.log('yes')}
              // onSlideChangeTransitionEnd={console.log(12345)}
      >     
          <SwiperSlide key={`${this.state.nextWord}-direct`}> 
              <CardsComponents
                  randomWord={this.state.previousWord}/>
          </SwiperSlide>
          <SwiperSlide key={`${this.state.nextWord}-next`}> 
              <CardsComponents
                  randomWord={this.state.directWord}/>
          </SwiperSlide>
          <SwiperSlide key={`${this.state.nextWord}-hide`}> 
              <CardsComponents
                  randomWord={this.state.nextWord}/>
          </SwiperSlide>
          <SwiperSlide key={`${this.state.hideWord}-previous`}> 
              <CardsComponents
                  randomWord={this.state.hideWord}/>
          </SwiperSlide>

  
      </Swiper>
    );
  }
}

export default SwiperCards;