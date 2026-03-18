class Course {
  constructor(courseName, instructor) {
    this.courseName = courseName;
    this.instructor = instructor;
  }

  displayCourse() {
    return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
  }
}

let seatsAvailable = 2;
const TIME = 2000;
const courseList = [];

const enrollCourse = (course) => {
  return new Promise((resolve, reject) => {
    if (seatsAvailable > 0) {
      setTimeout(() => {
        resolve("Enrollment Successful");
        seatsAvailable--;
        courseList.push(course);
      }, TIME);
    } else {
      setTimeout(() => reject("Course Full"), TIME);
    }
  });
};

const getEnrollmentState = () => {
  return {
    seatsAvailable,
    enrolledCount: courseList.length,
    courseList,
  };
};

const registerCourse = async (name, faculty) => {
  try {
    const course = new Course(name, faculty);
    const msg = await enrollCourse(course);

    return { success: true, message: msg, course };
  } catch (error) {
    return { success: false, message: error };
  }
};
