<div class="container-fluid" style="margin-top: -1rem">
    <div class="row">
        <div class="col" style="padding: 0">
            <div id="pipmap" style="width: 250px; height: 125px;"></div>
        </div>
    </div>
    <div id="formContainer" style="width: 60%">
        <h3 id="formTitle"></h3>

        <form name="viewCompany">
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
            <div class="form-row" id="companyLocationsRow">
                <div id="companyLocationsTags">

                </div>

            </div>
            <div class="form-row" id="submitRow">
                <button class="action-btn" type="button" id="editBtn" data-item="company">Edit Information</button>
            </div>
        </form>
    </div>
</div>