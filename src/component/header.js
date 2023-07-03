
export const Header = () => {
return (
    <div className="masthead">
        <div className="masthead__inner-wrap">
            <div className="masthead__menu">
                <nav id="site-nav" className="greedy-nav">
                    <button className="hidden" count="0">
                        <div className="navicon"></div>
                    </button>
                    <ul className="visible-links">
                        <li className="masthead__menu-item masthead__menu-item--lg"><a
                            href="https://durgeshsamariya.github.io/">Durgesh Samariya</a></li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/biography/">Biography</a></li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/research/">Research</a></li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/publications/">Publications</a></li>
                        <li className="masthead__menu-item"><a href="https://durgeshsamariya.github.io/service/">Service</a>
                        </li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/certificates/">Certificates</a></li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/projects/">Projects</a></li>
                        <li className="masthead__menu-item"><a
                            href="https://durgeshsamariya.github.io/contacts/">Contacts</a></li>
                    </ul>
                    <ul className="hidden-links hidden"></ul>
                </nav>
            </div>
        </div>
    </div>
);
}

