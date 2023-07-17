import {Link} from 'react-router-dom'

export default function NavMenu (){
    return(
    <div className="nav-menu">
        <nav>
            <ul>
                <li> <Link to ="/">Home</Link></li>
                <li> <Link to ="/quiz">Quiz</Link></li>
            </ul>
        </nav>
    </div>
        )
    }