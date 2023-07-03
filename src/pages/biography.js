import {Header} from "../component/header";
import {Avatar} from "../component/avatar";

export const Biography = () => {
    return (
        <div>
            <Header/>
            <Avatar/>
            <div className="archive"><h1 className="page__title">Biography</h1><h2 id="education">Education</h2>
                <ul>
                    <li><p>Ph.D. in Computer Science, School of Engineering, IT and Physical Sciences, Federation
                        University, Australia, 2022 (Expected)</p></li>
                    <li><p>M.Tech in Software Technology, VIT University, Vellore, India, 2016</p></li>
                    <li><p>B.E. in Information Technology, GTU, India, 2014</p></li>
                </ul>
                <h2 id="professional-experience">Professional experience</h2>
                <ul>
                    <li>Software developer
                        <ul>
                            <li>Urjanet Energy Solution (May 2016 - November 2016)</li>
                        </ul>
                    </li>
                </ul>
                <h2 id="service-to-research-community">Service to research community</h2>
                <ul>
                    <li>PC Member - ECML PKDD 2020</li>
                </ul>
            </div>
        </div>
    )
}