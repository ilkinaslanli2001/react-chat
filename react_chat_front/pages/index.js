import Wrapper from "../components/Wrapper/Wrapper";
import classes from "./index.module.css";
import SideBox from "../components/SideBox/SideBox";
import MessageField from "../components/MessageField/MessageField";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HomeMobile from "../components/HomeMobile/HomeMobile";
import WithAuth from '../components/WithAuth'

function Home() {
    const {width} = useWindowDimensions();
    return <Wrapper>
        {width > 650 ? <div className={classes.home}>
            <SideBox/>
            <MessageField/>
        </div> : <HomeMobile/>}
    </Wrapper>
}

export default WithAuth(Home)