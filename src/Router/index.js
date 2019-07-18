import Home from '../Pages/Home/'
import User from '../Pages/User/'
import Mine from '../Pages/Mine/'
import Rotation from '../Pages/Rotation/'
import CourseAdd from '../Pages/Course/CourseAdd/'
import CourseList from '../Pages/Course/CourseList/'
import CourseTipc from '../Pages/Course/CourseTipc/'
import CourseCategory from '../Pages/Course/CourseCategory/'

export default [
  {path: '/home', component: Home, exact: true},
  {path: '/user', component: User},
  {path: '/mine', component: Mine},
  {path: '/rotation', component: Rotation},
  {path: '/courseCategory', component: CourseCategory},
  {path: '/courseAdd', component: CourseAdd},
  {path: '/courseList', component: CourseList},
  {path: '/courseTipc', component: CourseTipc}
]