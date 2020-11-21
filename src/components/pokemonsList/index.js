import Header from "../header";
import "./styles.css";
import List from "../list";

const PokemonsList = ({ pokemons }) => {

    // document.queryselector("pesquisa").on("keyup", function () {
    //     var value = this.value().toLowerCase();
    //     document.queryselector("ID_DA_DIV").filter(function () {
    //         this.toggle(this.text().toLowerCase().indexOf(value) > -1);
    //     });
    // });

    return (
        <div className="container">
            <Header />
            <form>
                <input type="text" id='pesquisa'></input>
            </form>
            <div className="centralizer">
                <ul>
                    <List pokemons={pokemons} />
                </ul>
            </div>
        </div>
    );
};

export default PokemonsList;
