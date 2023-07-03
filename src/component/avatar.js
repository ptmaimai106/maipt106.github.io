export const Avatar = () => {
    return (
        <div className="sidebar sticky">
            <div itemScope="" itemType="http://schema.org/Person">
                <div className="author__avatar">
                    <img src="https://durgeshsamariya.github.io/images/profile.jpg" className="author__avatar" alt="Durgesh Samariya" ></img>
                </div>
                <div className="author__content"><h3 className="author__name">Durgesh Samariya</h3><p
                    className="author__bio">Ph.D. student @ School of Engineering, IT and Physical Sciences, Federation
                    University, Australia</p></div>
                <div className="author__urls-wrapper">
                    <button className="btn btn--inverse">Follow</button>
                    <ul className="author__urls social-icons">
                        <li><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i> Melbourne, Australia</li>
                        <li><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i> Federation University</li>
                        <li><a href="mailto:samariya.durgesh@gmail.com"><i className="fas fa-fw fa-envelope"
                                                                           aria-hidden="true"></i> Email</a></li>
                        <li><a href="https://github.com/durgeshsamariya"><i className="fab fa-fw fa-github"
                                                                            aria-hidden="true"></i> Github</a></li>
                        <li><a href="https://scholar.google.com/citations?user=QHkjuqYAAAAJ&amp;hl=en"><i
                            className="fas fa-fw fa-graduation-cap"></i> Google Scholar</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}