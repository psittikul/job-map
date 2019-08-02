<div class="container">
    <div class="row">
        <div class="col">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div id="formContainer">
        <h3 id="formTitle">Add New Job</h3>

        <form name="addCompany">
            <div class="form-row">
                <div class="form-group">
                    <label for="jobURL">Job Posting URL</label>
                    <input type="text" name="job_url" class="form-control" id="jobURL" placeholder="Link to job posting">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="jobTitle">Job Title</label>
                    <input type="text" name="job_title" class="form-control" id="jobTitle" placeholder="Job title">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="hiringCompany">Hiring Company</label>
                    <input type="text" name="hiring_company" class="form-control" id="hiringCompany" placeholder="Name of hiring company">
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
                        <label for="numberEmployees">Number of Employees</label>
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
            <div class="form-row">
                <div class="form-group">
                    <label for="autocomplete">Located in</label>
                    <input type="text" id="autocomplete" class="form-control" name="location_lookup">
                    <button type="button" class="action-btn" id="addLocationBtn" data-action="add" data-item="location">Add Location</button>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <label for="locality">City</label>
                        <input type="text" id="locality" name="company_city" disabled="true" class="form-control" placeholder="Enter a location to lookup">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="administrative_area_level_1">State</label>
                        <input type="text" id="administrative_area_level_1" name="company_state" disabled="true" class="form-control">
                    </div>
                </div>
            </div>
            <div class="form-row" id="companyLocationsRow">
                <div id="companyLocationsTags">

                </div>

            </div>
            <div class="form-row" id="submitRow">
                <button class="action-btn" type="button" id="submitBtn" data-item="company">Save Information</button>
            </div>
        </form>
    </div>
</div>