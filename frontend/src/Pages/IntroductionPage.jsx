import '../Styles/introStyle.css';

const IntroPage = () => {
    return ( 
        <div id="intr-content">
        <h1>Bubbi Guppik</h1>
        <hr id="intr-hr"/>
        <div id="intr-team">
        <div id="intr-row">
            <div id="intr-pictureFrame"><div id="intr-picture1"></div></div>
            <div id="intr-spacer"></div>
            <div id="intr-data">
                <h1>Nagy Martin Márk</h1>
                <h3>Frontend Engineer</h3>
                <p>Amerikai Futball, Weboldalak, Rap, Fegyverek</p>
            </div>
        </div>
        <div id="intr-row">
            <div id="intr-pictureFrame"><div id="intr-picture2"></div></div>
            <div id="intr-spacer"></div>
            <div id="intr-data">
                <h1>Kun Attila</h1>
                <h3>Frontend Architecht</h3>
                <p>Weboldalak, Programozás, Frontend, Olvasás</p>
            </div>
        </div>
        <div id="intr-row">
            <div id="intr-pictureFrame"><div id="intr-picture3"></div></div>
            <div id="intr-spacer"></div>
            <div id="intr-data">
                <h1>Prém Ferenc</h1>
                <h3>Backend Architecht</h3>
                <p>Box, Rap, Programozás, Autók, VideoJátékok</p>
            </div>
        </div>
        <h1>Felkészítő Tanárunk</h1>
            <hr id="intr-hr"/>
                <div id="intr-row">
                    <div id="intr-pictureFrame"><div id="intr-picture4"></div></div>
                    <div id="intr-spacer"></div>
                    <div id="intr-data">
                        <h1>Hagymási Gyula</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IntroPage;