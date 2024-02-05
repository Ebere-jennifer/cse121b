//modules.js

// Activity 1 #
// The object created with the javascript above contains most of the functionality we would need to create and manage a course.
// This seems like a good candidate for encapsulating into a module.
// 1. Create a new file to hold our module. Name it Course.js
// 2. Copy the aCourse object and the setCourseInfo and renderSections functions into the new file. Leave the addEventListeners
// and everything below them.
// 3. Make the aCourse object the default export
// 4. Import aCourse into the modules.js file. Once we have done that we can use it just as if it were created locally.
// This means we could use it multiple places in a large application while only having to write the code once! This type of re-use
// is why modules are such a powerful feature.
// 5. Make sure to change the line in your HTML that looks like this:
// <script src="modules.js" defer></script>
// to this:
// <script src="modules.js" type="module"></script>
// This will allow the browser to load our module. It will give you an error if you forget this step!
// 6. Remove the lines at the bottom of modules.js that look like this:
// setCourseInfo(aCourse);
// renderSections(aCourse.sections);
// Since we moved those functions we will get an error if we don't. We will add that back in later.
// 7. Use the LiveServer extension to view your page. You should notice that we do not see the course name, or the sections.
// But if you put 1 in the section number input and click enroll or drop student the sections will show up and the number of
// enrolled should change.

import aCourse from "./course.js";

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});
