import {Avatar} from '../component/avatar'
import {Header} from "../component/header";
export const Profile = () => {
    return (
        <div>
            <Header/>
            <Avatar/>
            <div>
                <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
                            <div className="page__inner-wrap">
                                <header>
                                    <h1 className="page__title" itemProp="headline">Durgesh Samariya</h1>
                                </header>
                                <section className="page__content" itemProp="text"><p>I am a Ph.D. student in the <a
                                    href="https://federation.edu.au/schools/school-of-engineering-information-technology-and-physical-sciences">School
                                    of Engineering, IT and Physical Sciences</a> at <a href="https://federation.edu.au">Federation
                                    University</a>, Australia, under <a
                                    href="https://scholar.google.co.in/citations?user=1DX4WFkAAAAJ&amp;hl=en">Dr.
                                    Jiangang Ma</a> and <a href="http://sunilaryal.github.io/">Dr. Sunil Aryal</a>.</p>
                                    <p>In my free time I try to learn something, contribute to open source and go hiking
                                        or on drive.</p><h2 id="recent-news">Recent News</h2>
                                    <ul>
                                        <li><strong>August 2022</strong>: Our paper <em>Anomaly Detection in
                                            Healthcare</em> has been accepted for publication at the 11th International
                                            Conference on Health Information Science 2022 (HIS 2022).
                                        </li>
                                        <li><strong>July 2022</strong>: Our paper <em>sGrid++ : Revising Simple Grid
                                            based Density Estimator for Mining Outlying Aspect</em> has been accepted
                                            for publication at the 23rd International Conference on Web Information
                                            Systems Engineering 2022 (WISE 2022).
                                        </li>
                                        <li><strong>April 2022</strong>: Our paper <em>A New Dimensionality-Unbiased
                                            Score for Efficient and Effective Outlying Aspect Mining</em> accepted for
                                            the publication by the Data Science and Engineering Journal (Springer).<a
                                                href="https://link.springer.com/article/10.1007/s41019-022-00185-5">[Paper]</a>
                                        </li>
                                        <li><strong>January 2022</strong>: Launched a computer vision based India Food
                                            Detection App. <a href="https://www.foodify.ai">[App]</a></li>
                                        <li><strong>December 2021</strong>: Completed Deep Learning Nano Degree by
                                            Udacity. <a
                                                href="https://graduation.udacity.com/confirm/SWLALPXD">[Certificate]</a>
                                        </li>
                                        <li><strong>November 2021</strong>: Completed Coursera course by Deeplearning.ai
                                            on Convolutional Neural Networks in TensorFlow. <a
                                                href="https://www.coursera.org/verify/WP7UK5EHTAJN">[Certificate]</a>
                                        </li>
                                        <li><strong>October 2021</strong>: A paper accepted for the publication by the
                                            Annals of Data Science journal (Springer).
                                        </li>
                                        <li><strong>October 2021</strong>: Gave a talk on “Deploying Maching Learning
                                            Model” at CSPIT, Charusat University, Changa.
                                        </li>
                                        <li><strong>September 2021</strong>: Attendend NVIDIA Deep Learning Workshop on
                                            Fundamental of Deep Learning.
                                        </li>
                                        <li><strong>August 2021</strong>: Our paper <em>Mining outlying aspects on
                                            healthcare data</em> has been accepted for the publication at the 10th
                                            International Conference on Health Information Science (HIS 2021). <a
                                                href="https://link.springer.com/chapter/10.1007/978-3-030-90885-0_15">[Paper]</a>
                                        </li>
                                        <li><strong>January 2021</strong>: MLGenerator web app is live. <a
                                            href="https://ml-generator.herokuapp.com">[Website]</a></li>
                                        <li><strong>July 2020</strong>: Our paper <em>A new effective and efficient
                                            measure for outlying aspect mining</em> has been accepted for publication at
                                            the 21st International Conference on Web Information Systems Engineering
                                            2020 (WISE 2020). <a
                                                href="https://link.springer.com/chapter/10.1007/978-3-030-62008-0_32">[Paper]</a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                </article>
            </div>
        </div>
    )
}