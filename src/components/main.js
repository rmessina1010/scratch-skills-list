import { Navigate, Routes, Route } from "react-router-dom";
import Comp from './comp'
import SkillSet from './skill'
import { Clicker } from './clicker'
import Nav from './nav'

export const Main = function (props) {

    return (<div>
        <h1> Am The main Component!</h1>
        <Nav />
        <Routes>
            <Route path="/about" element={<p>All about me!</p>} />
            <Route path="/me" element={<SkillSet user="Ray" uid={105} />} />
            <Route path="/me/too" element={<Comp />} />
            <Route path="/you" element={<Clicker />} />
            <Route path="/*" element={<p>firsrt default reroute!</p>} />
            <Route path="/*" element={<Navigate replace to='/about' />/*is skipped*/} />
        </Routes>
    </div>)
}