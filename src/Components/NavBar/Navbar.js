
import './NavBar.css';

function NavBar(props){

  return (
    <div className='NavBar'>
      <div className='btn-container'>
        <button className='btn'
                onClick={props.setMenuActive}><img src="./icons/settings.svg" alt="BurgerImg" /></button>
      </div>
      <div className='search-container'>
        <input className='NavSearch' type="search" />
      </div>
      <div className='language-container'>
        <select id="language" name="language">
          <option value="Ukrainian">Ukrainian</option>
          <option value="English">English</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
    </div>
  );
}










export default NavBar;