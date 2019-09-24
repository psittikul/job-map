<div class="container">
    <div class="row">
        <div class="col">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div class="form-container" id="formContainer">
        <div id="formHeader">
            <h3 id="formTitle">Add New Job</h3>
        </div>

        <form name="addJob">
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
                    <div id="companySuggestions">
                    </div>
                    <input type="number" style="display: none" name="company_id" class="form-control" id="companyID">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="jobURL">Job Posting URL</label>
                    <input type="text" name="job_url" class="form-control" id="jobURL" placeholder="Link to job posting">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="autocomplete">Located in</label>
                    <input type="text" id="autocomplete" class="form-control" name="location_lookup">
                    <button type="button" class="action-btn" id="addLocationBtn" data-action="add" data-for="job" data-item="location">Add Location</button>
                </div>
            </div>
            <div class="form-row">
                <div class="form-check">
                    <input type="checkbox" name="remote_work" class="form-check-input" id="remoteWork">
                    <label for="remoteWork">Remote Work</label>
                </div>
            </div>
            <div class="form-row" style="display: none">
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
            <div class="form-row" id="jobLocationsRow">
                <div id="jobLocationsTags" class="location-tag-container">

                </div>

            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <label for="postingDate">Posting Date</label>
                        <input type="date" class="form-control" name="posting_date" id="postingDate">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="applicationDeadline">Deadline</label>
                        <input type="date" class="form-control" name="deadline" id="applicationDeadline">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="dateApplied">Date Applied</label>
                        <input type="date" class="form-control" name="date_applied" id="dateApplied">
                    </div>
                </div>
            </div>
            <div class="form-row" id="submitRow">
                <button class="action-btn" type="button" id="submitBtn" data-item="job">Save Information</button>
            </div>
        </form>
    </div>
</div>