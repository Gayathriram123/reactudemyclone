import one from "../assets/images/download (1).jpeg"
import two from "../assets/images/download.jpeg"
import three from "../assets/images/OIP (1).jpeg"
import four from "../assets/images/OIP.jpeg"

function Mostpopular(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Most popular</h1>
        <p>Pick the best for fit</p>
        <div class="recommended-container">
            <div class="course-card">
                <img src={one}alt=""></img>
                <h3>2023 Python Data visualization Masterclass</h3>
                <p>col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>445 <del>9999</del></p>
            </div>

            <div class="course-card">
                <img src={two}alt=""></img>
                <h3>UX/UI designing Masterclass</h3>
                <p>col steel</p>
                <p>4.9⭐⭐⭐</p>
                <p>445 <del>9999</del></p>
            </div>

            <div class="course-card">
                <img src={three}alt=""></img>
                <h3>2023 Graphic Designing Masterclass</h3>
                <p>col steel</p>
                <p>4.9⭐</p>
                <p>445 <del>9999</del></p>
            </div>

            <div class="course-card">
                <img src={four}alt=""></img>
                <h3>2023 Sql database Masterclass</h3>
                <p>col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>445 <del>9999</del></p>
            </div>

        </div>
    </div>
    
    
    )
}

export default Mostpopular