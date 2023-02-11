// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    data = await fetch(url).then(response => response.json());
    displayResults(data);
} 

function displayResults(courses) {
    // console.log(data);
    const container = document.querySelector('#results');
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        let instructor = "TBD";
        if (course.Instructors.length > 0) {
            instructor = course.Instructors[0].Name;
        }
        // if (course.EnrollmentMax == course.EnrollmentCurrent) {
        if (course.Department == 'CSCI') {
            console.log(course);
            const template = `
                <section class="course">
                    <h3>${course.Code}: ${course.Title}</h3>
                    <ul>
                        <li>Instructor: ${instructor}</li>
                        <li>Location: ${course.Location.FullLocation}</li>
                        <li>Days: ${course.Days}</li>
                    </ul>
                </section>`;
            container.insertAdjacentHTML('beforeend', template);
        }
    }
}