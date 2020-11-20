
import Header from '../header';
import './styles.css';
import List from '../list';
const PokemonsList = ({pokemons}) => {

    // Element.prototype.toggle = function() { 

    //     if ( this.style.display == '' || this.style.display == 'block' ) { 
    //         alert ( "Changing display to NONE ");
    //         this.style.display = 'none';
    //     }else{
    //         this.style.display = 'block';
    //         alert ( "Changing display to BLOCK ");
    //     }
    // }
    
    //             document.queryselector("ID_DO_INPUT").on("keyup", function () {
    //                 var value = this.value().toLowerCase();
    //                 document.queryselector("ID_DA_DIV").filter(function () {
    //                     this.toggle(this.text().toLowerCase().indexOf(value) > -1)
    //                 });
    //             });
    //         });
            
    return (
        <div className='container'>
            <Header/>
            <form>
                <input type='text'></input>
            </form>
            <div className='centralizer'>
                <ul>
                        <List pokemons={pokemons}/>
                </ul>
            </div>
        </div>
    );
}

export default PokemonsList;