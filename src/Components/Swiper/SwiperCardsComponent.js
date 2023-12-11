
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Component } from 'react';
import CardsComponents from '../CardComponent/CardsComponents';
import { RandomWord } from '../WordsData/WordsData';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './SwiperCardsComponent.css';


class SwiperCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: Array.from({ length: 4 }, () => ({ word: RandomWord().word, translate: RandomWord().translate, text:RandomWord().text, id: Math.random(), type: 'all' })),
      data: Array.from({ length: 4 }, () => (
        { word: RandomWord(), 
          id: Math.random(), 
          type: 'all',
          isFlipped: false,
         })),
      // activeIndex: 0,

    };
  }

  onSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;

    this.setState({ realIndex });

    const newData = [...this.state.data];
    
    const updateIndex = (realIndex - 2 + newData.length) % newData.length;

    newData[updateIndex].word = RandomWord();

    this.setState({ data: newData });
    console.log(newData);
  };

  onChangeSide = (id) => {
    console.log(id);
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        return { ...item, isFlipped: !item.isFlipped };
      }
      return item;
    });
  
    this.setState({ data: newData });
    console.log('Updated state:',this.state.isFlipped);
  };

  // onChangeSide = (swiper) => {
  //   console.log(swiper);
  //   this.setState((prevState) => ({ isFlipped: !prevState.isFlipped}),() => {
  //     console.log('Updated state:',this.state.isFlipped);
  //   });
  // }



  render() {
    const { data } = this.state;

    return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        coverflowEffect={{
                          rotate: 60,
                          stretch: 10,
                          depth: 50,
                          modifier: 1,
                          slideShadows: false,}}
        initialSlide={0}
        // onSlideChange={this.onSlideChange}
        onSlideChangeTransitionEnd={this.onSlideChange}
      >
        {data.map(({ word, id, isFlipped}) => (
          <SwiperSlide >
            <CardsComponents id={id}
                             isFlipped={isFlipped}
                             randomWord={word}
                             onChangeSide={this.onChangeSide}/>
          </SwiperSlide>
        ))}

      </Swiper>
    );
  }
}

export default SwiperCards;





