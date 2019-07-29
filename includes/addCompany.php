<div class="container">
    <div class="row">
        <div class="col">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div id="formContainer">
        <h3 id="formTitle">Add New Company</h3>

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
                    <input type="text" name="company_name" class="form-control" id="companyName" placeholder="Company name">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Glassdoor</label>
                    <input type="text" name="company_glassdoor" class="form-control" id="companyGlassdoor" placeholder="Link to company's Glassdoor page">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="companyName">Company Glassdoor</label>
                    <input type="text" name="company_glassdoor" class="form-control" id="companyGlassdoor" placeholder="Link to company's Glassdoor page">
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
                <!-- <label for="companyLocationTags">Locations</label> -->
                <!-- <textarea id="companyLocationTags" class="form-control">(Selected locations go here...)</textarea> -->
            </div>
            <div class="form-row" id="submitRow">
                <button class="action-btn" type="button" id="submitBtn" data-item="company">Save Information</button>
            </div>
        </form>
    </div>
</div>