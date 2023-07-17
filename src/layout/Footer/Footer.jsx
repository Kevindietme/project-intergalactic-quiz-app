const gitHubUrl = "https://github.com/Kevindietme/project-intergalactic-quiz-app"
const getFullYear = new Date().getFullYear()

export default function Footer (){
    return (
        <footer>
            <p>&copy;{getFullYear}
            <br />
            <a href={gitHubUrl} target ="_blank" rel="noreferrer">See Code in Github.com</a>
            </p>
        </footer>
    )
}