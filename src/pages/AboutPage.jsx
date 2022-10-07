import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

function AboutPage(params) {
    return <Card>
        <div className="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium quis vitae hic consectetur eaque doloremque, saepe quas ab accusamus placeat quibusdam ullam sunt praesentium eveniet, odit ducimus animi! Sequi.</p>

            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
    </Card>
}

export default AboutPage;