<?php

/**
 * Modal that pops up after an action button (specifically add or edit) is clicked, each time having its contents
 * updated to match the action being called
 */
?>

<div class="modal" tabindex="-1" role="dialog" id="actionModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" data-target="#actionModal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                </form>
                <input type="text" id="autocomplete" style="display: none" name="company_location_lookup" placeholder="Enter City to Lookup">
                <div class="modal-button-sec row"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" id="closeBtn" data-dismiss="modal" data-target="actionModal">Close</button>
            </div>
        </div>
    </div>
</div>