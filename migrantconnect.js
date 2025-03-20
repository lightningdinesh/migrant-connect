// migrant registration form uplod image
function addImageToList(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imageList = document.getElementById('imageList');

    if (file) {

        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        listItem.classList.add('text-info');

        imageList.appendChild(listItem);
    }

    fileInput.value = '';
}
// education details in regstration form
function addEducationEntry() {
    const educationDetails = document.getElementById('educationDetails');

    // Create a new education entry div
    const newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('education-entry', 'mb-4');

    newEducationEntry.innerHTML = `
    <hr>
        <div class="form-group mb-3">
            <label for="degree">Degree/School</label>
            <input type="text" class="form-control" name="degree[]" placeholder="Enter Degree">
        </div>
        <div class="form-group mb-3">
            <label for="institution">Institution</label>
            <input type="text" class="form-control" name="institution[]" placeholder="Enter Institution Name">
        </div>
        <div class="form-group mb-3">
            <label for="year">Year of Completion</label>
            <input type="text" class="form-control" name="year[]" placeholder="Enter Year of Completion">
        </div>
    `;

    // Append the new entry to the educationDetails container
    educationDetails.appendChild(newEducationEntry);
};

// add experience in registration form
function addWorkExperienceEntry() {
    const workExperienceContainer = document.getElementById('workExperienceContainer');

    // Create a new work experience entry div
    const newWorkExperienceEntry = document.createElement('div');
    newWorkExperienceEntry.classList.add('work-experience-entry', 'mb-4');

    newWorkExperienceEntry.innerHTML = `
     <div class="form-group">
                            <label>Job Title</label>
                            <input type="text" class="form-control" placeholder="Enter your job title" required>
                        </div>
                        <div class="form-group">
                            <label>Company Name</label>
                            <input type="text" class="form-control" placeholder="Enter the company name" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Start Date</label>
                                <input type="date" class="form-control" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label>End Date</label>
                                <input type="date" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Job Designation</label>
                            <textarea class="form-control" rows="4" placeholder="Enter a short description of your work" required></textarea>
                        </div>`;
        

    // Append the new entry to the workExperienceContainer
    workExperienceContainer.appendChild(newWorkExperienceEntry);
};



