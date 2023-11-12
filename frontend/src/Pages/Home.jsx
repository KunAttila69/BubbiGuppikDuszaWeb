import { Link } from "react-router-dom";
import '../Styles/index.css';

const HomePage = () => {
    return ( 
        <div id="index-content">
            <div id="index-navbar">
                <Link to={"/introduction"}>
                <button id="nav_btn">Rólunk</button>
                </Link>
                <Link to={"/login"}>
                <button id="nav_btn">Bejelentkezés</button>
                </Link>
            </div>
            <div id="index-content">
                <main id="index-main">
                    
                    <h1>A Játék</h1>
                    <p>A verseny alapja egy izgalmas szókirakó játék, ahol négy szóból három megjelenik a képernyőn, a negyedik szó betűi azonban összekeveredtek. 
                    A feladat az, hogy a versenyzők helyreállítsák a negyedik szót a logikai kapcsolatok alapján. A szavak között lehetnek rokonértelműek vagy közös csoportba tartozók, 
                    például beviteli perifériák: egér, billentyűzet, mikrofon, marake.</p>

                    <h1>Webmester Bemutatkozása</h1>
                    <p>A webmester felügyeli a regisztrációkat, szerkezti ezt az oldalt, állítja be az ikonokat, és tölti fel a szövegeket. Ő látja a legaktívabb Tanárokat is.</p>

                    <h1>Regisztráció</h1>
                    <p>A webmester lehetőséget kap a felhasználók regisztrálására, A versenyzők felhasználónevet, jelszót, évfolyamot, osztályt adnak meg, és csapatokba rendeződnek.
                    A tanárok és zsűritagok szintén regisztrálhatnak, és a webmesternek lehetősége van a felhasználók adatainak módosítására és törlésére.</p>

                    <h1>Verseny Aktivitások</h1>
                    <p>A program rögzíti, hogy a tanárok közül kik voltak a legaktívabbak a feladatok kitalálásában. Az eredményeket jól áttekinthető diagramon keresztül jelenítjük meg évfolyamonként, 
                    így mindenki könnyen nyomon követheti az eredmények alakulását.</p>

                    <h1>Tanárok és Zsűritagok</h1>
                    <p>A tanároknak lehetőségük van új feladatok létrehozására, meglévők módosítására és törlésére. A zsűritagok kijelölhetik, mely csapatok és feladatok vesznek részt egy-egy versenyen,
                    és könnyen értékelhetik a verseny eredményeit.</p>

                    <h1>Versenyzők</h1>
                    <p>A versenyzők bejelentkezés után a bemutatkozó oldalt láthatják, ahol a játék rövid leírását találják, 
                    valamint csapattársaik neveit és a verseny kezdési időpontját. A feladatok megoldása során a versenyzőknek gyorsan és logikusan kell visszaállítaniuk a szavakat a kevert betűk alapján.
                    A verseny eredményeit könnyen áttekinthető módon mutatjuk be, figyelembe véve a helyes válaszok számát és a felhasznált időt.</p>

                    <h1>Gyere és Csatlakozz Hozzánk!</h1>
                    <p>Várunk mindenkit szeretettel, hogy együtt élvezzük a webprogramozás izgalmas világát a Dusza Árpád Országos Webprogramozói Emlékversenyén 2023!</p>

                </main>
            </div>
        </div>
    );
}
 
export default HomePage;