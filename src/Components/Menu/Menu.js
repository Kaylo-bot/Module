import './Menu.css'

function Menu({items, active, setMenuActive, updateCardContent}) {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={setMenuActive}>
      <div className='blur'/>
      <div className='menu_content' onClick={e => e.stopPropagation()}>

      {items.map(item => 
          <div key={item.icon} className={item.value}>

            <img src="./icons/arrow-double.svg" alt="arrow" /> {item.value}

            <div className='cardsSettings'>

              <label className='labelCheckBoxInput' htmlFor="1" onClick={updateCardContent}> Verbs
                  <input className='checkBoxInput' type="checkbox" name="verbs" id="Verbs"/>
              </label>

              <label className='labelCheckBoxInput' htmlFor="2" onClick={updateCardContent}> Words
                  <input className='checkBoxInput' type="checkbox" name="verbs" id="Words" />
              </label>

              <label className='labelCheckBoxInput' htmlFor="3" onClick={updateCardContent}> Tips
                  <input className='checkBoxInput' type="checkbox" name="verbs" id="Tips" />
              </label>

              <label className='labelCheckBoxInput' htmlFor="4" onClick={updateCardContent}> Sentence
                  <input className='checkBoxInput' type="checkbox" name="verbs" id="Sentence" />
              </label>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}


export default Menu;