<div class="container-fluid" style="margin-top: -1rem">
    <div class="row">
        <div class="col" style="padding: 0">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div class="form-container" id="singleCompanyForm">
        <div id="formHeader">
            <h3 id="formTitle"></h3>
            <button type="button" class="edit-btn" data-placement="right" data-toggle="tooltip" title="Edit company information"><i class="fas fa-pencil-alt"></i></button>
        </div>

        <form name="editCompany">
            <div class="form-row">
                <div class="form-group">
                    <label for="companyWebsite">Company Website:</label>
                    <input type="text" name="company_website" class="form-control" id="companyWebsite" placeholder="Link to company website">
                    <p class="field-display" data-field="company_website"></p>
                </div>
            </div>
            <!-- <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Name</label>
                    <input type="text" name="company_name" class="form-control" id="companyName" placeholder="Company name">
                </div>
            </div> -->
            <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Glassdoor:</label>
                    <p class="field-display" data-field="company_glassdoor"></p>
                    <input type="text" name="company_glassdoor" class="form-control" id="companyGlassdoor" placeholder="Link to company's Glassdoor page">
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" name="currently_hiring" class="form-check-input" id="currentlyHiring">
                        <label for="currentlyHiring">Currently Hiring</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="numberEmployees">Number of Employees:</label>
                        <select id="numberEmployees" name="number_of_employees">
                            <option value=""></option>
                            <option value='1-10'>1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1001-5000">1001-5000</option>
                            <option value="5001-10,000">5001-10,000</option>
                            <option value="10,001+">10,001+</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-row" id="companyJobsRow">
                <table class="table table-bordered table-striped" id="companyJobs">
                    <thead>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Deadline</th>
                        <th>Date Applied</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div class="form-row" id="companyLocationsRow">
                <div id="companyLocationsTags">

                </div>

            </div>
            <div class="form-row buttons-row" style="display: none">
                <button class="action-btn update-btn" type="button" data-item="company">Save</button>
                <button class="action-btn cancel-btn" type="button" data-item="company">Discard Changes</button>
            </div>
        </form>
    </div>
</div>