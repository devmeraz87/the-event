// >> Media
import loading_gif from "../../assest/loading/loading.gif";


const Loading = () => {
    return (
        <>
            <div className="_loading _flx _flx_al_ce _flx_ju_ce">
                <div className="_context">
                    <div className="_loading_gif">
                        <img src={loading_gif} alt="Loading Elements" />
                    </div>
                    <h3>Loading...</h3>
                </div>
            </div>
        </>
    );
}
 
export default Loading;