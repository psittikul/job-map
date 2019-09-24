<div class="container">
    <div class="row">
        <div class="col">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div class="form-container" id="formContainer">
        <div id="formHeader">
            <h3 id="formTitle">Add New Company</h3>
        </div>

        <form name="addCompany">
            <div class="form-row">
                <div class="form-group">
                    <label for="companyWebsite">Company Website</label>
                    <input type="text" name="company_website" class="form-control" id="companyWebsite" placeholder="Link to company website">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Name</label>
                    <input type="text" name="company_name" class="form-control" required id="companyName" placeholder="Company name">
                    <input type="number" style="display: none" name="company_id">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Glassdoor</label>
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
                    <div class="form-check">
                        <input type="checkbox" name="remote_work" class="form-check-input" id="remoteWork">
                        <label for="remoteWork">Work Remotely</label>
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
                    <button type="button" class="action-btn" id="addLocationBtn" data-action="add" data-for="company" data-item="location">Add Location</button>
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
            <div class="form-row" id="companyLocationsRow">
                <div id="companyLocationsTags" class="location-tag-container">

                </div>

            </div>
            <div class="form-row" id="submitRow">
                <button class="action-btn" type="button" id="submitBtn" data-item="company">Save Information</button>
            </div>
        </form>
    </div>
</div>